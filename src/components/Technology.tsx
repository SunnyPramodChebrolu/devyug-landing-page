"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cloud, Key, Zap, CheckCircle, ArrowUpRight, Cpu, Network, Database, Shield } from "lucide-react";

export default function Technology() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "ai",
      icon: <Brain className="w-5 h-5 text-brand-emerald" />,
      title: "Predictive AI Models",
      subtitle: "Automated Clinical Schema Intelligence",
      description: "Custom neural pipeline models trained to standardize disparate healthcare provider records into unified, structured FHIR-compliant schemas.",
      stats: [
        { label: "Accuracy Rate", value: "99.4%" },
        { label: "Processing Time", value: "< 250ms" },
        { label: "Format Support", value: "FHIR / HL7 / PDF" },
      ],
      features: [
        "Automated medical record categorization",
        "Multi-lingual clinical terminology extraction",
        "Deterministic data integrity validation",
      ],
    },
    {
      id: "cloud",
      icon: <Cloud className="w-5 h-5 text-brand-teal" />,
      title: "Distributed Cloud Infrastructure",
      subtitle: "Global Multi-Region Fault Tolerance",
      description: "Low-latency API gateways deployed across global edge networks to ensure real-time health data sync without single points of failure.",
      stats: [
        { label: "Global Nodes", value: "285+ Edges" },
        { label: "Failover Speed", value: "< 10ms" },
        { label: "Replication", value: "Multi-Cloud" },
      ],
      features: [
        "Automatic region failover routing",
        "Edge-cached immutable document assets",
        "End-to-end telemetry monitoring",
      ],
    },
    {
      id: "security",
      icon: <Key className="w-5 h-5 text-brand-blue" />,
      title: "Zero-Knowledge Cryptography",
      subtitle: "Decentralized Key Storage & Control",
      description: "Patient and family health records are secured using client-side cryptographic enclaves. No unauthorized entity can read user health history.",
      stats: [
        { label: "Cipher", value: "AES-256-GCM" },
        { label: "Key Derivation", value: "Argon2id" },
        { label: "Access Control", value: "User Sealed" },
      ],
      features: [
        "Client-side key generation & storage",
        "Granular family member access permissions",
        "Auditable cryptographic access logs",
      ],
    },
    {
      id: "latency",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Ultra-Low Latency Engine",
      subtitle: "Real-time Synchronized Pipelines",
      description: "Sub-second record retrieval engineered through binary serialization protocols and optimized edge caching tiers.",
      stats: [
        { label: "TTFB", value: "< 45ms" },
        { label: "Protocol", value: "gRPC / HTTP/3" },
        { label: "Compression", value: "Brotli Tier 11" },
      ],
      features: [
        "Binary payload serialization",
        "Pre-warmed edge memory caches",
        "Streaming record payload delivery",
      ],
    },
  ];

  return (
    <section
      id="technology"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Architected for Scale & Trust.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            Our engineering stack combines advancements in machine learning, zero-knowledge security, and multi-region cloud execution.
          </p>
        </div>

        {/* Main Interactive Matrix Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Side: Navigation Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between relative overflow-hidden ${
                    isActive
                      ? "bg-white/[0.07] border-white/20 shadow-xl"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl border ${
                      isActive ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"
                    }`}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                      <p className="text-[10px] font-mono text-white/40">{pillar.id.toUpperCase()}_NODE</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-colors ${
                    isActive ? "bg-brand-emerald animate-pulse" : "bg-white/10"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Detailed Tech Card Visual (8 cols) */}
          <div className="lg:col-span-8 glass-card rounded-2xl border border-white/10 bg-[#08080a] p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[440px]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 flex-1 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2.5 py-1 rounded-full">
                      NODE OPERATIONAL
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      STACK_VER://2026.08
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white pt-2">
                    {pillars[activeTab].title}
                  </h3>
                  <p className="text-xs font-mono text-brand-teal">
                    {pillars[activeTab].subtitle}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed font-light pt-2">
                    {pillars[activeTab].description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2.5 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                    CAPABILITY SPECIFICATIONS
                  </span>
                  {pillars[activeTab].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {pillars[activeTab].stats.map((stat, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/5 p-3.5 rounded-xl text-center">
                      <span className="text-[9px] font-mono text-white/40 uppercase block mb-1">
                        {stat.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
