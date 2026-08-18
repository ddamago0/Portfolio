"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { aboutContent } from "@/content/about";
import { useLanguage } from "@/context/language-context";

export const WhatIBuild: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <section className="py-20 sm:py-28 border-b border-cyber-cyan/30">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <MotionContainer className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-cyber-yellow tracking-widest uppercase">
              {"// 03_CYBERWARE_CAPABILITIES"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase neon-glow-cyan">
              {content.pillarsTitle}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-mono">
              {content.pillarsDescription}
            </p>
          </MotionContainer>

          {/* Rejilla de 3 Columnas Responsiva */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content.pillars.map((pillar, index) => (
              <MotionContainer key={pillar.id} delay={index * 0.15}>
                <SpotlightCard className="flex flex-col justify-between space-y-6 h-full p-7">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="accent" size="sm" className="bg-cyber-yellow/15 text-cyber-yellow border-cyber-yellow/30 font-mono">
                        {pillar.badge}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground tracking-tight uppercase">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cyber-cyan/20 space-y-2">
                    <span className="text-[11px] font-mono text-cyber-cyan uppercase tracking-wider block font-semibold">
                      {pillar.capabilitiesTitle}
                    </span>
                    <ul className="space-y-1.5 text-xs text-foreground/90 font-mono">
                      {pillar.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyber-yellow text-xs select-none">•</span>
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </MotionContainer>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
