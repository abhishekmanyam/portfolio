"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > window.innerHeight * 0.8);
  });

  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-[100] border-b border-bg-surface/50 px-6 backdrop-blur-xl md:px-12"
      style={{ background: "rgba(10, 10, 10, 0.8)" }}
      initial={{ y: "-100%" }}
      animate={{ y: visible ? "0%" : "-100%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/icon.svg"
            alt="Abhishek M"
            width={28}
            height={28}
            className="rounded"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <MagneticButton
              key={link.label}
              href={link.href}
              strength={0.15}
              className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </MagneticButton>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
