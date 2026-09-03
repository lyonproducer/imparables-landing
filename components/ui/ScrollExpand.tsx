"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

export interface ScrollExpandProps {
  src: string;
  mediaType?: "image" | "video";
  alt?: string;
  useWindowScroll?: boolean;
  startWidth?: number; // Initial width in vw for desktop
  startHeight?: number; // Initial height in vh for desktop
  startRadius?: number; // Initial border-radius in px
  endRadius?: number; // End border-radius in px
  mediaZoom?: number;
  scrollDistance?: number; // Multiplier for section height (e.g. 2.5 = 250vh sticky scroll)
  holdDistance?: number;
  overlayScrim?: number;
  scrollHint?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const ScrollExpand: React.FC<ScrollExpandProps> = ({
  src,
  alt = "Background Image",
  startWidth = 40,
  startHeight = 52,
  startRadius = 32,
  endRadius = 0,
  scrollDistance = 2.5,
  overlayScrim = 0.75,
  scrollHint = "Desliza para contactarnos",
  title,
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile initial dimensions adapt gracefully (e.g. 88vw/60vh vs 40vw/52vh)
  const initialWidth = isMobile ? 88 : startWidth;
  const initialHeight = isMobile ? 58 : startHeight;

  // Phase 1 (0 -> 0.35): Card dimensions expand to 100vw x 100vh and stay 100%
  const cardWidth = useTransform(scrollYProgress, (v) => {
    if (v >= 0.35) return "100vw";
    const p = Math.max(0, v / 0.35);
    return `${initialWidth + (100 - initialWidth) * p}vw`;
  });

  const cardHeight = useTransform(scrollYProgress, (v) => {
    if (v >= 0.35) return "100vh";
    const p = Math.max(0, v / 0.35);
    return `${initialHeight + (100 - initialHeight) * p}vh`;
  });

  const borderRadius = useTransform(scrollYProgress, (v) => {
    if (v >= 0.35) return `${endRadius}px`;
    const p = Math.max(0, v / 0.35);
    return `${startRadius + (endRadius - startRadius) * p}px`;
  });

  // Parallax background image zoom out effect (1.25 -> 1.0)
  const imageScale = useTransform(scrollYProgress, (v) => {
    if (v >= 0.35) return 1.0;
    const p = Math.max(0, v / 0.35);
    return 1.25 - 0.25 * p;
  });

  // Initial title card opacity & upward fade
  const titleOpacity = useTransform(scrollYProgress, (v) => {
    if (v >= 0.2) return 0;
    return 1 - v / 0.2;
  });
  const titleY = useTransform(scrollYProgress, (v) => {
    if (v >= 0.2) return -30;
    return -30 * (v / 0.2);
  });
  const titlePointerEvents = useTransform(scrollYProgress, (v) =>
    v < 0.2 ? "auto" : "none"
  );
  const titleDisplay = useTransform(scrollYProgress, (v) =>
    v < 0.2 ? "block" : "none"
  );

  // Dynamic dark scrim overlay intensity
  const scrimOpacity = useTransform(scrollYProgress, (v) => {
    if (v >= 0.35) return overlayScrim;
    const p = Math.max(0, v / 0.35);
    return 0.35 + (overlayScrim - 0.35) * p;
  });

  // Form content fade & entrance - PERMANENT 100% Opacity for all v >= 0.35
  const contentOpacity = useTransform(scrollYProgress, (v) => {
    if (v < 0.15) return 0;
    if (v >= 0.35) return 1;
    return (v - 0.15) / 0.2;
  });

  const contentY = useTransform(scrollYProgress, (v) => {
    if (v < 0.15) return 40;
    if (v >= 0.35) return 0;
    return 40 * (1 - (v - 0.15) / 0.2);
  });

  const contentScale = useTransform(scrollYProgress, (v) => {
    if (v < 0.15) return 0.97;
    if (v >= 0.35) return 1;
    return 0.97 + 0.03 * ((v - 0.15) / 0.2);
  });

  const contentPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.15 ? "auto" : "none"
  );

  // Scroll hint arrow fades out early and hides completely
  const hintOpacity = useTransform(scrollYProgress, (v) => {
    if (v >= 0.15) return 0;
    return 1 - v / 0.15;
  });
  const hintDisplay = useTransform(scrollYProgress, (v) =>
    v < 0.15 ? "flex" : "none"
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height: `${scrollDistance * 100}vh` }}
    >
      {/* Sticky Viewport Container - Pins in place during expansion */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background">
        {/* Animated Expanding Frame */}
        <motion.div
          style={{
            width: cardWidth,
            height: cardHeight,
            borderRadius: borderRadius,
          }}
          className="relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/15 flex items-center justify-center transition-shadow duration-300"
        >
          {/* Background Image with smooth parallax zoom */}
          <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center select-none"
            />
          </motion.div>

          {/* Scrim Overlay */}
          <motion.div
            style={{ opacity: scrimOpacity }}
            className="absolute inset-0 bg-neutral-950/90 pointer-events-none z-10"
          />

          {/* Decorative Track Lines Overlay */}
          <div className="absolute inset-0 z-[15] pointer-events-none select-none overflow-hidden">
            <svg
              className="w-full h-full opacity-30"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="scrollExpandLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004F9E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#004F9E" stopOpacity="0.03" />
                </linearGradient>
                <linearGradient id="scrollExpandAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFB100" stopOpacity="0.0" />
                  <stop offset="50%" stopColor="#FFB100" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FFB100" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <path
                  key={i}
                  d={`M -80 ${80 + i * 65} Q 280 ${-60 + i * 65} 620 ${140 + i * 65} T 900 ${280 + i * 65}`}
                  stroke="url(#scrollExpandLineGrad)"
                  strokeOpacity={0.18 + i * 0.03}
                  strokeWidth="28"
                  fill="none"
                />
              ))}
              <path
                d="M -100 480 C 120 380, 220 590, 360 460 S 650 260, 920 320"
                stroke="url(#scrollExpandAccentGrad)"
                strokeWidth="2"
                strokeDasharray="6 3"
                fill="none"
              />
              <circle cx="360" cy="460" r="3.5" fill="#FFB100" opacity="0.5" />
            </svg>
          </div>

          {/* Initial Title Overlay */}
          {title && (
            <motion.div
              style={{
                opacity: titleOpacity,
                y: titleY,
                pointerEvents: titlePointerEvents,
                display: titleDisplay,
              }}
              className="relative z-20 px-4"
            >
              {title}
            </motion.div>
          )}

          {/* Scroll Hint */}
          {scrollHint && (
            <motion.div
              style={{ opacity: hintOpacity, display: hintDisplay }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/80 pointer-events-none"
            >
              <span className="text-xs font-sans tracking-[0.08em] uppercase text-amber-300/90 font-bold drop-shadow">
                {scrollHint}
              </span>
              <CaretDown size={20} className="animate-bounce text-amber-400" />
            </motion.div>
          )}

          {/* Main Form Content */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
              scale: contentScale,
              pointerEvents: contentPointerEvents,
            }}
            className="absolute inset-0 z-30 overflow-y-auto flex items-center justify-center py-12 px-4 sm:px-6"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollExpand;
