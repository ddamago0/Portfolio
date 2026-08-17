import type { Language } from "@/context/language-context";

export interface JourneyItem {
  id: string;
  period: string;
  roleOrMilestone: string;
  context: string;
  description: string;
  accomplishmentsTitle: string;
  keyLearningsOrHighlights: string[];
  tags: string[];
  isCurrent?: boolean;
}

export interface JourneyContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionDescription: string;
  items: JourneyItem[];
}

export const journeyContent: Record<Language, JourneyContent> = {
  en: {
    sectionBadge: "Trajectory",
    sectionTitle: "Engineering Journey & Milestones",
    sectionDescription:
      "A continuous progression of technical learning, software engineering practice, and system development.",
    items: [
      {
        id: "ai-systems-dev",
        period: "Present",
        roleOrMilestone: "AI Software & Systems Development",
        context: "Independent Engineering Projects",
        description:
          "Building NLP tools, data ingestion pipelines, token-efficiency systems, and semantic retrieval engines.",
        accomplishmentsTitle: "Key Engineering Accomplishments",
        keyLearningsOrHighlights: [
          "Architected QuoteLab using Clean Architecture (Ports & Adapters) for semantic quote retrieval and Ollama integration.",
          "Built Review Analyzer for processing 50k dataset rows and extracting 37,558 validated reviews via FastAPI and Pandas.",
          "Developed Prompt Analyzer AI featuring tiktoken counting, langdetect, deep-translator, and heuristic scoring.",
        ],
        tags: ["Python", "FastAPI", "Clean Architecture", "Ollama", "Pandas", "LLMs"],
        isCurrent: true,
      },
      {
        id: "agile-software-eng",
        period: "2025",
        roleOrMilestone: "Intensive Software Engineering & Agile Collaboration",
        context: "Collaborative Engineering Training",
        description:
          "Rigorous software development training, full-stack teamwork, frontend implementation, and architectural design on collaborative projects.",
        accomplishmentsTitle: "Key Engineering Accomplishments",
        keyLearningsOrHighlights: [
          "Collaborated in team environments following Agile methodologies and code review standards.",
          "Implemented structured frontend components with strict type safety and REST API integration.",
          "Applied software design patterns, Git workflows, and modular system decomposition.",
        ],
        tags: ["TypeScript", "React", "Git", "REST APIs", "Agile", "System Design"],
      },
      {
        id: "web-dev-frontend",
        period: "2024",
        roleOrMilestone: "Web Development & Frontend Engineering",
        context: "Web Foundations & UI Engineering",
        description:
          "Building responsive user interfaces, debugging, component styling, and REST API integrations.",
        accomplishmentsTitle: "Key Engineering Accomplishments",
        keyLearningsOrHighlights: [
          "Mastered core web fundamentals (HTML, CSS, JavaScript) and responsive design principles.",
          "Developed component-driven interfaces using React and modern CSS techniques.",
          "Integrated client-side state management with backend API endpoints.",
        ],
        tags: ["JavaScript", "HTML", "CSS", "React", "Responsive UI", "Web APIs"],
      },
    ],
  },
  es: {
    sectionBadge: "Trayectoria",
    sectionTitle: "Trayectoria de Ingeniería y Hitos",
    sectionDescription:
      "Una progresión continua de aprendizaje técnico, práctica en ingeniería de software y desarrollo de sistemas.",
    items: [
      {
        id: "ai-systems-dev",
        period: "Presente",
        roleOrMilestone: "Desarrollo de Sistemas y Software de IA",
        context: "Proyectos Independientes de Ingeniería",
        description:
          "Construcción de herramientas de NLP, pipelines de ingesta de datos, sistemas de eficiencia de tokens y motores de recuperación semántica.",
        accomplishmentsTitle: "Logros Clave de Ingeniería",
        keyLearningsOrHighlights: [
          "Arquitectura de QuoteLab utilizando Clean Architecture (Puertos y Adaptadores) para recuperación semántica e integración de Ollama.",
          "Desarrollo de Review Analyzer para procesar 50k filas de datos y extraer 37,558 reseñas validadas mediante FastAPI y Pandas.",
          "Creación de Prompt Analyzer AI con conteo de tokens en tiktoken, langdetect, deep-translator y scoring heurístico.",
        ],
        tags: ["Python", "FastAPI", "Clean Architecture", "Ollama", "Pandas", "LLMs"],
        isCurrent: true,
      },
      {
        id: "agile-software-eng",
        period: "2025",
        roleOrMilestone: "Ingeniería de Software Intensiva y Colaboración Ágil",
        context: "Formación Colaborativa de Ingeniería",
        description:
          "Formación rigurosa en desarrollo de software, trabajo en equipo full-stack, implementación de frontend y diseño arquitectónico en proyectos colaborativos.",
        accomplishmentsTitle: "Logros Clave de Ingeniería",
        keyLearningsOrHighlights: [
          "Colaboración en entornos de equipo siguiendo metodologías Ágiles y estándares de revisión de código.",
          "Implementación de componentes de frontend estructurados con tipado estricto e integración de APIs REST.",
          "Aplicación de patrones de diseño de software, flujos de Git y descomposición modular de sistemas.",
        ],
        tags: ["TypeScript", "React", "Git", "APIs REST", "Agile", "Diseño de Sistemas"],
      },
      {
        id: "web-dev-frontend",
        period: "2024",
        roleOrMilestone: "Desarrollo Web e Ingeniería Frontend",
        context: "Fundamentos Web e Ingeniería de UI",
        description:
          "Construcción de interfaces de usuario responsivas, depuración, estilizado de componentes e integración de APIs REST.",
        accomplishmentsTitle: "Logros Clave de Ingeniería",
        keyLearningsOrHighlights: [
          "Dominio de fundamentos web esenciales (HTML, CSS, JavaScript) y principios de diseño responsivo.",
          "Desarrollo de interfaces basadas en componentes utilizando React y técnicas modernas de CSS.",
          "Integración de gestión de estado cliente con endpoints de APIs backend.",
        ],
        tags: ["JavaScript", "HTML", "CSS", "React", "Responsive UI", "Web APIs"],
      },
    ],
  },
};
