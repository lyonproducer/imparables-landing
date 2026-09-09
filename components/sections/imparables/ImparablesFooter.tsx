"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImparablesInterlock } from "@/components/ui/imparables";
import {
  InstagramLogo,
  YoutubeLogo,
  EnvelopeSimple,
  ArrowUp,
  ArrowUpRight,
  Sparkle,
} from "@phosphor-icons/react";
import WarpText from "@/components/ui/WarpText";
import { trackWorldSwitch, trackContactClick } from "@/lib/analytics";

export const ImparablesFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030f1c] border-t border-white/10 pt-16 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
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
              <span className="text-[11px] font-sans font-bold text-accent uppercase tracking-[0.08em]">
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
                <Link href="/#esencia" className="hover:text-accent transition-colors">
                  Nuestra Esencia & Pilares
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-accent transition-colors">
                  Nosotros & Andersong Trocel
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-accent transition-colors">
                  Formatos & Trayectoria
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Comunidad & Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Portal Mundo Nexus Card */}
          <div className="lg:col-span-4 relative flex flex-col gap-3.5 p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#091528] via-[#060e1c] to-[#030a14] border border-sky-400/25 shadow-2xl shadow-sky-950/60 overflow-hidden group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/15 blur-3xl rounded-full pointer-events-none group-hover:bg-sky-500/25 transition-all duration-700" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#FFB100]/10 blur-3xl rounded-full pointer-events-none" />

            {/* NEXUS Animated Hero Effect */}
            <div className="relative z-10 w-full h-14 sm:h-16 flex items-center justify-center -my-1">
              <WarpText
                text="NEXUS"
                color="#ffffff"
                warpStrength={0.08}
                warpScale={1.6}
                speed={0.3}
                pointerInfluence={0.5}
                pointerStrength={0.65}
                refraction={0.024}
                strokeWidth={3.5}
                ripple
                fontSize="clamp(2.2rem, 6vw, 3rem)"
                fontWeight={950}
                letterSpacing="0.1em"
                style={{ height: "100%", width: "100%" }}
              />
            </div>

            <p className="relative z-10 text-xs text-neutral-300 leading-relaxed">
              Estamos cocinando la experiencia tecnológica del año en la región: Inteligencia Artificial, sistemas y negocios de alto impacto. Descubre la propuesta y asegura tu acceso en preventa.
            </p>

            <Link
              href="/nexus"
              onClick={() => trackWorldSwitch("nexus", "imparables_footer_card")}
              className="relative z-10 inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-accent text-neutral-950 font-bold text-sm shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-accent/35 active:scale-[0.98] transition-all cursor-pointer mt-1 group/btn"
            >
              <span>Explorar Mundo Nexus</span>
              <ArrowUpRight size={16} weight="bold" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
              onClick={() => trackContactClick("instagram", "https://www.instagram.com/imparables.ia/")}
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("youtube", "https://youtube.com")}
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <YoutubeLogo size={18} weight="fill" />
            </a>

            <a
              href="mailto:Imparablesve@gmail.com"
              onClick={() => trackContactClick("email", "Imparablesve@gmail.com")}
              className="p-2 rounded-xl bg-white/5 hover:text-accent hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Email"
              title="Imparablesve@gmail.com"
            >
              <EnvelopeSimple size={18} weight="fill" />
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
