export interface HeroStatusItem {
  label: string;
  value: string;
  isActive?: boolean;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  statusPanel: {
    title: string;
    items: HeroStatusItem[];
  };
}

export const heroContent: HeroContent = {
  badge: "AI & SOFTWARE SYSTEMS",
  title: "AI Engineer & Software Developer building intelligent software, AI tools and data-processing systems.",
  description:
    "Software development focused on building artificial intelligence tools, data-processing pipelines, and token consumption optimization.",
  primaryCta: {
    label: "View Projects",
    href: "#work",
  },
  secondaryCta: {
    label: "GitHub",
    href: "https://github.com",
    isExternal: true,
  },
  statusPanel: {
    title: "System Status",
    items: [
      { label: "Role", value: "AI Engineer / Software Developer" },
      { label: "Focus", value: "AI Tools & Data Pipelines" },
      { label: "Stack", value: "Python · TypeScript · LLMs" },
      { label: "Status", value: "Available for projects", isActive: true },
    ],
  },
};
