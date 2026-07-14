"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0e13]"
        >
          {/* Gold glow behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          {/* Logo image */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
            style={{ width: "260px", height: "auto" }}
          >
            <Image
              src="/logo.png"
              alt="Baba Tour & Travels"
              width={520}
              height={280}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>

          {/* Animated loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden rounded-full"
            style={{ width: "140px", height: "1px", background: "rgba(212,175,55,0.15)" }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
              style={{
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to right, transparent, rgba(212,175,55,0.8), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
