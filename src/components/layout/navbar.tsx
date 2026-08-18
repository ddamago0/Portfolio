"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

const navItemsMap = {
  en: [
    { label: "01_NEURAL_DECK", href: "#work" },
    { label: "02_NETRUNNER_BIO", href: "#about" },
    { label: "03_CYBERWARE", href: "#stack" },
    { label: "04_MISSION_LOGS", href: "#journey" },
    { label: "05_UPLINK", href: "#contact" },
  ],
  es: [
    { label: "01_DECK_NEURAL", href: "#work" },
    { label: "02_NETRUNNER_BIO", href: "#about" },
    { label: "03_CYBERWARE", href: "#stack" },
    { label: "04_LOGS_MISION", href: "#journey" },
    { label: "05_UPLINK", href: "#contact" },
  ],
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();
  const [timeStr, setTimeStr] = React.useState("00:00:00");

  const navItems = navItemsMap[language];

  React.useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyber-cyan/30 bg-[#040508]/90 backdrop-blur-md">
      {/* Top Telemetry & Clock Strip */}
      <div className="border-b border-cyber-cyan/15 bg-cyber-black/80 px-4 py-1 text-[11px] font-mono flex items-center justify-between text-muted-foreground select-none">
        <div className="flex items-center gap-3">
          <span className="text-cyber-yellow font-bold animate-pulse">{"// CYBERDECK OS v4.02"}</span>
          <span className="hidden sm:inline text-cyber-cyan/40">|</span>
          <span className="hidden sm:inline text-cyber-cyan">{"SYS_STATUS // OPTIMAL"}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-cyber-cyan/40">|</span>
          <span className="text-cyber-yellow font-bold tracking-widest">{timeStr} UTC</span>
        </div>
      </div>

      <Container size="lg">
        <div className="flex h-14 items-center justify-between">
          {/* Brand Identifier */}
          <a
            href="#"
            className="font-mono text-xs font-bold tracking-wider text-foreground hover:text-cyber-yellow transition-colors flex items-center gap-2 group"
          >
            <span className="h-2 w-2 rounded-full bg-cyber-yellow group-hover:scale-125 transition-transform" />
            <span>{"[ DANIEL_MARTÍNEZ // NETRUNNER ]"}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-mono font-medium text-muted-foreground hover:text-cyber-yellow hover:neon-glow-yellow transition-all rounded px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs & Hardware Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Hardware Style Language Switcher Toggle */}
            <div className="flex items-center bg-cyber-gray border border-cyber-cyan/40 rounded p-0.5 font-mono text-xs select-none">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded transition-all font-bold ${
                  language === "en"
                    ? "bg-cyber-yellow text-cyber-black shadow-[0_0_10px_rgba(252,238,10,0.5)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Switch language to English"
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-0.5 rounded transition-all font-bold ${
                  language === "es"
                    ? "bg-cyber-yellow text-cyber-black shadow-[0_0_10px_rgba(252,238,10,0.5)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Cambiar idioma a Español"
              >
                ESP
              </button>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-xs font-bold uppercase clip-chamfer-btn bg-cyber-yellow text-cyber-black hover:bg-cyber-yellow/90 hover:shadow-[0_0_15px_rgba(252,238,10,0.5)]"
            >
              {language === "en" ? "[ UPLINK ]" : "[ ENLACE ]"}
            </Button>
          </div>

          {/* Mobile Menu Button & Language Switch */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center bg-cyber-gray border border-cyber-cyan/40 rounded p-0.5 font-mono text-xs select-none">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded transition-all font-bold ${
                  language === "en"
                    ? "bg-cyber-yellow text-cyber-black"
                    : "text-muted-foreground"
                }`}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-0.5 rounded transition-all font-bold ${
                  language === "es"
                    ? "bg-cyber-yellow text-cyber-black"
                    : "text-muted-foreground"
                }`}
              >
                ESP
              </button>
            </div>

            <button
              type="button"
              className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded border border-cyber-cyan/40 p-2 text-cyber-cyan hover:bg-cyber-gray hover:text-cyber-yellow focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-cyber-cyan/40 bg-cyber-black/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 font-mono"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="min-h-[40px] flex items-center text-xs font-bold text-cyber-cyan hover:text-cyber-yellow px-3 py-2 border-l-2 border-transparent hover:border-cyber-yellow hover:bg-cyber-gray/50 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-cyber-cyan/20 flex flex-col gap-2">
            <a
              href="https://github.com/ddamago0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="min-h-[40px] flex items-center justify-center text-xs text-cyber-cyan border border-cyber-cyan/30 rounded px-4 py-2 hover:border-cyber-yellow hover:text-cyber-yellow"
            >
              {"GITHUB // NODE ↗"}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="min-h-[40px] flex items-center justify-center text-xs font-bold bg-cyber-yellow text-cyber-black rounded px-4 py-2 uppercase"
            >
              {language === "en" ? "[ TRANSMIT SIGNAL ]" : "[ TRANSMITIR SEÑAL ]"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
