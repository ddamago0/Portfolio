export type Language = "en" | "es";

// Hero Types
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

// Project Types
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

// About & What I Build Types
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

// Stack Types
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

// Journey Types
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

// Contact Types
export interface SocialLink {
  platform: string;
  label: string;
  url: string;
}

export interface ContactContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionDescription: string;
  statusBadge: string;
  statusMessage: string;
  email: string;
  emailCtaLabel: string;
  socials: SocialLink[];
}
