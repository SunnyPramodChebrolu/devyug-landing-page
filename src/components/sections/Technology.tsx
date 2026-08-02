"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TECH_PILLARS = [
  {
    pillar: "Performance",
    detail: "Sub-second response times, optimized bundles, and lightweight runtime overhead.",
  },
  {
    pillar: "Scalability",
    detail: "Architectures designed to grow seamlessly from initial users to high-traffic demands.",
  },
  {
    pillar: "Security",
    detail: "Defensive coding practices, strict authorization models, and secure data handling.",
  },
  {
    pillar: "Maintainability",
    detail: "Clean code structure, thorough documentation, and modular component design.",
  },
];

export default function Technology() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="technology" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div className="sp">
        {/* Index label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--blue-bright)" }}>§04</span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border-bright)" }} />
          <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--fg-dim)" }}>Technology</span>
        </motion.div>

        <motion.h2
          className="font-semibold text-white max-w-3xl mb-6"
          style={{
            fontFamily: "var(--font-g)",
            fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
        >
          Modern engineering requires modern tools.
        </motion.h2>

        <motion.p
          className="text-base lg:text-lg text-muted leading-relaxed max-w-3xl mb-16"
          style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          We build with technologies that prioritize performance, scalability, security, and long-term maintainability. Technology should enable innovation—not limit it.
        </motion.p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_PILLARS.map((item, idx) => (
            <motion.div
              key={item.pillar}
              className="p-8 border flex flex-col justify-between gap-6 transition-colors duration-300 hover:border-[var(--blue-bright)]"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "rgba(7, 13, 26, 0.6)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.08 }}
            >
              <div>
                <span
                  className="mono text-[10px] tracking-[0.2em] uppercase block mb-3"
                  style={{ color: "var(--blue-bright)" }}
                >
                  0{idx + 1} // {item.pillar}
                </span>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}
                >
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
