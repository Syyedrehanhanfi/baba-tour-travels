"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const WHY_CHOOSE_US = [
  "22+ Years of Trusted Experience",
  "Luxury & Well-Maintained Fleet",
  "Professional & Experienced Drivers",
  "24×7 Customer Support",
  "Affordable & Transparent Pricing",
  "Customized Tour Packages",
  "Airport Transfers & Outstation Trips",
  "All India Luxury Taxi Service"
];

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax values for images
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48 bg-[#0b0e13] relative overflow-hidden border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start mb-32">
          
          {/* Left: Typography & Story */}
          <div className="lg:col-span-6 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-start mb-8">
                <span className="inline-block px-5 py-2 border border-white/10 bg-white/5 rounded-full text-white/90 uppercase tracking-[0.25em] font-sans text-[11px] font-medium shadow-sm backdrop-blur-sm">
                  About Baba Tours & Travels
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-tight mb-8">
                Your Trusted Travel Partner in Udaipur for <br className="hidden lg:block" />
                <span className="italic font-light opacity-90">Luxury Tours & Car Rentals.</span>
              </h2>
              
              <div className="space-y-6 text-baba-light/70 font-sans text-base md:text-lg leading-relaxed mb-12">
                <p>
                  For over 22 years, Baba Tours & Travels has been delivering reliable, comfortable, and premium travel experiences across Rajasthan and India. Whether you're planning a family vacation, honeymoon, corporate tour, destination wedding, airport transfer, or luxury car rental, we ensure every journey is safe, punctual, and memorable.
                </p>
                <p>
                  Our experienced chauffeurs, well-maintained fleet, transparent pricing, and 24/7 customer support have earned the trust of thousands of happy travelers. From local sightseeing in Udaipur to customized India tour packages, we focus on providing exceptional service with complete customer satisfaction.
                </p>
              </div>

              {/* Checklist */}
              <div className="mb-6">
                <h3 className="font-heading text-2xl text-baba-light mb-6">Why Choose Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {WHY_CHOOSE_US.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-baba-light/80" />
                      </div>
                      <span className="font-sans text-sm text-baba-light/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right: Asymmetrical Parallax Imagery */}
          <div className="lg:col-span-6 relative h-[600px] md:h-[700px] w-full mt-16 lg:mt-0 hidden md:block">
            {/* Primary Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[85%] h-[75%] z-10"
            >
              <div className="w-full h-full relative rounded-none overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-[#0b0e13]/20 transition-opacity duration-700 group-hover:bg-transparent" />
              </div>
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20"
            >
              <div className="w-full h-full relative rounded-none overflow-hidden group border-8 border-[#0b0e13]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620865766236-4074b1263c9d?q=80&w=800&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-[#0b0e13]/30 transition-opacity duration-700 group-hover:bg-transparent" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Premium Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto text-center px-4"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
            <span className="font-heading text-[120px] md:text-[200px] leading-none text-baba-light/[0.03]">
              &rdquo;
            </span>
          </div>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-baba-light/90 leading-[1.4] relative z-10 italic font-light">
            "Every journey deserves comfort, reliability, and unforgettable memories. At Baba Tours & Travels, we don't just take you to your destination—we make the journey exceptional."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
