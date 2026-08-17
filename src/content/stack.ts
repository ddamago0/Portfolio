import type { Language } from "@/context/language-context";

export interface StackCategory {
  id: string;
  category: string;
  badge: string;
  skills: string[];
}

export interface StackContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionDescription: string;
  categories: StackCategory[];
}

export const stackContent: Record<Language, StackContent> = {
  en: {
    sectionBadge: "Technologies",
    sectionTitle: "Technical Stack & Tools",
    sectionDescription:
      "Core languages, frameworks, libraries, and workflows used to build intelligent software and data-processing systems.",
    categories: [
      {
        id: "ai-automation",
        category: "AI & Automation",
        badge: "AI Systems",
        skills: [
          "Python",
          "SentenceTransformers",
          "Tiktoken",
          "Ollama",
          "Token Optimization",
        ],
      },
      {
        id: "backend-data",
        category: "Backend & Data",
        badge: "Architecture",
        skills: [
          "FastAPI",
          "SQL",
          "Pandas",
          "REST APIs",
          "Ingestion Pipelines",
          "Clean Architecture",
        ],
      },
      {
        id: "frontend-web",
        category: "Frontend & Web",
        badge: "UI & Web",
        skills: [
          "TypeScript",
          "JavaScript",
          "React",
          "HTML",
          "CSS",
          "Next.js (App Router)",
          "Tailwind CSS",
          "Responsive UI",
        ],
      },
      {
        id: "tooling-workflow",
        category: "Tooling & Workflow",
        badge: "Dev Environment",
        skills: [
          "Git",
          "GitHub",
          "Linux",
          "VS Code",
          "Agile / Continuous Improvement",
        ],
      },
    ],
  },
  es: {
    sectionBadge: "Tecnologías",
    sectionTitle: "Stack Técnico y Herramientas",
    sectionDescription:
      "Lenguajes principales, frameworks, librerías y flujos de trabajo utilizados para construir software inteligente y sistemas de procesamiento de datos.",
    categories: [
      {
        id: "ai-automation",
        category: "IA y Automatización",
        badge: "Sistemas de IA",
        skills: [
          "Python",
          "SentenceTransformers",
          "Tiktoken",
          "Ollama",
          "Token Optimization",
        ],
      },
      {
        id: "backend-data",
        category: "Backend y Datos",
        badge: "Arquitectura",
        skills: [
          "FastAPI",
          "SQL",
          "Pandas",
          "APIs REST",
          "Pipelines de Ingesta",
          "Clean Architecture",
        ],
      },
      {
        id: "frontend-web",
        category: "Frontend y Web",
        badge: "UI y Web",
        skills: [
          "TypeScript",
          "JavaScript",
          "React",
          "HTML",
          "CSS",
          "Next.js (App Router)",
          "Tailwind CSS",
          "Responsive UI",
        ],
      },
      {
        id: "tooling-workflow",
        category: "Herramientas y Flujo",
        badge: "Entorno Dev",
        skills: [
          "Git",
          "GitHub",
          "Linux",
          "VS Code",
          "Agile / Mejora Continua",
        ],
      },
    ],
  },
};
