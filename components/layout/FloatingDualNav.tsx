"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/lib/stores/ui-store";
import { List, X } from "@phosphor-icons/react";

export const FloatingDualNav: React.FC = () => {
  const pathname = usePathname();
  const isNexus = pathname?.startsWith("/nexus");
  const isImparables = !isNexus;

  const { mobileNavOpen, setMobileNavOpen } = useUIStore();
  const [hoveredWorld, setHoveredWorld] = useState<"imparables" | "nexus" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imparablesLinks = [
    { label: "Nosotros", href: "/imparables/nosotros" },
    { label: "Eventos", href: "/imparables/eventos" },
    { label: "Contacto", href: "/imparables/contacto" },
  ];

  const nexusLinks = [
    { label: "Expertos", href: isNexus ? "#expertos" : "/nexus#expertos" },
    { label: "Temas", href: isNexus ? "#temas" : "/nexus#temas" },
    { label: "Reserva", href: isNexus ? "#reserva" : "/nexus#reserva" },
  ];

  const showImparablesSub = hoveredWorld === "imparables" || (hoveredWorld === null && isImparables);
  const showNexusSub = hoveredWorld === "nexus" || (hoveredWorld === null && isNexus);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      {/* Centered Floating Capsule */}
      <nav
        aria-label="Navegación principal de dos mundos"
        className={`pointer-events-auto relative flex items-center gap-1.5 md:gap-3 px-3 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/40"
            : "bg-background/70 backdrop-blur-md border-white/10 shadow-xl shadow-black/20"
        }`}
      >
        {/* ===================== MUNDO IMPARABLES ===================== */}
        <div
          onMouseEnter={() => setHoveredWorld("imparables")}
          onMouseLeave={() => setHoveredWorld(null)}
          className={`flex items-center rounded-full transition-colors duration-200 p-1 ${
            isImparables ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
          }`}
        >
          {/* Logo Trigger */}
          <Link
            href="/"
            className="flex items-center px-2.5 py-1 rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:bg-white/[0.06] transition-colors"
            aria-label="Mundo Imparables - Ir a la raíz del sitio"
          >
            <div className="relative h-6 w-[105px] sm:w-[115px] flex items-center">
              <Image
                src="/logo/imparables-light.png"
                alt="Imparables"
                fill
                priority
                sizes="120px"
                className="object-contain object-left group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          {/* Submenú deslizable hacia la derecha (Desktop) */}
          <div className="hidden md:flex items-center overflow-hidden">
            <AnimatePresence>
              {showImparablesSub && (
                <motion.div
                  key="imparables-submenu"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-1 pl-1 pr-2 whitespace-nowrap overflow-hidden"
                >
                  <span className="text-white/20 text-xs select-none">→</span>
                  {imparablesLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                          isActive
                            ? "bg-white/15 text-[#FFB100] font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Separador vertical entre mundos */}
        <div className="w-px h-5 bg-white/15 my-auto shrink-0 select-none" />

        {/* ===================== MUNDO NEXUS ===================== */}
        <div
          onMouseEnter={() => setHoveredWorld("nexus")}
          onMouseLeave={() => setHoveredWorld(null)}
          className={`flex items-center rounded-full transition-colors duration-200 p-1 ${
            isNexus ? "bg-primary/25 border border-primary/40" : "hover:bg-white/[0.04]"
          }`}
        >
          {/* Nexus Badge Trigger */}
          <Link
            href="/nexus"
            className="flex items-center px-3 py-1 rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Mundo Nexus - Ir a evento Nexus"
          >
            <span className="font-display font-extrabold text-xs tracking-[0.2em] uppercase text-foreground group-hover:text-accent transition-colors">
              NEXUS
            </span>
          </Link>

          {/* Submenú deslizable hacia la derecha (Desktop) */}
          <div className="hidden md:flex items-center overflow-hidden">
            <AnimatePresence>
              {showNexusSub && (
                <motion.div
                  key="nexus-submenu"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-1 pl-1 pr-2 whitespace-nowrap overflow-hidden"
                >
                  <span className="text-white/20 text-xs select-none">→</span>
                  {nexusLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs font-medium px-2.5 py-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label={mobileNavOpen ? "Cerrar menú móvil" : "Abrir menú móvil"}
          className="md:hidden p-1.5 ml-1 rounded-full bg-white/5 text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
        >
          {mobileNavOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </nav>

      {/* ===================== MOBILE DRAWER ===================== */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-x-4 top-20 bg-background/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-6 md:hidden"
          >
            {/* Sección Imparables Mobile */}
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileNavOpen(false)}
                className="flex items-center gap-2 pb-2 border-b border-white/10 group"
                aria-label="Ir a inicio de Imparables"
              >
                <div className="relative h-6 w-28">
                  <Image
                    src="/logo/imparables-light.png"
                    alt="Imparables"
                    fill
                    sizes="120px"
                    className="object-contain object-left group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider ml-auto font-mono group-hover:text-foreground transition-colors">
                  Plataforma Matriz (/)
                </span>
              </Link>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {imparablesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileNavOpen(false)}
                    className="text-center py-2 px-3 rounded-xl bg-white/[0.04] text-xs font-medium text-foreground hover:bg-white/10 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sección Nexus Mobile */}
            <div className="flex flex-col gap-2">
              <Link
                href="/nexus"
                onClick={() => setMobileNavOpen(false)}
                className="flex items-center gap-2 pb-2 border-b border-white/10 group"
                aria-label="Ir a inicio de Nexus"
              >
                <span className="font-display font-black text-sm tracking-widest text-foreground uppercase group-hover:text-accent transition-colors">
                  NEXUS
                </span>
                <span className="text-[10px] text-accent uppercase tracking-wider ml-auto font-mono">
                  Evento (/nexus)
                </span>
              </Link>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {nexusLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileNavOpen(false)}
                    className="text-center py-2 px-3 rounded-xl bg-primary/20 text-xs font-medium text-foreground hover:bg-primary/30 hover:text-accent border border-primary/30 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
