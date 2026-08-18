"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/context/language-context";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="w-full border-t border-cyber-cyan/30 bg-[#040508] py-8 text-xs font-mono text-muted-foreground select-none">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-cyber-cyan/15 pb-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-cyber-yellow uppercase">
              {language === "en"
                ? "[ DANIEL MARTÍNEZ // SOFTWARE DEVELOPER & NETRUNNER ]"
                : "[ DANIEL MARTÍNEZ // DESARROLLADOR DE SOFTWARE & NETRUNNER ]"}
            </span>
            <span className="hidden sm:inline text-cyber-cyan/40">•</span>
            <span className="text-cyber-cyan/80">
              © {currentYear} NOC_CORP. {language === "en" ? "ALL RIGHTS RESERVED." : "TODOS LOS DERECHOS RESERVADOS."}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/ddamago0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-cyan hover:text-cyber-yellow transition-colors border border-cyber-cyan/30 rounded px-2.5 py-1 hover:border-cyber-yellow"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-martinez-gonzalez-a891b3405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-cyan hover:text-cyber-yellow transition-colors border border-cyber-cyan/30 rounded px-2.5 py-1 hover:border-cyber-yellow"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        {/* Live Terminal Telemetry Output */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] text-cyber-cyan/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-yellow animate-ping" />
            <span>NETRUNNER_OS v4.02 // REALTIME_COMM_ACTIVE</span>
          </div>
          <div>ENCRYPTED_CHANNEL (AES-256) // FIREWALL: 0_BREACHES</div>
        </div>
      </Container>
    </footer>
  );
};
