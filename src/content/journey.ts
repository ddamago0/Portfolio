export interface JourneyItem {
  id: string;
  period: string;
  roleOrMilestone: string;
  context: string;
  description: string;
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

export const journeyContent: JourneyContent = {
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
      keyLearningsOrHighlights: [
        "Mastered core web fundamentals (HTML, CSS, JavaScript) and responsive design principles.",
        "Developed component-driven interfaces using React and modern CSS techniques.",
        "Integrated client-side state management with backend API endpoints.",
      ],
      tags: ["JavaScript", "HTML", "CSS", "React", "Responsive UI", "Web APIs"],
    },
  ],
};
