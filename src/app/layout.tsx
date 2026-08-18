import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AmbientBackground } from "@/components/ui/ambient-background";
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
    default: "Daniel Martínez | Software Developer & Engineer",
    template: "%s | Daniel Martínez — Software Developer",
  },
  description:
    "Engineering portfolio of Daniel Martínez — Software Developer building modern web applications, robust backend APIs, and data pipelines.",
  keywords: [
    "Software Developer",
    "Software Engineer",
    "Full-Stack",
    "Python",
    "TypeScript",
    "FastAPI",
    "React",
    "Next.js",
    "Clean Architecture",
    "Data Pipelines",
  ],
  authors: [{ name: "Daniel Martínez" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    title: "Daniel Martínez | Software Developer & Engineer",
    description:
      "Engineering portfolio highlighting modern web applications, clean architecture, and data pipelines.",
    siteName: "Daniel Martínez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Martínez | Software Developer & Engineer",
    description:
      "Engineering portfolio highlighting modern web applications, clean architecture, and data pipelines.",
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
      <body className="relative min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <AmbientBackground />
        <CustomCursor />
        <SmoothScrollProvider>
          <LanguageProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
