import React from "react";
import { ImparablesInterlock } from "@/components/ui/imparables";

export const ImparablesAboutHero: React.FC = () => {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 text-center max-w-4xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center gap-2 mb-4">
        <ImparablesInterlock size="sm" />
        <span className="text-xs font-sans font-bold tracking-[0.08em] text-[#FFB100] uppercase">
          MUNDO IMPARABLES · NOSOTROS
        </span>
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
  );
};

export const ImparablesNosotrosHero = ImparablesAboutHero;
export default ImparablesAboutHero;
