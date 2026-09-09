"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ArrowUpRight, Crown, Sparkle, Handshake } from "@phosphor-icons/react";
import { eventConfig, SponsorshipTier } from "@/lib/content/event.config";
import { staggerContainer, fadeUpVariant, scaleUpVariant } from "@/lib/motion/motion-variants";
import { trackSponsorshipInterest, trackEvent } from "@/lib/analytics";

export const Sponsorship: React.FC = () => {
  const [currency, setCurrency] = useState<"USD" | "BCV">("USD");
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="patrocinios"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#060B14] text-foreground border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background glow highlights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[400px] bg-[#FFB100]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[400px] bg-[#004F9E]/20 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* ================= SECTION HEADER (IMAGE 2 LAYOUT) ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Handshake size={18} weight="duotone" className="text-[#FFB100]" />
            <span className="text-xs font-sans font-bold tracking-[0.15em] text-[#FFB100] uppercase">
              PATROCINIOS CORPORATIVOS
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.12] tracking-tight mb-5"
          >
            Impulsa tu marca en el escenario de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
              Nexus 2026
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Opciones estratégicas de visibilidad, vinculación y exposición ante directores, empresarios y líderes de la región.
          </motion.p>

          {/* Currency Toggle (USD vs BCV, Matching Image 2 Pill Style) */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="inline-flex items-center p-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg"
          >
            <button
              type="button"
              onClick={() => {
                setCurrency("USD");
                trackEvent("sponsorship_currency_toggle", { currency: "USD" });
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                currency === "USD"
                  ? "bg-[#FFB100] text-neutral-950 shadow-md shadow-amber-500/25"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Aporte en USD
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrency("BCV");
                trackEvent("sponsorship_currency_toggle", { currency: "BCV" });
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                currency === "BCV"
                  ? "bg-[#FFB100] text-neutral-950 shadow-md shadow-amber-500/25"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Costo Est. BCV
            </button>
          </motion.div>
        </div>

        {/* ================= 4 SPONSORSHIP CARDS (MATCHING IMAGE 2 STYLING) ================= */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
        >
          {eventConfig.sponsorshipTiers.map((tier: SponsorshipTier) => {
            const isFeatured = tier.isFeatured;

            const primaryPrice =
              currency === "USD" ? `$${tier.priceUsd}` : `${tier.priceBcv} BCV`;
            const secondaryNote =
              currency === "USD"
                ? `Costo est: ${tier.priceBcv} BCV`
                : `Equivalente: $${tier.priceUsd} USD`;

            if (isFeatured) {
              /* ================= FEATURED CARD (IMAGE 2 GOLD HIGHLIGHTED CARD) ================= */
              return (
                <motion.div
                  key={tier.id}
                  variants={scaleUpVariant}
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] bg-[#FFB100] text-neutral-950 border-2 border-amber-300 shadow-2xl shadow-amber-500/30 transition-all duration-300 group z-20"
                >
                  {/* Recommended Badge on Top Center */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0B132B] text-[#FFB100] font-sans font-bold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Crown size={14} weight="fill" className="text-[#FFB100]" />
                    <span>{tier.badge || "Exclusivo"}</span>
                  </div>

                  <div>
                    {/* Level Title */}
                    <div className="text-xs font-sans font-bold tracking-[0.14em] uppercase text-neutral-800 mt-2 mb-2">
                      {tier.name}
                    </div>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-1.5 mt-2 mb-1">
                      <span className="font-display font-black text-4xl sm:text-5xl text-neutral-950 tracking-tight">
                        {primaryPrice}
                      </span>
                      <span className="text-xs font-bold text-neutral-800 tracking-wider uppercase">
                        / aporte
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-800/80 mb-4">
                      {secondaryNote}
                    </div>

                    {/* Brief Subtitle */}
                    <p className="text-xs text-neutral-900 leading-relaxed font-medium mb-6">
                      {tier.description}
                    </p>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-neutral-950/20 mb-6" />

                    {/* Benefits Checklist */}
                    <ul className="space-y-3.5 text-xs font-semibold text-neutral-950 mb-8">
                      {tier.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle size={17} weight="fill" className="text-neutral-950 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dark Action Button (Image 2 Pill Button Style) */}
                  <a
                    href={tier.ctaLink}
                    onClick={() => trackSponsorshipInterest(tier.name)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#111111] hover:bg-black text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-black/25 hover:shadow-black/40 transition-all duration-300 cursor-pointer"
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </motion.div>
              );
            }

            /* ================= REGULAR SPONSOR CARD (IMAGE 2 DARK CARD STYLE) ================= */
            return (
              <motion.div
                key={tier.id}
                variants={scaleUpVariant}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] bg-[#0D1626]/60 backdrop-blur-2xl backdrop-saturate-150 text-white border border-white/10 hover:border-[#FFB100]/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
              >
                <div>
                  {/* Level Title */}
                  <div className="text-xs font-sans font-bold tracking-[0.14em] uppercase text-white/60 mb-2">
                    {tier.name}
                  </div>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-1.5 mt-2 mb-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {primaryPrice}
                    </span>
                    <span className="text-xs font-medium text-white/50 tracking-wider uppercase">
                      / aporte
                    </span>
                  </div>
                  <div className="text-xs font-medium text-white/40 mb-4">
                    {secondaryNote}
                  </div>

                  {/* Brief Subtitle */}
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal mb-6">
                    {tier.description}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-white/10 mb-6" />

                  {/* Benefits Checklist */}
                  <ul className="space-y-3.5 text-xs font-normal text-white/80 mb-8">
                    {tier.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle size={17} weight="fill" className="text-[#FFB100] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outline Action Button (Image 2 Rounded Pill Style) */}
                <a
                  href={tier.ctaLink}
                  onClick={() => trackSponsorshipInterest(tier.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/[0.06] hover:bg-white/12 backdrop-blur-md border border-white/12 hover:border-[#FFB100]/40 text-white font-display font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Commercial Note */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={fadeUpVariant}
          className="mt-14 text-center text-xs sm:text-sm text-muted-foreground"
        >
          ¿Tu empresa requiere un paquete a la medida o alianza institucional especial?{" "}
          <a
            href="mailto:alianzas@imparables.com?subject=Propuesta%20Especial%20Patrocinio%20Nexus"
            className="text-[#FFB100] hover:underline font-semibold"
          >
            Escríbenos a alianzas@imparables.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;
