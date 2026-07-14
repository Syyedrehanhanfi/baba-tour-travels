import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingCTA from "@/components/sections/FloatingCTA";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baba Tours & Travels \u2013 Best Travels | Best Tours In Udaipur | Best Travel Agency in Udaipur",
  description: "Experience premium travel with Baba Tours & Travels. Offering luxury fleet, customized tours, and impeccable service in Udaipur and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-baba-bg text-baba-light min-h-screen flex flex-col`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
