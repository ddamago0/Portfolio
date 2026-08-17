"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { heroContent } from "@/content/hero";
import { useLanguage } from "@/context/language-context";

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 border-b border-surface-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Columna Principal / Titular */}
          <MotionContainer className="lg:col-span-7 space-y-6" delay={0.1}>
            <div className="inline-flex">
              <Badge variant="accent" size="md">
                {content.badge}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {content.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {content.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href={content.primaryCta.href}>
                {content.primaryCta.label}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={content.cvCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.cvCta.label} 📄
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={content.secondaryCta.href}
                target={content.secondaryCta.isExternal ? "_blank" : undefined}
                rel={content.secondaryCta.isExternal ? "noopener noreferrer" : undefined}
              >
                {content.secondaryCta.label} ↗
              </Button>
            </div>
          </MotionContainer>

          {/* Columna Derecha / Panel de Estado de Sistema */}
          <MotionContainer className="lg:col-span-5" delay={0.25}>
            <SpotlightCard className="font-mono text-xs space-y-4 border-surface-border bg-surface/90">
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <span className="text-muted-foreground uppercase tracking-wider font-semibold text-[11px]">
                  {content.statusPanel.title}
                </span>
                <span className="inline-flex items-center gap-1.5 text-status-success text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-status-success animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3">
                {content.statusPanel.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-surface-border/40 last:border-0"
                  >
                    <span className="text-muted-foreground text-[11px]">
                      {item.label}:
                    </span>
                    <span
                      className={`font-medium ${
                        item.isActive ? "text-status-success" : "text-foreground"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </MotionContainer>
        </div>
      </Container>
    </section>
  );
};
