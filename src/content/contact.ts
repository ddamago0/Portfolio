import type { Language, ContactContent } from "@/types";

export const contactContent: Record<Language, ContactContent> = {
  en: {
    sectionBadge: "Get In Touch",
    sectionTitle: "Let's build something together.",
    sectionDescription:
      "Open for software engineering opportunities, AI tool development, and backend/data engineering projects.",
    statusBadge: "Status",
    statusMessage: "Available for new projects & opportunities",
    email: "ddamago0@gmail.com",
    emailCtaLabel: "Send an Email",
    socials: [
      {
        platform: "GitHub",
        label: "GitHub Profile",
        url: "https://github.com/ddamago0",
      },
      {
        platform: "LinkedIn",
        label: "LinkedIn Profile",
        url: "https://www.linkedin.com/in/daniel-martinez-gonzalez-a891b3405",
      },
    ],
  },
  es: {
    sectionBadge: "Contacto",
    sectionTitle: "Construyamos algo juntos.",
    sectionDescription:
      "Abierto a oportunidades de ingeniería de software, desarrollo de herramientas de IA y proyectos de backend/ingeniería de datos.",
    statusBadge: "Estado",
    statusMessage: "Disponible para nuevos proyectos y oportunidades",
    email: "ddamago0@gmail.com",
    emailCtaLabel: "Enviar un Correo",
    socials: [
      {
        platform: "GitHub",
        label: "Perfil de GitHub",
        url: "https://github.com/ddamago0",
      },
      {
        platform: "LinkedIn",
        label: "Perfil de LinkedIn",
        url: "https://www.linkedin.com/in/daniel-martinez-gonzalez-a891b3405",
      },
    ],
  },
};
