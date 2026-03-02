"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const glowX = useSpring(0, { stiffness: 150, damping: 20 });
  const glowY = useSpring(0, { stiffness: 150, damping: 20 });
  const dotScale = useSpring(1, { stiffness: 300, damping: 25 });
  const glowScale = useSpring(1, { stiffness: 200, damping: 20 });
  const isVisible = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);

      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (glowRef.current) glowRef.current.style.opacity = "1";
      }
    };

    const handleMouseDown = () => {
      dotScale.set(0.7);
      glowScale.set(1.5);
    };

    const handleMouseUp = () => {
      dotScale.set(1);
      glowScale.set(1);
    };

    const handleMouseEnterInteractive = () => {
      dotScale.set(2);
      glowScale.set(1.8);
    };

    const handleMouseLeaveInteractive = () => {
      dotScale.set(1);
      glowScale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover effect for interactive elements
    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, [dotX, dotY, glowX, glowY, dotScale, glowScale]);

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          scale: dotScale,
          opacity: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="h-2 w-2 rounded-full bg-text-primary" />
      </motion.div>

      {/* Glow orb */}
      <motion.div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          scale: glowScale,
          opacity: 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="h-10 w-10 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201, 168, 76, 0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </>
  );
}
