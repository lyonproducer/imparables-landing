"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/lib/stores/ui-store";
import { Button } from "@/components/ui/Button";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Sobre el evento", href: "#sobre-el-evento" },
  { label: "Temas", href: "#temas" },
  { label: "Ponentes", href: "#ponentes" },
  { label: "Agenda", href: "#agenda" },
  { label: "Aliados", href: "#aliados" },
  { label: "Contacto", href: "#registro" },
];

export const Header: React.FC = () => {
  const { mobileNavOpen, setMobileNavOpen, activeSection, setActiveSection } =
    useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const handleLinkClick = (href: string) => {
    setMobileNavOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <Link
          href="#hero"
          onClick={() => handleLinkClick("#hero")}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg group"
          aria-label="Imparables Nexus - Ir al inicio"
        >
          {/* Logo badge with orange rounded square and typography */}
          <div className="flex items-center gap-1.5">
            <span className="flex items-center justify-center bg-accent text-accent-foreground font-black text-xs md:text-sm px-1.5 py-0.5 rounded-md tracking-tight">
              im
            </span>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-accent transition-colors">
              parables
            </span>
          </div>

          <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 rounded bg-primary/30 text-accent border border-primary/40">
            NEXUS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-xs md:text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="#registro" onClick={() => handleLinkClick("#registro")}>
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUpRight size={15} weight="bold" />}
            >
              Quiero asistir
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          aria-expanded={mobileNavOpen}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
        >
          {mobileNavOpen ? (
            <X size={24} weight="bold" aria-hidden="true" />
          ) : (
            <List size={24} weight="bold" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileNavOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil"
          className="fixed inset-0 top-[65px] bg-background/95 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 animate-fadeIn border-t border-white/10"
        >
          <nav className="flex flex-col gap-3 py-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-lg py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary/30 text-accent font-semibold border border-primary/40"
                      : "text-foreground/90 hover:bg-white/5 hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#registro"
              onClick={() => handleLinkClick("#registro")}
              className="w-full"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                icon={<ArrowUpRight size={18} weight="bold" />}
              >
                Quiero asistir
              </Button>
            </a>
            <p className="text-xs text-center text-muted-foreground pt-2">
              Imparables Nexus · Noviembre 2026
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
