"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Vision() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.03]);

  return (
    <section
      id="vision"
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "75svh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      {/* Large background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-semibold text-white select-none"
          style={{
            fontFamily: "var(--font-g)",
            fontSize: "clamp(6rem, 18vw, 18rem)",
            letterSpacing: "-0.06em",
            opacity: 0.015,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          DEVYUG
        </span>
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="sp relative z-10 py-32 lg:py-48">
        {/* Index label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--blue-bright)" }}>§06</span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border-bright)" }} />
          <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--fg-dim)" }}>Vision</span>
        </motion.div>

        {/* Tagline Statement */}
        <motion.h2
          className="font-semibold text-white max-w-4xl mb-8"
          style={{
            fontFamily: "var(--font-g)",
            fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            scale,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 }}
        >
          Engineering Tomorrow.
        </motion.h2>

        <motion.p
          className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12 text-white/80"
          style={{ fontFamily: "var(--font-i)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.22 }}
        >
          We believe software can create meaningful impact when exceptional people are trusted with meaningful opportunities. Our mission is simple.
        </motion.p>

        {/* 3 Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { label: "Build", text: "Build remarkable technology." },
            { label: "Create", text: "Create remarkable engineers." },
            { label: "Deliver", text: "Deliver remarkable outcomes." },
          ].map((item, idx) => (
            <div key={item.label} className="flex flex-col gap-2 p-4 border" style={{ borderColor: "var(--border)" }}>
              <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--blue-bright)" }}>
                0{idx + 1} // {item.label}
              </span>
              <span className="text-sm font-medium text-white" style={{ fontFamily: "var(--font-g)" }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
