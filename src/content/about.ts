export interface PillarItem {
  id: string;
  badge: string;
  title: string;
  description: string;
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

export const aboutContent: AboutContent = {
  sectionBadge: "About",
  sectionTitle: "Software engineering focused on AI tools, data pipelines, and clean architecture.",
  paragraphs: [
    "I am an AI Engineer & Software Developer dedicated to building practical, reliable software systems. My work centers on developing artificial intelligence tools, processing large datasets, and optimizing language model consumption.",
    "Rather than relying on superficial abstractions or decorative trends, I prioritize clean software design, strict type safety, data validation, and predictable API contracts.",
  ],
  pillarsBadge: "Capabilities",
  pillarsTitle: "What I Build",
  pillarsDescription: "Core technical pillars defining my software development approach.",
  pillars: [
    {
      id: "ai-tools",
      badge: "AI Systems",
      title: "AI Tools & LLM Systems",
      description:
        "Semantic search, prompt evaluation, token metrics, and local/remote model integrations.",
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
      highlights: [
        "Performant interfaces built with Next.js App Router.",
        "Strict TypeScript types and accessible UI primitives.",
        "Responsive layouts designed for 320px to large displays.",
      ],
    },
  ],
};
