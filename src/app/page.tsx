import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen py-16 flex flex-col justify-center">
      <Container size="md">
        <Card className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Badge variant="accent">Design System Foundation</Badge>
            <Badge variant="success">Phase 2 Ready</Badge>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Design System Showcase
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Fundación visual mínima, sobria y accesible inspirada en productos
              de alta calidad de ingeniería.
            </p>
          </div>

          <div className="pt-4 border-t border-surface-border flex flex-wrap gap-3">
            <Button variant="primary" size="md">
              Primary Action
            </Button>
            <Button variant="secondary" size="md">
              Secondary Action
            </Button>
            <Button variant="outline" size="md">
              Outline
            </Button>
            <Button variant="ghost" size="md">
              Ghost
            </Button>
          </div>
        </Card>
      </Container>
    </main>
  );
}
