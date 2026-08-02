"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { id: "about",       label: "About" },
  { id: "engineering", label: "Engineering" },
  { id: "innovation",  label: "Innovation" },
  { id: "values",      label: "Values" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.id));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => { if (s) io.observe(s); });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 3.2 }}
        style={{
          borderBottom: scrolled ? "1px solid var(--border-bright)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          backgroundColor: scrolled ? "rgba(4,8,18,0.82)" : "transparent",
          transition: "background-color 0.5s, border-color 0.5s, backdrop-filter 0.5s",
        }}
      >
        <div className="sp flex items-center justify-between h-14">
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Back to top"
          >
            {/* Logo mark — geometric square rotated */}
            <div className="relative w-5 h-5 shrink-0">
              <div
                className="absolute inset-0 border rotate-45 group-hover:rotate-[55deg] transition-transform duration-500"
                style={{ borderColor: "var(--blue-bright)" }}
              />
              <div
                className="absolute inset-[3px] rotate-[22deg] group-hover:rotate-[32deg] transition-transform duration-500 delay-75"
                style={{ backgroundColor: "var(--blue)", opacity: 0.7 }}
              />
            </div>
            <span
              className="text-xs font-semibold tracking-[0.18em] text-white/90 group-hover:text-white transition-colors select-none"
              style={{ fontFamily: "var(--font-g)" }}
            >
              DevYug
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative group"
                aria-current={active === id ? "true" : undefined}
              >
                <span
                  className="text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-i)",
                    color: active === id ? "var(--fg)" : "var(--fg-muted)",
                  }}
                >
                  {label}
                </span>
                {/* Active underline */}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    backgroundColor: "var(--blue-bright)",
                    width: active === id ? "100%" : "0%",
                  }}
                />
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span className="block w-5 h-px" style={{
              backgroundColor: "var(--fg)",
              transform: open ? "rotate(45deg) translate(1.5px, 1.5px)" : "none",
              transition: "transform 0.3s",
            }} />
            <span className="block w-5 h-px" style={{
              backgroundColor: "var(--fg)",
              opacity: open ? 0 : 1,
              transition: "opacity 0.3s",
            }} />
            <span className="block w-5 h-px" style={{
              backgroundColor: "var(--fg)",
              transform: open ? "rotate(-45deg) translate(1.5px, -1.5px)" : "none",
              transition: "transform 0.3s",
            }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      {open && (
        <motion.nav
          className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 md:hidden"
          style={{ backgroundColor: "rgba(4,8,18,0.97)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ id, label }, i) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-3xl font-semibold text-white/70 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-g)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              {label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </>
  );
}
