import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Engineer & Software Developer | Portfolio",
    template: "%s | AI Engineer & Software Developer",
  },
  description:
    "Professional engineering portfolio of AI Engineer & Software Developer building intelligent software, AI tools, data-processing pipelines, and token optimization systems.",
  keywords: [
    "AI Engineer",
    "Software Developer",
    "Python",
    "TypeScript",
    "FastAPI",
    "React",
    "Next.js",
    "Clean Architecture",
    "Token Optimization",
    "LLM Systems",
    "Data Pipelines",
  ],
  authors: [{ name: "AI Engineer & Software Developer" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    title: "AI Engineer & Software Developer | Portfolio",
    description:
      "Software engineering portfolio highlighting AI tools, semantic search, data ingestion pipelines, and clean architecture.",
    siteName: "AI Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer & Software Developer | Portfolio",
    description:
      "Software engineering portfolio highlighting AI tools, semantic search, data ingestion pipelines, and clean architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <LanguageProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
