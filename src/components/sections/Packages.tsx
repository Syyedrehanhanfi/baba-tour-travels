"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, CheckCircle2, XCircle, Hotel, Car, Sparkles, Clock, IndianRupee, MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PKG_1_IMAGES = [
  "/packages/7RdFHVHc_QdVazgGfcEAzO9aFF_1JLXZgloNGqfxX0wqwpiPUu8lKQDi_RQogxBzKYNfnVrekvaZidVoK2K-K8AlNJk7LMU5G9t7CmPPpIQ5-Z8tUr-hHPlCQTWt7RfeCPpM69pVgAEJ7clg7EdVAPaI4O650OCpxc5o2QqAZTM.jpg",
  "/packages/Euxb59X-R-MnQRs4IM7ZJZgRxDU0lwX9CbJTAJctZMmzalbuyHC1QS3fOraNQpK-8PJkB4cdZjRHY9vI6o0PaAVE0B7SzpK9aRLK1tl4jIGFtOCZTIvhbWwRjfa_oL0O1BAic3dqGxI1gZCn56ascdXmcw_OIA3E0EEyqHm9HcI.jpg",
  "/packages/kwCBOwB24EN6CR9rsIyz9X3LcKHxgf7pkQICAy4hGLG9jx6P4-3TtmoZKdN-wxiw_V3GrrulMGh4qB8c_T2v4NAG3GNY57Ms4UKUS71sehw7wW0Q9B7hloihZG9FPwGS3w0Xp0bpmgsf_6m6K1YtN8zT3rQPu-fgnvq0mc4OFz0.jpg"
];

