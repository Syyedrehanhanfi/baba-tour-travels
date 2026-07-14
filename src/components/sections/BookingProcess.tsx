"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "Connect with our travel experts to share your preferences, schedule, and specific requirements for the journey.",
  },
  {
    number: "02",
    title: "Curation",
    description: "Receive a meticulously crafted itinerary, featuring handpicked luxury vehicles and exclusive experiences tailored just for you.",
  },
  {
    number: "03",
    title: "Confirmation",
    description: "Secure your reservation. From this point forward, our 24/7 concierge takes care of every detail until your safe return.",
  },
];

export default function BookingProcess() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 md:py-40 lg:py-48 bg-[#0e1116] border-t border-white/[0.06] relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-baba-light/50 uppercase tracking-[0.25em] font-sans text-xs mb-8 block">
              The Protocol
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-tight">
              Seamless <span className="italic font-light">Booking.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.06] md:-translate-x-1/2" />
          
          {/* Glowing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[1px] bg-baba-light/80 shadow-[0_0_8px_rgba(247,247,247,0.3)] md:-translate-x-1/2 origin-top" 
          />

          <div className="flex flex-col gap-24 md:gap-32">
            {STEPS.map((step, index) => (
              <div key={index} className={`relative flex items-start md:justify-between flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0e1116] border-2 border-white/20 z-10 mt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
                    className="absolute inset-0 rounded-full bg-baba-light shadow-[0_0_6px_rgba(247,247,247,0.6)]"
                  />
                </div>

                <div className="hidden md:block w-[45%]" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-[45%] pl-16 md:pl-0"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-baba-light/20 mb-4 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-baba-light mb-4">
                    {step.title}
                  </h3>
                  <p className="font-sans text-baba-light/50 leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
