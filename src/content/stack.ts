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

export const stackContent: StackContent = {
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
};
