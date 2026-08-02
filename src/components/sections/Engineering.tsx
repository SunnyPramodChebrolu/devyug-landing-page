"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  {
    num: "01",
    title: "Engineering Ownership",
    body: "Every solution carries the DEVYUG standard. Our responsibility doesn't end when code is written. It ends when quality is achieved.",
    tag: "OWNERSHIP",
  },
  {
    num: "02",
    title: "Proof Through Execution",
    body: "We believe software should be judged by reliability, usability, maintainability, and impact. Results speak louder than credentials.",
    tag: "EXECUTION",
  },
  {
    num: "03",
    title: "Pragmatic Technology",
    body: "We choose technology based on solving problems effectively—not trends, hype, or unnecessary complexity.",
    tag: "PRAGMATISM",
  },
  {
    num: "04",
    title: "Continuous Growth",
    body: "Every project makes us better engineers. Learning is part of our development process.",
    tag: "GROWTH",
  },
];

function PrincipleRow({ p, i }: { p: typeof PRINCIPLES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative grid grid-cols-[3rem_1fr] lg:grid-cols-[5rem_1fr_14rem] gap-6 lg:gap-10 py-8 border-b cursor-default"
      style={{ borderBottomColor: "var(--border)" }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 }}
    >
      {/* Hover line */}
      <div
        className="absolute left-0 top-0 h-full w-px transition-all duration-500 group-hover:opacity-100 opacity-0"
        style={{ backgroundColor: "var(--blue-bright)" }}
      />

      {/* Number */}
      <div className="pt-1">
        <span className="mono text-xs" style={{ color: "var(--blue-bright)", opacity: 0.6 }}>
          {p.num}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5">
        <h3
          className="font-semibold text-white transition-colors group-hover:text-blue-400 duration-300"
          style={{
            fontFamily: "var(--font-g)",
            fontSize: "clamp(1.25rem, 2.2vw, 2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {p.title}
        </h3>
        <p
          className="text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}
        >
          {p.body}
        </p>
      </div>

      {/* Tag */}
      <div className="hidden lg:flex items-start justify-end pt-1">
        <span
          className="mono text-[9px] tracking-[0.15em] uppercase px-2 py-1 border"
          style={{ color: "var(--fg-dim)", borderColor: "var(--border)" }}
        >
          {p.tag}
        </span>
      </div>
    </motion.div>
  );
}

export default function Engineering() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="engineering" ref={ref} className="relative py-32 lg:py-48">
      <div className="sp">
        {/* Index label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--blue-bright)" }}>§02</span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border-bright)" }} />
          <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--fg-dim)" }}>How We Build</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-semibold text-white max-w-3xl mb-4"
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
          Engineering is more than writing code.
        </motion.h2>

        <motion.p
          className="text-base lg:text-lg leading-relaxed max-w-2xl mb-16"
          style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          It is a commitment to quality, ownership, and continuous improvement.
        </motion.p>

        {/* Top border */}
        <div className="border-t" style={{ borderTopColor: "var(--border-bright)" }} />

        {/* Rows */}
        {PRINCIPLES.map((p, i) => (
          <PrincipleRow key={p.num} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
