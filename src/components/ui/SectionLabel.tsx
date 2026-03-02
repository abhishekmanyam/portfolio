"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SectionLabelProps {
  text: string;
  number?: string;
}

export default function SectionLabel({ text, number }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="mb-8 flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {number && (
        <span className="font-mono text-sm text-accent">{number}</span>
      )}
      <motion.div
        className="h-px bg-accent"
        initial={{ width: 0 }}
        animate={isInView ? { width: 40 } : {}}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
        {text}
      </span>
    </motion.div>
  );
}
