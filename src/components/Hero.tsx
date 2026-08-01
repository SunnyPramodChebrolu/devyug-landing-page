"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

// Dynamically import Abstract3DScene with SSR disabled
const Abstract3DScene = dynamic(() => import("./Abstract3DScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-0">
      <div className="w-8 h-8 rounded-full border border-white/5 border-t-white animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-24 z-10 bg-[#050505]">
      {/* 3D Glass Artifact centerpiece */}
      <Abstract3DScene />

      {/* Modern mesh alignment grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />
      <div className="radial-mesh" />

      {/* Hero Content */}
      <div className="max-w-4xl text-center relative z-10 flex flex-col items-center justify-center">
        {/* Company Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/55 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
          DEVYUG SYSTEM DESIGNS
        </motion.div>

        {/* Large DEVYUG Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-7xl md:text-[9.5rem] tracking-tighter text-white mb-6 select-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 filter drop-shadow-[0_0_50px_rgba(255,255,255,0.02)]"
        >
          DEVYUG
        </motion.h1>

        {/* Minimal Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-light text-white/80 tracking-wide mb-12 max-w-2xl font-display leading-relaxed"
        >
          Building Technology That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald via-brand-teal to-brand-blue font-semibold">
            Improves Lives.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a
            href="#technology"
            className="magnetic-btn group flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/95 transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.1)] w-full sm:w-auto"
          >
            Explore Technology
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full bg-white/5 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center w-full sm:w-auto"
          >
            Learn About Us
          </a>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] tracking-widest text-white/30 uppercase font-semibold">
          Scroll to explore
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-white/30" />
      </motion.div>
    </section>
  );
}
