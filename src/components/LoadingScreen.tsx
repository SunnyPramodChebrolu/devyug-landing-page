"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 600); // smooth exit timeout
          return 100;
        }
        // Fake speed up near the end
        const increment = prev > 80 ? Math.random() * 5 + 1 : Math.random() * 15 + 5;
        return Math.min(100, Math.floor(prev + increment));
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center font-display select-none"
        >
          {/* Subtle geometric grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="space-y-6 w-64 z-10 flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl tracking-widest text-white">
                DEVYUG
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
            </div>

            {/* Progress line */}
            <div className="w-full h-[1px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-brand-emerald via-brand-teal to-brand-blue"
              />
            </div>

            {/* Numeric tracker */}
            <div className="flex justify-between items-center w-full text-[10px] tracking-widest text-white/45 font-mono">
              <span>SYSTEM BOOTSTRAP</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
