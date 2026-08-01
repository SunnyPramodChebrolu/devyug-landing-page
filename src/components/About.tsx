"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start justify-between gap-16">
        
        {/* Left column: Section subtitle tag */}
        <div className="w-full md:w-2/5 sticky top-32">
          <motion.div style={{ y: y1 }} className="space-y-4">
            <span className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Designing<br />
              Modern Digital<br />
              Experiences.
            </h2>
          </motion.div>
        </div>

        {/* Right column: Main body description */}
        <motion.div style={{ opacity }} className="w-full md:w-3/5 space-y-8 text-white/70">
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed font-sans">
            Devyug is a software technology company focused on designing and building modern digital experiences through software engineering, premium design, artificial intelligence, and scalable cloud technologies.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-light">
            We are built by designers, engineers, and product builders who value quality over volume. By combining cryptographic security protocols and latency-optimized APIs, we create durable systems with long-term real-world impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
