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
    <section id="stack" className="scroll-mt-20 py-16 sm:py-24 border-b border-surface-border/60">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <MotionContainer className="space-y-3 max-w-2xl">
            <Badge variant="accent">{content.sectionBadge}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {content.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.sectionDescription}
            </p>
          </MotionContainer>

          {/* Rejilla de Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.categories.map((cat, index) => (
              <MotionContainer key={cat.id} delay={index * 0.12}>
                <SpotlightCard className="space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {cat.category}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {cat.badge}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border/50">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} variant="outline" size="md" className="font-mono">
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
