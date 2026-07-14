"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Luxury Taxi",
    description: "Premium sedans and SUVs for local sightseeing and outstation travel, ensuring maximum comfort.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Honeymoon Packages",
    description: "Curated romantic getaways designed for couples to create unforgettable lifelong memories.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Family & Group Tours",
    description: "Spacious vehicles and tailored itineraries that cater to every member of your family or group.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Hotel Booking",
    description: "Exclusive partnerships with premium hotels and heritage resorts for the best rates and upgrades.",
    image: "https://images.unsplash.com/photo-1582285150534-11843b0f7962?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Flight Booking",
    description: "Hassle-free domestic and international flight reservations with 24/7 support.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-[#0e1116] border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-baba-light/50 uppercase tracking-[0.25em] font-sans text-xs mb-8 block">
              Our Offerings
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-tight">
              Premium <br className="hidden md:block" />
              <span className="italic font-light">Services.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-baba-light/50 max-w-sm text-base md:text-lg leading-relaxed"
          >
            A comprehensive suite of luxury travel solutions, managed by experts to ensure flawless execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[300px]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className={`group relative overflow-hidden bg-[#101318] border border-white/[0.04] ${service.gridClass}`}
            >
              {/* Background on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-[1.5s] ease-out opacity-0 group-hover:opacity-30 scale-[1.05] group-hover:scale-100 will-change-transform"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <h3 className="font-heading text-2xl md:text-3xl text-baba-light mb-3 transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  {service.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-baba-light/50 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
