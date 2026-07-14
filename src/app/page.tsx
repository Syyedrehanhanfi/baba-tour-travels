import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Fleet from "@/components/sections/Fleet";
import Packages from "@/components/sections/Packages";
import Destinations from "@/components/sections/Destinations";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGallery from "@/components/sections/InstagramGallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Fleet />
        <Packages />
        <Destinations />
        <Testimonials />
        <InstagramGallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
