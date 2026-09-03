"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { PaperPlaneRight, CheckCircle, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";
import { ScrollExpand } from "@/components/ui/ScrollExpand";

export const ImparablesCommunity: React.FC = () => {
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
    <section id="comunidad" className="relative w-full bg-background">
      <ScrollExpand
        src="/banner/imparables-banner-bg.jpeg"
        mediaType="image"
        alt="Imparables Banner"
        useWindowScroll={true}
        startWidth={36}
        startHeight={48}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.25}
        scrollDistance={3.2}
        holdDistance={1.2}
        overlayScrim={0.75}
        scrollHint="Desliza para contactarnos"
        title={
          <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#0E1015]/95 shadow-2xl border border-white/20 backdrop-blur-xl text-center max-w-sm mx-auto hover:scale-105 transition-transform duration-300 overflow-hidden">
            {/* Decorative track lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cardLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004F9E" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#004F9E" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="cardAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFB100" stopOpacity="0.0" />
                  <stop offset="50%" stopColor="#FFB100" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFB100" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M -40 ${40 + i * 50} Q 140 ${-20 + i * 50} 310 ${70 + i * 50} T 450 ${140 + i * 50}`}
                  stroke="url(#cardLineGrad)"
                  strokeOpacity={0.2 + i * 0.05}
                  strokeWidth="18"
                  fill="none"
                />
              ))}
              <path
                d="M -50 240 C 60 190, 110 295, 200 230 S 340 130, 460 160"
                stroke="url(#cardAccentGrad)"
                strokeWidth="1.5"
                strokeDasharray="5 3"
                fill="none"
              />
              <circle cx="200" cy="230" r="2.5" fill="#FFB100" opacity="0.6" />
            </svg>

            <div className="relative z-10 h-10 w-44 sm:h-12 sm:w-56 mb-3">
              <Image
                src="/logo/imparables-light.png"
                alt="Imparables Logo"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
            <span className="relative z-10 text-xs font-mono font-bold uppercase tracking-widest text-[#FFB100]">
              COMUNIDAD & CONTACTO
            </span>
          </div>
        }
      >
        {/* Full-bleed expanded Form Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <SectionHeading
            kicker="COMUNIDAD & CONTACTO"
            title="Hagamos que algo pase"
            subtitle="Ser imparable no significa hacerlo todo solo. Nuestra comunidad conecta a quienes deciden aprender, crecer y construir realidades diferentes."
            align="center"
            className="mb-6 text-white"
          />

          <div className="rounded-3xl bg-[#0E1015]/90 border border-white/15 p-5 sm:p-8 shadow-2xl backdrop-blur-xl imparables-corner-accent relative overflow-hidden text-left">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#004F9E]/20 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8 relative z-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FFB100]/20 border border-[#FFB100]/30 text-[#FFB100] flex items-center justify-center mb-5 shadow-lg shadow-[#FFB100]/10">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <ImparablesInterlock size="sm" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFB100]">
                      Confirmación
                    </span>
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-3">
                    ¡Mensaje enviado con éxito!
                  </h4>
                  <p className="text-white/70 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                    Gracias por ponerte en contacto con el equipo de Imparables. Revisaremos tu mensaje y te responderemos a la brevedad.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="text-sm border-white/20 text-white hover:bg-white/10 cursor-pointer"
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre-imp" className="text-xs md:text-sm font-semibold text-white">
                      Nombre completo <span className="text-[#FFB100]">*</span>
                    </label>
                    <input
                      id="nombre-imp"
                      required
                      type="text"
                      placeholder="Tu nombre y apellido"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#FFB100] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB100]/20 transition-all placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="correo-imp" className="text-xs md:text-sm font-semibold text-white flex items-center gap-1.5">
                        <EnvelopeSimple size={15} weight="duotone" className="text-[#FFB100]" />
                        <span>Correo electrónico <span className="text-[#FFB100]">*</span></span>
                      </label>
                      <input
                        id="correo-imp"
                        required
                        type="email"
                        placeholder="tu@correo.com"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#FFB100] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB100]/20 transition-all placeholder:text-white/40"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefono-imp" className="text-xs md:text-sm font-semibold text-white flex items-center gap-1.5">
                        <WhatsappLogo size={15} weight="duotone" className="text-[#FFB100]" />
                        <span>Teléfono / WhatsApp <span className="text-[#FFB100]">*</span></span>
                      </label>
                      <input
                        id="telefono-imp"
                        required
                        type="tel"
                        placeholder="+58 414 0000000"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#FFB100] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB100]/20 transition-all placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="empresa-imp" className="text-xs md:text-sm font-semibold text-white flex items-center justify-between">
                      <span>Empresa, marca o proyecto</span>
                      <span className="text-xs text-white/50 font-normal">Opcional</span>
                    </label>
                    <input
                      id="empresa-imp"
                      type="text"
                      placeholder="Nombre de tu emprendimiento u organización"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#FFB100] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB100]/20 transition-all placeholder:text-white/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensaje-imp" className="text-xs md:text-sm font-semibold text-white flex items-center justify-between">
                      <span>¿En qué formato o iniciativa te gustaría participar?</span>
                      <span className="text-xs text-white/50 font-normal">Opcional</span>
                    </label>
                    <textarea
                      id="mensaje-imp"
                      rows={3}
                      placeholder="Cuéntanos si tienes interés en ser parte de una experiencia, patrocinar, llevar una formación a tu empresa..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#FFB100] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB100]/20 transition-all resize-y placeholder:text-white/40"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<PaperPlaneRight size={18} weight="fill" />}
                      className="w-full sm:w-auto bg-[#FFB100] text-neutral-950 font-bold hover:bg-[#FFB100]/90 shadow-lg shadow-[#FFB100]/20 cursor-pointer"
                    >
                      Enviar solicitud
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
};

export default ImparablesCommunity;