const PACKAGES = [
  {
    title: "Royal Rajasthan Explorer",
    duration: "7 Days / 6 Nights",
    tag: "Most Popular ⭐",
    colSpan: "lg:col-span-8",
    height: "h-[450px] md:h-[550px]",
    gallery: PKG_1_IMAGES,
    overview: "Explore the quintessential charm of Rajasthan with this comprehensive tour covering the majestic forts of Jaipur, the lakes of Udaipur, the blue streets of Jodhpur, and the golden dunes of Jaisalmer.",
    destinations: ["Udaipur", "Jodhpur", "Jaisalmer", "Jaipur"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Jaipur", description: "Arrive in the Pink City. Check in to your heritage hotel and enjoy an evening at Chokhi Dhani." },
      { day: "Day 2", title: "Jaipur Sightseeing", description: "Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal." },
      { day: "Day 3", title: "Journey to Jodhpur", description: "Drive to the Blue City. Visit Mehrangarh Fort and Jaswant Thada." },
      { day: "Day 4", title: "Jaisalmer Desert", description: "Drive to Jaisalmer. Evening camel safari and overnight stay in a luxury desert camp." },
      { day: "Day 5", title: "Jaisalmer Fort", description: "Explore the living Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake." },
      { day: "Day 6", title: "Udaipur Arrival", description: "Drive to Udaipur. Evening boat ride on Lake Pichola." },
      { day: "Day 7", title: "Udaipur & Departure", description: "Visit City Palace and Jagdish Temple before your departure." }
    ],
    includes: ["Luxury Accommodation", "Daily Breakfast & Dinner", "AC Private Transport", "Desert Camp Stay & Safari"],
    excludes: ["Flight/Train Tickets", "Monument Entry Fees", "Personal Expenses"],
    hotelCategory: "4/5 Star Heritage Properties",
    transportation: "Premium SUV",
    highlights: ["Amber Fort Tour", "Mehrangarh Fort", "Thar Desert Safari", "Lake Pichola Boat Ride"],
    optional: ["Hot Air Balloon in Jaipur", "Vintage Car Ride"],
    bestTime: "October to March",
    startingPrice: "₹ 35,000"
  },
  {
    title: "Udaipur Romantic Escape",
    duration: "3 Days / 2 Nights",
    tag: "Couples Special",
    colSpan: "lg:col-span-4",
    height: "h-[450px] md:h-[550px]",
    gallery: [
      "/packages/udaipur.jpg",
      "/packages/udaipur2.jpg",
      "/packages/udaipur3.jpg"
    ],
    overview: "A specially curated luxury escape for couples in the City of Lakes. Experience premium hospitality, private boat rides, and romantic dinners overlooking the palaces.",
    destinations: ["Udaipur", "Sajjangarh"],
    itinerary: [
      { day: "Day 1", title: "Welcome to Udaipur", description: "Check in to your lake-facing luxury resort. Evening private boat ride on Lake Pichola with sunset views." },
      { day: "Day 2", title: "Palaces & Panoramic Views", description: "Visit the magnificent City Palace. Afternoon drive to Sajjangarh (Monsoon Palace). Enjoy a special candlelight dinner." },
      { day: "Day 3", title: "Heritage Walk & Departure", description: "Explore the old city, Jagdish Temple, and local markets before departure." }
    ],
    includes: ["Lake-facing Luxury Room", "Candlelight Dinner", "Private Boat Ride", "Airport Transfers"],
    excludes: ["Flights", "Lunch", "Personal Shopping"],
    hotelCategory: "5 Star Luxury Resorts",
    transportation: "Luxury Sedan",
    highlights: ["Private Boat Ride", "Candlelight Dinner", "Monsoon Palace Sunset"],
    optional: ["Couples Spa Session", "Professional Photoshoot"],
    bestTime: "September to April",
    startingPrice: "₹ 25,000"
  },
  {
    title: "Golden Triangle Tour",
    duration: "6 Days / 5 Nights",
    tag: "Bestseller",
    colSpan: "lg:col-span-4",
    height: "h-[450px] md:h-[500px]",
    gallery: ["/packages/-cSSqPI3tGnQFwvMVdy7tsOHaj_qQ_90X_MeaQA26bIfoSK3MVrJx3G2LXetMfQ3Ea5Qa0yDlTPXVQS0-P2XFHd-ELdFISoiytSaN9MQ_-l4qOf1o6nq832pVnQCWAEo6Tdlyf3OtmihTmdDqJe67HT2bVpyqiXHpwBrRFMRE2E.jpg", "/packages/83fp6JHoaR9Sy1e6LmJU8sL75WcfnZJQukmu3NNeLbkL_oxpV0nB2ngM5AlCjU1AMQ54BQIImc7c5Ltx7suEEnamXB_PA3PXFEYySvSw1NaivBAbra-bpM9d5frJi99ksyWxq9HJP7ujYPJYFX89X1bj-QVyyDDdMLXW_R9wZb8.jpg"],
    overview: "The most iconic route in India. Experience the bustling streets of Delhi, the timeless beauty of the Taj Mahal in Agra, and the royal heritage of Jaipur.",
    destinations: ["Delhi", "Agra", "Jaipur"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Delhi", description: "Arrive in Delhi. Half-day tour of Qutub Minar and Humayun's Tomb." },
      { day: "Day 2", title: "Old Delhi & Agra", description: "Visit India Gate and Red Fort. Afternoon drive to Agra." },
      { day: "Day 3", title: "Taj Mahal & Jaipur", description: "Sunrise tour of the Taj Mahal. Visit Agra Fort, then drive to Jaipur." },
      { day: "Day 4", title: "Jaipur City Tour", description: "Full day sightseeing in Jaipur including Amber Fort and City Palace." },
      { day: "Day 5", title: "Jaipur Markets", description: "Explore Johari Bazaar and Bapu Bazaar. Evening at leisure." },
      { day: "Day 6", title: "Return to Delhi", description: "Drive back to Delhi for your onward journey." }
    ],
    includes: ["4-Star Hotels", "Breakfast", "AC Transport", "English Speaking Guide"],
    excludes: ["Entry Tickets", "Meals other than Breakfast", "Tips"],
    hotelCategory: "4 Star Premium",
    transportation: "Comfort Sedan / SUV",
    highlights: ["Sunrise at Taj Mahal", "Delhi Heritage Walk", "Amber Fort Tour"],
    optional: ["Mohabbat-the-Taj Show", "Rickshaw ride in Old Delhi"],
    bestTime: "October to April",
    startingPrice: "₹ 28,000"
  },
  {
    title: "Rajasthan Heritage Circuit",
    duration: "8 Days / 7 Nights",
    tag: "Extensive Tour",
    colSpan: "lg:col-span-8",
    height: "h-[450px] md:h-[500px]",
    gallery: ["/packages/HqmPUNvDviO_zyLg-XiI5wss5OCa_8igeQEE5NekNb7YbnJV7BiMSR5Q7a2Tx9GRGCd061xHru9bVr4462nc41oURCF2vs2ir08tyDRXjXBk9Vn7kgff6vlk0zeDAHXNIJsfH6mib7g2Af28F4RsBBLk3FCJ26mboiFLtArb8eA.jpg"],
    overview: "A deep dive into the diverse landscapes of Rajasthan, from the lakes of Udaipur to the only hill station Mount Abu, and the deserts of Jodhpur and Jaisalmer.",
    destinations: ["Udaipur", "Mount Abu", "Jodhpur", "Jaisalmer", "Jaipur"],
    itinerary: [
      { day: "Day 1", title: "Udaipur Arrival", description: "Arrive and explore Lake Fateh Sagar and Saheliyon Ki Bari." },
      { day: "Day 2", title: "Mount Abu", description: "Drive to Mount Abu. Visit Dilwara Temples and Nakki Lake." },
      { day: "Day 3", title: "Jodhpur", description: "Drive to Jodhpur. Evening visit to local spice markets." },
      { day: "Day 4", title: "Jodhpur Sightseeing", description: "Mehrangarh Fort and Umaid Bhawan Palace museum." },
      { day: "Day 5", title: "Jaisalmer", description: "Drive to Jaisalmer. Evening cultural program and desert stay." },
      { day: "Day 6", title: "Jaisalmer City", description: "Jaisalmer Fort and Haveli tour." },
      { day: "Day 7", title: "Jaipur", description: "Long drive to Jaipur. Evening rest." },
      { day: "Day 8", title: "Departure", description: "Morning Jaipur tour and departure." }
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Desert Safari", "Intercity Transport"],
    excludes: ["Flights", "Monument Fees"],
    hotelCategory: "Heritage & 4-Star",
    transportation: "SUV (Innova/Fortuner)",
    highlights: ["Mount Abu Hill Station", "Umaid Bhawan", "Dilwara Temples"],
    optional: ["Zip-lining at Mehrangarh", "Bishnoi Village Safari"],
    bestTime: "September to March",
    startingPrice: "₹ 42,000"
  },
  {
    title: "Luxury Mewar Experience",
    duration: "4 Days / 3 Nights",
    tag: "Premium",
    colSpan: "lg:col-span-6",
    height: "h-[450px]",
    gallery: ["/packages/QJTMnsbVLADPE36ejTpTVXcOdfUsF3WmektIZdeVnHl-18mObuVA3YKGu2zpWgcBT48nsYLiaIo5WQmubt6uSatCa5awdQZzh5QaLjG7uvsa3b5J0cyAB529ma1t9gyQRqnAJh4FWJaa-AYCXthPAjbne5nJ2za0yteGVxwJ3qM.jpg"],
    overview: "Live like royalty in the heart of Mewar. This ultra-luxury package features stays in world-renowned palace hotels and private chauffeur-driven excursions.",
    destinations: ["Udaipur", "Kumbhalgarh"],
    itinerary: [
      { day: "Day 1", title: "Royal Welcome", description: "Check-in to a luxury palace hotel. Evening private yacht ride." },
      { day: "Day 2", title: "Private City Tour", description: "Guided tour of City Palace with exclusive access." },
      { day: "Day 3", title: "Kumbhalgarh Excursion", description: "Day trip in a luxury SUV to the majestic Kumbhalgarh Fort." },
      { day: "Day 4", title: "Departure", description: "Luxury airport transfer." }
    ],
    includes: ["5-Star Palace Stay", "All Meals", "Private Yacht Ride", "Chauffeur-driven Luxury Car"],
    excludes: ["Flights", "Alcohol/Personal Expenses"],
    hotelCategory: "5-Star Ultra Luxury",
    transportation: "Luxury SUV / Sedan",
    highlights: ["Palace Stay", "Kumbhalgarh Fort", "Private Yacht"],
    optional: ["Helicopter tour of Udaipur"],
    bestTime: "Anytime",
    startingPrice: "₹ 75,000"
  },
  {
    title: "Wildlife & Nature Adventure",
    duration: "5 Days / 4 Nights",
    tag: "Adventure",
    colSpan: "lg:col-span-6",
    height: "h-[450px]",
    gallery: ["/packages/QwXkIUW_qYCnk9a3OXIRDeGzoS58OxRa74X2D7sSvSlroDNqlilYnGxuPBVOOTQii8EkV6qWlxPSjV-vIPhcuVL1842VdBTHsTwk8FD3_VVRTC0vl9vwhngE89z21dAp-kPw76QNCpFSrz0hRxcvNIy6wzHAzsnkHrzhPEXNYTE.jpg"],
    overview: "Experience the thrill of the wild with safaris in Ranthambore and nature walks in the Kumbhalgarh sanctuary. Spot the majestic Royal Bengal Tiger.",
    destinations: ["Ranthambore", "Kumbhalgarh"],
    itinerary: [
      { day: "Day 1", title: "Ranthambore Arrival", description: "Arrive and check in to a jungle lodge." },
      { day: "Day 2", title: "Tiger Safari", description: "Morning and afternoon jeep safaris in Ranthambore National Park." },
      { day: "Day 3", title: "Drive to Kumbhalgarh", description: "Scenic drive through the Aravalli hills." },
      { day: "Day 4", title: "Sanctuary & Fort", description: "Nature walk in Kumbhalgarh Wildlife Sanctuary and visit the fort." },
      { day: "Day 5", title: "Departure", description: "Transfer for departure." }
    ],
    includes: ["Jungle Lodge Stay", "All Meals", "2 Jeep Safaris", "Transport"],
    excludes: ["Camera Fees", "Tips"],
    hotelCategory: "4-Star Jungle Lodges",
    transportation: "SUV",
    highlights: ["Tiger Safari", "Nature Walks", "Kumbhalgarh Fort"],
    optional: ["Night Safari"],
    bestTime: "October to June",
    startingPrice: "₹ 30,000"
  },
  {
    title: "Spiritual Rajasthan Journey",
    duration: "5 Days / 4 Nights",
    tag: "Pilgrimage",
    colSpan: "lg:col-span-5",
    height: "h-[450px]",
    gallery: ["/packages/Um8K5QCy_wRjUeHC46WDj6_b5rh1ElE8_u6OavZfd30OfZNjHwjG9MhMKNvKedkBMUNRys5jxOMe6UGQSo-4alO_RqsAP-LdaLvbpspdsQo2gWEiFCXocXY1Bu_t4v4BIkt_TlSKAWzMJREwtrkf7-UwMkBOjrDilGOm2QHWIO0.jpg"],
    overview: "A peaceful journey covering the most revered spiritual sites in Rajasthan, offering priority darshan and comfortable travel.",
    destinations: ["Nathdwara", "Eklingji", "Pushkar", "Ajmer"],
    itinerary: [
      { day: "Day 1", title: "Udaipur & Eklingji", description: "Arrive in Udaipur. Visit Eklingji Temple." },
      { day: "Day 2", title: "Nathdwara", description: "Drive to Nathdwara for Shrinathji Darshan. Stay in Nathdwara." },
      { day: "Day 3", title: "Pushkar", description: "Travel to the holy city of Pushkar." },
      { day: "Day 4", title: "Pushkar & Ajmer", description: "Visit Brahma Temple, Pushkar Lake, and Ajmer Sharif Dargah." },
      { day: "Day 5", title: "Departure", description: "Departure from Jaipur or Ajmer." }
    ],
    includes: ["Comfortable Stay", "Vegetarian Meals", "Transport", "Guide for Temples"],
    excludes: ["Donations", "Flights/Trains"],
    hotelCategory: "3/4 Star Comfortable",
    transportation: "Comfort Sedan / SUV",
    highlights: ["Shrinathji Darshan", "Brahma Temple", "Ajmer Dargah"],
    optional: ["VIP Darshan Arrangements"],
    bestTime: "Anytime",
    startingPrice: "₹ 20,000"
  },
  {
    title: "Customized India Tour",
    duration: "Flexible Duration",
    tag: "Tailor-Made",
    colSpan: "lg:col-span-7",
    height: "h-[450px]",
    gallery: ["/packages/gzNkUw22OTv-R8nDsLfi5QCXAkYGk-Og_QsiucFLtbXmlOshwEUh92P_OucL9SSaGx2OfobYMx3NPl8IhKlgIGDwHfbrnMm3YdB4FmoIcGbAc34fR8qgildnGSbnYCjn8G5Q2P6qKEJJrAYFVflR_YqLtI_J9KjanCgtBYVEg5U.jpg", "/packages/hxnVltKz-mmt-eCGeVzDqyBNZdKHOqg2Wc3_pZmci3xK4JAmn3vpPPGTvKuoe9jUrTAXJ_aR6r65_NPpuNsMoTx8w6-oYBvv26Maog13qRg-wDJjRb1H4KG7eHt23P-yCEJjKfc0lvIU2T4hjWAJelDIw_6RXCA5LGl78wn7dC6VIJ9_A-QKctvU-CdaWBzR.jpg"],
    overview: "Don't see exactly what you want? We specialize in creating 100% personalized itineraries across India. Choose your hotels, transport, guides, and activities tailored perfectly to your preferences and budget.",
    destinations: ["Anywhere in India"],
    itinerary: [
      { day: "Day 1+", title: "Your Dream Journey", description: "Every detail crafted specifically for you. From Kashmir to Kerala, Rajasthan to the North East." }
    ],
    includes: ["Fully Customized", "Dedicated Travel Expert", "24/7 On-Trip Support"],
    excludes: ["As per your selection"],
    hotelCategory: "Budget to Ultra Luxury",
    transportation: "Any Vehicle of Choice",
    highlights: ["Absolute Flexibility", "Expert Advice", "Seamless Execution"],
    optional: ["Special Occasion Planning"],
    bestTime: "Year Round",
    startingPrice: "On Request"
  }
];

export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState<typeof PACKAGES[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (selectedPkg) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedPkg(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPkg]);

  // Reset active image when changing package
  useEffect(() => {
    if (selectedPkg) setActiveImageIndex(0);
  }, [selectedPkg]);

  return (
    <section id="packages" className="py-32 md:py-40 lg:py-48 bg-[#0b0e13] border-t border-white/[0.06] relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="text-baba-light uppercase tracking-[0.2em] font-sans font-semibold text-sm drop-shadow-md">
                Curated Experiences
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-baba-light leading-tight">
              Tour <span className="italic font-light">Packages.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${pkg.colSpan} ${pkg.height}`}
              onClick={() => setSelectedPkg(pkg)}
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out will-change-transform group-hover:scale-105"
                style={{ backgroundImage: `url('${pkg.gallery[0]}')` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-[#0b0e13]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Tag */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20 rounded-full">
                  {pkg.tag}
                </span>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-baba-light/40" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-baba-light/80">
                    {pkg.duration}
                  </span>
                </div>
                
                <h3 className="font-heading text-3xl md:text-4xl lg:text-4xl text-baba-light mb-4 transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  {pkg.title}
                </h3>
                
                <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-700 ease-out flex items-center">
                  <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-white border border-white/30 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">
                    Explore Itinerary
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Luxury Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-8"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl cursor-pointer"
              onClick={() => setSelectedPkg(null)}
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[1400px] bg-[#0b0e13] border border-white/10 rounded-none md:rounded-3xl shadow-2xl flex flex-col lg:flex-row h-full max-h-[100vh] md:max-h-[90vh] z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPkg(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 text-white hover:text-black hover:bg-white transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Pane: Image Gallery (Airbnb/Luxe Style) */}
              <div className="w-full lg:w-1/2 h-[45vh] lg:h-full relative flex flex-col bg-black shrink-0">
                {/* Main Hero Image */}
                <div className="relative flex-grow overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${selectedPkg.gallery[activeImageIndex]}')` }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  
                  {/* Image Navigation Arrows (if multiple images) */}
                  {selectedPkg.gallery.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveImageIndex((prev) => (prev === 0 ? selectedPkg.gallery.length - 1 : prev - 1)); }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveImageIndex((prev) => (prev === selectedPkg.gallery.length - 1 ? 0 : prev + 1)); }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Thumbnails Navigation */}
                {selectedPkg.gallery.length > 1 && (
                  <div className="h-24 md:h-32 bg-[#0b0e13] flex items-center gap-3 p-4 overflow-x-auto no-scrollbar border-t border-white/10 shrink-0">
                    {selectedPkg.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative h-full aspect-[4/3] rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${activeImageIndex === idx ? 'ring-2 ring-white scale-95 opacity-100' : 'opacity-50 hover:opacity-100'}`}
                      >
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Pane: Package Details */}
              <div className="w-full lg:w-1/2 h-[55vh] lg:h-full overflow-y-auto no-scrollbar bg-[#0b0e13] p-6 md:p-10 lg:p-14 pb-32">
                
                {/* Header Info */}
                <div className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-[10px] uppercase tracking-wider font-semibold">
                      {selectedPkg.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/60 text-xs font-sans uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" /> {selectedPkg.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
                    {selectedPkg.title}
                  </h3>
                  <p className="font-sans text-white/70 text-base leading-relaxed">
                    {selectedPkg.overview}
                  </p>
                </div>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="flex flex-col p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                    <MapPin className="w-5 h-5 text-white/40 mb-2" />
                    <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Destinations</span>
                    <span className="text-white/90 text-sm">{selectedPkg.destinations.join(" → ")}</span>
                  </div>
                  <div className="flex flex-col p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                    <Calendar className="w-5 h-5 text-white/40 mb-2" />
                    <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Best Time</span>
                    <span className="text-white/90 text-sm">{selectedPkg.bestTime}</span>
                  </div>
                  <div className="flex flex-col p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                    <Hotel className="w-5 h-5 text-white/40 mb-2" />
                    <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Accommodation</span>
                    <span className="text-white/90 text-sm">{selectedPkg.hotelCategory}</span>
                  </div>
                  <div className="flex flex-col p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                    <Car className="w-5 h-5 text-white/40 mb-2" />
                    <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Transport</span>
                    <span className="text-white/90 text-sm">{selectedPkg.transportation}</span>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="mb-12">
                  <h4 className="font-sans font-semibold text-white text-lg uppercase tracking-widest mb-6 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-white/30" /> Tour Itinerary
                  </h4>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {selectedPkg.itinerary.map((item, idx) => (
                      <div key={idx} className="relative flex items-start gap-6">
                        <div className="w-6 h-6 rounded-full bg-[#0b0e13] border-2 border-white/20 flex items-center justify-center shrink-0 z-10 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="flex-1 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                          <span className="text-white/40 font-sans text-xs uppercase tracking-widest mb-1 block">{item.day}</span>
                          <h5 className="text-white font-sans font-medium text-base mb-2">{item.title}</h5>
                          <p className="text-white/60 font-sans text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" /> What's Included
                    </h4>
                    <ul className="space-y-3">
                      {selectedPkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400/50 mt-1.5 shrink-0" /> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80" /> What's Not Included
                    </h4>
                    <ul className="space-y-3">
                      {selectedPkg.excludes.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400/30 mt-1.5 shrink-0" /> {exc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-12">
                  <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400/80" /> Trip Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPkg.highlights.map((highlight, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs font-sans">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Sticky Action Bar */}
              <div className="absolute bottom-0 right-0 w-full lg:w-1/2 bg-[#0b0e13]/80 backdrop-blur-xl border-t border-white/10 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
                <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                  <span className="text-white/50 text-xs uppercase tracking-widest mb-1">Starting From</span>
                  <div className="flex items-center gap-1 text-2xl text-white font-heading">
                    {selectedPkg.startingPrice}
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a href="https://wa.me/919828078705" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                    <Button variant="outline" className="w-full rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 h-12 px-6">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </Button>
                  </a>
                  <a href="tel:09828078705" className="flex-1 sm:flex-none">
                    <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 h-12 px-8 font-semibold tracking-wider uppercase text-xs">
                      Book Now
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
