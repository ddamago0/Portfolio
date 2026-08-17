"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { aboutContent } from "@/content/about";
import { useLanguage } from "@/context/language-context";

export const WhatIBuild: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <section className="py-16 sm:py-24 border-b border-surface-border/60">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <div className="space-y-3 max-w-2xl">
            <Badge variant="accent">{content.pillarsBadge}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {content.pillarsTitle}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.pillarsDescription}
            </p>
          </div>

          {/* Rejilla de 3 Columnas Responsiva */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content.pillars.map((pillar) => (
              <Card
                key={pillar.id}
                className="flex flex-col justify-between space-y-6 border-surface-border bg-surface/80 hover:border-muted-foreground/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="accent">{pillar.badge}</Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border/50 space-y-2">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block font-semibold">
                    {pillar.capabilitiesTitle}
                  </span>
                  <ul className="space-y-1.5 text-xs text-foreground/90 font-mono">
                    {pillar.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent text-xs select-none">•</span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
