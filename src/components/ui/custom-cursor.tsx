"use client";

import * as React from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const cursorX = useSpring(0, { damping: 30, stiffness: 400 });
  const cursorY = useSpring(0, { damping: 30, stiffness: 400 });

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable = Boolean(
        target.closest("a, button, input, textarea, [role='button']")
      );
      setIsHovered(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block mix-blend-difference"
    >
      <motion.div
        animate={{
          scale: isHovered ? 3.2 : 1,
          opacity: isHovered ? 0.9 : 0.75,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className="h-5 w-5 -ml-2.5 -mt-2.5 rounded-full bg-white shadow-lg"
      />
    </motion.div>
  );
};
