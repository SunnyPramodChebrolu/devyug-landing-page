"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");
  const raf = useRef<number>(0);
  const start = useRef<number>(0);
  const duration = 2000;

  useEffect(() => {
    start.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start.current;
      const p = Math.min(elapsed / duration, 1);
      // Ease: fast then slow
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));

      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setPhase("reveal");
        setTimeout(onComplete, 800);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9997] flex flex-col justify-between"
        style={{ backgroundColor: "#040812" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top corner — status */}
        <div className="flex items-start justify-between p-8 lg:p-12">
          <span
            className="mono text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(59,130,246,0.5)" }}
          >
            DEVYUG_INIT
          </span>
          <span
            className="mono text-[10px]"
            style={{ color: "rgba(59,130,246,0.3)" }}
          >
            {String(progress).padStart(3, "0")}%
          </span>
        </div>

        {/* Centre wordmark */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.h1
              className="text-center font-semibold tracking-[0.15em] text-white"
              style={{
                fontFamily: "var(--font-g)",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                letterSpacing: "0.18em",
              }}
              initial={{ y: "100%" }}
              animate={{ y: phase === "reveal" ? "-110%" : "0%" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              DEVYUG
            </motion.h1>
          </motion.div>

          <motion.span
            className="mono text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(59,130,246,0.4)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Engineering Excellence
          </motion.span>
        </div>

        {/* Bottom — progress bar + coordinates */}
        <div className="p-8 lg:p-12 flex flex-col gap-4">
          {/* Progress track */}
          <div className="relative h-px bg-white/5 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full"
              style={{ backgroundColor: "#3b82f6" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span
              className="mono text-[9px] tracking-[0.15em]"
              style={{ color: "rgba(59,130,246,0.3)" }}
            >
              ENV_LOAD · RENDER_INIT · SCENE_COMPILE
            </span>
            <span
              className="mono text-[9px]"
              style={{ color: "rgba(59,130,246,0.25)" }}
            >
              v2.0.0
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
