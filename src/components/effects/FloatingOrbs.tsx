"use client";

import { motion } from "motion/react";

const orbs = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 200, x: "80%", y: "60%", delay: 2, duration: 25 },
  { size: 150, x: "60%", y: "10%", delay: 4, duration: 18 },
  { size: 250, x: "30%", y: "80%", delay: 1, duration: 22 },
];

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0.8, 1.1, 0.9, 1.1, 0.8],
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
