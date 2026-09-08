import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Términos de Servicio — Imparables Nexus",
  description:
    "Términos y condiciones de servicio para el evento conversatorio Imparables Nexus.",
};

export default function TerminosServicioPage() {
  return (
    <div className="min-h-screen bg-[#040d1a] text-slate-100 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Glow ambiental */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-[#004F9E]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/nexus"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver a Imparables Nexus</span>
        </Link>

        <div className="flex items-center gap-3 text-amber-400 font-display text-xs uppercase tracking-widest mb-3">
          <FileText size={20} weight="bold" />
          <span>Documentación Oficial Nexus</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
          Términos de Servicio
        </h1>
        <p className="text-slate-400 text-sm md:text-base mb-12 border-b border-white/10 pb-6">
          Última actualización: 2026. Estos términos regulan el acceso, inscripción y participación en el evento Imparables Nexus organizado por Lyon Incode & Eprisma.
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base">
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al registrarte o asistir a Imparables Nexus, aceptas cumplir con estos Términos de Servicio y con todas las normativas del evento.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">2. Registro y Acreditaciones</h2>
            <p>
              Las entradas y acreditaciones son personales e intransferibles salvo autorización previa del comité organizador. Lyon Incode & Eprisma se reservan el derecho de admisión y permanencia.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido presente en el evento, presentaciones, marcas, materiales y recursos audiovisuales pertenecen a sus respectivos autores y a los organizadores Lyon Incode & Eprisma. Queda prohibida la reproducción comercial no autorizada.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">4. Código de Conducta</h2>
            <p>
              Promovemos un ambiente profesional, respetuoso e inclusivo para todos los líderes, ponentes y asistentes. No se tolerará ningún comportamiento inapropiado o disruptivo.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">5. Modificaciones y Contacto</h2>
            <p>
              Nos reservamos el derecho de modificar el cronograma o los presentes términos si las circunstancias lo requieren. Para cualquier duda o requerimiento, contáctanos vía WhatsApp al{" "}
              <a
                href="https://wa.me/584220160021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-semibold underline hover:text-amber-300"
              >
                +58 422-0160021
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
