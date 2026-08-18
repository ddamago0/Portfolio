"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { journeyContent } from "@/content/journey";
import { useLanguage } from "@/context/language-context";

export const Journey: React.FC = () => {
  const { language } = useLanguage();
  const content = journeyContent[language];

  return (
    <section id="journey" className="scroll-mt-20 py-20 sm:py-28 border-b border-cyber-cyan/30">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <MotionContainer className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-cyber-yellow tracking-widest uppercase">
              {"// 04_CLASSIFIED_MISSION_LOGS"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase neon-glow-cyan">
              {content.sectionTitle}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-mono">
              {content.sectionDescription}
            </p>
          </MotionContainer>

          {/* Vertical Mission Log Timeline */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-cyber-cyan/40">
            {content.items.map((item, index) => (
              <MotionContainer key={item.id} delay={index * 0.15} className="relative group">
                {/* Tactical Incident Node Indicator */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-1.5 h-4 w-4 rounded-full border-2 border-cyber-black flex items-center justify-center transition-colors ${
                    item.isCurrent
                      ? "bg-cyber-yellow ring-4 ring-cyber-yellow/20"
                      : "bg-[#0c0e14] border-cyber-cyan group-hover:border-cyber-yellow"
                  }`}
                >
                  {item.isCurrent && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyber-black" />
                  )}
                </div>

                {/* Decrypted Mission Log File Card */}
                <SpotlightCard className="space-y-5 p-7 border-cyber-cyan/40 bg-[#0c0e14]/90">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyber-cyan/20 pb-3">
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-cyber-cyan font-bold">
                        FILE_LOG #{1042 + index} {"//"} [{item.context}]
                      </span>
                      <h3 className="text-xl font-bold text-foreground tracking-tight uppercase">
                        {item.roleOrMilestone}
                      </h3>
                    </div>
                    <Badge variant="accent" size="sm" className="font-mono border-cyber-yellow/40 text-cyber-yellow bg-cyber-yellow/10">
                      {item.isCurrent ? "[CURRENT_OPERATION]" : "[DECRYPTED_LOG]"} {"//"} {item.period}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono">
                    {item.description}
                  </p>

                  {/* Highlights / Key Field Learnings */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-cyber-cyan uppercase tracking-wider block font-semibold">
                      {item.accomplishmentsTitle} {"// OPERATIONAL_REPORTS"}
                    </span>
                    <ul className="space-y-1 text-xs text-foreground/90 font-mono">
                      {item.keyLearningsOrHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 border-l border-cyber-yellow/30 pl-2">
                          <span className="text-cyber-yellow font-mono text-xs select-none">•</span>
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cyberware Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyber-cyan/20">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" size="sm" className="font-mono border-cyber-cyan/30 text-cyber-cyan">
                        {tag}
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
