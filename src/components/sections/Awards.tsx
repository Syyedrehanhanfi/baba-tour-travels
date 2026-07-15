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
import {
  Trophy,
  Star,
  BookOpen,
  Shield,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";

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
    borderColor: "rgba(212,175,55,0.2)",
    glowColor: "rgba(212,175,55,0.12)",
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { mass: 1, stiffness: 40, damping: 15 });
  const display = useTransform(spring, (v) =>
    value >= 1000 ? `${Math.floor(v / 1000)}K` : `${Math.floor(v)}`
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

// ─── Modal ───────────────────────────────────────────────────────────────────

function AwardModal({
  award,
  onClose,
  onPrev,
  onNext,
}: {
  award: (typeof AWARDS)[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={award.title}
    >
      {/* Modal box */}
      <motion.div
        key={award.id}
        initial={{ opacity: 0, scale: 0.88, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col md:flex-row"
        style={{
          background: "#0e1116",
          border: `1px solid ${award.borderColor}`,
          boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px ${award.borderColor}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] z-10"
          style={{
            background: `linear-gradient(to right, transparent, ${award.borderColor}, transparent)`,
          }}
        />

        {/* Left — Full image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          <Image
            src={award.image}
            alt={award.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay on right edge for desktop */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#0e1116]" />
          {/* Gradient overlay on bottom edge for mobile */}
          <div className="md:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0e1116] to-transparent" />
        </div>

        {/* Right — Details */}
        <div className="flex flex-col justify-between p-6 md:p-10 overflow-y-auto flex-1">
          {/* Badge */}
          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] mb-6"
              style={{
                background: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#D4AF37",
              }}
            >
              {award.badgeIcon}
              {award.badge}
            </span>

            {/* Gold line */}
            <div
              className="w-10 h-[1px] mb-6"
              style={{
                background: "linear-gradient(to right, #D4AF37, transparent)",
              }}
            />

            <h2 className="font-heading text-2xl md:text-3xl text-white font-light leading-snug mb-2">
              {award.title}
            </h2>
            <p
              className="font-sans text-[11px] uppercase tracking-[0.2em] mb-6"
              style={{ color: "#D4AF37" }}
            >
              {award.year}
            </p>

            <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed mb-8">
              {award.description}
            </p>

            {/* Stars */}
            <div className="flex gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#D4AF37]/70 text-[#D4AF37]/70"
                />
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              aria-label="Previous award"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              aria-label="Next award"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/25 ml-2">
              {AWARDS.findIndex((a) => a.id === award.id) + 1} / {AWARDS.length}
            </span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-black/60 text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Keyboard hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/20">
          ← → Navigate &nbsp;·&nbsp; Esc Close
        </span>
      </div>
    </motion.div>
  );
}

// ─── Award Card ───────────────────────────────────────────────────────────────

function AwardCard({
  award,
  index,
  onClick,
}: {
  award: (typeof AWARDS)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative flex flex-col rounded-2xl overflow-hidden group cursor-pointer"
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
      aria-label={`View ${award.title}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Top gold accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] z-10"
        style={{
          background: `linear-gradient(to right, ${award.borderColor}, transparent)`,
        }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116] via-[#0e1116]/30 to-transparent" />

        {/* Zoom hint on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(212,175,55,0.15)",
              border: "1px solid rgba(212,175,55,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ZoomIn className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#D4AF37]">
              View Details
            </span>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
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
        <div className="absolute bottom-4 right-4 z-10">
          <span className="font-heading text-2xl font-light text-white/20">
            {award.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div
          className="w-8 h-[1px] mb-5"
          style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }}
        />
        <h3 className="font-heading text-lg md:text-xl text-white/90 leading-snug mb-4">
          {award.title}
        </h3>
        <p className="font-sans text-sm text-white/45 leading-relaxed flex-1 line-clamp-3">
          {award.description}
        </p>
        <div className="flex items-center gap-2 mt-5">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#D4AF37]/60 text-[#D4AF37]/60" />
            ))}
          </div>
          <span
            className="font-sans text-[10px] uppercase tracking-[0.15em] ml-auto transition-colors duration-300"
            style={{ color: hovered ? "#D4AF37" : "rgba(255,255,255,0.25)" }}
          >
            Click to view →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Mobile Carousel ──────────────────────────────────────────────────────────

function MobileCarousel({ onCardClick }: { onCardClick: (index: number) => void }) {
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
            <AwardCard
              award={AWARDS[current]}
              index={0}
              onClick={() => onCardClick(current)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          aria-label="Previous award"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/60 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevModal = () =>
    setSelectedIndex((i) => (i === null ? 0 : (i - 1 + AWARDS.length) % AWARDS.length));
  const nextModal = () =>
    setSelectedIndex((i) => (i === null ? 0 : (i + 1) % AWARDS.length));

  return (
    <>
      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <AwardModal
            award={AWARDS[selectedIndex]}
            onClose={closeModal}
            onPrev={prevModal}
            onNext={nextModal}
          />
        )}
      </AnimatePresence>

      <section
        id="awards"
        className="relative overflow-hidden border-t border-white/[0.06]"
        aria-labelledby="awards-heading"
        style={{ background: "linear-gradient(180deg, #0b0e13 0%, #0d1018 50%, #0b0e13 100%)" }}
      >
        {/* Ambient glows */}
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

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 md:mb-28"
          >
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

            <div className="flex justify-center mb-8">
              <div
                className="h-[1px] w-24"
                style={{ background: "linear-gradient(to right, transparent, #D4AF37, transparent)" }}
              />
            </div>

            <p className="font-sans text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Celebrating our commitment to excellence in luxury transportation and customer satisfaction.
            </p>
          </motion.div>

          {/* ── Desktop Grid ── */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-24">
            {AWARDS.map((award, i) => (
              <AwardCard
                key={award.id}
                award={award}
                index={i}
                onClick={() => openModal(i)}
              />
            ))}
          </div>

          {/* ── Mobile Carousel ── */}
          <div className="md:hidden mb-20">
            <MobileCarousel onCardClick={openModal} />
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
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
              {[
                { label: "Award Recognition", emoji: "🏆", value: null, suffix: "" },
                { label: "Years Experience", emoji: null, value: 20, suffix: "+" },
                { label: "Luxury Vehicles", emoji: null, value: 48, suffix: "+" },
                { label: "Happy Customers", emoji: null, value: 10000, suffix: "+" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-10 px-6 text-center">
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
                  <div className="w-6 h-[1px] mb-3" style={{ background: "rgba(212,175,55,0.3)" }} />
                  <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }}
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
              <a
                href="#contact"
                id="awards-cta-book"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-medium tracking-[0.1em] uppercase overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #C9A227 100%)",
                  color: "#0b0e13",
                  boxShadow: "0 4px 24px rgba(212,175,55,0.3)",
                }}
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
              >
                View Our Fleet
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
