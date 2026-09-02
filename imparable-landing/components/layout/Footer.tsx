import React from "react";
import Link from "next/link";
import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  LinkedinLogo,
  ArrowUp,
} from "@phosphor-icons/react/dist/ssr";
import { eventConfig } from "@/lib/content/event.config";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background-elevated border-t border-border pt-16 pb-12 overflow-hidden">
      {/* Glow ambiental de fondo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 bg-primary/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/80">
          {/* Columna Principal: Marca y Tagline */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center bg-accent text-accent-foreground font-black text-sm px-2 py-0.5 rounded-md tracking-tight">
                im
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                parables
              </span>
              <span className="text-[11px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 rounded bg-primary/30 text-accent border border-primary/40">
                NEXUS
              </span>
            </div>

            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {eventConfig.aboutImparables.tagline}
            </p>

            <p className="text-xs text-muted-foreground/70">
              Un encuentro dedicado a explorar cómo la inteligencia artificial y
              la tecnología están transformando el mundo empresarial.
            </p>
          </div>

          {/* Columna Enlaces de Navegación */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#hero"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre-el-evento"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Sobre el evento
                </a>
              </li>
              <li>
                <a
                  href="#temas"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Temas clave
                </a>
              </li>
              <li>
                <a
                  href="#ponentes"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Ponentes
                </a>
              </li>
              <li>
                <a
                  href="#agenda"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#aliados"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Aliados
                </a>
              </li>
              <li>
                <a
                  href="#registro"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Pre-registro
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Redes Sociales */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Conecta con nosotros
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Imparables"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <InstagramLogo size={20} weight="regular" aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Imparables"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <TiktokLogo size={20} weight="regular" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de Imparables"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <YoutubeLogo size={20} weight="regular" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Imparables"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LinkedinLogo size={20} weight="regular" aria-hidden="true" />
              </a>
            </div>

            <p className="text-xs text-accent font-display font-semibold tracking-wider uppercase mt-2">
              CONECTA · APRENDE · INSPIRA · AVANZA
            </p>
          </div>
        </div>

        {/* Barra inferior de copyright y volver arriba */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Imparables. Todos los derechos reservados.</p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span>Volver arriba</span>
            <ArrowUp size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
