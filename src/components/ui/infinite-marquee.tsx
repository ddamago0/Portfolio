"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  items?: string[];
  speed?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  "FULL STACK DEVELOPMENT",
  "PYTHON",
  "TYPESCRIPT",
  "MODERN WEB",
  "FASTAPI & NEXT.JS",
  "POSTGRESQL",
  "API ARCHITECTURE",
  "TOKEN OPTIMIZATION",
];

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items = DEFAULT_ITEMS,
  speed = 25,
  className = "",
}) => {
  // Duplicate array multiple times to ensure seamless infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden border-y border-surface-border bg-surface/50 py-4 select-none ${className}`}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex whitespace-nowrap gap-8 items-center"
      >
        {marqueeItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 font-mono text-xs sm:text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            <span>{text}</span>
            <span className="text-accent text-xs">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
