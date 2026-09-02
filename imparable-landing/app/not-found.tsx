import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-background text-foreground">
      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/15 text-accent font-mono text-xs font-semibold uppercase">
        Error 404
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-3">
        Página no encontrada
      </h1>
      <p className="text-muted-foreground text-base max-w-md mb-8">
        La página que buscas no existe o ha sido reubicada.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/nexus">
          <Button variant="primary" size="md">
            Ir a Nexus
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" size="md">
            Ir a Imparables
          </Button>
        </Link>
      </div>
    </main>
  );
}
