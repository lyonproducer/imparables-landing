"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { PaperPlaneRight, CheckCircle, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";
import { fadeUpVariant } from "@/lib/motion/motion-variants";

export const ImparablesCommunity: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
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
    <section
      id="comunidad"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background-elevated/30 border-t border-white/10 overflow-hidden"
    >
      {/* Background Pattern Image */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/backgrounds/nexus-lines-pattern.jpg"
          alt="Lines Pattern Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading
          kicker="COMUNIDAD & CONTACTO"
          title="Hagamos que algo pase"
          subtitle="Ser imparable no significa hacerlo todo solo. Nuestra comunidad conecta a quienes deciden aprender, crecer y construir realidades diferentes."
          align="center"
          className="mb-14"
        />

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          className="rounded-3xl bg-[#0E1015]/95 border border-white/15 p-8 sm:p-12 shadow-2xl backdrop-blur-xl imparables-corner-accent relative overflow-hidden"
        >
          {/* Ambient subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#004F9E]/15 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 relative z-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 text-accent flex items-center justify-center mb-5 shadow-lg shadow-accent/10">
                  <CheckCircle size={36} weight="fill" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <ImparablesInterlock size="sm" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                    Confirmación
                  </span>
                </div>
                <h4 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                  ¡Mensaje enviado con éxito!
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                  Gracias por ponerte en contacto con el equipo de Imparables. Revisaremos tu mensaje y te responderemos a la brevedad.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="text-sm border-white/20 hover:bg-white/10 cursor-pointer"
                >
                  Enviar otro mensaje
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre-imp" className="text-xs md:text-sm font-semibold text-foreground">
                    Nombre completo <span className="text-accent">*</span>
                  </label>
                  <input
                    id="nombre-imp"
                    required
                    type="text"
                    placeholder="Tu nombre y apellido"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="correo-imp" className="text-xs md:text-sm font-semibold text-foreground flex items-center gap-1.5">
                      <EnvelopeSimple size={15} weight="duotone" className="text-accent" />
                      <span>Correo electrónico <span className="text-accent">*</span></span>
                    </label>
                    <input
                      id="correo-imp"
                      required
                      type="email"
                      placeholder="tu@correo.com"
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="telefono-imp" className="text-xs md:text-sm font-semibold text-foreground flex items-center gap-1.5">
                      <WhatsappLogo size={15} weight="duotone" className="text-accent" />
                      <span>Teléfono / WhatsApp <span className="text-accent">*</span></span>
                    </label>
                    <input
                      id="telefono-imp"
                      required
                      type="tel"
                      placeholder="+58 414 0000000"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="empresa-imp" className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-between">
                    <span>Empresa, marca o proyecto</span>
                    <span className="text-xs text-muted-foreground font-normal">Opcional</span>
                  </label>
                  <input
                    id="empresa-imp"
                    type="text"
                    placeholder="Nombre de tu emprendimiento u organización"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="mensaje-imp" className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-between">
                    <span>¿En qué formato o iniciativa te gustaría participar?</span>
                    <span className="text-xs text-muted-foreground font-normal">Opcional</span>
                  </label>
                  <textarea
                    id="mensaje-imp"
                    rows={4}
                    placeholder="Cuéntanos si tienes interés en ser parte de una experiencia, patrocinar, llevar una formación a tu empresa..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-y placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<PaperPlaneRight size={18} weight="fill" />}
                    className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 cursor-pointer"
                  >
                    Enviar solicitud
                  </Button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
