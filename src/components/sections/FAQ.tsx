"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "Which cars are available?",
    answer: "We offer a premium fleet including Toyota Innova Crysta, Suzuki Swift Dzire, Toyota Etios, Standard Innova, Tempo Travellers, and luxury buses for larger groups.",
  },
  {
    question: "Do you provide airport pickup?",
    answer: "Yes, we provide 24/7 premium airport pickup and drop-off services at Maharana Pratap Airport (Udaipur) and other major airports across Rajasthan.",
  },
  {
    question: "Do you provide Rajasthan tour packages?",
    answer: "Absolutely. We specialize in meticulously crafted tour packages covering Udaipur, Jodhpur, Jaisalmer, Jaipur, Mount Abu, and beyond.",
  },
  {
    question: "Are luxury wedding cars available?",
    answer: "Yes, we offer a selection of pristine, high-end luxury vehicles perfect for weddings and special VIP events, complete with professional chauffeurs.",
  },
  {
    question: "Can I customize my itinerary?",
    answer: "Our core philosophy is bespoke travel. Every itinerary can be fully customized to your specific preferences, pace, and interests.",
  },
  {
    question: "Is booking available 24x7?",
    answer: "Yes, our concierge and support team is available around the clock to assist you with bookings and any on-trip requirements.",
  },
];

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 md:py-40 bg-[#0b0e13] border-t border-[#22252a]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-block px-5 py-2 border border-white/10 bg-white/5 rounded-full text-white/90 uppercase tracking-[0.25em] font-sans text-[11px] font-medium shadow-sm backdrop-blur-sm">
              Common Inquiries
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-baba-light">
            Frequently Asked{" "}
            <span className="italic font-light">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: EASE_LUXURY,
                }}
                className="border-b border-[#22252a] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="font-heading text-xl md:text-2xl text-baba-light group-hover:text-white transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="ml-6 flex-shrink-0 w-9 h-9 rounded-full border border-[#22252a] flex items-center justify-center group-hover:border-baba-light/60 transition-colors duration-300">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-baba-light/70" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-baba-light/70" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.5, ease: EASE_LUXURY },
                        opacity: { duration: 0.35, ease: EASE_LUXURY },
                      }}
                    >
                      <div className="pb-8 pr-12 max-w-2xl">
                        <p className="font-sans text-lg text-baba-light/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
