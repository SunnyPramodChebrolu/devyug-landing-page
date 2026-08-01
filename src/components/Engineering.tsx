"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, EyeOff, LayoutGrid, Terminal } from "lucide-react";

export default function Engineering() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const modules = [
    {
      icon: <Terminal className="w-4 h-4 text-brand-emerald" />,
      title: "Edge Runtime",
      description: "Compiling code globally at edge points, lowering latency and delivering static pages in under 80ms.",
    },
    {
      icon: <EyeOff className="w-4 h-4 text-brand-teal" />,
      title: "Data Sovereignty",
      description: "Zero-knowledge encryption layers ensure client data is fully obfuscated at the device level.",
    },
    {
      icon: <LayoutGrid className="w-4 h-4 text-brand-blue" />,
      title: "Component Sandbox",
      description: "Clean, modular code design with atomic rendering schemas and dynamic bundle split controls.",
    },
  ];

  return (
    <section
      id="engineering"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mb-20 space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Crafting Durable Code Systems.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            We focus on absolute architectural durability, utilizing strict compile checks and distributed cloud platforms.
          </p>
        </div>

        {/* Interactive Diagram Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Side: System Flow Diagram */}
          <div className="glass-card p-10 rounded-2xl relative w-full h-[420px] flex items-center justify-center overflow-hidden border border-white/5 bg-[#070709]">
            {/* Mesh grid backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

            {/* Nodes structure */}
            <div className="relative w-full h-full flex flex-col justify-between py-8">
              
              {/* Layer 1: Ingestion */}
              <div className="flex justify-around items-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[8px] font-mono text-white/40">API.EDGE</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[8px] font-mono text-white/40">AUTH.GATE</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                </div>
              </div>

              {/* Central Processing Node */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 rounded-full border border-white/15 bg-gradient-to-tr from-brand-emerald/10 to-brand-blue/10 flex items-center justify-center relative shadow-[0_0_40px_rgba(20,184,166,0.1)]"
                >
                  <Cpu className="w-5 h-5 text-white absolute" />
                </motion.div>
              </div>

              {/* Layer 3: Distribution / DBs */}
              <div className="flex justify-around items-center">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/5 font-mono text-[8px] text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                  E2E_TUNNEL
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/5 font-mono text-[8px] text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                  DB_REPLICA
                </div>
              </div>
            </div>

            {/* Glowing lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 125,90 L 192,210" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 260,90 L 192,210" stroke="#14b8a6" strokeWidth="1.5" />
              <path d="M 192,210 L 125,320" stroke="#10b981" strokeWidth="1.5" />
              <path d="M 192,210 L 260,320" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Right Side: Detailed Descriptions */}
          <div className="space-y-6">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? "bg-white/5 border-brand-emerald/30 translate-x-1"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg border transition-colors ${
                    activeStep === idx ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"
                  }`}>
                    {mod.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{mod.title}</h3>
                </div>
                <p className="text-xs text-white/50 pl-11 leading-relaxed font-light">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
