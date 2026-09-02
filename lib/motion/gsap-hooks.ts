"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins solo en el cliente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook para animar secciones al hacer scroll respetando prefers-reduced-motion.
 */
export function useSectionReveal(
  ref: RefObject<HTMLElement | null>,
  dependencies: unknown[] = []
) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isReduced: "(prefers-reduced-motion: reduce)",
        isStandard: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { isReduced } = context.conditions as {
          isReduced: boolean;
          isStandard: boolean;
        };

        if (isReduced) {
          // Si el usuario prefiere movimiento reducido, estado final directo
          gsap.set(ref.current, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    );

    return () => {
      mm.revert();
    };
  }, [ref, ...dependencies]);
}

/**
 * Hook para animar elementos hijos con stagger
 */
export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  targetSelector: string,
  dependencies: unknown[] = []
) {
  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isReduced: "(prefers-reduced-motion: reduce)",
        isStandard: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { isReduced } = context.conditions as {
          isReduced: boolean;
          isStandard: boolean;
        };

        const elements = containerRef.current?.querySelectorAll(targetSelector);
        if (!elements || elements.length === 0) return;

        if (isReduced) {
          gsap.set(elements, { opacity: 1, y: 0, scale: 1 });
          return;
        }

        gsap.fromTo(
          elements,
          { opacity: 0, y: 16, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: { each: 0.07, from: "start" },
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    );

    return () => {
      mm.revert();
    };
  }, [containerRef, targetSelector, ...dependencies]);
}
