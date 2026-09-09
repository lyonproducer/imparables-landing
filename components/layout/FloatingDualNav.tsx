"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useUIStore } from "@/lib/stores/ui-store";
import { List, X } from "@phosphor-icons/react";
import { trackWorldSwitch, trackEvent } from "@/lib/analytics";

export const FloatingDualNav: React.FC = () => {
  const pathname = usePathname();
  const isNexus =
    pathname?.startsWith("/nexus") ||
    ["/expertos", "/temas", "/reserva"].some((p) => pathname?.startsWith(p));
  const isImparables = !isNexus;

  const { mobileNavOpen, setMobileNavOpen } = useUIStore();
  const shouldReduceMotion = useReducedMotion();
  const [hoveredWorld, setHoveredWorld] = useState<"imparables" | "nexus" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Mobile active tab: toggles between "imparables" and "nexus"
  const [activeMobileWorld, setActiveMobileWorld] = useState<"imparables" | "nexus">(
    isNexus ? "nexus" : "imparables"
  );

  const headerRef = useRef<HTMLElement>(null);

  // Sync active world with current route & close menu on navigation
  useEffect(() => {
    setActiveMobileWorld(isNexus ? "nexus" : "imparables");
    setMobileNavOpen(false);
  }, [pathname, isNexus, setMobileNavOpen]);

  // Handle click outside to close the mobile menu
  useEffect(() => {
    if (!mobileNavOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileNavOpen, setMobileNavOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // Top of page: always keep visible
      if (currentScrollY <= 60) {
        setIsVisible(true);
        setScrolled(currentScrollY > 20);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      setScrolled(true);

      const diff = currentScrollY - lastScrollY;

      // Hysteresis threshold to prevent jitter
      if (Math.abs(diff) > 8) {
        if (diff > 0) {
          // Scrolling down -> hide
          setIsVisible(false);
        } else {
          // Scrolling up -> reveal
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHidden = !isVisible && !mobileNavOpen;

  const imparablesLinks = [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Eventos", href: "/eventos" },
    { label: "Contacto", href: "/contacto" },
  ];

  const nexusLinks = [
    { label: "Expertos", href: "/expertos" },
    { label: "Temas", href: "/temas" },
    { label: "Reserva", href: "/reserva" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  const showImparablesSub = hoveredWorld === "imparables" || (hoveredWorld === null && isImparables);
  const showNexusSub = hoveredWorld === "nexus" || (hoveredWorld === null && isNexus);

  const handleMobileWorldClick = (world: "imparables" | "nexus") => {
    trackWorldSwitch(world, "mobile_capsule");
    if (mobileNavOpen && activeMobileWorld === world) {
      setMobileNavOpen(false);
    } else {
      setActiveMobileWorld(world);
      setMobileNavOpen(true);
    }
  };

  const handleToggleMenu = () => {
    if (mobileNavOpen) {
      setMobileNavOpen(false);
    } else {
      setActiveMobileWorld(isNexus ? "nexus" : "imparables");
      setMobileNavOpen(true);
    }
  };

  return (
    <>
      {/* Mobile click-outside backdrop */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.header
        ref={headerRef}
        initial={false}
        animate={{
          y: isHidden ? (shouldReduceMotion ? 0 : -100) : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          duration: isHidden ? 0.22 : 0.32,
          ease: isHidden ? [0.32, 0, 0.67, 0] : [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none ${
          isHidden ? "pointer-events-none" : ""
        }`}
      >
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
              (mobileNavOpen ? activeMobileWorld === "imparables" : isImparables)
                ? "bg-white/[0.08]"
                : "hover:bg-white/[0.04]"
            }`}
          >
            {/* Mobile Button: opens/switches mobile menu to Imparables only */}
            <button
              type="button"
              onClick={() => handleMobileWorldClick("imparables")}
              className="md:hidden flex items-center px-2 py-1 rounded-full group focus-visible:outline-none cursor-pointer"
              aria-label="Ver opciones de Imparables"
            >
              <div className="relative h-6 w-[100px] flex items-center">
                <Image
                  src="/logo/imparables-light.png"
                  alt="Imparables"
                  fill
                  priority
                  sizes="120px"
                  className="object-contain object-left"
                />
              </div>
            </button>

            {/* Desktop Link: navigates to / */}
            <Link
              href="/"
              onClick={() => trackWorldSwitch("imparables", "desktop_capsule")}
              className="hidden md:flex items-center px-2.5 py-1 rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:bg-white/[0.06] transition-colors"
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
                      const isActive = isLinkActive(link.href);
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
              (mobileNavOpen ? activeMobileWorld === "nexus" : isNexus)
                ? "bg-primary/30 border border-primary/50"
                : "hover:bg-white/[0.04]"
            }`}
          >
            {/* Mobile Button: opens/switches mobile menu to Nexus only */}
            <button
              type="button"
              onClick={() => handleMobileWorldClick("nexus")}
              className="md:hidden flex items-center px-2 py-1 rounded-full group focus-visible:outline-none cursor-pointer"
              aria-label="Ver opciones de Nexus"
            >
              <div className="relative h-5 w-[80px] flex items-center">
                <Image
                  src="/logo/nexus-logo.webp"
                  alt="Nexus"
                  fill
                  priority
                  sizes="100px"
                  className="object-contain object-left"
                />
              </div>
            </button>

            {/* Desktop Link: navigates to /nexus */}
            <Link
              href="/nexus"
              onClick={() => trackWorldSwitch("nexus", "desktop_capsule")}
              className="hidden md:flex items-center px-2.5 py-1 rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-white/[0.06] transition-colors"
              aria-label="Mundo Nexus - Ir a evento Nexus"
            >
              <div className="relative h-5 w-[84px] sm:w-[92px] flex items-center">
                <Image
                  src="/logo/nexus-logo.webp"
                  alt="Nexus"
                  fill
                  priority
                  sizes="100px"
                  className="object-contain object-left group-hover:scale-105 transition-transform"
                />
              </div>
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
                    {nexusLinks.map((link) => {
                      const isActive = isLinkActive(link.href);
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

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={handleToggleMenu}
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
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={`pointer-events-auto fixed inset-x-4 top-20 rounded-3xl p-5 sm:p-6 shadow-2xl z-50 flex flex-col gap-4 md:hidden border transition-colors duration-300 ${
                activeMobileWorld === "nexus"
                  ? "bg-[#0A1324]/95 backdrop-blur-2xl border-white/15 shadow-black/80 text-white"
                  : "bg-[#004F9E]/95 backdrop-blur-2xl border-white/20 shadow-blue-950/60 text-white"
              }`}
            >
              {/* Segmented World Switcher Inside Drawer */}
              <div className="flex items-center p-1 rounded-2xl bg-black/30 border border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setActiveMobileWorld("imparables");
                    trackWorldSwitch("imparables", "drawer_switcher");
                  }}
                  className={`flex-1 flex items-center justify-center py-2 px-3 rounded-xl transition-all cursor-pointer ${
                    activeMobileWorld === "imparables"
                      ? "bg-white/20 text-white shadow-md border border-white/20"
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-label="Mostrar opciones de Imparables"
                >
                  <div className="relative h-4 w-20">
                    <Image
                      src="/logo/imparables-light.png"
                      alt="Imparables"
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveMobileWorld("nexus");
                    trackWorldSwitch("nexus", "drawer_switcher");
                  }}
                  className={`flex-1 flex items-center justify-center py-2 px-3 rounded-xl transition-all cursor-pointer ${
                    activeMobileWorld === "nexus"
                      ? "bg-white/20 text-white shadow-md border border-white/20"
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-label="Mostrar opciones de Nexus"
                >
                  <div className="relative h-3.5 w-16">
                    <Image
                      src="/logo/nexus-logo.webp"
                      alt="Nexus"
                      fill
                      sizes="70px"
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>

              {/* Dynamic World Options View */}
              <AnimatePresence mode="wait">
                {activeMobileWorld === "imparables" ? (
                  <motion.div
                    key="imparables-panel"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#FFB100]">
                        Plataforma Matriz
                      </span>
                      <Link
                        href="/"
                        onClick={() => {
                          setMobileNavOpen(false);
                          trackEvent("nav_link_click", { label: "Inicio", href: "/", world: "imparables" });
                        }}
                        className="text-[11px] font-medium text-white/80 hover:text-white underline underline-offset-2"
                      >
                        Ir al inicio →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {imparablesLinks.map((link) => {
                        const isActive = isLinkActive(link.href);
                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => {
                              setMobileNavOpen(false);
                              trackEvent("nav_link_click", { label: link.label, href: link.href, world: "imparables" });
                            }}
                            className={`text-center py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                              isActive
                                ? "bg-white text-neutral-950 shadow-md font-bold"
                                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                            }`}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="nexus-panel"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-sky-300">
                        Evento Tecnológico
                      </span>
                      <Link
                        href="/nexus"
                        onClick={() => {
                          setMobileNavOpen(false);
                          trackEvent("nav_link_click", { label: "Nexus Home", href: "/nexus", world: "nexus" });
                        }}
                        className="text-[11px] font-medium text-white/80 hover:text-white underline underline-offset-2"
                      >
                        Ir al evento →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {nexusLinks.map((link) => {
                        const isActive = isLinkActive(link.href);
                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => {
                              setMobileNavOpen(false);
                              trackEvent("nav_link_click", { label: link.label, href: link.href, world: "nexus" });
                            }}
                            className={`text-center py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                              isActive
                                ? "bg-white text-neutral-950 shadow-md font-bold"
                                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                            }`}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

