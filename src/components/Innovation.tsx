"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Heart, Microscope } from "lucide-react";

export default function Innovation() {
  return (
    <section
      id="innovation"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mb-20 space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-teal">
            RESEARCH & INNOVATION
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Software Craftsmanship.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            We focus on long-term design thinking, creating architectures built to adapt and outlast temporary tech trends.
          </p>
        </div>

        {/* Layout: Apple-style product visual catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          
          {/* Flagship Card: Rakshan (Spans 2 columns in parent grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 glass-card p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative overflow-hidden group min-h-[480px]"
          >
            {/* Top glow accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-emerald/30 to-transparent" />

            <div className="lg:col-span-3 space-y-6 relative z-10 flex flex-col justify-center h-full">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-emerald bg-brand-emerald/5 border border-brand-emerald/10 px-3 py-1 rounded-full">
                  <Heart className="w-3 h-3" />
                  Flagship Product
                </span>
                <h3 className="text-3xl font-display font-bold text-white mt-4">
                  Rakshan
                </h3>
                <p className="text-xs font-semibold text-brand-teal/80">
                  Keeping Every Family's Health Story Connected.
                </p>
              </div>

              <p className="text-xs text-white/50 leading-relaxed font-light">
                Our first flagship product is a healthcare continuity platform that helps clinics digitize records while enabling families to securely sync lifelong medical history.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-[10px] uppercase tracking-wider hover:bg-white/95 transition-all duration-300"
                >
                  Explore Rakshan
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Timelines Mockup */}
            <div className="lg:col-span-2 bg-[#070709] border border-white/5 p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative z-10 font-mono text-[9px] w-full min-h-[280px]">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60 uppercase tracking-widest font-bold">RAKSHAN.CORE</span>
                <span className="text-brand-emerald">● ACTIVE</span>
              </div>
              <div className="space-y-4 my-6 text-white/55">
                <div className="flex gap-3">
                  <span className="text-brand-emerald">2022</span>
                  <div>
                    <h5 className="text-[10px] text-white font-semibold">Decentralized Vaults</h5>
                    <p className="text-[9px] text-white/30">AES-256 client key generation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand-teal">2024</span>
                  <div>
                    <h5 className="text-[10px] text-white font-semibold">Clinical Ingest APIs</h5>
                    <p className="text-[9px] text-white/30">Direct provider uploads configured</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand-blue">2026</span>
                  <div>
                    <h5 className="text-[10px] text-white font-semibold">Multi-User Ledger</h5>
                    <p className="text-[9px] text-white/30">Global family permission sync</p>
                  </div>
                </div>
              </div>
              <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 text-[9px] text-center text-white/40">
                ZERO-KNOWLEDGE DEPLOYED
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          {/* Research / Pipelines Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group min-h-[480px]"
          >
            {/* Top glow accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/5 border border-brand-blue/10 px-3 py-1 rounded-full">
                <Microscope className="w-3 h-3" />
                Pipeline
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-4">
                Research Labs
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                We are actively developing experimental client frameworks across local AI modeling and high-throughput databases.
              </p>
            </div>

            {/* Visual */}
            <div className="my-8 relative flex items-center justify-center h-28">
              <div className="absolute w-20 h-20 rounded-full border border-white/5 bg-gradient-to-tr from-brand-blue/10 to-brand-teal/5 flex items-center justify-center animate-spin-slow">
                <Compass className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="absolute w-28 h-28 rounded-full border border-white/5 border-dashed" />
            </div>

            <div className="border-t border-white/5 pt-6 text-xs text-white/40 italic">
              More innovations coming soon.
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
