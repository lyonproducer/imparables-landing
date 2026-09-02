"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  LinkedinLogo,
  ArrowUp,
  Sparkle,
} from "@phosphor-icons/react";

export const ImparablesFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/imparables" className="flex items-center gap-2 w-fit">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center justify-center bg-accent text-accent-foreground font-black text-sm px-2 py-0.5 rounded-md">
                  im
                </span>
                <span className="font-display font-bold text-xl tracking-tight text-foreground">
                  parables
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Plataforma de experiencias, formación y encuentros que conecta personas, ideas y oportunidades para impulsar el crecimiento personal y empresarial.
            </p>

            <div className="pt-2 text-xs font-mono font-semibold tracking-widest text-accent uppercase">
              Conecta · Aprende · Inspira · Avanza
            </div>
          </div>

          {/* Nav Links Mundo Imparables */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">
              Mundo Imparables
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-accent transition-colors">
                  Nosotros & Andersong Trocel
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-accent transition-colors">
                  Formatos & Trayectoria
                </a>
              </li>
              <li>
                <a href="#aliados" className="hover:text-accent transition-colors">
                  Alianzas Estratégicas
                </a>
              </li>
              <li>
                <a href="#comunidad" className="hover:text-accent transition-colors">
                  Comunidad & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Portal Mundo Nexus */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-accent" />
              Mundo Nexus 2026
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Descubre la landing dedicada a nuestro conversatorio sobre Inteligencia Artificial, sistemas y tecnología aplicada a empresas.
            </p>
            <Link
              href="/nexus"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-primary/20 text-foreground border border-primary/40 hover:bg-primary/30 hover:border-accent/50 transition-all w-fit mt-1"
            >
              <span>Ir a Imparables Nexus</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Imparables. Todos los derechos reservados.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-foreground/80">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-accent hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-accent hover:bg-white/10 transition-colors"
              aria-label="TikTok"
            >
              <TiktokLogo size={18} weight="fill" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-accent hover:bg-white/10 transition-colors"
              aria-label="YouTube"
            >
              <YoutubeLogo size={18} weight="fill" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-accent hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={18} weight="fill" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer ml-2"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
