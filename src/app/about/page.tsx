import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0b0e13]">
        <div className="pt-24 md:pt-32" /> {/* Spacing for the fixed navbar */}
        <About />
        <Statistics />
      </main>
      <Footer />
    </>
  );
}
