import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { stackContent } from "@/content/stack";

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="scroll-mt-20 py-16 sm:py-24 border-b border-surface-border/60">
      <Container size="lg">
        <div className="space-y-12">
          {/* Header de la Sección */}
          <div className="space-y-3 max-w-2xl">
            <Badge variant="accent">{stackContent.sectionBadge}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {stackContent.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {stackContent.sectionDescription}
            </p>
          </div>

          {/* Rejilla de Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackContent.categories.map((cat) => (
              <Card
                key={cat.id}
                className="space-y-4 border-surface-border bg-surface/80 hover:border-muted-foreground/30 transition-all"
              >
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
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
