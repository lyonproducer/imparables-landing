"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImparablesInterlock } from "@/components/ui/imparables";
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
    <footer className="relative bg-[#07090D] border-t border-white/10 pt-16 pb-36 md:pb-44 lg:pb-48 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-40 bg-[#004F9E]/08 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative h-7 w-32">
                <Image
                  src="/logo/imparables-light.png"
                  alt="Imparables"
                  fill
                  sizes="140px"
                  className="object-contain object-left group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-normal">
              Plataforma de experiencias, formación y encuentros que conecta personas, ideas y oportunidades para impulsar el crecimiento personal y empresarial.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <ImparablesInterlock size="sm" />
              <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest">
                Puerto Ordaz, Venezuela
              </span>
            </div>
          </div>

          {/* Nav Links Mundo Imparables */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-sm text-foreground uppercase tracking-wider">
              Mundo Imparables
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#esencia" className="hover:text-accent transition-colors">
                  Nuestra Esencia & Pilares
                </Link>
              </li>
              <li>
                <Link href="/imparables/nosotros" className="hover:text-accent transition-colors">
                  Nosotros & Andersong Trocel
                </Link>
              </li>
              <li>
                <Link href="/imparables/eventos" className="hover:text-accent transition-colors">
                  Formatos & Trayectoria
                </Link>
              </li>
              <li>
                <Link href="/imparables/contacto" className="hover:text-accent transition-colors">
                  Comunidad & Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Portal Mundo Nexus */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-sm text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Sparkle size={15} weight="fill" className="text-accent" />
              Mundo Nexus 2026
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Descubre la landing dedicada a nuestro conversatorio sobre Inteligencia Artificial, sistemas y tecnología aplicada a empresas.
            </p>
            <Link
              href="/nexus"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-primary/20 text-foreground border border-primary/40 hover:bg-primary/30 hover:border-accent/50 transition-all w-fit mt-1 cursor-pointer"
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
          <div className="flex items-center gap-3 text-foreground/80">
            <a
              href="https://www.instagram.com/imparables.ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="TikTok"
            >
              <TiktokLogo size={18} weight="fill" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <YoutubeLogo size={18} weight="fill" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={18} weight="fill" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer ml-2"
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
