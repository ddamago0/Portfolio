"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { stackContent } from "@/content/stack";
import { useLanguage } from "@/context/language-context";

export const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const content = stackContent[language];

  return (
    <section id="stack" className="scroll-mt-20 py-20 sm:py-28 border-b border-cyber-cyan/30">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <MotionContainer className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-cyber-yellow tracking-widest uppercase">
              {"// 02_INSTALLED_CYBERWARE_GRID"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase neon-glow-cyan">
              {content.sectionTitle}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-mono">
              {content.sectionDescription}
            </p>
          </MotionContainer>

          {/* Modular Cyberware Slot Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.categories.map((cat, index) => (
              <MotionContainer key={cat.id} delay={index * 0.12}>
                <SpotlightCard className="space-y-5 h-full p-7 border-cyber-cyan/40 bg-[#0c0e14]/90">
                  {/* Slot Header */}
                  <div className="flex items-center justify-between border-b border-cyber-cyan/20 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyber-yellow">SLOT_0{index + 1}</span>
                      <h3 className="text-lg font-bold text-foreground tracking-tight uppercase">
                        {cat.category}
                      </h3>
                    </div>
                    <Badge variant="accent" size="sm" className="bg-cyber-yellow/15 text-cyber-yellow border-cyber-yellow/40 font-mono text-[10px]">
                      [OVERCLOCKED 120%]
                    </Badge>
                  </div>

                  {/* Cyberware Skills Hardware Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        size="md"
                        className="font-mono border-cyber-cyan/40 text-cyber-cyan bg-cyber-black hover:border-cyber-yellow hover:text-cyber-yellow transition-all"
                      >
                        {skill}
                      </Badge>
                    ))}
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
