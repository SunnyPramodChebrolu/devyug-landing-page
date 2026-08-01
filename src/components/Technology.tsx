"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Cloud, Cpu, Database, Key, ShieldCheck, Zap } from "lucide-react";

export default function Technology() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules = [
    {
      icon: <Brain className="w-4 h-4 text-brand-emerald" />,
      title: "Artificial Intelligence",
      description: "Automated schema classification models.",
    },
    {
      icon: <Cloud className="w-4 h-4 text-brand-teal" />,
      title: "Cloud Architecture",
      description: "Distributed multi-region server nodes.",
    },
    {
      icon: <Key className="w-4 h-4 text-brand-blue" />,
      title: "Security Ledger",
      description: "Zero-knowledge decentralized key storage.",
    },
    {
      icon: <Zap className="w-4 h-4 text-white" />,
      title: "Latency Optimization",
      description: "Cached edge compilation endpoints.",
    },
  ];

  return (
    <section
      id="technology"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mb-20 space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-blue">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Our Architecture Nodes.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            We write durable software frameworks utilizing modern advancements in AI, zero-knowledge privacy, and distributed scaling.
          </p>
        </div>

        {/* Layout split: interactive diagram left, tabs right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Side: Dynamic SVG Interactive Diagram */}
          <div className="glass-card p-8 rounded-2xl relative w-full h-[400px] flex items-center justify-center overflow-hidden border border-white/5 bg-[#070709]">
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-70" />

            {/* Network Diagram Core */}
            <div className="relative w-full h-full flex flex-col justify-between py-6">
              
              {/* Row 1: Left Node and Right Node */}
              <div className="flex justify-between px-12">
                {/* AI Node */}
                <motion.div
                  animate={{ y: activeTab === 0 ? [0, -4, 0] : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-colors ${
                    activeTab === 0 ? "bg-white/5 border-brand-emerald/40" : "bg-transparent border-white/5"
                  }`}
                >
                  <Brain className="w-5 h-5 text-brand-emerald" />
                  <span className="text-[9px] font-bold text-white/50 tracking-wider">AI AGENT</span>
                </motion.div>

                {/* Cloud Node */}
                <motion.div
                  animate={{ y: activeTab === 1 ? [0, -4, 0] : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-colors ${
                    activeTab === 1 ? "bg-white/5 border-brand-teal/40" : "bg-transparent border-white/5"
                  }`}
                >
                  <Cloud className="w-5 h-5 text-brand-teal" />
                  <span className="text-[9px] font-bold text-white/50 tracking-wider">CLOUD NODE</span>
                </motion.div>
              </div>

              {/* Central Hub representing Devyug Core */}
              <div className="flex justify-center my-4">
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full border border-white/10 bg-gradient-to-tr from-brand-emerald/10 via-brand-teal/5 to-brand-blue/10 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(16,185,129,0.06)]"
                >
                  <Cpu className="w-6 h-6 text-white mb-0.5 animate-pulse" />
                  <span className="text-[8px] font-bold text-white/80 uppercase tracking-widest">DEVYUG CORE</span>
                </motion.div>
              </div>

              {/* Row 3: Security Node and Performance Node */}
              <div className="flex justify-between px-12">
                {/* Security Node */}
                <motion.div
                  animate={{ y: activeTab === 2 ? [0, -4, 0] : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-colors ${
                    activeTab === 2 ? "bg-white/5 border-brand-blue/40" : "bg-transparent border-white/5"
                  }`}
                >
                  <Key className="w-5 h-5 text-brand-blue" />
                  <span className="text-[9px] font-bold text-white/50 tracking-wider">CRYPT ENGINE</span>
                </motion.div>

                {/* Performance Node */}
                <motion.div
                  animate={{ y: activeTab === 3 ? [0, -4, 0] : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-colors ${
                    activeTab === 3 ? "bg-white/5 border-white/30" : "bg-transparent border-white/5"
                  }`}
                >
                  <Zap className="w-5 h-5 text-white" />
                  <span className="text-[9px] font-bold text-white/50 tracking-wider">LATENCY LOGS</span>
                </motion.div>
              </div>

            </div>

            {/* Glowing lines connecting nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
              {/* Lines from core to nodes */}
              <path d="M 192,200 L 110,95" stroke={activeTab === 0 ? "#10b981" : "#1f2937"} strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 192,200 L 275,95" stroke={activeTab === 1 ? "#14b8a6" : "#1f2937"} strokeWidth="1.5" />
              <path d="M 192,200 L 110,305" stroke={activeTab === 2 ? "#3b82f6" : "#1f2937"} strokeWidth="1.5" />
              <path d="M 192,200 L 275,305" stroke={activeTab === 3 ? "#ffffff" : "#1f2937"} strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Right Side: Tab list */}
          <div className="space-y-4">
            {modules.map((pillar, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-white/5 border-brand-emerald/30 shadow-lg translate-x-1"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg border transition-colors ${
                    activeTab === idx ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"
                  }`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light pl-11">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
