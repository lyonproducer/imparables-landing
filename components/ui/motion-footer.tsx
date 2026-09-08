"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import Scanner from "@/components/ui/Scanner";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES (Nexus Design System)
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-sans), var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Variables using standard shadcn/tailwind tokens */
  --pill-bg-1: rgba(255, 255, 255, 0.05);
  --pill-bg-2: rgba(255, 255, 255, 0.02);
  --pill-shadow: rgba(0, 0, 0, 0.5);
  --pill-highlight: rgba(255, 255, 255, 0.15);
  --pill-inset-shadow: rgba(0, 0, 0, 0.8);
  --pill-border: rgba(255, 255, 255, 0.12);
  
  --pill-bg-1-hover: rgba(0, 79, 158, 0.25);
  --pill-bg-2-hover: rgba(255, 177, 0, 0.15);
  --pill-border-hover: rgba(255, 177, 0, 0.4);
  --pill-shadow-hover: rgba(0, 79, 158, 0.3);
  --pill-highlight-hover: rgba(255, 255, 255, 0.3);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(255, 177, 0, 0.5)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 12px rgba(255, 177, 0, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

/* Theme-adaptive Aurora Glow (Nexus Blue & Amber) */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(0, 79, 158, 0.35) 0%, 
    rgba(255, 177, 0, 0.18) 40%, 
    transparent 75%
  );
}

/* Glass Pill Theming (Glassmorphism) */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #ffffff;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 25vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.07);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 25px rgba(0, 79, 158, 0.4));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.12,
            rotationY: x * 0.12,
            scale: 1.04,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT (CinematicFooter)
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-6 font-display">
    <span>Inteligencia Artificial</span> <span className="text-amber-400/80">✦</span>
    <span>Liderazgo Tecnológico</span> <span className="text-sky-400/80">✦</span>
    <span>Innovación Disruptiva</span> <span className="text-amber-400/80">✦</span>
    <span>Networking Empresarial</span> <span className="text-sky-400/80">✦</span>
    <span>Futuro Digital</span> <span className="text-amber-400/80">✦</span>
    <span>Transformación Tecnológica</span> <span className="text-sky-400/80">✦</span>
    <span>Conversatorio Nexus</span> <span className="text-amber-400/80">✦</span>
    <span>Estrategia e Inteligencia</span> <span className="text-sky-400/80">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 55%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = "https://wa.me/584220160021?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Imparables%20Nexus";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#040d1a] text-foreground cinematic-footer-wrapper">
          
          {/* Scanner WebGL base layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Scanner
              color1="#004F9E"
              color2="#FFB100"
              color3="#FFFFFF"
              speed={0.45}
              sweepSpeed={0.22}
              sweepWidth={1.8}
              sweepFalloff={5.5}
              scale={1.4}
              frequency={2.2}
              ripple={0.2}
              bandDensity={12}
              lineSharpness={5.2}
              glow={0.24}
              scanDirection="vertical"
              colorSpread={0.65}
              brightness={0.9}
              contrast={1.2}
              softness={1.5}
              vignette={0.5}
              scanline={true}
              grain={true}
              grainIntensity={0.04}
              opacity={0.65}
              mouseInteraction={true}
              mouseRadius={0.5}
              mouseStrength={0.45}
            />
          </div>
          {/* Grid overlay on top of Scanner for cyber-grid depth */}
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />


          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none font-display font-extrabold"
          >
            NEXUS
          </div>

          {/* 1. Diagonal Sleek Marquee (Top of footer) */}
          <div className="absolute top-10 left-0 w-full overflow-hidden border-y border-white/10 bg-[#081d33]/70 backdrop-blur-md py-3.5 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.25em] text-blue-200/80 uppercase font-display">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-black footer-text-glow tracking-tighter mb-10 text-center text-white"
            >
              ¿Listo para ser parte de Nexus?
            </h2>

            {/* Interactive Glassmorphism CTAs Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* WhatsApp Direct CTA */}
              <div className="flex justify-center w-full">
                <MagneticButton
                  as="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-10 py-5 rounded-full text-white font-bold text-base md:text-lg flex items-center gap-3 group"
                >
                  <WhatsappLogo size={24} weight="fill" className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Contáctanos (+58 422-0160021)</span>
                </MagneticButton>
              </div>

              {/* Secondary Legal & Navigation Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton
                  as={Link}
                  href="/politica-de-privacidad"
                  className="footer-glass-pill px-6 py-3 rounded-full text-slate-300 font-medium text-xs md:text-sm hover:text-white"
                >
                  Políticas de Privacidad
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  href="/terminos-de-servicio"
                  className="footer-glass-pill px-6 py-3 rounded-full text-slate-300 font-medium text-xs md:text-sm hover:text-white"
                >
                  Términos de Servicio
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo + Copyright */}
            <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1">
              <Image
                src="/logo/imparables-nexus.webp"
                alt="Imparables Nexus"
                width={140}
                height={40}
                className="object-contain opacity-80"
              />
              <div className="text-slate-400 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-center md:text-left">
                © 2026 Lyon Incode & Eprisma. All Rights Reserved.
              </div>
            </div>


            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-slate-300 hover:text-white group order-3"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}

export default CinematicFooter;
