"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Users, Briefcase, AirVent, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Vehicle Data
const FLEET = [
  { 
    name: "BMW X7", 
    category: "Luxury SUV", 
    seats: "7 Seats", 
    luggage: "4 Bags",
    image: "/fleet/1.jpg",
    gallery: ["/fleet/intirior 1.jpg", "/fleet/setas 1.jpg"],
    description: "BMW is a brand synonymous with class. If you have a BMW, you have arrived. Trusted for over a century, experience ultimate luxury without compromise.",
    amenities: ["Premium Leather Seats", "Rear AC Vents", "GPS Navigation", "USB Charging Ports", "Ample Legroom", "First Aid Kit"]
  },
  { 
    name: "Toyota Fortuner", 
    category: "Luxury SUV", 
    seats: "7 Seats", 
    luggage: "3 Bags",
    image: "/fleet/2.jpg",
    gallery: ["/fleet/interior 2.avif", "/fleet/seats 2.jpg"],
    description: "A commanding presence on the road. Perfect for VIP travel, destination weddings, and premium outstation tours. Experience top-tier safety and absolute luxury.",
    amenities: ["Dual Zone Climate Control", "Ventilated Seats", "Sunroof", "Premium Sound System", "Advanced Airbags"]
  },
  { 
    name: "Kia Carnival", 
    category: "Ultra Luxury MPV", 
    seats: "6/7 Seats", 
    luggage: "4 Bags",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200&auto=format&fit=crop"],
    description: "Experience business-class travel on the road. The Kia Carnival features dual sunroofs, VIP lounge seats, and whisper-quiet cabin acoustics for the ultimate luxury journey.",
    amenities: ["VIP Lounge Seats with Leg Support", "Dual Sunroof", "Smart Air Purifier", "Rear Entertainment Screens", "Automatic Sliding Doors"]
  },
  { 
    name: "Suzuki Swift Dzire", 
    category: "Premium Sedan", 
    seats: "4 Seats", 
    luggage: "2 Bags",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"],
    description: "A comfortable and economical sedan perfect for couple getaways, airport transfers, and local Udaipur sightseeing. Offers a smooth and efficient ride.",
    amenities: ["Automatic Climate Control", "Comfortable Seating", "Bluetooth Audio", "Spacious Boot"]
  },
  { 
    name: "Toyota Etios", 
    category: "Comfort Sedan", 
    seats: "4 Seats", 
    luggage: "2 Bags",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1503376713180-60b64d0a3d46?q=80&w=1200&auto=format&fit=crop"],
    description: "Highly reliable and widely trusted for its cabin space and comfort. An excellent choice for long-distance travel on a budget without compromising on safety.",
    amenities: ["Best-in-class Legroom", "Air Conditioning", "Large Boot Space", "High Safety Rating"]
  },
  { 
    name: "Tempo Traveller", 
    category: "Group Travel", 
    seats: "12+ Seats", 
    luggage: "10+ Bags",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop"],
    description: "The ideal solution for large family tours, corporate outings, and group excursions. Features push-back seats, ample luggage space, and a high roof for comfort.",
    amenities: ["Push-back Reclining Seats", "Individual AC Vents", "LED TV & Music System", "Curtains for Privacy", "Ice Box"]
  },
];

