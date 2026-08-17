"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { aboutContent } from "@/content/about";
import { useLanguage } from "@/context/language-context";

export const About: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 border-b border-surface-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda / Header */}
          <div className="lg:col-span-5 space-y-4">
            <Badge variant="accent">{content.sectionBadge}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
              {content.sectionTitle}
            </h2>
          </div>

          {/* Columna Derecha / Narrativa */}
          <div className="lg:col-span-7">
            <Card className="space-y-4 border-surface-border bg-surface/80">
              {content.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
