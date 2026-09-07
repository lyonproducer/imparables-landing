"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ArrowUpRight, Sparkle, ShieldCheck, Ticket, Broadcast, Clock } from "@phosphor-icons/react";
import { eventConfig, TicketTier } from "@/lib/content/event.config";
import { staggerContainer, fadeUpVariant, scaleUpVariant } from "@/lib/motion/motion-variants";

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<"USDT" | "BCV">("USDT");
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="entradas"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#06090f] text-foreground border-t border-white/10 overflow-hidden"
    >
      {/* Rich multi-layer ambient background — gives glassmorphism visual context to refract against */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Primary blue orb — top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#004F9E]/30 blur-[140px] rounded-full" />
        {/* Secondary blue orb — bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#0066CC]/20 blur-[160px] rounded-full" />
        {/* Amber accent orb — bottom right */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-[#FFB100]/18 blur-[140px] rounded-full" />
        {/* Deep indigo orb — top left */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#1a3a6b]/35 blur-[120px] rounded-full" />
        {/* Diagonal gradient wash for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d]/20 via-transparent to-[#FFB100]/5" />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        {/* Subtle top vignette */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06090f] to-transparent" />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06090f] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ================= SECTION HEADER (IMAGE 2 STRUCTURE) ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Ticket size={18} weight="duotone" className="text-[#FFB100]" />
            <span className="text-xs font-sans font-bold tracking-[0.15em] text-[#FFB100] uppercase">
              ENTRADAS & PREVENTA
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.12] tracking-tight mb-5"
          >
            Asegura tu lugar en el encuentro{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#FFB100]">
              empresarial del año
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Tarifas preferenciales por fases en USDT y tasa oficial BCV. Cupos limitados para la experiencia presencial en Puerto Ordaz.
          </motion.p>

          {/* Currency Toggle (USDT vs BCV) */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="inline-flex items-center p-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg"
          >
            <button
              type="button"
              onClick={() => setCurrency("USDT")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                currency === "USDT"
                  ? "bg-[#004F9E] text-white shadow-md shadow-blue-500/25"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Dólares / USDT
            </button>
            <button
              type="button"
              onClick={() => setCurrency("BCV")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                currency === "BCV"
                  ? "bg-[#004F9E] text-white shadow-md shadow-blue-500/25"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Bolívares (Tasa BCV)
            </button>
          </motion.div>
        </div>

        {/* ================= 3-TIER PRICING CARDS (MATCHING IMAGE 2 LAYOUT) ================= */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-5"
        >
          {eventConfig.tickets.map((tier: TicketTier) => {
            const isHighlighted = tier.isFeatured;

            // Formatted price string based on toggle
            const primaryPrice = currency === "USDT" ? `${tier.priceUsdt} USDT` : `${tier.priceBcv} BCV`;
            const secondaryPrice =
              currency === "USDT"
                ? `Equivalente: ${tier.priceBcv} BCV (Tasa Oficial)`
                : `Equivalente: ${tier.priceUsdt} USDT`;

            if (isHighlighted) {
              /* ================= HIGHLIGHTED CARD (IMAGE 2 RIGHT CARD ILLUMINATED STYLE) ================= */
              return (
                <motion.div
                  key={tier.id}
                  variants={scaleUpVariant}
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  className="relative flex flex-col justify-between p-8 sm:p-10 rounded-[2rem] bg-[#E8F1FA] text-[#081528] border-2 border-white shadow-2xl shadow-blue-500/20 transition-all duration-300 group"
                >
                  {/* Floating Pill Ribbon */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-8 px-4 py-1.5 rounded-full bg-[#004F9E] text-white border border-blue-400/40 font-sans font-bold text-xs tracking-wider uppercase shadow-lg shadow-blue-900/30 flex items-center gap-1.5 z-10 whitespace-nowrap">
                      <Sparkle size={13} weight="fill" className="text-[#FFB100]" />
                      <span>{tier.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Tier Plan Title */}
                    <div className="text-xs font-sans font-bold tracking-[0.14em] uppercase text-[#004F9E] mb-2">
                      {tier.name}
                    </div>

                    {/* Big Price Display */}
                    <div className="flex items-baseline gap-1 mt-3 mb-1">
                      <span className="font-display font-black text-4xl sm:text-5xl text-[#081528] tracking-tight">
                        {primaryPrice}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-neutral-600 mb-4">
                      {secondaryPrice}
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-sm font-normal text-neutral-700 leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    {/* Action Button (Image 2 Deep Navy Button) */}
                    <a
                      href={tier.ctaLink}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#004F9E] hover:bg-[#003875] text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 mb-8 cursor-pointer"
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowUpRight size={16} weight="bold" />
                    </a>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-neutral-300/80 mb-6" />

                    {/* Checklist Header */}
                    <div className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-800 mb-4">
                      ¿Qué incluye esta entrada?
                    </div>

                    {/* Features Checklist */}
                    <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-neutral-800">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle size={18} weight="fill" className="text-[#004F9E] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust Footer */}
                  <div className="mt-8 pt-4 border-t border-neutral-300/60 flex items-center gap-2 text-[11px] font-medium text-neutral-600">
                    <ShieldCheck size={16} weight="duotone" className="text-[#004F9E] shrink-0" />
                    <span>Pago verificado por Rumbapp · Entrada digital instantánea</span>
                  </div>
                </motion.div>
              );
            }

            /* ================= REGULAR CARD (GLASS DARK STYLE) ================= */
            return (
              <motion.div
                key={tier.id}
                variants={scaleUpVariant}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="relative flex flex-col justify-between p-8 sm:p-10 rounded-[2rem] bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-200 text-white border border-white/[0.12] hover:border-[#004F9E]/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:shadow-[0_12px_48px_0_rgba(0,79,158,0.25)] transition-all duration-300 group"
              >
                {/* Glassmorphism inner layers — clipped to card */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                  {/* Top specular highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  {/* Left specular highlight */}
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
                  {/* Inner frosted glow — blue tint */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#004F9E]/10 to-transparent" />
                  {/* Radial inner shimmer */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.05)_0%,transparent_65%)]" />
                  {/* Bottom amber accent line — adds warmth */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FFB100]/25 to-transparent" />
                </div>

                {/* Optional Status Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-8 px-4 py-1.5 rounded-full bg-[#0A1628] text-white/90 border border-white/20 font-sans font-bold text-xs tracking-wider uppercase shadow-lg shadow-black/50 flex items-center gap-1.5 z-10 whitespace-nowrap">
                    {tier.id === "acceso-streaming" ? (
                      <Broadcast size={13} weight="bold" className="text-sky-400" />
                    ) : tier.id === "segunda-preventa" ? (
                      <Clock size={13} weight="bold" className="text-[#FFB100]" />
                    ) : (
                      <Sparkle size={13} weight="bold" className="text-white/60" />
                    )}
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier Plan Title */}
                  <div className="text-xs font-sans font-bold tracking-[0.14em] uppercase text-white/60 mb-2">
                    {tier.name}
                  </div>

                  {/* Big Price Display */}
                  <div className="flex items-baseline gap-1 mt-3 mb-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {primaryPrice}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-white/50 mb-4">
                    {secondaryPrice}
                  </div>

                  {/* Subtitle / Description */}
                  <p className="text-sm font-normal text-muted-foreground leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Action Button */}
                  <a
                    href={tier.ctaLink}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/[0.06] hover:bg-white/10 backdrop-blur-md border border-white/12 hover:border-[#004F9E]/50 text-white font-display font-bold text-sm tracking-wide transition-all duration-300 mb-8 cursor-pointer shadow-sm"
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </a>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-white/10 mb-6" />

                  {/* Checklist Header */}
                  <div className="text-xs font-sans font-bold uppercase tracking-wider text-white/70 mb-4">
                    ¿Qué incluye esta entrada?
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-3.5 text-xs sm:text-sm font-normal text-white/80">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle size={18} weight="fill" className="text-[#FFB100] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Footer */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-medium text-white/50">
                  <ShieldCheck size={16} weight="duotone" className="text-[#FFB100] shrink-0" />
                  <span>Emisión oficial con código QR único</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
