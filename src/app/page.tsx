import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { WhatIBuild } from "@/components/sections/what-i-build";
import { Container } from "@/components/ui/container";

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

      {/* Remaining Section Placeholders for Anchor Navigation */}
      <section id="stack" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Placeholder Section: #stack — Technical Stack]
          </div>
        </Container>
      </section>

      <section id="journey" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Placeholder Section: #journey — Journey]
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Placeholder Section: #contact — Contact]
          </div>
        </Container>
      </section>
    </main>
  );
}
