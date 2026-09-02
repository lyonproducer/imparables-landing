import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ImparablesAbout } from "@/components/sections/imparables/ImparablesAbout";
import { ImparablesFooter } from "@/components/sections/imparables/ImparablesFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros & Andersong Trocel — Imparables",
  description:
    "Conoce la visión, trayectoria e historia detrás de la plataforma Imparables y a su fundador Andersong Trocel.",
};

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1 pt-28 md:pt-36">
        {/* Page Hero Header Banner */}
        <section className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 text-center max-w-4xl mx-auto overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-[#FFB100] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4">
            <svg className="w-3.5 h-3.5 fill-[#FFB100]" viewBox="0 0 256 256" aria-hidden="true">
              <path d="M216,128a88,88,0,0,1-88,88,88,88,0,0,1-88-88,88,88,0,0,1,88-88A88,88,0,0,1,216,128Z" opacity="0.2" />
              <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L90,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z" />
            </svg>
            <span>MUNDO IMPARABLES · NOSOTROS</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            La historia detrás de la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
              plataforma
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Imparables nació de una convicción: los triunfos individuales cobran verdadero sentido cuando inspiran a otros a transformar sus realidades.
          </p>
        </section>

        {/* Main About Component */}
        <ImparablesAbout />

        {/* Navigation Bridge to Formats & Contact */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="rounded-3xl bg-[#0E1015] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Conoce nuestros formatos de experiencia
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Descubre los escenarios y programas que hemos desarrollado para empresas, marcas y comunidades.
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Link
                href="/imparables/eventos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFB100] text-neutral-950 font-bold text-sm hover:bg-[#FFB100]/90 transition-colors w-full md:w-auto"
              >
                <span>Ver formatos</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ImparablesFooter />
    </div>
  );
}
