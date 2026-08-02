"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={ref} className="relative py-40 lg:py-56 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="sp relative z-10">
        {/* Index */}
        <motion.div
          className="flex items-center gap-3 mb-20"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--blue-bright)" }}>§01</span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border-bright)" }} />
          <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--fg-dim)" }}>Who We Are</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-semibold text-white leading-tight mb-16 max-w-5xl"
          style={{ fontFamily: "var(--font-g)", fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", letterSpacing: "-0.045em" }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 }}
        >
          Talent is everywhere.
          <br />
          <span style={{ color: "var(--fg-muted)" }}>Opportunity isn't.</span>
        </motion.h2>

        {/* Two column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24">
          {/* Left — Quick Facts */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            <span className="mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--blue-bright)" }}>
              Quick Facts
            </span>

            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Founded", v: "2024" },
                { k: "Location", v: "Andhra Pradesh, India" },
                { k: "Focus", v: "Software Engineering" },
                { k: "Approach", v: "Engineering First" },
              ].map(({ k, v }) => (
                <div key={k} className="flex flex-col gap-1.5 p-4 border" style={{ borderColor: "var(--border)" }}>
                  <span className="mono text-[9px] tracking-[0.15em] uppercase" style={{ color: "var(--fg-dim)" }}>{k}</span>
                  <span className="text-sm font-medium text-white/90" style={{ fontFamily: "var(--font-g)" }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Responsibility Statement Callout */}
            <div
              className="p-5 border-l-2 mt-2"
              style={{ borderLeftColor: "var(--blue-bright)", backgroundColor: "var(--blue-faint)" }}
            >
              <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--fg)", fontFamily: "var(--font-g)" }}>
                Our clients never hire individuals. They trust DEVYUG. We take responsibility for every line of code we deliver.
              </p>
            </div>
          </motion.div>

          {/* Right — Prose */}
          <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.26 }} style={{ y }}>
            <p className="text-base lg:text-lg leading-relaxed font-medium text-white/90" style={{ fontFamily: "var(--font-g)" }}>
              DEVYUG was founded on a simple belief: Some of the world's most capable engineers never receive the opportunities they deserve.
            </p>
            <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}>
              Not because they lack ability. But because they lack access. We exist to change that.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}>
              We identify talented builders, invest in their growth, and organize them into engineering teams capable of delivering software that meets the highest standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
