"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%" },
  { left: "22%", top: "62%" },
  { left: "38%", top: "28%" },
  { left: "55%", top: "72%" },
  { left: "68%", top: "22%" },
  { left: "78%", top: "55%" },
  { left: "88%", top: "35%" },
  { left: "12%", top: "80%" },
];

type PageAtmosphereProps = {
  /** Stronger motion for homepage; quieter for inner pages */
  intensity?: "full" | "quiet";
};

/**
 * Soft page-level glows, blobs, and grid. Quiet mode is CSS-heavy with light motion.
 */
export default function PageAtmosphere({
  intensity = "quiet",
}: PageAtmosphereProps) {
  const isFull = intensity === "full";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,.3),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.25),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,.18),transparent_40%)]" />

      {isFull ? (
        <>
          <motion.div
            className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-primary/20 blur-3xl"
            animate={{ y: [0, 80, 0], x: [0, 40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl"
            animate={{ y: [0, -80, 0], x: [0, -40, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[15%] left-[15%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"
            animate={{ y: [0, 60, 0], x: [0, 50, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[25%] right-[20%] h-80 w-80 rounded-full bg-purple-500/15 blur-3xl"
            animate={{
              y: [0, -70, 0],
              x: [0, 60, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/20"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      ) : (
        <>
          <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute bottom-[20%] left-[20%] h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />
          <div className="absolute bottom-[10%] right-[15%] h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
          {/* Quiet static bubble outlines */}
          <div
            className="absolute left-[18%] top-[30%] h-40 w-40 rounded-full border border-primary/20"
            style={{ background: "rgba(99, 102, 241, 0.04)" }}
          />
          <div
            className="absolute right-[22%] top-[40%] h-56 w-56 rounded-full border border-accent/20"
            style={{ background: "rgba(16, 185, 129, 0.04)" }}
          />
          <div
            className="absolute left-[55%] top-[18%] h-32 w-32 rounded-full border border-primary/15"
            style={{ background: "rgba(99, 102, 241, 0.03)" }}
          />
        </>
      )}
    </div>
  );
}
