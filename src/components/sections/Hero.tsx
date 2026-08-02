"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STATUS_TAGS = [
  "Quality Without Compromise",
  "Software Engineering",
  "Engineering Tomorrow",
];

function RotatingTag() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % STATUS_TAGS.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="mono text-[9px]" style={{ color: "rgba(59,130,246,0.5)" }}>
      {STATUS_TAGS[idx]}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Bottom gradient so text reads over 3D */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "60%",
          background:
            "linear-gradient(to top, #040812 0%, rgba(4,8,18,0.75) 55%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 sp pb-16 lg:pb-24">
        {/* Top status bar */}
        <motion.div
          className="flex items-center gap-5 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.1, duration: 0.8 }}
        >
          <span
            className="inline-flex items-center gap-2 mono text-[9px] tracking-[0.15em] uppercase"
            style={{ color: "rgba(59,130,246,0.6)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block shrink-0"
              style={{
                backgroundColor: "#3b82f6",
                boxShadow: "0 0 8px #3b82f6",
                animation: "flicker 3s ease-in-out infinite",
              }}
            />
            DEVYUG · Est. 2024
          </span>
          <RotatingTag />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="font-semibold text-white leading-none"
            style={{
              fontFamily: "var(--font-g)",
              fontSize: "clamp(3.2rem, 9.5vw, 9.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.93,
            }}
            initial={{ y: "106%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 3.0 }}
          >
            Engineering
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            className="font-semibold leading-none"
            style={{
              fontFamily: "var(--font-g)",
              fontSize: "clamp(3.2rem, 9.5vw, 9.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.93,
              color: "transparent",
              WebkitTextStroke: "1px rgba(59,130,246,0.55)",
            }}
            initial={{ y: "106%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 3.12 }}
          >
            Tomorrow.
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <motion.div
            className="flex flex-col gap-2 max-w-sm lg:max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.4 }}
          >
            <p
              className="text-base lg:text-lg font-medium text-white/90 leading-snug"
              style={{ fontFamily: "var(--font-g)" }}
            >
              Building exceptional software by discovering exceptional builders.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}
            >
              Every product we create reflects one promise: quality without compromise.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.7 }}
          >
            <motion.div
              className="w-px h-8"
              style={{ backgroundColor: "var(--blue-bright)", opacity: 0.4, transformOrigin: "top" }}
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <span
              className="mono text-[9px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(59,130,246,0.35)" }}
            >
              Scroll
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
