"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsContent } from "@/content/projects";
import { useLanguage } from "@/context/language-context";

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const content = projectsContent[language];

  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-24 border-b border-surface-border/60">
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

          {/* Rejilla de Proyectos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content.projects.map((project, index) => (
              <MotionContainer key={project.id} delay={index * 0.15}>
                <SpotlightCard className="flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-4">
                    {/* Categoría y Estado */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge variant="accent">{project.badge}</Badge>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {project.status}
                      </span>
                    </div>

                    {/* Título y Descripción */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights de Ingeniería */}
                    <div className="space-y-2 pt-2 border-t border-surface-border/50">
                      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block font-semibold">
                        {content.highlightsTitle}
                      </span>
                      <ul className="space-y-1.5 text-xs text-foreground/90">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent font-mono text-xs select-none">•</span>
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-surface-border/50">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center gap-3 pt-1">
                      {project.repoUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-xs"
                        >
                          {content.viewCodeLabel} ↗
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-xs"
                        >
                          {content.liveDemoLabel} ↗
                        </Button>
                      )}
                    </div>
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
