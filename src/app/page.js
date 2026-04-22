"use client";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Why />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
