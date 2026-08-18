"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { CyberneticDiagnosticWidget } from "@/components/ui/cybernetic-diagnostic-widget";
import { heroContent } from "@/content/hero";
import { useLanguage } from "@/context/language-context";

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <div className="relative">
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-cyber-cyan/30 overflow-hidden">
        <Container size="lg">
          {/* Asymmetrical 2-Column Cyberdeck Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Netrunner CLI & Identity */}
            <div className="lg:col-span-7 space-y-8">
              {/* Tactical Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-cyber-cyan tracking-wider uppercase border-b border-cyber-cyan/30 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-cyber-yellow font-bold">{"// NETRUNNER_ID:"}</span>
                  <span className="text-foreground font-semibold">DANIEL MARTÍNEZ</span>
                </div>

                <div className="flex items-center gap-2 rounded border border-cyber-yellow/40 bg-cyber-yellow/10 px-3 py-1 text-xs font-mono text-cyber-yellow shadow-[0_0_10px_rgba(252,238,10,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-yellow opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-yellow" />
                  </span>
                  <span>{language === "en" ? "[ SYS.STATUS // OPERATIONAL ]" : "[ ESTADO.SYS // OPERATIVO ]"}</span>
                </div>
              </div>

              {/* Monumental Edgerunners Industrial Title */}
              <div className="space-y-2">
                <div className="overflow-hidden py-1">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[0.98] uppercase neon-glow-cyan"
                  >
                    SOFTWARE DEVELOPER
                  </motion.h1>
                </div>

                <div className="overflow-hidden py-1">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-cyber-yellow leading-[1.0] uppercase neon-glow-yellow"
                  >
                    & FULL-STACK ENGINEER
                  </motion.h2>
                </div>
              </div>

              {/* Netrunner CLI Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed font-mono border-l-2 border-cyber-yellow pl-4 bg-cyber-gray/40 py-3"
              >
                {content.description}
              </motion.p>

              {/* CLI Action Triggers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href={content.primaryCta.href}
                  className="font-mono text-xs font-bold uppercase clip-chamfer-btn bg-cyber-yellow text-cyber-black hover:bg-cyber-yellow/90 hover:shadow-[0_0_20px_rgba(252,238,10,0.6)]"
                >
                  {language === "en" ? "./view_work.sh ↓" : "./ver_proyectos.sh ↓"}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={content.cvCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase clip-chamfer-btn border border-cyber-cyan text-cyber-cyan bg-cyber-black hover:bg-cyber-cyan hover:text-cyber-black transition-all"
                >
                  ./extract_cv.bin ↗
                </Button>

                <div className="flex items-center gap-3 pt-2 sm:pt-0">
                  <a
                    href="https://github.com/ddamago0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border border-cyber-cyan/30 rounded bg-cyber-gray/60 text-cyber-cyan hover:border-cyber-yellow hover:text-cyber-yellow transition-all"
                  >
                    ./github.node ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-martinez-gonzalez-a891b3405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border border-cyber-cyan/30 rounded bg-cyber-gray/60 text-cyber-cyan hover:border-cyber-yellow hover:text-cyber-yellow transition-all"
                  >
                    ./linkedin.node ↗
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Cybernetic Diagnostic Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <CyberneticDiagnosticWidget />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Infinite Horizontal Marquee Directly Below Hero */}
      <InfiniteMarquee className="border-cyber-cyan/30 bg-cyber-black/80" />
    </div>
  );
};
