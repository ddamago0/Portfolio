import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="space-y-24 py-12">
      {/* Placeholder Intro */}
      <section className="py-12">
        <Container size="lg">
          <Card className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Fase 3</Badge>
              <Badge variant="outline">Global Layout &amp; Navigation</Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Fundación de Navegación Global
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
              Estructura global con Navbar sticky responsivo, desplazamiento suave por anclas,
              soporte de accesibilidad y Footer institucional sobrio.
            </p>
          </Card>
        </Container>
      </section>

      {/* Placeholders de secciones para probar la navegación de anclas */}
      <section id="work" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Sección Placeholder: #work — Proyectos]
          </div>
        </Container>
      </section>

      <section id="about" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Sección Placeholder: #about — Sobre mí]
          </div>
        </Container>
      </section>

      <section id="stack" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Sección Placeholder: #stack — Stack Técnico]
          </div>
        </Container>
      </section>

      <section id="journey" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Sección Placeholder: #journey — Trayectoria]
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-20 py-8">
        <Container size="lg">
          <div className="border border-dashed border-surface-border rounded-xl p-8 text-center text-xs font-mono text-muted-foreground">
            [Sección Placeholder: #contact — Contacto]
          </div>
        </Container>
      </section>
    </main>
  );
}
