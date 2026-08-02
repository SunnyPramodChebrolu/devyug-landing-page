"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VALUES = [
  {
    num: "I",
    word: "Quality First",
    body: "Every decision is measured against one question: Does it make the product better?",
    detail: "Zero compromise on standards.",
  },
  {
    num: "II",
    word: "Opportunity Through Engineering",
    body: "Great engineers exist everywhere. Our responsibility is creating the environment where they can perform at their highest level.",
    detail: "Talent discovered, nurtured, empowered.",
  },
  {
    num: "III",
    word: "Ownership",
    body: "Clients trust DEVYUG—not individual developers. We own every decision, every deployment, and every outcome.",
    detail: "Complete accountability from start to finish.",
  },
  {
    num: "IV",
    word: "Continuous Evolution",
    body: "Technology evolves constantly. So do we.",
    detail: "Always learning, always refining.",
  },
];

export default function Values() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="values" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[60vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="sp relative z-10">
        {/* Index label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--blue-bright)" }}>§05</span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border-bright)" }} />
          <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--fg-dim)" }}>Our Principles</span>
        </motion.div>

        {/* Top border */}
        <div className="border-t mb-0" style={{ borderTopColor: "var(--border-bright)" }} />

        {/* Rows */}
        {VALUES.map((v, i) => (
          <ValueRow key={v.num} v={v} i={i} />
        ))}
      </div>
    </section>
  );
}

function ValueRow({ v, i }: { v: typeof VALUES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group grid grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_22rem] gap-8 lg:gap-16 py-12 border-b relative overflow-hidden"
      style={{ borderBottomColor: "var(--border)" }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 }}
    >
      {/* Roman numeral */}
      <div className="pt-2">
        <span className="mono text-[10px] tracking-[0.1em]" style={{ color: "rgba(59,130,246,0.5)" }}>
          {v.num}
        </span>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-3">
        <h3
          className="font-semibold text-white transition-colors duration-300"
          style={{
            fontFamily: "var(--font-g)",
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          {v.word}.
        </h3>
        <p
          className="text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}
        >
          {v.body}
        </p>
      </div>

      {/* Right detail — desktop */}
      <div className="hidden lg:flex flex-col justify-end pb-1">
        <p
          className="text-xs leading-relaxed italic"
          style={{ color: "var(--fg-dim)", fontFamily: "var(--font-i)" }}
        >
          {v.detail}
        </p>
      </div>

      {/* Hover blue reveal */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ backgroundColor: "var(--blue-bright)", opacity: 0.5 }}
      />
    </motion.div>
  );
}
