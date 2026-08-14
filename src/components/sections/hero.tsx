import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { heroContent } from "@/content/hero";

export const Hero: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 border-b border-surface-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Columna Principal / Titular */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex">
              <Badge variant="accent" size="md">
                {heroContent.badge}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {heroContent.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {heroContent.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={heroContent.secondaryCta.href}
                target={heroContent.secondaryCta.isExternal ? "_blank" : undefined}
                rel={heroContent.secondaryCta.isExternal ? "noopener noreferrer" : undefined}
              >
                {heroContent.secondaryCta.label} ↗
              </Button>
            </div>
          </div>

          {/* Columna Derecha / Panel de Estado de Sistema */}
          <div className="lg:col-span-5">
            <Card className="font-mono text-xs space-y-4 border-surface-border bg-surface/90">
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <span className="text-muted-foreground uppercase tracking-wider font-semibold text-[11px]">
                  {heroContent.statusPanel.title}
                </span>
                <span className="inline-flex items-center gap-1.5 text-status-success text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-status-success" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3">
                {heroContent.statusPanel.items.map((item, index) => (
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
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
