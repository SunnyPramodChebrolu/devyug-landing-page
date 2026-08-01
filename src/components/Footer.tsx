"use client";

import React from "react";
import { Linkedin, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-16 px-6 z-10 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight text-white">
              DEVYUG
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
          </div>
          <p className="text-xs text-white/40 font-light max-w-sm leading-relaxed">
            Devyug is a software technology startup focused on building high-quality digital experiences through engineering, design, AI, and scalable cloud technologies.
          </p>
        </div>

        {/* Links Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-widest text-white/30">Company</h4>
          <ul className="space-y-2 text-xs text-white/50 font-light">
            <li>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
            </li>
            <li>
              <a href="#innovation" className="hover:text-white transition-colors">Innovation</a>
            </li>
            <li>
              <a href="#technology" className="hover:text-white transition-colors">Technology</a>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-widest text-white/30">Connect</h4>
          <div className="flex items-center gap-4 text-white/50">
            <a
              href="https://www.linkedin.com/company/dev-yug"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/wearedevyug"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://devyug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 font-light">
        <p>© 2026 Devyug. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
