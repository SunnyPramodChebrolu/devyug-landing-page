import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Engineering from "@/components/Engineering";
import Innovation from "@/components/Innovation";
import Technology from "@/components/Technology";
import Values from "@/components/Values";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-brand-emerald selection:text-black">
        {/* Cinematic Preloader */}
        <LoadingScreen />

        {/* Navigation */}
        <Navbar />

        {/* Main content elements */}
        <main className="flex-grow">
          {/* Hero section containing the morphing WebGL centerpiece */}
          <Hero />

          {/* Company Context */}
          <About />

          {/* Engineering diagrams */}
          <Engineering />

          {/* Innovations catalog & flagship index */}
          <Innovation />

          {/* 3D nodes mapping */}
          <Technology />

          {/* Values ledger */}
          <Values />


        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
