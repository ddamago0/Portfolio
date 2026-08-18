"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { heroContent } from "@/content/hero";
import { useLanguage } from "@/context/language-context";

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <div className="relative">
      <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-surface-border/60 overflow-hidden">
        <Container size="lg">
          <div className="space-y-12 max-w-5xl">
            {/* Top Row: Location & Availability Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground uppercase tracking-widest border-b border-surface-border/40 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-foreground font-semibold">DANIEL MARTÍNEZ</span>
                <span className="text-surface-border">•</span>
                <span>BASED IN COLOMBIA</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
                </span>
                <span className="text-status-success font-medium">
                  {language === "en" ? "AVAILABLE FOR WORK" : "DISPONIBLE PARA TRABAJAR"}
                </span>
              </div>
            </div>

            {/* Monumental Mask-Revealed Display Title */}
            <div className="space-y-2">
              <div className="overflow-hidden py-1">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[0.98] uppercase"
                >
                  SOFTWARE DEVELOPER
                </motion.h1>
              </div>

              <div className="overflow-hidden py-1">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-muted-foreground leading-[1.0] uppercase"
                >
                  & FULL-STACK ENGINEER
                </motion.h2>
              </div>
            </div>

            {/* Short Impactful Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-3xl leading-relaxed font-sans"
            >
              {content.description}
            </motion.p>

            {/* Action Buttons & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-6"
            >
              <Button variant="primary" size="lg" href={content.primaryCta.href} className="font-mono text-xs">
                {language === "en" ? "EXPLORE WORK ↓" : "VER PROYECTOS ↓"}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={content.cvCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs"
              >
                {content.cvCta.label} ↗
              </Button>

              <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground pt-2 sm:pt-0">
                <a
                  href="https://github.com/ddamago0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-martinez-gonzalez-a891b3405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Infinite Horizontal Marquee Directly Below Hero */}
      <InfiniteMarquee />
    </div>
  );
};
