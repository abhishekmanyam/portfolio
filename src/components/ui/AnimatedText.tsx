"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <span ref={ref} className="inline">
        {words.map((word, wi) => (
          <span key={wi} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + wi * 0.04,
              }}
            >
              {word}
            </motion.span>
            {wi < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </span>
    </Tag>
  );
}
