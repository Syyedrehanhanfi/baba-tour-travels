"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { Trophy, Star, BookOpen, Shield, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const AWARDS = [
  {
    id: 1,
    title: "Excellence in Service Award",
    year: "2024",
    badge: "Award Winner",
    badgeIcon: <Trophy className="w-3 h-3" />,
    description:
      "Recognized at the prestigious Shubh Weddings Awards for delivering exceptional luxury transportation services, professional chauffeurs, and an outstanding customer experience across Udaipur.",
    image: "/awards/WhatsApp Image 2026-07-14 at 10.34.25 PM.jpeg",
    accentColor: "from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent",
    borderColor: "rgba(212,175,55,0.2)",
    glowColor: "rgba(212,175,55,0.12)",
  },
  {
    id: 2,
    title: "Featured in Shubh Weddings Magazine",
    year: "2024",
    badge: "Magazine Feature",
    badgeIcon: <BookOpen className="w-3 h-3" />,
    description:
      "Baba Tours & Travels was featured in Shubh Weddings Magazine as one of Udaipur's leading premium car rental companies, highlighting our luxury fleet, trusted reputation, and years of excellence.",
    image: "/awards/WhatsApp Image 2026-07-14 at 10.34.24 PM (1).jpeg",
    accentColor: "from-[#C0C0C0]/20 via-[#C0C0C0]/5 to-transparent",
    borderColor: "rgba(192,192,192,0.2)",
    glowColor: "rgba(192,192,192,0.10)",
  },
  {
    id: 3,
    title: "Trusted Premium Travel Partner",
    year: "Since 2003",
    badge: "20+ Years of Trust",
    badgeIcon: <Shield className="w-3 h-3" />,
    description:
      "For over two decades, Baba Tours & Travels has earned the trust of tourists, wedding planners, corporate clients, government organizations, and VIP guests through reliable service and a world-class luxury fleet.",
    image: "/awards/WhatsApp Image 2026-07-14 at 10.34.24 PM (2).jpeg",
    accentColor: "from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent",
    borderColor: "rgba(212,175,55,0.2)",
    glowColor: "rgba(212,175,55,0.12)",
  },
];

const STATS = [
  { icon: <Trophy className="w-5 h-5" />, label: "Award Recognition", value: 1, suffix: "", static: true, display: "🏆" },
  { icon: null, label: "Years Experience", value: 20, suffix: "+", static: false },
  { icon: null, label: "Luxury Vehicles", value: 48, suffix: "+", static: false },
  { icon: null, label: "Happy Customers", value: 10000, suffix: "+", static: false },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { mass: 1, stiffness: 40, damping: 15 });
  const display = useTransform(spring, (v) =>
    value >= 1000 ? `${(Math.floor(v) / 1000).toFixed(0)}K` : `${Math.floor(v)}`
  );

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// ─── Award Card ───────────────────────────────────────────────────────────────

