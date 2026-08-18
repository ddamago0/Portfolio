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
  const [selectedProjectId, setSelectedProjectId] = React.useState<string>(
    content.projects[0]?.id || "review-analyzer"
  );

  const activeProject =
    content.projects.find((p) => p.id === selectedProjectId) || content.projects[0];

  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28 border-b border-cyber-cyan/30">
      <Container size="lg">
        <div className="space-y-10">
          {/* Tactical Cyberpunk Index Header */}
          <MotionContainer className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-cyber-yellow tracking-widest uppercase">
              {"// 01_NEURAL_ARCHIVE_DECK"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase neon-glow-cyan">
              {content.sectionTitle}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-mono">
              {content.sectionDescription}
            </p>
          </MotionContainer>

          {/* Neural Archive Deck: Active Project Tab Inspector System */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Deck (List of Project Nodes) */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono">
              <span className="text-[11px] text-cyber-cyan font-bold uppercase tracking-wider block mb-1">
                {language === "en" ? "SELECT BOUNTY NODE:" : "SELECCIONAR NODO DE MISIÓN:"}
              </span>
              {content.projects.map((project, idx) => {
                const isSelected = project.id === activeProject.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className={`text-left p-4 rounded border transition-all duration-300 relative group overflow-hidden ${
                      isSelected
                        ? "border-cyber-yellow bg-cyber-yellow/10 text-foreground shadow-[0_0_15px_rgba(252,238,10,0.25)]"
                        : "border-cyber-cyan/30 bg-[#0c0e14]/80 text-muted-foreground hover:border-cyber-cyan hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-cyber-cyan">
                        NODE_0{idx + 1}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-cyber-yellow text-cyber-black"
                            : "border border-cyber-cyan/30 text-cyber-cyan"
                        }`}
                      >
                        [{project.status}]
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold mt-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1 font-sans">
                      {project.description}
                    </p>

                    {isSelected && (
                      <span className="absolute right-0 top-0 bottom-0 w-1 bg-cyber-yellow" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Inspection HUD Panel */}
            <div className="lg:col-span-8">
              <SpotlightCard className="p-8 space-y-6 border-cyber-yellow/60 bg-[#0c0e14]/95 shadow-[0_0_25px_rgba(0,240,255,0.15)]">
                {/* Header & Status */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyber-cyan/30 pb-4">
                  <div className="space-y-1">
                    <Badge
                      variant="accent"
                      size="sm"
                      className="bg-cyber-yellow/15 text-cyber-yellow border-cyber-yellow/40 font-mono text-xs"
                    >
                      {activeProject.badge}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground uppercase tracking-tight neon-glow-yellow mt-1">
                      {activeProject.title}
                    </h3>
                  </div>

                  <span className="font-mono text-xs font-bold text-cyber-cyan uppercase border border-cyber-cyan/40 px-3 py-1 rounded bg-cyber-black">
                    STATUS: [{activeProject.status}]
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono">
                  {activeProject.description}
                </p>

                {/* Engineering Highlights */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-cyber-yellow uppercase tracking-wider block font-bold">
                    {content.highlightsTitle} {"// METRICS"}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground/90 font-mono">
                    {activeProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 border-l-2 border-cyber-cyan/40 pl-3 py-0.5 bg-cyber-gray/40">
                        <span className="text-cyber-yellow select-none">•</span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block font-bold">
                    {"CYBERWARE STACK // PROTOCOLS"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        size="md"
                        className="font-mono border-cyber-cyan/40 text-cyber-cyan bg-cyber-black"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cyber-cyan/30">
                  {activeProject.repoUrl && (
                    <Button
                      variant="secondary"
                      size="lg"
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold uppercase clip-chamfer-btn border border-cyber-cyan text-cyber-cyan bg-cyber-black hover:bg-cyber-cyan hover:text-cyber-black"
                    >
                      {content.viewCodeLabel} ↗
                    </Button>
                  )}
                  {activeProject.demoUrl && (
                    <Button
                      variant="primary"
                      size="lg"
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold uppercase clip-chamfer-btn bg-cyber-yellow text-cyber-black hover:bg-cyber-yellow/90 hover:shadow-[0_0_15px_#FCEE0A]"
                    >
                      {content.liveDemoLabel} ↗
                    </Button>
                  )}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
