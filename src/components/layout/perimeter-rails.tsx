"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";

const navNodes = [
  { id: "work", label: "01_NEURAL_DECK", href: "#work" },
  { id: "about", label: "02_NETRUNNER_BIO", href: "#about" },
  { id: "stack", label: "03_CYBERWARE", href: "#stack" },
  { id: "journey", label: "04_MISSION_LOGS", href: "#journey" },
  { id: "contact", label: "05_UPLINK_NODE", href: "#contact" },
];

export const PerimeterRails: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState("work");
  const { language } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navNodes.map((n) => document.getElementById(n.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navNodes[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Left Rail */}
      <aside className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-auto">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00F0FF]/40 to-[#00F0FF]" />
        
        <nav className="flex flex-col gap-4 font-mono text-[10px] tracking-widest text-[#94a3b8]">
          {navNodes.map((node) => {
            const isActive = activeSection === node.id;
            return (
              <a
                key={node.id}
                href={node.href}
                className={`flex items-center gap-2 group transition-all duration-300 ${
                  isActive ? "text-[#FCEE0A] font-bold" : "hover:text-[#00F0FF]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full border border-[#00F0FF] ${isActive ? "bg-[#FCEE0A] border-[#FCEE0A] shadow-[0_0_8px_#FCEE0A]" : "bg-transparent"}`} />
                <span className="opacity-80 group-hover:opacity-100">{node.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="w-px h-16 bg-gradient-to-b from-[#00F0FF] via-[#00F0FF]/40 to-transparent" />
      </aside>

      {/* Fixed Right Telemetry Rail */}
      <aside className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none select-none">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#FCEE0A]/40 to-[#FCEE0A]" />

        {/* Audio Frequency Spectrum Visualizer Display */}
        <div className="flex flex-col items-center gap-1 font-mono text-[9px] text-[#00F0FF]/60">
          <span className="text-[#FCEE0A]/80 font-bold tracking-tighter">FREQ_OUT</span>
          <div className="flex items-end gap-0.5 h-16 w-4">
            <span className="w-0.5 h-[60%] bg-[#00F0FF] animate-pulse" />
            <span className="w-0.5 h-[90%] bg-[#FCEE0A] animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-[40%] bg-[#00F0FF] animate-pulse" style={{ animationDelay: "300ms" }} />
            <span className="w-0.5 h-[100%] bg-[#FF003C] animate-pulse" style={{ animationDelay: "450ms" }} />
            <span className="w-0.5 h-[70%] bg-[#00F0FF] animate-pulse" style={{ animationDelay: "600ms" }} />
          </div>
          <span className="text-[8px] text-[#94a3b8]">44.1kHz</span>
        </div>

        <div className="w-px h-12 bg-gradient-to-b from-[#FCEE0A] via-[#FCEE0A]/40 to-transparent" />
      </aside>
    </>
  );
};