export default function Fleet() {
  const [selectedCar, setSelectedCar] = useState<typeof FLEET[0] | null>(null);

  // Lock body scroll when modal is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = selectedCar ? "hidden" : "unset";
  }

  return (
    <section id="fleet" className="py-32 md:py-40 lg:py-48 bg-[#0b0e13] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-baba-light uppercase tracking-[0.2em] font-sans font-semibold text-sm drop-shadow-md">
              The Collection
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-tight">
            Luxury <span className="italic font-light">Fleet.</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="pl-6 md:pl-12 lg:pl-[calc((100vw-1280px)/2+48px)] overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
        <div className="flex gap-6 md:gap-8 w-max pr-6 md:pr-12 lg:pr-[calc((100vw-1280px)/2+48px)]">
          {FLEET.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: Math.min(index * 0.1, 0.5) }}
              onClick={() => setSelectedCar(vehicle)}
              className="shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] lg:w-[600px] snap-center group cursor-pointer relative overflow-hidden h-[450px] md:h-[550px] border border-white/[0.04] rounded-2xl md:rounded-none"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                style={{ backgroundImage: `url('${vehicle.image}')` }}
              />
              
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-[#0b0e13]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-baba-light/60 font-sans text-[10px] uppercase tracking-[0.2em]">
                    {vehicle.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-baba-light/20" />
                  <span className="text-baba-light/60 font-sans text-[10px] uppercase tracking-[0.2em]">
                    {vehicle.seats}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <h3 className="font-heading text-3xl md:text-4xl text-baba-light transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                    {vehicle.name}
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shrink-0 ml-4">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden flex gap-2">
         <span className="text-white/30 text-xs uppercase tracking-widest font-sans animate-pulse">Swipe to explore &rarr;</span>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
              onClick={() => setSelectedCar(null)}
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#0b0e13] border border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] md:h-[600px] lg:h-[700px] overflow-y-auto md:overflow-hidden no-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Images Section (Grid Gallery) */}
              <div className={`w-full md:w-1/2 relative shrink-0 grid ${selectedCar.gallery.length > 1 ? 'grid-rows-2 h-[70vh] md:h-full' : 'grid-cols-1 h-[40vh] md:h-full'}`}>
                {selectedCar.gallery.map((img, i) => (
                  <div key={i} className="w-full h-full relative overflow-hidden group/img">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/img:scale-105"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                    {/* Very subtle border separation between images if multiple */}
                    {selectedCar.gallery.length > 1 && i === 0 && (
                       <div className="absolute bottom-0 left-0 right-0 h-[1px] md:h-auto md:w-[1px] md:top-0 md:bottom-0 md:right-0 bg-white/10 z-10" />
                    )}
                  </div>
                ))}
                
                {/* Badge overlay */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-10">
                  <span className="text-white/80 text-[10px] uppercase tracking-widest font-sans font-semibold">Gallery View</span>
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 h-auto md:h-full p-6 md:p-10 lg:p-12 flex flex-col overflow-y-visible md:overflow-y-auto no-scrollbar relative shrink-0">
                <span className="text-baba-light/50 font-sans text-xs uppercase tracking-[0.2em] mb-2 block shrink-0">
                  {selectedCar.category}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6 shrink-0">
                  {selectedCar.name}
                </h3>
                
                <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed mb-8 shrink-0">
                  {selectedCar.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8 shrink-0">
                  <div className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-2xl border border-white/[0.05]">
                    <Users className="w-5 h-5 text-white/50" />
                    <span className="font-sans text-sm text-white/80">{selectedCar.seats}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-2xl border border-white/[0.05]">
                    <Briefcase className="w-5 h-5 text-white/50" />
                    <span className="font-sans text-sm text-white/80">{selectedCar.luggage}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-2xl border border-white/[0.05]">
                    <AirVent className="w-5 h-5 text-white/50" />
                    <span className="font-sans text-sm text-white/80">Climate Control</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-2xl border border-white/[0.05]">
                    <ShieldCheck className="w-5 h-5 text-white/50" />
                    <span className="font-sans text-sm text-white/80">Top Safety</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8 shrink-0">
                  <h4 className="font-sans font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Premium Amenities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCar.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white/40" />
                        <span className="text-white/70 font-sans text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="pt-6 border-t border-white/10 mt-auto shrink-0">
                  <a href={`tel:09828078705`} onClick={() => setSelectedCar(null)} className="block w-full">
                    <Button className="w-full rounded-full bg-gradient-to-r from-white via-white/90 to-white text-black hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-500 font-sans text-sm uppercase tracking-widest py-7 relative overflow-hidden group border border-white/50">
                      <span className="relative z-10 flex items-center justify-center gap-3 font-bold">
                        Book This Vehicle
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      {/* Shine effect */}
                      <div className="absolute top-0 -left-[100%] h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
