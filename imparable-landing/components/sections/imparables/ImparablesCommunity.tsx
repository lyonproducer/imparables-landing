"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { UsersThree, PaperPlaneRight, CheckCircle } from "@phosphor-icons/react";
import { fadeUpVariant } from "@/lib/motion/motion-variants";

export const ImparablesCommunity: React.FC = () => {
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
      className="relative py-20 md:py-32 bg-background-elevated/40 border-t border-border overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="COMUNIDAD & CONTACTO"
          title="Hagamos que algo pase"
          subtitle="Ser imparable no significa hacerlo todo solo. Nuestra comunidad conecta a quienes deciden aprender, crecer y construir realidades diferentes."
          align="center"
          className="mb-12"
        />

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
        >
          <GlassCard className="p-8 sm:p-12 border-white/15">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                    ¡Mensaje enviado con éxito!
                  </h4>
                  <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
                    Gracias por ponerte en contacto con el equipo de Imparables. Revisaremos tu mensaje y te responderemos a la brevedad.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="text-sm"
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
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
                      className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="correo-imp" className="text-xs md:text-sm font-semibold text-foreground">
                        Correo electrónico <span className="text-accent">*</span>
                      </label>
                      <input
                        id="correo-imp"
                        required
                        type="email"
                        placeholder="tu@correo.com"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefono-imp" className="text-xs md:text-sm font-semibold text-foreground">
                        Teléfono / WhatsApp <span className="text-accent">*</span>
                      </label>
                      <input
                        id="telefono-imp"
                        required
                        type="tel"
                        placeholder="+58 414 0000000"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
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
                      className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensaje-imp" className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-between">
                      <span>¿Cómo podemos ayudarte o en qué te gustaría participar?</span>
                      <span className="text-xs text-muted-foreground font-normal">Opcional</span>
                    </label>
                    <textarea
                      id="mensaje-imp"
                      rows={3}
                      placeholder="Cuéntanos si tienes interés en ser parte de una experiencia, patrocinar, llevar una formación a tu empresa..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<PaperPlaneRight size={18} weight="bold" />}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Enviar mensaje
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
