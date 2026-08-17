"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/content/contact";
import { useLanguage } from "@/context/language-context";

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24 border-b border-surface-border/60">
      <Container size="lg">
        <Card className="border-surface-border bg-surface/90 p-8 sm:p-12 text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="flex justify-center">
              <Badge variant="success">
                {content.statusMessage}
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              {content.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.sectionDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${content.email}`}
              className="w-full sm:w-auto"
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
              {content.cvCtaLabel} 📄
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
        </Card>
      </Container>
    </section>
  );
};
