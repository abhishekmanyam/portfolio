"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig, socialLinks } from "@/lib/data";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative px-6 py-32 md:px-12" ref={ref}>
      {/* Ambient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201, 168, 76, 0.04) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionLabel text="Contact" number="03" />

        <div className="mt-8">
          <AnimatedText
            text="Let's create something"
            as="h2"
            className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          />
          <motion.span
            className="mt-2 block font-serif text-4xl font-bold text-accent md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            extraordinary
          </motion.span>
        </div>

        <motion.p
          className="mx-auto mt-8 max-w-lg text-lg text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear from
          you. Let&apos;s bring your vision to life.
        </motion.p>

        {/* Email */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <MagneticButton
            href={`mailto:${siteConfig.email}`}
            strength={0.2}
            className="group relative inline-flex items-center gap-3 border border-accent/30 px-10 py-5 transition-all duration-500 hover:border-accent"
          >
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-text-primary transition-colors duration-300 group-hover:text-accent">
              {siteConfig.email}
            </span>
            <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {socialLinks.map((link) => (
            <MagneticButton
              key={link.label}
              href={link.href}
              strength={0.25}
              className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </MagneticButton>
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-16 h-px w-24 bg-accent/30"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1.2,
            delay: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </div>
    </section>
  );
}
