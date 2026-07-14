"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    title: "Unmatched Fleet Quality",
    description: "Every vehicle is maintained to the highest showroom standards, offering pristine interiors and seamless performance.",
  },
  {
    title: "Expert Chauffeurs",
    description: "Our drivers are not just navigators; they are trained local experts dedicated to your safety, privacy, and comfort.",
  },
  {
    title: "Bespoke Experiences",
    description: "We don't do one-size-fits-all. Every itinerary is meticulously tailored to your unique preferences and pace.",
  },
  {
    title: "24/7 Concierge Support",
    description: "From the moment you book until you return home, our dedicated support team is always available.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-[#0e1116] border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-28">
          
          {/* Left Column (Sticky) */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-baba-light/50 uppercase tracking-[0.25em] font-sans text-xs mb-8 block">
                  The Baba Advantage
                </span>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-[1.1] tracking-tight">
                  Why Discerning <br className="hidden lg:block" /> Travelers <br className="hidden lg:block" />
                  <span className="italic font-light">Choose Us.</span>
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-7/12 pt-4 lg:pt-16">
            <div className="flex flex-col gap-20 md:gap-24">
              {REASONS.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.15, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-150px 0px -150px 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pl-8 border-l border-white/[0.06] hover:border-baba-light/30 transition-colors duration-700"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-baba-light/20 mb-6 block">
                    0{index + 1}
                  </span>
                  
                  <h3 className="font-heading text-2xl md:text-3xl text-baba-light mb-5 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-baba-light/50 leading-relaxed text-base md:text-lg max-w-lg">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
