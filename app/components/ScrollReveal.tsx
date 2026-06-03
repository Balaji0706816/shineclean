"use client";

import { motion, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

const variants: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[direction]}
      transition={{
        duration: 0.65,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}