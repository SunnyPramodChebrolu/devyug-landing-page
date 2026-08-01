"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, Activity, CheckCircle2, ArrowRight, Layers, Lock, Zap } from "lucide-react";

export default function Engineering() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const modules = [
    {
      id: "edge",
      icon: <Terminal className="w-4 h-4 text-brand-emerald" />,
      title: "Global Edge Runtime",
      tagline: "< 80ms Global Response Time",
      description: "Distributed execution layers compile and serve static asset bundles directly from edge locations closest to the client.",
      metrics: [
        { label: "Edge Latency", value: "14ms avg" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Routing", value: "Geo-IP Anycast" },
      ],
      codeSnippet: `// Edge Worker Ingress
export async function onRequest(context) {
  const { request, env } = context;
  const clientRegion = request.headers.get("cf-ipcountry");
  return await env.EDGE_CACHE.match(request, {
    minTtl: 31536000
  });
}`
    },
    {
      id: "sovereignty",
      icon: <Shield className="w-4 h-4 text-brand-teal" />,
      title: "Zero-Knowledge Data Sovereignty",
      tagline: "AES-256 Client-Side Enclave",
      description: "Cryptographic encryption keys stay exclusively on patient and family devices. Cloud nodes store zero unencrypted data.",
      metrics: [
        { label: "Encryption", value: "AES-256-GCM" },
        { label: "Key Exchange", value: "ECDH P-384" },
        { label: "Zero Knowledge", value: "Verified" },
      ],
      codeSnippet: `// Cryptographic Enclave Vault
const enclave = await crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt", "decrypt"]
);
const ciphertext = await crypto.subtle.encrypt(
  { name: "AES-GCM", iv },
  enclave,
  payload
);`
    },
    {
      id: "sandbox",
      icon: <Layers className="w-4 h-4 text-brand-blue" />,
      title: "Modular Atomic Sandbox",
      tagline: "Strict Type Safety & Isolated Execution",
      description: "Atomic component architecture backed by strict compile checks and dynamic bundle splitting for maximum reliability.",
      metrics: [
        { label: "Type Coverage", value: "100% Strict" },
        { label: "Bundle Size", value: "Optimal JS" },
        { label: "Isolation", value: "Containerized" },
      ],
      codeSnippet: `// Immutable Pipeline Contract
export interface PipelineSchema<T> {
  readonly version: "2026.1";
  readonly payload: Readonly<T>;
  verifyIntegrity(): Promise<boolean>;
}`
    },
  ];

  return (
    <section
      id="engineering"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald bg-brand-emerald/10 px-3 py-1 rounded-full border border-brand-emerald/20">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Crafting Durable Code Systems.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            We build long-term software architecture backbones using strict type systems, distributed edge runtimes, and zero-knowledge encryption.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Column: Interactive Terminal & Live System Mockup (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl border border-white/10 bg-[#08080a] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[460px]">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-white/50 ml-2">
                  devyug-engine://{modules[activeStep].id}.spec.ts
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
                  SYSTEM ONLINE
                </span>
              </div>
            </div>

            {/* Terminal Body: Code & Metrics */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-mono font-semibold text-brand-emerald">
                      // {modules[activeStep].title}
                    </h4>
                    <span className="text-[10px] font-mono text-white/40">
                      {modules[activeStep].tagline}
                    </span>
                  </div>

                  {/* Code Editor Frame */}
                  <div className="bg-[#030304] border border-white/10 rounded-xl p-4 font-mono text-xs text-white/80 overflow-x-auto leading-relaxed">
                    <pre className="text-emerald-400/90 font-mono text-[11px]">
                      <code>{modules[activeStep].codeSnippet}</code>
                    </pre>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Live Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                {modules[activeStep].metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/[0.03] border border-white/5 p-3 rounded-lg text-center">
                    <span className="text-[9px] font-mono text-white/40 uppercase block mb-1">
                      {metric.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {modules.map((mod, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-center relative overflow-hidden ${
                    isActive
                      ? "bg-white/[0.06] border-brand-emerald/40 shadow-xl shadow-brand-emerald/5"
                      : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-emerald to-brand-teal" />
                  )}
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-xl border transition-colors ${
                      isActive ? "bg-brand-emerald/10 border-brand-emerald/30" : "bg-white/5 border-white/10"
                    }`}>
                      {mod.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{mod.title}</h3>
                      <span className="text-[10px] font-mono text-brand-emerald/80">{mod.tagline}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-white/60 leading-relaxed font-light mt-1">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
