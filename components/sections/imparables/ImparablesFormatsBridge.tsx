import React from "react";
import Link from "next/link";
import Image from "next/image";

export const ImparablesFormatsBridge: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Graphic: Straight Blue Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/backgrounds/Generar_imagen_lineas_azules_rectas_202609031937.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-[#111111]/90 backdrop-blur-xl border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Conoce nuestros formatos de experiencia
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              Descubre los escenarios y programas que hemos desarrollado para empresas, marcas y comunidades.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto shrink-0">
            <Link
              href="/eventos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFB100] text-neutral-950 font-bold text-sm hover:bg-[#FFB100]/90 transition-colors w-full md:w-auto shadow-sm"
            >
              <span>Ver formatos</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 256 256" aria-hidden="true">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ImparablesNosotrosBridge = ImparablesFormatsBridge;
export default ImparablesFormatsBridge;
