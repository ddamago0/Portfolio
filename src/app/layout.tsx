import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PerimeterRails } from "@/components/layout/perimeter-rails";
import { CyberHudBackground } from "@/components/ui/cyber-hud-background";
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
    default: "Daniel Martínez | Software Developer & Netrunner",
    template: "%s | Daniel Martínez — Software Developer",
  },
  description:
    "Cyberpunk engineering portfolio of Daniel Martínez — Software Developer building modern web applications, robust backend APIs, and high-performance data systems.",
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
    "Netrunner",
  ],
  authors: [{ name: "Daniel Martínez" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    title: "Daniel Martínez | Software Developer & Netrunner",
    description:
      "Cyberpunk engineering portfolio highlighting modern web applications, clean architecture, and high-performance data systems.",
    siteName: "Daniel Martínez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Martínez | Software Developer & Netrunner",
    description:
      "Cyberpunk engineering portfolio highlighting modern web applications, clean architecture, and high-performance data systems.",
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
      <body className="relative min-h-screen flex flex-col bg-background text-foreground antialiased font-sans selection:bg-cyber-yellow selection:text-cyber-black">
        <CyberHudBackground />
        <CustomCursor />
        <SmoothScrollProvider>
          <LanguageProvider>
            <PerimeterRails />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
