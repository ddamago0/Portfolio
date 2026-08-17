"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

const navItemsMap = {
  en: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  es: [
    { label: "Proyectos", href: "#work" },
    { label: "Sobre mí", href: "#about" },
    { label: "Tecnologías", href: "#stack" },
    { label: "Trayectoria", href: "#journey" },
    { label: "Contacto", href: "#contact" },
  ],
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();

  const navItems = navItemsMap[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/80 backdrop-blur-md">
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Identifier */}
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1.5 py-1"
          >
            {language === "en" ? "AI & Software Eng" : "IA y Software Eng"}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Button Segmented Toggle */}
            <div className="flex items-center bg-surface border border-surface-border rounded-lg p-0.5 font-mono text-xs select-none">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-md transition-colors font-semibold ${
                  language === "en"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded-md transition-colors font-semibold ${
                  language === "es"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Cambiar idioma a Español"
              >
                ES
              </button>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-2 py-1"
              aria-label="GitHub profile link"
            >
              GitHub ↗
            </a>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {language === "en" ? "Contact" : "Contacto"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-surface border border-surface-border rounded-lg p-0.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-md transition-colors font-semibold ${
                  language === "en"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded-md transition-colors font-semibold ${
                  language === "es"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Cambiar idioma a Español"
              >
                ES
              </button>
            </div>

            <button
              type="button"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-surface-border bg-surface/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-1"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="min-h-[44px] flex items-center text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-surface-border flex flex-col gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] flex items-center justify-center font-mono text-xs text-muted-foreground hover:text-foreground border border-surface-border rounded-md px-4 py-2"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] flex items-center justify-center text-sm font-medium bg-accent text-accent-foreground rounded-md px-4 py-2"
            >
              {language === "en" ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
