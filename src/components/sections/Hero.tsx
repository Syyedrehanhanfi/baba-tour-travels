"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-end justify-center overflow-hidden bg-[#0b0e13]">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: "url('/img/car.avif')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-[#0b0e13]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/10 via-transparent to-[#0b0e13]/40 z-10" />
      </motion.div>

      {/* Content — Bottom-aligned for editorial composition */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="container mx-auto px-6 md:px-12 z-20 relative pb-32 md:pb-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span 
              className="text-baba-light uppercase tracking-[0.3em] font-sans font-semibold text-[10px] md:text-xs"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
            >
              Est. 2005 &mdash; Udaipur, Rajasthan
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] text-baba-light leading-[1.1] tracking-tight mb-8"
          style={{ textShadow: "0 8px 40px rgba(0,0,0,0.6)" }}
        >
          Baba Tours <br className="md:hidden" />
          <span className="italic font-light text-white/90">& Travels.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="font-sans text-base md:text-lg text-baba-light max-w-xl mb-12 leading-relaxed drop-shadow-md font-medium"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}
        >
          Udaipur&apos;s premier luxury travel agency. We offer an exclusive premium fleet and bespoke itineraries designed to make your journey across Rajasthan truly unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a href="tel:09828078705">
            <Button className="rounded-full bg-baba-light text-[#0b0e13] hover:bg-white transition-all duration-500 hover:scale-[1.03] px-8 md:px-10 py-6 md:py-7 text-xs md:text-sm uppercase tracking-[0.15em] font-sans group">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
          <a href="#fleet">
            <Button variant="outline" className="rounded-full border-white/15 text-baba-light hover:bg-white/5 transition-all duration-500 hover:scale-[1.03] px-8 md:px-10 py-6 md:py-7 text-xs md:text-sm uppercase tracking-[0.15em] font-sans bg-white/[0.03] backdrop-blur-sm">
              View Fleet
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator — centered at absolute bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-baba-light/30 uppercase tracking-[0.2em] font-sans text-[9px]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-baba-light/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
