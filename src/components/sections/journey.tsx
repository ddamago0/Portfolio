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
    <section id="journey" className="scroll-mt-20 py-20 sm:py-28 border-b border-surface-border/60">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <MotionContainer className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs font-semibold text-accent tracking-widest uppercase">
              05 / TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase">
              {content.sectionTitle}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {content.sectionDescription}
            </p>
          </MotionContainer>

          {/* Línea de Tiempo Vertical */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-surface-border">
            {content.items.map((item, index) => (
              <MotionContainer key={item.id} delay={index * 0.15} className="relative group">
                {/* Marcador de Estado en la Línea de Tiempo */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-1.5 h-4 w-4 rounded-full border-2 border-background flex items-center justify-center transition-colors ${
                    item.isCurrent
                      ? "bg-status-success ring-4 ring-status-successBg"
                      : "bg-surface border-surface-border group-hover:border-accent"
                  }`}
                >
                  {item.isCurrent && (
                    <span className="h-1.5 w-1.5 rounded-full bg-background" />
                  )}
                </div>

                {/* Tarjeta de Hito */}
                <SpotlightCard className="space-y-5 p-7 border-surface-border bg-surface/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border/50 pb-3">
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono text-muted-foreground">
                        {item.context}
                      </span>
                      <h3 className="text-xl font-bold text-foreground tracking-tight uppercase">
                        {item.roleOrMilestone}
                      </h3>
                    </div>
                    <Badge variant={item.isCurrent ? "success" : "outline"} size="sm">
                      {item.period}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights de Aprendizaje */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block font-semibold">
                      {item.accomplishmentsTitle}
                    </span>
                    <ul className="space-y-1 text-xs text-foreground/90 font-sans">
                      {item.keyLearningsOrHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent font-mono text-xs select-none">•</span>
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags Técnicas */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border/50">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" size="sm" className="font-mono">
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
