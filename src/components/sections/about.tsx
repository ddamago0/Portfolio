"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { aboutContent } from "@/content/about";
import { useLanguage } from "@/context/language-context";

export const About: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28 border-b border-surface-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Columna Izquierda / Header */}
          <MotionContainer className="lg:col-span-5 space-y-4" delay={0.1}>
            <span className="font-mono text-xs font-semibold text-accent tracking-widest uppercase">
              02 / ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase leading-[1.1]">
              {content.sectionTitle}
            </h2>
          </MotionContainer>

          {/* Columna Derecha / Narrativa Editorial */}
          <MotionContainer className="lg:col-span-7" delay={0.25}>
            <SpotlightCard className="space-y-6 border-surface-border bg-surface/60 p-8 sm:p-10 shadow-xl">
              {content.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans"
                >
                  {paragraph}
                </p>
              ))}
            </SpotlightCard>
          </MotionContainer>
        </div>
      </Container>
    </section>
  );
};
