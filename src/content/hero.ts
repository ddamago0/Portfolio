import type { Language, HeroContent } from "@/types";

export const heroContent: Record<Language, HeroContent> = {
  en: {
    badge: "SOFTWARE ENGINEERING & WEB ARCHITECTURE",
    title:
      "Software Developer crafting robust web applications, data pipelines & intelligent tools.",
    description:
      "Combining clean architecture, modern frontend craftsmanship, and efficient backend APIs to build fast, scalable software.",
    primaryCta: {
      label: "View Work",
      href: "#work",
    },
    secondaryCta: {
      label: "GitHub",
      href: "https://github.com/ddamago0",
      isExternal: true,
    },
    cvCta: {
      label: "Download CV",
      href: "/Daniel_David_Martinez_Gonzalez_CV.pdf",
    },
    statusPanel: {
      title: "Engineering Profile",
      items: [
        { label: "Role", value: "Software Developer / Engineer" },
        { label: "Focus", value: "Full-Stack Web & Data Systems" },
        { label: "Stack", value: "TypeScript · Python · Next.js" },
        { label: "Status", value: "Available for work", isActive: true },
      ],
    },
  },
  es: {
    badge: "INGENIERÍA DE SOFTWARE Y ARQUITECTURA WEB",
    title:
      "Desarrollador de Software creando aplicaciones web robustas, pipelines de datos y herramientas inteligentes.",
    description:
      "Combinando arquitectura limpia, diseño frontend moderno e integración de APIs eficientes para construir software rápido y escalable.",
    primaryCta: {
      label: "Ver Proyectos",
      href: "#work",
    },
    secondaryCta: {
      label: "GitHub",
      href: "https://github.com/ddamago0",
      isExternal: true,
    },
    cvCta: {
      label: "Descargar CV",
      href: "/Daniel_David_Martinez_Gonzalez_CV.pdf",
    },
    statusPanel: {
      title: "Perfil Técnico",
      items: [
        { label: "Rol", value: "Desarrollador de Software" },
        { label: "Enfoque", value: "Web Full-Stack y Sistemas de Datos" },
        { label: "Stack", value: "TypeScript · Python · Next.js" },
        { label: "Estado", value: "Disponible para trabajar", isActive: true },
      ],
    },
  },
};
