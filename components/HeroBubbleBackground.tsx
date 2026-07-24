"use client";

import { motion } from "framer-motion";

const bubbles = [
  { size: 100, left: "15%", top: "20%", indigo: true },
  { size: 130, left: "30%", top: "45%", indigo: false },
  { size: 160, left: "45%", top: "20%", indigo: true },
  { size: 190, left: "60%", top: "45%", indigo: false },
  { size: 220, left: "75%", top: "20%", indigo: true },
  { size: 250, left: "90%", top: "45%", indigo: false },
];

const dots = Array.from({ length: 15 }, (_, i) => ({
  left: `${(i * 7 + 10) % 85}%`,
  top: `${(i * 13 + 15) % 70}%`,
  color:
    i % 3 === 0
      ? "rgba(99, 102, 241, 0.6)"
      : i % 3 === 1
        ? "rgba(16, 185, 129, 0.6)"
        : "rgba(59, 130, 246, 0.6)",
  duration: 3 + (i % 4),
  delay: i * 0.2,
}));

/**
 * Full animated bubble / ring / wave layer for the homepage hero.
 * Deterministic positions (no Math.random) to avoid hydration mismatch.
 */
export default function HeroBubbleBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          x: ["10%", "70%", "10%"],
          y: ["0%", "30%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          x: ["60%", "5%", "60%"],
          y: ["10%", "40%", "10%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {bubbles.map((bubble, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border-2"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            borderColor: bubble.indigo
              ? "rgba(99, 102, 241, 0.3)"
              : "rgba(16, 185, 129, 0.3)",
            background: bubble.indigo
              ? "rgba(99, 102, 241, 0.05)"
              : "rgba(16, 185, 129, 0.05)",
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, i % 2 === 0 ? 40 : -40, 0],
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {dots.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute h-3 w-3 rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            background: dot.color,
            boxShadow: "0 0 20px currentColor",
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-dashed"
        style={{ borderColor: "rgba(99, 102, 241, 0.2)" }}
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute h-1 w-full"
          style={{
            top: `${25 + i * 20}%`,
            background: `linear-gradient(90deg, transparent, ${
              i % 2 === 0
                ? "rgba(99, 102, 241, 0.4)"
                : "rgba(16, 185, 129, 0.4)"
            }, transparent)`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.2,
          }}
        />
      ))}
    </div>
  );
}
