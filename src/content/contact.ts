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

export const contactContent: ContactContent = {
  sectionBadge: "Get In Touch",
  sectionTitle: "Let's build something together.",
  sectionDescription:
    "Open for software engineering opportunities, AI tool development, and backend/data engineering projects.",
  statusBadge: "Status",
  statusMessage: "Available for new projects & opportunities",
  email: "contact@example.com",
  emailCtaLabel: "Send an Email",
  socials: [
    {
      platform: "GitHub",
      label: "GitHub Profile",
      url: "https://github.com",
    },
    {
      platform: "LinkedIn",
      label: "LinkedIn Profile",
      url: "https://linkedin.com",
    },
  ],
};
