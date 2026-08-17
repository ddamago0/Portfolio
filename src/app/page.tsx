"use client";

import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { WhatIBuild } from "@/components/sections/what-i-build";
import { TechStack } from "@/components/sections/tech-stack";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="space-y-12 pb-24">
      {/* Primary Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* What I Build Section */}
      <WhatIBuild />

      {/* Technical Stack Section */}
      <TechStack />

      {/* Journey / Experience Section */}
      <Journey />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
