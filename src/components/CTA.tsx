"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full py-32 overflow-hidden px-6 bg-[#050505] flex justify-center z-10 border-t border-white/5"
    >
      {/* Background glowing mesh */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-10 relative z-10">
        <div className="space-y-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-emerald">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
            Let's Build the<br />
            Future Together.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg max-w-xl mx-auto">
            Get in touch with our engineering or product teams.
          </p>
        </div>

        {/* Minimalist Contact Card Directory */}
        <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
          {/* Email card */}
          <a
            href="mailto:hello@devyug.com"
            className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-brand-emerald/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-brand-emerald transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-white/35 font-mono block">EMAIL</span>
                <span className="text-xs font-bold text-white">hello@devyug.com</span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors" />
          </a>

          {/* Location card */}
          <div className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-brand-teal/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-brand-teal transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-white/35 font-mono block">HQ LOCATION</span>
                <span className="text-xs font-bold text-white">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
