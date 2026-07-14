"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easing },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easing, delay: 0.2 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

const contactItems = [
  {
    icon: Phone,
    label: "Direct Line",
    href: "tel:09828078705",
    content: "+91 98280 78705",
    isAddress: false,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/919828078705",
    content: "+91 98280 78705",
    isAddress: false,
    external: true,
  },
  {
    icon: MapPin,
    label: "Headquarters",
    href: undefined,
    content: null,
    isAddress: true,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-[#0b0e13]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Side: Contact Info & Buttons */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full flex flex-col"
          >
            <div className="flex justify-start mb-8">
              <span className="inline-block px-5 py-2 border border-white/10 bg-white/5 rounded-full text-white/90 uppercase tracking-[0.25em] font-sans text-[11px] font-medium shadow-sm backdrop-blur-sm">
                Reach Out
              </span>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl text-baba-light mb-6">
              Baba Tours <span className="italic font-light">&amp; Travels</span>
            </h2>

            <p className="font-sans text-baba-light/70 text-lg leading-relaxed mb-12 max-w-lg">
              Whether you&apos;re looking to book a luxury fleet for an upcoming
              event or curate a bespoke itinerary across Rajasthan, our
              concierge team is at your service.
            </p>

            {/* Contact Details */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8 mb-12"
            >
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-baba-light" />
                  </div>
                  <div>
                    <h4 className="font-sans uppercase tracking-widest text-xs text-baba-light/50 mb-1">
                      {item.label}
                    </h4>
                    {item.isAddress ? (
                      <address className="not-italic font-heading text-xl text-baba-light leading-relaxed">
                        Road No. 2, Manva Kheda,<br />
                        Hiran Magri, Udaipur,<br />
                        Rajasthan 313002
                      </address>
                    ) : (
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="font-heading text-2xl text-baba-light hover:text-white transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.a
                variants={staggerItem}
                href="tel:09828078705"
                className="w-full"
              >
                <Button className="w-full flex items-center justify-center gap-2 rounded-full bg-baba-light text-[#0b0e13] hover:bg-white py-6 uppercase tracking-wider text-sm font-sans transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-white/5">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </motion.a>

              <motion.a
                variants={staggerItem}
                href="https://wa.me/919828078705"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 rounded-full border-white/10 text-baba-light hover:bg-white/5 hover:border-white/20 py-6 uppercase tracking-wider text-sm font-sans transition-all duration-300 hover:scale-[1.03]"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </Button>
              </motion.a>

              <motion.a
                variants={staggerItem}
                href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAjIHCAMQIRiPAtIBCDM4MjFqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQUZq2Rd72c5MYirlno6wNBN&daddr=Road+No.+2,+Manva+kheda,+Hiran+Magri,+Udaipur,+Rajasthan+313002"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 rounded-full border-white/10 text-baba-light hover:bg-white/5 hover:border-white/20 py-6 uppercase tracking-wider text-sm font-sans transition-all duration-300 hover:scale-[1.03]"
                >
                  <MapPin className="w-4 h-4" /> Google Maps
                </Button>
              </motion.a>

              <motion.a
                variants={staggerItem}
                href="https://www.instagram.com/babatourstravelsudaipur/"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 rounded-full border-white/10 text-baba-light hover:bg-white/5 hover:border-white/20 py-6 uppercase tracking-wider text-sm font-sans transition-all duration-300 hover:scale-[1.03]"
                >
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Google Maps */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full h-[500px] lg:h-[700px] rounded-none overflow-hidden border border-white/10 relative"
          >
            {/* Map iframe with CSS dark mode hack */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.351221430932!2d73.71427507601955!3d24.542475458043697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967efa464aba34d%3A0xc66512d6a546da42!2sBaba%20Tours%20And%20Travels!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) grayscale(20%) contrast(110%)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Inset ring overlay for premium map framing */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
