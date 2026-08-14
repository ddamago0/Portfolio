import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="space-y-20 pb-24">
      {/* Primary Hero Section */}
      <Hero />

      {/* Anchor Navigation Section Placeholders */}
      <section id="work" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Placeholder Section: #work — Work]
          </div>
        </Container>
      </section>

      <section id="about" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Placeholder Section: #about — About]
          </div>
        </Container>
      </section>

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
