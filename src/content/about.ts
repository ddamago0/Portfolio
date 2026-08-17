import type { Language } from "@/context/language-context";

export interface PillarItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  capabilitiesTitle: string;
  highlights: string[];
}

export interface AboutContent {
  sectionBadge: string;
  sectionTitle: string;
  paragraphs: string[];
  pillarsBadge: string;
  pillarsTitle: string;
  pillarsDescription: string;
  pillars: PillarItem[];
}

export const aboutContent: Record<Language, AboutContent> = {
  en: {
    sectionBadge: "About",
    sectionTitle:
      "Software engineering focused on AI tools, data pipelines, and clean architecture.",
    paragraphs: [
      "I am an AI Engineer & Software Developer dedicated to building practical, reliable software systems. My work centers on developing artificial intelligence tools, processing large datasets, and optimizing language model consumption.",
      "Rather than relying on superficial abstractions or decorative trends, I prioritize clean software design, strict type safety, data validation, and predictable API contracts.",
    ],
    pillarsBadge: "Capabilities",
    pillarsTitle: "What I Build",
    pillarsDescription:
      "Core technical pillars defining my software development approach.",
    pillars: [
      {
        id: "ai-tools",
        badge: "AI Systems",
        title: "AI Tools & LLM Systems",
        description:
          "Semantic search, prompt evaluation, token metrics, and local/remote model integrations.",
        capabilitiesTitle: "Core Capabilities",
        highlights: [
          "Semantic quote retrieval and grounded argument generation.",
          "Token counting, language detection, and quality scoring.",
          "Ollama local model integration & LLM provider ports.",
        ],
      },
      {
        id: "data-processing",
        badge: "Backend & Data",
        title: "Data Ingestion & Processing",
        description:
          "Cleaning, validating, and transforming tabular datasets via FastAPI and Pandas pipelines.",
        capabilitiesTitle: "Core Capabilities",
        highlights: [
          "Large-scale dataset ingestion and structured cleaning.",
          "FastAPI REST endpoints for dataset upload & validation.",
          "Token-efficiency strategies for data processing.",
        ],
      },
      {
        id: "web-integration",
        badge: "Frontend & Web",
        title: "Responsive Web & API Integration",
        description:
          "Accessible frontends built with modern React/Next.js connected to backend services.",
        capabilitiesTitle: "Core Capabilities",
        highlights: [
          "Performant interfaces built with Next.js App Router.",
          "Strict TypeScript types and accessible UI primitives.",
          "Responsive layouts designed for 320px to large displays.",
        ],
      },
    ],
  },
  es: {
    sectionBadge: "Sobre mí",
    sectionTitle:
      "Ingeniería de software enfocada en herramientas de IA, pipelines de datos y arquitectura limpia.",
    paragraphs: [
      "Soy AI Engineer y Desarrollador de Software dedicado a construir sistemas de software prácticos y confiables. Mi trabajo se centra en desarrollar herramientas de inteligencia artificial, procesar grandes volúmenes de datos y optimizar el consumo de modelos de lenguaje.",
      "En lugar de depender de abstracciones superficiales o tendencias decorativas, priorizo el diseño de software limpio, tipado estricto, validación de datos y contratos de API predecibles.",
    ],
    pillarsBadge: "Capacidades",
    pillarsTitle: "Lo Que Construyo",
    pillarsDescription:
      "Pilares técnicos fundamentales que definen mi enfoque de desarrollo de software.",
    pillars: [
      {
        id: "ai-tools",
        badge: "Sistemas de IA",
        title: "Herramientas de IA y Sistemas LLM",
        description:
          "Búsqueda semántica, evaluación de prompts, métricas de tokens e integración de modelos locales y remotos.",
        capabilitiesTitle: "Capacidades Clave",
        highlights: [
          "Recuperación semántica de citas y generación de argumentos fundamentados.",
          "Conteo de tokens, detección de idioma y puntuación de calidad.",
          "Integración de modelos locales en Ollama y adaptadores de proveedor LLM.",
        ],
      },
      {
        id: "data-processing",
        badge: "Backend y Datos",
        title: "Ingesta y Procesamiento de Datos",
        description:
          "Limpieza, validación y transformación de datasets tabulares mediante pipelines en FastAPI y Pandas.",
        capabilitiesTitle: "Capacidades Clave",
        highlights: [
          "Ingesta de datasets a gran escala y limpieza estructurada.",
          "Endpoints REST en FastAPI para carga y validación de datasets.",
          "Estrategias de eficiencia de tokens aplicadas al procesamiento de datos.",
        ],
      },
      {
        id: "web-integration",
        badge: "Frontend y Web",
        title: "Web Responsiva e Integración de APIs",
        description:
          "Frontends accesibles construidos con React/Next.js moderno conectados a servicios backend.",
        capabilitiesTitle: "Capacidades Clave",
        highlights: [
          "Interfaces de alto rendimiento construidas con Next.js App Router.",
          "Tipos estrictos en TypeScript y primitivas de UI accesibles.",
          "Layouts responsivos diseñados desde 320px hasta pantallas grandes.",
        ],
      },
    ],
  },
};
