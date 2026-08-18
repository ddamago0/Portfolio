"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/content/contact";
import { useLanguage } from "@/context/language-context";

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28 border-b border-surface-border/60">
      <Container size="lg">
        <MotionContainer delay={0.1}>
          <SpotlightCard className="border-surface-border bg-surface/60 p-8 sm:p-14 text-center space-y-8 max-w-3xl mx-auto shadow-2xl">
            <div className="space-y-4 max-w-xl mx-auto">
              <span className="font-mono text-xs font-semibold text-accent tracking-widest uppercase block">
                06 / CONTACT
              </span>
              <div className="flex justify-center">
                <Badge variant="success" size="sm">
                  {content.statusMessage}
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
                {content.sectionTitle}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {content.sectionDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${content.email}`}
                className="w-full sm:w-auto font-mono text-xs"
              >
                {content.emailCtaLabel} ✉
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={content.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto font-mono text-xs"
              >
                {content.cvCtaLabel} ↗
              </Button>

              {content.socials.map((social) => (
                <Button
                  key={social.platform}
                  variant="outline"
                  size="lg"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto font-mono text-xs"
                >
                  {social.platform} ↗
                </Button>
              ))}
            </div>
          </SpotlightCard>
        </MotionContainer>
      </Container>
    </section>
  );
};
