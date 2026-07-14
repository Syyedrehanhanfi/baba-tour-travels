"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const INSTA_IMAGES = [
  "/packages/udaipur p1.jpg",
  "/packages/jaipur p2.jpg",
  "/packages/jaisalmer p3.jpg",
  "/packages/p4.jpg",
  "/packages/p5.jpg",
  "/packages/p6.jpg",
];

// Duplicate array for infinite seamless loop
const MARQUEE_IMAGES = [...INSTA_IMAGES, ...INSTA_IMAGES];

export default function InstagramGallery() {
  return (
    <section className="py-32 bg-[#0e1116] border-t border-[#22252a] overflow-hidden">
      <div className="container mx-auto px-4 mb-20 text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-block px-5 py-2 border border-white/10 bg-white/5 rounded-full text-white/90 uppercase tracking-[0.25em] font-sans text-[11px] font-medium shadow-sm backdrop-blur-sm">
            Social Journal
          </span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl text-baba-light flex items-center justify-center gap-4">
          <Link 
            href="https://www.instagram.com/babatourstravelsudaipur/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-4 hover:opacity-70 transition-opacity duration-300"
          >
            <InstagramIcon className="w-8 h-8 opacity-80" />
            @babatourstravelsudaipur
          </Link>
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden w-full group cursor-pointer">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          {MARQUEE_IMAGES.map((src, idx) => (
            <Link 
              key={idx}
              href="https://www.instagram.com/babatourstravelsudaipur/"
              target="_blank"
              rel="noreferrer"
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] shrink-0 mx-2 overflow-hidden block"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-110"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-[#0b0e13]/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <InstagramIcon className="w-12 h-12 text-baba-light" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
