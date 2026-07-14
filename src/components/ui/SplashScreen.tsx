"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide splash after 2.4 seconds
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0e13]"
        >
          {/* Glow background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-72 h-72 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(247,247,247,0.25) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          {/* Icon / Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 relative z-10"
          >
            <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(247,247,247,0.08)]">
              {/* Compass / Travel Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-10 h-10 text-white"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.4"
                />
                <path
                  d="M16.5 7.5L14 14l-6.5 2.5L10 10l6.5-2.5z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  fill="rgba(247,247,247,0.1)"
                />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center px-4"
          >
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Baba Tour
              <span className="text-white/50"> &amp; </span>
              Travels
            </h1>
            <p
              className="mt-2 text-sm tracking-[0.25em] uppercase text-white/40"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Udaipur · Since 2005
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/10 overflow-hidden rounded-full"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
