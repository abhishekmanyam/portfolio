"use client";

import { motion } from "motion/react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  external?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.3,
  external,
}: MagneticButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } =
    useMagnetic(strength);

  const isExternal =
    external ?? (href ? !href.startsWith("#") && !href.startsWith("/") : false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          className={className}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
