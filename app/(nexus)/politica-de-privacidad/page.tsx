import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Políticas de Privacidad — Imparables Nexus",
  description:
    "Políticas de privacidad y protección de datos para los asistentes y usuarios de Imparables Nexus.",
};

export default function PoliticaPrivacidadPage() {
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

        <div className="flex items-center gap-3 text-sky-400 font-display text-xs uppercase tracking-widest mb-3">
          <ShieldCheck size={20} weight="bold" />
          <span>Documentación Oficial Nexus</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
          Políticas de Privacidad
        </h1>
        <p className="text-slate-400 text-sm md:text-base mb-12 border-b border-white/10 pb-6">
          Última actualización: 2026. Esta política describe cómo Lyon Incode & Eprisma recopilan, utilizan y protegen la información en Imparables Nexus.
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base">
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">1. Recopilación de Información</h2>
            <p>
              Recopilamos información personal que proporcionas voluntariamente al registrarte en Imparables Nexus, como tu nombre, correo electrónico, empresa, cargo y número telefónico de contacto.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">2. Uso de la Información</h2>
            <p className="mb-3">
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
              <li>Gestionar tu acreditación y acceso al evento.</li>
              <li>Enviar confirmaciones, recordatorios y actualizaciones sobre el cronograma.</li>
              <li>Facilitar la interacción en el espacio de networking empresarial.</li>
              <li>Mejorar futuras ediciones del conversatorio Imparables Nexus.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">3. Protección y Confidencialidad</h2>
            <p>
              Implementamos medidas de seguridad administrativas y tecnológicas para proteger tus datos contra accesos no autorizados. No vendemos ni compartimos tu información con terceros sin tu previo consentimiento.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">4. Derechos del Usuario</h2>
            <p>
              Tienes derecho a solicitar la actualización, rectificación o eliminación de tus datos personales de nuestras bases de datos en cualquier momento contactando a nuestro equipo.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4">5. Contacto</h2>
            <p>
              Si tienes preguntas sobre nuestras políticas de privacidad, contáctanos directamente a través de nuestro soporte oficial vía WhatsApp al{" "}
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
