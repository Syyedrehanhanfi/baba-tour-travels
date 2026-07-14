"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0e13] pt-24 pb-12 border-t border-[#22252a]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Pre-Footer CTA */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="font-heading text-5xl md:text-6xl text-baba-light mb-6">
            Ready to Start <em className="italic font-light">Your Journey?</em>
          </h2>
          <p className="text-baba-light/60 font-sans mb-10 max-w-2xl text-lg leading-relaxed">
            Experience the ultimate luxury travel in Rajasthan. Book your custom
            tour package or premium taxi service today.
          </p>
          <a href="tel:09828078705" className="inline-block">
            <Button className="rounded-full bg-baba-light text-[#0b0e13] hover:bg-white hover:scale-105 transition-all duration-300 px-10 py-6 uppercase tracking-widest text-sm font-sans">
              Get an Instant Quote
            </Button>
          </a>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col xl:col-span-1">
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-wider text-baba-light mb-6"
            >
              BABA TOURS
            </Link>
            <p className="text-baba-light/60 font-sans text-sm leading-relaxed mb-6">
              The premier travel agency in Udaipur, providing award-winning luxury fleet and meticulously crafted tour packages for over 22 years.
            </p>
            <Link
              href="https://www.instagram.com/babatourstravelsudaipur/"
              target="_blank"
              rel="noreferrer"
              className="text-baba-light/60 hover:text-baba-light transition-colors duration-300 inline-block w-fit"
            >
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs text-baba-light/50 mb-8">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3 font-sans text-sm text-baba-light/60">
              <Link href="/" className="hover:text-baba-light transition-colors duration-300 py-1">
                Home
              </Link>
              <Link href="#about" className="hover:text-baba-light transition-colors duration-300 py-1">
                About Us
              </Link>
              <Link href="#fleet" className="hover:text-baba-light transition-colors duration-300 py-1">
                Luxury Fleet
              </Link>
              <Link href="#packages" className="hover:text-baba-light transition-colors duration-300 py-1">
                Tour Packages
              </Link>
              <Link href="#destinations" className="hover:text-baba-light transition-colors duration-300 py-1">
                Destinations
              </Link>
              <Link href="#testimonials" className="hover:text-baba-light transition-colors duration-300 py-1">
                Testimonials
              </Link>
              <Link href="#contact" className="hover:text-baba-light transition-colors duration-300 py-1">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs text-baba-light/50 mb-8">
              Our Services
            </h4>
            <nav className="flex flex-col space-y-3 font-sans text-sm text-baba-light/60">
              <span className="cursor-default py-1">Couples Trips</span>
              <span className="cursor-default py-1">Family &amp; Group Tours</span>
              <span className="cursor-default py-1">Corporate Travel</span>
              <span className="cursor-default py-1">Luxury Taxi</span>
              <span className="cursor-default py-1">Airport Transfers</span>
              <span className="cursor-default py-1">Hotel &amp; Flight Booking</span>
              <span className="cursor-default py-1">Travel Insurance</span>
            </nav>
          </div>

          {/* Tour Packages */}
          <div className="flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs text-baba-light/50 mb-8">
              Tour Packages
            </h4>
            <nav className="flex flex-col space-y-3 font-sans text-sm text-baba-light/60">
              <span className="cursor-default py-1">Royal Rajasthan Explorer</span>
              <span className="cursor-default py-1">Udaipur Heritage Walk</span>
              <span className="cursor-default py-1">Mount Abu Retreat</span>
              <span className="cursor-default py-1">Golden Triangle Tour</span>
              <span className="cursor-default py-1">Jaisalmer Desert Safari</span>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs text-baba-light/50 mb-8">
              Contact
            </h4>
            <address className="not-italic flex flex-col space-y-3 font-sans text-sm text-baba-light/60">
              <p className="py-1">
                Road No. 2, Manva Kheda,
                <br />
                Hiran Magri, Udaipur,
                <br />
                Rajasthan 313002
              </p>
              <a
                href="tel:09828078705"
                className="hover:text-baba-light transition-colors duration-300 block py-1"
              >
                +91 98280 78705
              </a>
              <a
                href="https://wa.me/919828078705"
                target="_blank"
                rel="noreferrer"
                className="hover:text-baba-light transition-colors duration-300 block py-1"
              >
                WhatsApp Chat
              </a>
            </address>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-12 border-t border-[#22252a] flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-baba-light/30">
          <p>
            &copy; {new Date().getFullYear()} Baba Tours &amp; Travels. All
            Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-baba-light/30 hover:text-baba-light transition-colors duration-300 py-2 px-4 rounded-full border border-[#22252a] hover:border-baba-light/30 hover:bg-[#101318]"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