function AwardCard({ award, index }: { award: (typeof AWARDS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden group cursor-default"
      style={{
        background: "rgba(14,17,22,0.8)",
        border: `1px solid ${hovered ? award.borderColor : "rgba(255,255,255,0.06)"}`,
        backdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 24px 60px ${award.glowColor}, 0 0 0 1px ${award.borderColor}`
          : "0 4px 24px rgba(0,0,0,0.4)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      aria-label={`Award: ${award.title}`}
    >
      {/* Top gradient accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${award.accentColor}`}
        style={{ background: `linear-gradient(to right, ${award.borderColor}, transparent)` }}
      />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={award.image}
          alt={award.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116] via-[#0e1116]/40 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-[0.15em]"
            style={{
              background: "rgba(212,175,55,0.15)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
              backdropFilter: "blur(8px)",
            }}
          >
            {award.badgeIcon}
            {award.badge}
          </span>
        </div>

        {/* Year */}
        <div className="absolute bottom-4 right-4">
          <span className="font-heading text-2xl font-light text-white/20">{award.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Gold accent line */}
        <div
          className="w-8 h-[1px] mb-5"
          style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }}
        />

        <h3 className="font-heading text-lg md:text-xl text-white/90 leading-snug mb-4">
          {award.title}
        </h3>

        <p className="font-sans text-sm text-white/45 leading-relaxed flex-1">
          {award.description}
        </p>

        {/* Stars */}
        <div className="flex gap-1 mt-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#D4AF37]/60 text-[#D4AF37]/60" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Mobile Carousel ──────────────────────────────────────────────────────────

function MobileCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + AWARDS.length) % AWARDS.length);
  const next = () => setCurrent((c) => (c + 1) % AWARDS.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <AwardCard award={AWARDS[current]} index={0} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          aria-label="Previous award"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/60 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {AWARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to award ${i + 1}`}
              className="transition-all duration-500"
              style={{
                width: i === current ? "28px" : "8px",
                height: "2px",
                borderRadius: "999px",
                background: i === current ? "#D4AF37" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next award"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/60 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative overflow-hidden border-t border-white/[0.06]"
      aria-labelledby="awards-heading"
      style={{ background: "linear-gradient(180deg, #0b0e13 0%, #0d1018 50%, #0b0e13 100%)" }}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-32 md:py-40 lg:py-48 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          {/* Label pill */}
          <div className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.25em]"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.2)",
                color: "#D4AF37",
                backdropFilter: "blur(8px)",
              }}
            >
              <Trophy className="w-3 h-3" />
              Awards &amp; Recognition
            </span>
          </div>

          <h2
            id="awards-heading"
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6"
          >
            Awards &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F5E17A 50%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Recognition
            </span>
          </h2>

          {/* Gold underline */}
          <div className="flex justify-center mb-8">
            <div
              className="h-[1px] w-24"
              style={{
                background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
              }}
            />
          </div>

          <p className="font-sans text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Celebrating our commitment to excellence in luxury transportation and customer satisfaction.
          </p>
        </motion.div>

        {/* ── Cards — Desktop grid / Mobile carousel ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-24">
          {AWARDS.map((award, i) => (
            <AwardCard key={award.id} award={award} index={i} />
          ))}
        </div>

        <div className="md:hidden mb-20">
          <MobileCarousel />
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden mb-24"
          style={{
            background: "rgba(14,17,22,0.7)",
            border: "1px solid rgba(212,175,55,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* top gold line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)",
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
            {[
              { label: "Award Recognition", value: null, suffix: "", emoji: "🏆" },
              { label: "Years Experience", value: 20, suffix: "+" },
              { label: "Luxury Vehicles", value: 48, suffix: "+" },
              { label: "Happy Customers", value: 10000, suffix: "+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-10 px-6 text-center"
              >
                <div
                  className="font-heading text-4xl md:text-5xl font-light mb-3"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #F5E17A 60%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.emoji ? (
                    <span style={{ WebkitTextFillColor: "initial" }}>{stat.emoji}</span>
                  ) : (
                    <AnimatedCounter value={stat.value!} suffix={stat.suffix} />
                  )}
                </div>
                <div
                  className="w-6 h-[1px] mb-3"
                  style={{ background: "rgba(212,175,55,0.3)" }}
                />
                <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* bottom gold line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)",
            }}
          />
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white/90 font-light mb-10">
            Travel with an{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F5E17A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Award-Winning
            </span>{" "}
            Car Rental Company
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              id="awards-cta-book"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-medium tracking-[0.1em] uppercase overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #C9A227 100%)",
                color: "#0b0e13",
                boxShadow: "0 4px 24px rgba(212,175,55,0.3)",
              }}
              aria-label="Book your luxury ride"
            >
              <span className="relative z-10">Book Your Luxury Ride</span>
              <motion.span
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #F5E17A 0%, #D4AF37 100%)" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#fleet"
              id="awards-cta-fleet"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                color: "#D4AF37",
                background: "rgba(212,175,55,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,175,55,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,175,55,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,175,55,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,175,55,0.25)";
              }}
              aria-label="View our fleet"
            >
              View Our Fleet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
