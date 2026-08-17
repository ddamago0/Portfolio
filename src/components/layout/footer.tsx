"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/context/language-context";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="w-full border-t border-surface-border bg-background py-8 text-xs text-muted-foreground">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-mono font-medium text-foreground">
              {language === "en"
                ? "AI Engineer & Software Developer"
                : "AI Engineer y Desarrollador de Software"}
            </span>
            <span className="hidden sm:inline text-surface-border">•</span>
            <span>
              © {currentYear}{" "}
              {language === "en"
                ? "All rights reserved."
                : "Todos los derechos reservados."}
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1 py-0.5"
              aria-label="GitHub profile link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1 py-0.5"
              aria-label="LinkedIn profile link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
