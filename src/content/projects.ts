import type { Language } from "@/context/language-context";

export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  techStack: string[];
  status: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface ProjectsSectionContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionDescription: string;
  highlightsTitle: string;
  viewCodeLabel: string;
  liveDemoLabel: string;
  projects: Project[];
}

export const projectsContent: Record<Language, ProjectsSectionContent> = {
  en: {
    sectionBadge: "Featured Work",
    sectionTitle: "Engineering Projects & AI Systems",
    sectionDescription:
      "Demonstrable software engineering decisions, data processing pipelines, and AI systems built with a focus on architecture and technical accuracy.",
    highlightsTitle: "Engineering Highlights",
    viewCodeLabel: "View Code",
    liveDemoLabel: "Live Demo",
    projects: [
      {
        id: "review-analyzer",
        title: "Review Analyzer",
        badge: "Data Pipeline & Processing",
        description:
          "Backend data processing system built to ingest, clean, and validate large-scale user review datasets with FastAPI endpoints and token optimization concepts.",
        highlights: [
          "Ingested 50,000 raw dataset rows and extracted 37,558 validated, clean reviews.",
          "Structured Excel parsing and data transformation pipeline using Pandas.",
          "FastAPI backend architecture with dedicated ingestion route (POST /api/upload).",
          "Designed with token-efficiency strategies for downstream LLM API integration.",
        ],
        techStack: ["Python", "FastAPI", "Pandas", "Excel Processing", "Token Optimization"],
        status: "Completed",
        repoUrl: "https://github.com",
      },
      {
        id: "prompt-analyzer-ai",
        title: "Prompt Analyzer AI",
        badge: "NLP & Token Analytics",
        description:
          "Specialized analysis tool for prompt tokenization, language detection, translation, and quality scoring to optimize LLM prompt efficiency.",
        highlights: [
          "Real-time token counting and encoding analysis powered by tiktoken.",
          "Automated language detection (langdetect) and translation pipeline (deep-translator).",
          "Rule-based quality scoring engine providing prompt optimization recommendations.",
          "Python backend with REST APIs and clean prompt evaluation interfaces.",
        ],
        techStack: ["Python", "tiktoken", "langdetect", "deep-translator", "FastAPI"],
        status: "Completed",
        repoUrl: "https://github.com",
      },
      {
        id: "quotelab",
        title: "QuoteLab",
        badge: "Clean Architecture & Semantic AI",
        description:
          "Semantic quote retrieval and multi-perspective argument generation engine built with Clean Architecture and Ports & Adapters.",
        highlights: [
          "Clean Architecture (Ports & Adapters) isolating core domain from infra layers.",
          "Semantic retrieval engine using SentenceTransformers (MiniLM) and vector storage.",
          "Local LLM provider integration with Ollama (qwen2.5:3b) and mock dev adapters.",
          "Strict grounding logic validating evidence quote IDs in generated debate arguments.",
        ],
        techStack: [
          "Python",
          "FastAPI",
          "Clean Architecture",
          "Ollama",
          "SentenceTransformers",
          "Vector Store",
        ],
        status: "Active Development",
        repoUrl: "https://github.com",
      },
    ],
  },
  es: {
    sectionBadge: "Trabajo Destacado",
    sectionTitle: "Proyectos de Ingeniería y Sistemas de IA",
    sectionDescription:
      "Decisiones demostrables de ingeniería de software, pipelines de procesamiento de datos y sistemas de IA construidos con precisión técnica y rigor arquitectónico.",
    highlightsTitle: "Aspectos Destacados de Ingeniería",
    viewCodeLabel: "Ver Código",
    liveDemoLabel: "Demo en Vivo",
    projects: [
      {
        id: "review-analyzer",
        title: "Review Analyzer",
        badge: "Pipeline de Datos y Procesamiento",
        description:
          "Sistema backend de procesamiento de datos diseñado para ingestar, limpiar y validar datasets de reseñas a gran escala mediante FastAPI y optimización de tokens.",
        highlights: [
          "Procesamiento de 50,000 filas de dataset crudo y extracción de 37,558 reseñas validadas.",
          "Pipeline estructurado de procesamiento y transformación de datos en Excel con Pandas.",
          "Arquitectura backend en FastAPI con endpoint dedicado de ingesta (POST /api/upload).",
          "Estrategias de eficiencia de tokens diseñadas para integración con APIs de LLM.",
        ],
        techStack: ["Python", "FastAPI", "Pandas", "Excel Processing", "Token Optimization"],
        status: "Completado",
        repoUrl: "https://github.com",
      },
      {
        id: "prompt-analyzer-ai",
        title: "Prompt Analyzer AI",
        badge: "NLP y Analítica de Tokens",
        description:
          "Herramienta especializada para tokenización de prompts, detección de idioma, traducción y puntuación de calidad para optimizar el consumo de tokens en LLMs.",
        highlights: [
          "Conteo de tokens en tiempo real y análisis de codificación impulsado por tiktoken.",
          "Detección automática de idioma (langdetect) y pipeline de traducción (deep-translator).",
          "Motor de puntuación de calidad basado en reglas con recomendaciones de optimización.",
          "Backend en Python con APIs REST e interfaz limpia de evaluación de prompts.",
        ],
        techStack: ["Python", "tiktoken", "langdetect", "deep-translator", "FastAPI"],
        status: "Completado",
        repoUrl: "https://github.com",
      },
      {
        id: "quotelab",
        title: "QuoteLab",
        badge: "Clean Architecture y IA Semántica",
        description:
          "Motor de búsqueda semántica de citas y generación de argumentos de debate con múltiples perspectivas construido con Arquitectura Limpia y Puertos y Adaptadores.",
        highlights: [
          "Arquitectura Limpia (Puertos y Adaptadores) aislando el dominio central de la infraestructura.",
          "Motor de recuperación semántica utilizando SentenceTransformers (MiniLM) y almacén vectorial.",
          "Integración de proveedor LLM local con Ollama (qwen2.5:3b) y adaptadores mock de desarrollo.",
          "Lógica de validación de grounding garantizando la validez de citas de evidencia en los debates.",
        ],
        techStack: [
          "Python",
          "FastAPI",
          "Clean Architecture",
          "Ollama",
          "SentenceTransformers",
          "Vector Store",
        ],
        status: "Desarrollo Activo",
        repoUrl: "https://github.com",
      },
    ],
  },
};
