"use client";

import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import { useRef, useEffect, useState } from "react";
import FloatingOrbs from "@/components/effects/FloatingOrbs";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      parallaxX.set((e.clientX - window.innerWidth / 2) * 0.02);
      parallaxY.set((e.clientY - window.innerHeight / 2) * 0.02);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [parallaxX, parallaxY]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-void via-bg-deep to-bg-deep" />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201, 168, 76, 0.04) 0%, transparent 80%)",
            x: parallaxX,
            y: parallaxY,
          }}
        />
      </motion.div>

      {/* Floating orbs */}
      <FloatingOrbs />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 text-center"
        style={{ opacity }}
      >
        {/* Ambient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201, 168, 76, 0.06) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Role label */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="h-px w-8 bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{ originX: 0 }}
          />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {siteConfig.role}
          </span>
          <motion.div
            className="h-px w-8 bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{ originX: 1 }}
          />
        </motion.div>

        {/* Main headline */}
        <h1 className="font-serif text-6xl font-bold leading-[1.1] tracking-tight md:text-8xl lg:text-9xl">
          {siteConfig.name.split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + i * 0.05,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-lg text-lg text-text-secondary md:text-xl"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton
            href="#projects"
            className="group relative inline-flex items-center gap-2 border border-accent/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-text-primary transition-all duration-500 hover:border-accent hover:text-accent"
          >
            <span>View Work</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
            <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-accent/50 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
