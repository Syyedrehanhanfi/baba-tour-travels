"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Eleanor Rothschild",
    location: "London, UK",
    text: "An absolutely flawless experience. The chauffeur was impeccably dressed, deeply knowledgeable about Udaipur's history, and the vehicle was pristine. They set a new standard for luxury travel.",
  },
  {
    name: "James Cavendish",
    location: "New York, USA",
    text: "From the seamless airport transfer to the bespoke itinerary through the Aravalli hills, Baba Tours provided a level of service I typically only experience at Aman resorts.",
  },
  {
    name: "Aarti Singhania",
    location: "Mumbai, India",
    text: "We booked the premium SUV fleet for our daughter's wedding in Udaipur. The coordination, punctuality, and pure elegance of the service took all the stress away.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 md:py-40 lg:py-48 bg-[#0b0e13] border-t border-white/[0.06] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 text-center">
        
        {/* Ambient Quote */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="font-heading text-[200px] md:text-[400px] leading-none text-baba-light/[0.02]">
            &rdquo;
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex justify-center">
            <span className="inline-block px-5 py-2 border border-white/10 bg-white/5 rounded-full text-white/90 uppercase tracking-[0.25em] font-sans text-[11px] font-medium shadow-sm backdrop-blur-sm">
              Client Voices
            </span>
          </div>
        </motion.div>

        <div className="relative h-[350px] md:h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1.5 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-baba-light/80 text-baba-light/80" />
                ))}
              </div>
              
              <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-baba-light/90 leading-[1.4] max-w-4xl mx-auto mb-10 px-4">
                &ldquo;{TESTIMONIALS[currentIndex].text}&rdquo;
              </p>
              
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-baba-light/70 mb-1">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-baba-light/30">
                  {TESTIMONIALS[currentIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8 relative z-20">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[1px] transition-all duration-700 ${
                idx === currentIndex ? "w-10 bg-baba-light/60" : "w-4 bg-white/10 hover:bg-white/20"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
