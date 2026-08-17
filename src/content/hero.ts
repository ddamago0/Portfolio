import type { Language, HeroContent } from "@/types";

export const heroContent: Record<Language, HeroContent> = {
  en: {
    badge: "AI & SOFTWARE SYSTEMS",
    title:
      "AI Engineer & Software Developer building intelligent software, AI tools and data-processing systems.",
    description:
      "Software development focused on building artificial intelligence tools, data-processing pipelines, and token consumption optimization.",
    primaryCta: {
      label: "View Projects",
      href: "#work",
    },
    secondaryCta: {
      label: "GitHub",
      href: "https://github.com",
      isExternal: true,
    },
    statusPanel: {
      title: "System Status",
      items: [
        { label: "Role", value: "AI Engineer / Software Developer" },
        { label: "Focus", value: "AI Tools & Data Pipelines" },
        { label: "Stack", value: "Python · TypeScript · LLMs" },
        { label: "Status", value: "Available for projects", isActive: true },
      ],
    },
  },
  es: {
    badge: "SISTEMAS DE IA Y SOFTWARE",
    title:
      "AI Engineer y Desarrollador de Software enfocado en software inteligente, herramientas de IA y sistemas de procesamiento de datos.",
    description:
      "Desarrollo de software centrado en la creación de herramientas de inteligencia artificial, pipelines de procesamiento de datos y optimización de consumo de tokens.",
    primaryCta: {
      label: "Ver Proyectos",
      href: "#work",
    },
    secondaryCta: {
      label: "GitHub",
      href: "https://github.com",
      isExternal: true,
    },
    statusPanel: {
      title: "Estado del Sistema",
      items: [
        { label: "Rol", value: "AI Engineer / Desarrollador de Software" },
        { label: "Enfoque", value: "Herramientas de IA y Pipelines de Datos" },
        { label: "Stack", value: "Python · TypeScript · LLMs" },
        { label: "Estado", value: "Disponible para proyectos", isActive: true },
      ],
    },
  },
};
