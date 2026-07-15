"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Fleet", href: "/#fleet" },
    { name: "Packages", href: "/#packages" },
    { name: "Destinations", href: "/#destinations" },
    { name: "Awards", href: "/#awards" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-3 md:top-6 left-1/2 z-50 w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-5xl"
      >
        <div 
          className="flex items-center justify-between w-full h-full px-4 md:px-8 py-3 md:py-3.5 bg-[#0b0e13]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] rounded-full"
        >
          {/* Logo */}
          <Link href="/" className="font-heading text-lg md:text-2xl font-semibold tracking-wide text-baba-light flex-shrink-0 z-50 whitespace-nowrap" onClick={() => setIsOpen(false)}>
            Baba Tours & Travels
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-[11px] uppercase tracking-[0.15em] text-baba-light/60 hover:text-baba-light transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/[0.04]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-5 w-[1px] bg-white/10 mx-3" />
            <a href="tel:09828078705">
              <Button className="rounded-full bg-baba-light text-[#0b0e13] hover:bg-white transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.12em] px-6 h-9">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-baba-light z-50 w-10 h-10 flex items-center justify-end pr-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          clipPath: isOpen ? "circle(150% at 90% 5%)" : "circle(0% at 90% 5%)",
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-[#0b0e13]/95 backdrop-blur-xl flex flex-col justify-center px-8"
      >
        <div className="flex flex-col items-start gap-8 w-full max-w-sm mt-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: isOpen ? 0.2 + i * 0.08 : 0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl text-baba-light/70 hover:text-baba-light transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: isOpen ? 0.6 : 0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 w-full"
          >
            <a href="tel:09828078705" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full bg-baba-light text-[#0b0e13] hover:bg-white transition-all font-sans text-xs uppercase tracking-[0.15em] py-6 font-semibold">
                Book Your Journey
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
