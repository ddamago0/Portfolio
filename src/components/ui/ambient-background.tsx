"use client";

import * as React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
      {/* Subtle Technical Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top Ambient Glow Accent */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[1000px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

      {/* Subtle Bottom Ambient Glow Accent */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[400px] rounded-full bg-sky-500/5 blur-[140px]" />
    </div>
  );
};
