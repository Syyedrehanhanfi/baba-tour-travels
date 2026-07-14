"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const STATS = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Happy Customers", value: 750, suffix: "+" },
  { label: "Premium Vehicles", value: 25, suffix: "+" },
  { label: "Customer Support", value: 24, suffix: "/7", noAnim: true },
];

function AnimatedCounter({ value, suffix, noAnim }: { value: number, suffix: string, noAnim?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  const display = useTransform(spring, (current) => 
    Math.floor(current)
  );

  useEffect(() => {
    if (isInView && !noAnim) {
      spring.set(value);
    }
  }, [isInView, spring, value, noAnim]);

  return (
    <span ref={ref} className="tabular-nums tracking-tighter">
      {noAnim ? (
        <span>{value}</span>
      ) : (
        <motion.span>{display}</motion.span>
      )}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 md:py-32 bg-[#0e1116]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl text-baba-light mb-4 font-light">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} noAnim={stat.noAnim} />
              </h3>
              <div className="w-8 h-[1px] bg-white/10 mb-4" />
              <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-baba-light/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
