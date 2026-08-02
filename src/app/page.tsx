"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import LoadingScreen   from "@/components/LoadingScreen";
import SmoothScroll    from "@/components/SmoothScroll";
import Navbar          from "@/components/sections/Navbar";
import Hero            from "@/components/sections/Hero";
import About           from "@/components/sections/About";
import Engineering     from "@/components/sections/Engineering";
import Innovation      from "@/components/sections/Innovation";
import Technology      from "@/components/sections/Technology";
import Values          from "@/components/sections/Values";
import Vision          from "@/components/sections/Vision";
import Footer          from "@/components/sections/Footer";

const WorldScene = dynamic(() => import("@/components/three/WorldScene"), {
  ssr: false,
  loading: () => null,
});

const SECTION_IDS = ["hero", "about", "engineering", "innovation", "technology", "values", "vision"];

export default function Page() {
  const [loaded,  setLoaded]  = useState(false);
  const [section, setSection] = useState(0);

  // Track which section is in view to drive camera
  useEffect(() => {
    if (!loaded) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = SECTION_IDS.indexOf(e.target.id);
            if (idx !== -1) setSection(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [loaded]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && (
          <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {loaded && (
        <SmoothScroll>
          {/* The continuous 3D world — fixed backdrop behind everything */}
          <div className="fixed inset-0 z-0" aria-hidden="true">
            <WorldScene section={section} />
          </div>

          {/* Subtle vignette over 3D world so text remains readable while 3D shines through */}
          <div
            className="fixed inset-0 z-[1] pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 85% 85% at 50% 50%, rgba(4,8,18,0.1) 0%, rgba(4,8,18,0.45) 100%)",
            }}
          />

          {/* Page content above 3D */}
          <div className="relative z-10">
            <Navbar />
            <main id="main-content">
              <Hero />
              <About />
              <Engineering />
              <Innovation />
              <Technology />
              <Values />
              <Vision />
              <Footer />
            </main>
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
