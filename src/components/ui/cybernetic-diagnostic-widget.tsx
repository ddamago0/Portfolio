"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";

export const CyberneticDiagnosticWidget: React.FC = () => {
  const [isOverclocked, setIsOverclocked] = React.useState(false);
  const [cpuLoad, setCpuLoad] = React.useState(14.2);
  const { language } = useLanguage();

  React.useEffect(() => {
    const interval = setInterval(() => {
      const base = isOverclocked ? 88.5 : 14.2;
      const variance = (Math.random() - 0.5) * 4;
      setCpuLoad(Math.min(99.9, Math.max(5.0, Number((base + variance).toFixed(1)))));
    }, 800);
    return () => clearInterval(interval);
  }, [isOverclocked]);

  return (
    <div className={`relative overflow-hidden rounded-lg border p-6 transition-all duration-500 font-mono ${
      isOverclocked
        ? "border-cyber-yellow bg-[#0c0e14]/95 shadow-[0_0_30px_rgba(252,238,10,0.3)]"
        : "border-cyber-cyan/40 bg-[#0c0e14]/90 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
    }`}>
      {/* Widget Header & Tactical Status Indicator */}
      <div className="flex items-center justify-between border-b border-cyber-cyan/30 pb-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-cyber-yellow uppercase">
          <span className={`w-2 h-2 rounded-full ${isOverclocked ? "bg-cyber-red animate-ping" : "bg-cyber-yellow"}`} />
          <span>{isOverclocked ? "[ SANDEVISTAN_OVERCLOCK // ACTIVE ]" : "[ CYBERNETIC_DIAGNOSTIC // STABLE ]"}</span>
        </div>
        <span className="text-[10px] text-cyber-cyan/60">NODE_ID #8742-X</span>
      </div>

      {/* Grid of Diagnostic Meters */}
      <div className="space-y-4 text-xs">
        {/* CPU Core Load Meter */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>NEURAL_CPU_LOAD</span>
            <span className={isOverclocked ? "text-cyber-yellow font-bold" : "text-cyber-cyan font-bold"}>
              {cpuLoad}%
            </span>
          </div>
          <div className="w-full h-2 bg-cyber-black rounded border border-cyber-cyan/30 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                isOverclocked ? "bg-cyber-yellow shadow-[0_0_10px_#FCEE0A]" : "bg-cyber-cyan"
              }`}
              style={{ width: `${cpuLoad}%` }}
            />
          </div>
        </div>

        {/* Memory Buffer Status */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>RAM_BUFFER_ALLOCATION</span>
            <span className="text-cyber-cyan font-bold">64 GB / 64 GB</span>
          </div>
          <div className="w-full h-2 bg-cyber-black rounded border border-cyber-cyan/30 overflow-hidden">
            <div className="h-full bg-cyber-cyan w-[82%]" />
          </div>
        </div>

        {/* Neural Throughput */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 border border-cyber-cyan/20 rounded bg-cyber-gray/50 space-y-1">
            <span className="text-[10px] text-muted-foreground block">THROUGHPUT</span>
            <span className="text-sm font-bold text-cyber-yellow">
              {isOverclocked ? "19.2 TB/s" : "4.8 TB/s"}
            </span>
          </div>

          <div className="p-3 border border-cyber-cyan/20 rounded bg-cyber-gray/50 space-y-1">
            <span className="text-[10px] text-muted-foreground block">FIREWALL_NODES</span>
            <span className="text-sm font-bold text-cyber-cyan">0 BREACHES</span>
          </div>
        </div>

        {/* Dynamic Spectrum Equalizer Animation */}
        <div className="pt-2">
          <span className="text-[10px] text-muted-foreground uppercase block mb-1">
            {language === "en" ? "NEURAL FREQUENCY SPECTRUM" : "ESPECTRO DE FRECUENCIA NEURAL"}
          </span>
          <div className="flex items-end justify-between h-10 gap-1 p-1 border border-cyber-cyan/20 rounded bg-cyber-black">
            {[65, 85, 45, 95, 30, 75, 100, 50, 90, 60, 40, 80, 95, 70, 85, 50].map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-t transition-all duration-300 ${
                  isOverclocked
                    ? "bg-cyber-yellow animate-pulse"
                    : "bg-cyber-cyan/70"
                }`}
                style={{
                  height: isOverclocked ? `${Math.min(100, h * 1.2)}%` : `${h}%`,
                  animationDelay: `${i * 60}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Overclock Toggle Interactive Trigger */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsOverclocked(!isOverclocked)}
            className={`w-full py-2.5 px-4 font-mono text-xs font-bold uppercase clip-chamfer-btn transition-all duration-300 ${
              isOverclocked
                ? "bg-cyber-red text-foreground shadow-[0_0_20px_#FF003C] hover:bg-cyber-red/90"
                : "bg-cyber-yellow text-cyber-black hover:bg-cyber-yellow/90 hover:shadow-[0_0_15px_#FCEE0A]"
            }`}
          >
            {isOverclocked
              ? (language === "en" ? "[ DISENGAGE SANDEVISTAN OVERCLOCK ]" : "[ DESACTIVAR SANDEVISTAN OVERCLOCK ]")
              : (language === "en" ? "[ INITIATE SANDEVISTAN OVERCLOCK ]" : "[ ACTIVAR SANDEVISTAN OVERCLOCK ]")}
          </button>
        </div>
      </div>
    </div>
  );
};
