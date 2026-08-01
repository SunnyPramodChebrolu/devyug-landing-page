"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, Activity } from "lucide-react";

export default function Values() {
  const list = [
    {
      icon: <Layers className="w-5 h-5 text-brand-emerald" />,
      title: "Quality",
      description: "We focus on clean, reusable code components, thorough testing, and durable architecture patterns.",
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-teal" />,
      title: "Reliability",
      description: "Our platforms achieve maximum uptime through distributed node topologies and real-time database replications.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
      title: "Security",
      description: "We deploy zero-knowledge encryption methods to ensure complete user control over sensitive records.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
      title: "Simplicity",
      description: "We reject over-engineered systems to build lightweight interfaces that respect load speed and ease-of-use.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-emerald" />,
      title: "Innovation",
      description: "Our engineering and design teams actively research modern cloud, WebGL, and predictive model technologies.",
    },
    {
      icon: <Activity className="w-5 h-5 text-brand-teal" />,
      title: "Impact",
      description: "We build tools that address actual societal needs, ensuring our software improves lives across generations.",
    },
  ];

  return (
    <section
      id="values"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mb-20 space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald">
            OUR VALUES
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            The Principles That Guide Us.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            We hold ourselves to a set of non-negotiable architectural and design values.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01]"
            >
              {/* Top border light glow */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-brand-emerald/30 transition-all duration-500" />
              
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-light">{item.description}</p>
              </div>

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
