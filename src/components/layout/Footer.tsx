"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="border-t border-bg-surface/50 px-6 py-8 md:px-12">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} — Designed & Built with precision
        </p>

      </motion.div>
    </footer>
  );
}
