"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 20 },
  left: { x: -30 },
  right: { x: 30 },
  none: {},
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Where the element animates in from. */
  direction?: Direction;
  /** `mount` plays immediately (hero copy), `scroll` waits for the viewport. */
  trigger?: "mount" | "scroll";
  delay?: number;
};

/**
 * The one client component behind the site-wide entrance animations. Keeping
 * it isolated lets the pages that use it stay Server Components.
 */
export default function Reveal({
  children,
  className,
  direction = "up",
  trigger = "scroll",
  delay = 0,
}: RevealProps) {
  const from = { opacity: 0, ...offsets[direction] };
  const to = { opacity: 1, x: 0, y: 0 };
  const transition = { delay, duration: 0.5, ease: "easeOut" as const };

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={from}
        animate={to}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={from}
      whileInView={to}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
