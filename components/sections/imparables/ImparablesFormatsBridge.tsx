import React from "react";
import Link from "next/link";

export const ImparablesFormatsBridge: React.FC = () => {
  return (
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
            href="/eventos"
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
  );
};

export const ImparablesNosotrosBridge = ImparablesFormatsBridge;
export default ImparablesFormatsBridge;
