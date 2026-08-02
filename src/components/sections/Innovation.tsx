"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Innovation() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="innovation"
      ref={ref}
      className="relative py-36 lg:py-52 overflow-hidden"
      style={{ backgroundColor: "#040812" }}
    >
      {/* Background geometric grid design */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            linear-gradient(to right, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 64px 64px, 64px 64px",
        }}
      />

      {/* Decorative large background text outline */}
      <div
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase leading-none block"
          style={{
            fontFamily: "var(--font-g)",
            fontSize: "clamp(10rem, 20vw, 22rem)",
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(59, 130, 246, 0.07)",
          }}
        >
          ENGINEERED
        </span>
      </div>

      {/* Content Container */}
      <div className="sp relative z-10">
        {/* Index label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--blue-bright)" }}>§03</span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border-bright)" }} />
          <span className="mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--fg-dim)" }}>Innovation</span>
        </motion.div>

        {/* Main Grid: Left headline, Right structured statement */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column: Bold Statement */}
          <div>
            <motion.h2
              className="font-semibold text-white leading-tight mb-8 max-w-2xl"
              style={{
                fontFamily: "var(--font-g)",
                fontSize: "clamp(2.4rem, 4.8vw, 4.8rem)",
                letterSpacing: "-0.045em",
                lineHeight: 1.05,
              }}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
            >
              Innovation begins with people willing to challenge assumptions.
            </motion.h2>

            <motion.p
              className="text-base lg:text-lg leading-relaxed text-white/80 max-w-xl mb-8"
              style={{ fontFamily: "var(--font-i)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.22 }}
            >
              At DEVYUG we continuously experiment, iterate, and improve because great software is never accidental.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 px-5 py-3 border"
              style={{
                borderColor: "var(--border-bright)",
                backgroundColor: "rgba(37, 99, 235, 0.08)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--blue-bright)" }} />
              <span
                className="mono text-[11px] tracking-[0.2em] uppercase font-semibold text-white"
                style={{ fontFamily: "var(--font-g)" }}
              >
                It is engineered.
              </span>
            </motion.div>
          </div>

          {/* Right Column: Architectural Design Card Box (Text & Lines, No Blank Spaces) */}
          <motion.div
            className="p-8 lg:p-12 border relative flex flex-col justify-between gap-10"
            style={{
              borderColor: "var(--border-bright)",
              backgroundColor: "rgba(7, 13, 26, 0.75)",
              backdropFilter: "blur(16px)",
            }}
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 }}
          >
            {/* Top Corner Technical Cross */}
            <div className="flex items-center justify-between border-b pb-6" style={{ borderColor: "var(--border)" }}>
              <span className="mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--blue-bright)" }}>
                DEVYUG // INNOVATION METHOD
              </span>
              <span className="mono text-[10px]" style={{ color: "var(--fg-dim)" }}>
                [03.1]
              </span>
            </div>

            {/* Core Design Message */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="mono text-xs text-[var(--blue-bright)] shrink-0">01</span>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "var(--font-g)" }}>
                    Challenge the Status Quo
                  </h4>
                  <p className="text-xs text-muted leading-relaxed" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}>
                    We question default choices to discover simpler, cleaner, and faster architectural paths.
                  </p>
                </div>
              </div>

              <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

              <div className="flex items-start gap-4">
                <span className="mono text-xs text-[var(--blue-bright)] shrink-0">02</span>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "var(--font-g)" }}>
                    Relentless Iteration
                  </h4>
                  <p className="text-xs text-muted leading-relaxed" style={{ color: "var(--fg-muted)", fontFamily: "var(--font-i)" }}>
                    Refining code, APIs, and workflows through continuous feedback until perfection is reached.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
              <span className="mono text-[9px] uppercase tracking-[0.15em]" style={{ color: "var(--fg-dim)" }}>
                Precision · Execution · Impact
              </span>
              <div className="w-2 h-2 border border-[var(--blue-bright)] rotate-45" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
