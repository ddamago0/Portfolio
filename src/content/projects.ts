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

export const projectsContent: Project[] = [
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
    repoUrl: "https://github.com", // Placeholder
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
    repoUrl: "https://github.com", // Placeholder
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
    repoUrl: "https://github.com", // Placeholder
  },
];
