"use client";

import { motion } from "framer-motion";

type Props = {
  items: string[];
  duration?: number;
  className?: string;
};

export function Marquee({ items, duration = 40, className }: Props) {
  const loop = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-serif italic text-5xl md:text-7xl tracking-tightest text-ink/80"
          >
            {item}
            <span className="ml-12 text-accent/40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
