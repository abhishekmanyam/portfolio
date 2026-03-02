"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import CountUp from "@/components/ui/CountUp";
import { stats, aboutText, skills } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-32 md:px-12" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <SectionLabel text="About" number="01" />

        {/* Asymmetric split layout */}
        <div className="mt-16 grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Image placeholder — 40% */}
          <motion.div
            className="relative lg:col-span-2"
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -3 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-bg-elevated">
              <Image
                src="/headshot.JPG"
                alt="Abhishek M"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Gold accent border */}
              <div className="absolute -right-3 -bottom-3 h-full w-full border-2 border-accent/20" />
            </div>
          </motion.div>

          {/* Text — 60% */}
          <div className="lg:col-span-3">
            <AnimatedText
              text="Engineering AI systems that reason, plan, and act"
              as="h2"
              className="font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              delay={0.2}
            />

            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {aboutText.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-text-secondary md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-8 border-t border-bg-surface pt-8 md:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl font-bold text-text-primary md:text-4xl">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
