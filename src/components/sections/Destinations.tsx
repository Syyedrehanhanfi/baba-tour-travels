"use client";

import { motion } from "framer-motion";

const DESTINATIONS = [
  { 
    name: "Udaipur", 
    subtitle: "City of Lakes ⭐", 
    tags: "Luxury • Heritage • Romance",
    description: "Experience majestic palaces, serene lakes, sunset boat rides, and royal hospitality.",
    image: "/packages/udaipur p1.jpg", 
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    name: "Jaipur", 
    subtitle: "The Pink City", 
    tags: "Culture • Architecture • Shopping",
    description: "Explore Amber Fort, Hawa Mahal, City Palace, vibrant bazaars, and authentic Rajasthani cuisine.",
    image: "/packages/jaipur p2.jpg", 
    span: "md:col-span-2 md:row-span-1" 
  },
  { 
    name: "Jaisalmer", 
    subtitle: "The Golden City", 
    tags: "Desert • Adventure • Heritage",
    description: "Witness golden sandstone forts, camel safaris, luxury desert camps, and cultural evenings.",
    image: "/packages/jaisalmer p3.jpg", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    name: "Jodhpur", 
    subtitle: "The Blue City", 
    tags: "History • Forts • Photography",
    description: "Discover Mehrangarh Fort, blue-painted streets, heritage hotels, and local markets.",
    image: "/packages/p4.jpg", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    name: "Mount Abu", 
    subtitle: "Hill Station", 
    tags: "Nature • Relaxation • Family",
    description: "Escape to Rajasthan's only hill station with Nakki Lake, Dilwara Temples, and scenic viewpoints.",
    image: "/packages/p5.jpg", 
    span: "md:col-span-2 md:row-span-1" 
  },
  { 
    name: "Ranthambore", 
    subtitle: "Wildlife Paradise", 
    tags: "Safari • Nature • Adventure",
    description: "Embark on thrilling tiger safaris and explore one of India's most famous national parks.",
    image: "/packages/p6.jpg", 
    span: "md:col-span-2 md:row-span-1" 
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-32 md:py-40 lg:py-48 bg-[#0b0e13]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center mb-8">
              <span className="inline-block px-5 py-2 border border-white/10 bg-white/5 rounded-full text-white/90 uppercase tracking-[0.25em] font-sans text-[11px] font-medium shadow-sm backdrop-blur-sm">
                Discover Rajasthan
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-tight">
              Top <span className="italic font-light">Destinations.</span>
            </h2>
          </motion.div>
        </div>

        {/* Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[320px]">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${dest.span}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out will-change-transform group-hover:scale-105"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13]/95 via-[#0b0e13]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start h-full">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-sans text-[9px] uppercase tracking-[0.2em] text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {dest.tags}
                </span>
                
                <h3 className="font-heading text-3xl md:text-4xl text-baba-light mb-2 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                  {dest.name} <span className="text-xl md:text-2xl text-white/50 font-light block mt-1">{dest.subtitle}</span>
                </h3>

                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 mt-2">
                  <p className="font-sans text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                    {dest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
