"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ImparablesFooter } from "@/components/sections/imparables/ImparablesFooter";
import { Button } from "@/components/ui/Button";
import { ImparablesInterlock, ImparablesBadge } from "@/components/ui/imparables";
import {
  PaperPlaneRight,
  CheckCircle,
  EnvelopeSimple,
  WhatsappLogo,
  MapPin,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1 pt-28 md:pt-36">
        <section className="relative px-6 md:px-12 lg:px-16 py-12 md:py-20 max-w-7xl mx-auto overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#004F9E]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FFB100]/10 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10"
          >
            {/* Left Column: Headline & Direct Contact Info */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <ImparablesBadge theme="dark" className="mb-4">
                  MUNDO IMPARABLES · CONTACTO
                </ImparablesBadge>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
                  Conectemos y hagamos que{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
                    suceda
                  </span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                  ¿Quieres llevar una conferencia a tu empresa, postularte como patrocinador o formar parte de nuestras próximas experiencias? Estamos listos para conversar.
                </p>

                {/* Direct Contact Cards */}
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/584120000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#0E1015] border border-white/12 hover:border-[#FFB100]/40 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <WhatsappLogo size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Atención directa WhatsApp
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FFB100] transition-colors">
                        Iniciar conversación inmediata
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:contacto@imparables.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#0E1015] border border-white/12 hover:border-[#FFB100]/40 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Correo Corporativo
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FFB100] transition-colors">
                        contacto@imparables.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0E1015] border border-white/12">
                    <div className="w-12 h-12 rounded-xl bg-[#FFB100]/10 text-[#FFB100] flex items-center justify-center shrink-0">
                      <MapPin size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Ubicación Central
                      </div>
                      <div className="text-sm font-bold text-white">
                        Puerto Ordaz, Estado Bolívar · Venezuela
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <ImparablesInterlock size="sm" />
                <span className="text-xs text-muted-foreground">
                  Comunidad oficial Imparables · Experiencias de alto impacto
                </span>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-7">
              <div className="rounded-3xl bg-[#0E1015]/95 border border-white/15 p-7 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                {submitted ? (
                  <div className="py-16 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                      <CheckCircle size={40} weight="fill" />
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                      ¡Mensaje recibido con éxito!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
                      Gracias por conectar con Imparables. Nuestro equipo de coordinación se pondrá en contacto contigo a la brevedad.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nombre: "", correo: "", telefono: "", empresa: "", mensaje: "" });
                      }}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3 className="font-display font-bold text-2xl text-white mb-1">
                      Envíanos un mensaje
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                      Completa tus datos y cuéntanos sobre tu interés o proyecto.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Tu nombre y apellido"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FFB100] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.correo}
                          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                          placeholder="tu@correo.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FFB100] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          placeholder="+58 412 000 0000"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FFB100] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                          Empresa o Proyecto
                        </label>
                        <input
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          placeholder="Nombre de tu organización"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FFB100] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                        Mensaje o Consulta *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        placeholder="Cuéntanos en qué formato o propuesta estás interesado..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FFB100] transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-4 mt-2">
                      <PaperPlaneRight size={18} weight="fill" className="mr-2" />
                      <span>Enviar mensaje a coordinación</span>
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <ImparablesFooter />
    </div>
  );
}
