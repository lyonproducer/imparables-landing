"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRegisterFormStore } from "@/lib/stores/register-form-store";
import { Button } from "./Button";
import { CheckCircle, WarningCircle, PaperPlaneRight } from "@phosphor-icons/react";

export const RegisterForm: React.FC = () => {
  const { values, errors, status, errorMessage, setField, submit, reset } =
    useRegisterFormStore();
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success-message"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center py-8 px-4"
        >
          <div className="w-16 h-16 rounded-full bg-success/20 border border-success/40 flex items-center justify-center text-success mb-5">
            <CheckCircle size={36} weight="fill" aria-hidden="true" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¡Tu pre-registro está confirmado!
          </h3>
          <p className="text-muted-foreground text-base max-w-md mb-8 leading-relaxed">
            Gracias por sumarte a <strong>Imparables Nexus</strong>. Te avisaremos
            de primero en cuanto revelemos la sede oficial, fecha exacta y el
            lineup de ponentes.
          </p>
          <Button
            variant="outline"
            onClick={reset}
            className="text-sm"
          >
            Registrar a otra persona
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="register-form"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          {status === "error" && (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              className="p-4 rounded-xl bg-destructive/15 border border-destructive/30 text-destructive flex items-start gap-3 text-sm"
            >
              <WarningCircle size={20} weight="fill" className="shrink-0 mt-0.5" />
              <p>{errorMessage || "Ocurrió un problema al enviar el formulario."}</p>
            </motion.div>
          )}

          {/* Campo: Nombre */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="nombre"
              className="text-xs md:text-sm font-semibold text-foreground"
            >
              Nombre completo <span className="text-accent">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              autoComplete="name"
              placeholder="Ej. María Elena Pérez"
              value={values.nombre}
              onChange={(e) => setField("nombre", e.target.value)}
              aria-invalid={Boolean(errors.nombre)}
              aria-describedby={errors.nombre ? "nombre-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-background/60 border ${
                errors.nombre ? "border-destructive focus:border-destructive" : "border-white/15 focus:border-accent"
              } text-foreground placeholder:text-muted-foreground/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
            />
            {errors.nombre && (
              <p id="nombre-error" className="text-xs text-destructive font-medium mt-0.5">
                {errors.nombre}
              </p>
            )}
          </div>

          {/* Grid de 2 columnas para Correo y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Campo: Correo */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="correo"
                className="text-xs md:text-sm font-semibold text-foreground"
              >
                Correo electrónico <span className="text-accent">*</span>
              </label>
              <input
                id="correo"
                type="email"
                name="correo"
                autoComplete="email"
                placeholder="maria@empresa.com"
                value={values.correo}
                onChange={(e) => setField("correo", e.target.value)}
                aria-invalid={Boolean(errors.correo)}
                aria-describedby={errors.correo ? "correo-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl bg-background/60 border ${
                  errors.correo ? "border-destructive focus:border-destructive" : "border-white/15 focus:border-accent"
                } text-foreground placeholder:text-muted-foreground/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
              />
              {errors.correo && (
                <p id="correo-error" className="text-xs text-destructive font-medium mt-0.5">
                  {errors.correo}
                </p>
              )}
            </div>

            {/* Campo: Teléfono */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="telefono"
                className="text-xs md:text-sm font-semibold text-foreground"
              >
                Teléfono o WhatsApp <span className="text-accent">*</span>
              </label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                autoComplete="tel"
                placeholder="+58 414 1234567"
                value={values.telefono}
                onChange={(e) => setField("telefono", e.target.value)}
                aria-invalid={Boolean(errors.telefono)}
                aria-describedby={errors.telefono ? "telefono-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl bg-background/60 border ${
                  errors.telefono ? "border-destructive focus:border-destructive" : "border-white/15 focus:border-accent"
                } text-foreground placeholder:text-muted-foreground/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
              />
              {errors.telefono && (
                <p id="telefono-error" className="text-xs text-destructive font-medium mt-0.5">
                  {errors.telefono}
                </p>
              )}
            </div>
          </div>

          {/* Campo: Empresa / Proyecto (Opcional) */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="empresa"
              className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-between"
            >
              <span>Empresa o proyecto</span>
              <span className="text-muted-foreground text-xs font-normal">Opcional</span>
            </label>
            <input
              id="empresa"
              type="text"
              name="empresa"
              placeholder="Nombre de tu negocio o emprendimiento"
              value={values.empresa}
              onChange={(e) => setField("empresa", e.target.value)}
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={errors.empresa ? "empresa-error" : undefined}
              className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground placeholder:text-muted-foreground/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            {errors.empresa && (
              <p id="empresa-error" className="text-xs text-destructive font-medium mt-0.5">
                {errors.empresa}
              </p>
            )}
          </div>

          {/* Campo: Mensaje / Consulta (Opcional) */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="mensaje"
              className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-between"
            >
              <span>¿Cómo podemos ayudarte o qué te gustaría ver en el evento?</span>
              <span className="text-muted-foreground text-xs font-normal">Opcional</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={3}
              placeholder="Cuéntanos tus expectativas, inquietudes sobre IA o qué temas te interesan más..."
              value={values.mensaje}
              onChange={(e) => setField("mensaje", e.target.value)}
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
              className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/15 focus:border-accent text-foreground placeholder:text-muted-foreground/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-y"
            />
            {errors.mensaje && (
              <p id="mensaje-error" className="text-xs text-destructive font-medium mt-0.5">
                {errors.mensaje}
              </p>
            )}
          </div>

          {/* Botón de Envío */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={status === "submitting"}
              icon={<PaperPlaneRight size={18} weight="bold" />}
              className="w-full"
            >
              {status === "submitting" ? "Procesando registro..." : "Pre-registrarme ahora"}
            </Button>
          </div>

          <p className="text-[11px] text-center text-muted-foreground/80 mt-1">
            Tus datos están protegidos. Te contactaremos exclusivamente con información
            oficial sobre Imparables Nexus.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
