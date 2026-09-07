"use client";

import React, { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions, type Arc, type Marker } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1200;

// Central coordinates: Puerto Ordaz, Venezuela (Host City)
const PUERTO_ORDAZ: [number, number] = [8.3077, -62.7118];

const GLOBAL_STREAMING_ARCS: Arc[] = [
  // Puerto Ordaz -> Miami
  { from: PUERTO_ORDAZ, to: [25.7617, -80.1918], color: [1, 0.69, 0] },
  // Puerto Ordaz -> Madrid
  { from: PUERTO_ORDAZ, to: [40.4168, -3.7038], color: [0, 0.65, 1] },
  // Puerto Ordaz -> Buenos Aires
  { from: PUERTO_ORDAZ, to: [-34.6037, -58.3816], color: [1, 0.69, 0] },
  // Puerto Ordaz -> Mexico City
  { from: PUERTO_ORDAZ, to: [19.4326, -99.1332], color: [0, 0.65, 1] },
  // Puerto Ordaz -> Bogota
  { from: PUERTO_ORDAZ, to: [4.711, -74.0721], color: [1, 0.69, 0] },
  // Puerto Ordaz -> Santiago de Chile
  { from: PUERTO_ORDAZ, to: [-33.4489, -70.6693], color: [0, 0.65, 1] },
  // Puerto Ordaz -> London
  { from: PUERTO_ORDAZ, to: [51.5074, -0.1278], color: [1, 0.69, 0] },
  // Puerto Ordaz -> New York
  { from: PUERTO_ORDAZ, to: [40.7128, -74.006], color: [0, 0.65, 1] },
];

const GLOBAL_MARKERS: Marker[] = [
  // Puerto Ordaz (HQ Broadcast Hub)
  { location: PUERTO_ORDAZ, size: 0.14, color: [1, 0.69, 0] },
  // Caracas
  { location: [10.4806, -66.9036], size: 0.08, color: [1, 0.69, 0] },
  // Miami
  { location: [25.7617, -80.1918], size: 0.08, color: [0, 0.65, 1] },
  // New York
  { location: [40.7128, -74.006], size: 0.07, color: [0, 0.65, 1] },
  // Madrid
  { location: [40.4168, -3.7038], size: 0.08, color: [0, 0.65, 1] },
  // Buenos Aires
  { location: [-34.6037, -58.3816], size: 0.07, color: [1, 0.69, 0] },
  // Mexico City
  { location: [19.4326, -99.1332], size: 0.07, color: [0, 0.65, 1] },
  // Bogota
  { location: [4.711, -74.0721], size: 0.06, color: [1, 0.69, 0] },
  // Santiago
  { location: [-33.4489, -70.6693], size: 0.06, color: [0, 0.65, 1] },
  // London
  { location: [51.5074, -0.1278], size: 0.07, color: [1, 0.69, 0] },
];

export interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

export function Globe({ className, config }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.4);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const currentWidth = widthRef.current || 420;

    const globe = createGlobe(canvasRef.current, {
      width: currentWidth,
      height: currentWidth,
      devicePixelRatio: 2,
      phi: 0.4,
      theta: 0.22,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 3.2,
      mapBaseBrightness: 0.05,
      baseColor: [0.04, 0.1, 0.22], // Deep Nexus Blue Slate
      markerColor: [1, 0.69, 0], // Nexus Amber
      glowColor: [0, 0.31, 0.62], // Nexus Electric Blue
      markers: GLOBAL_MARKERS,
      arcs: GLOBAL_STREAMING_ARCS,
      arcColor: [1, 0.69, 0],
      arcWidth: 0.8,
      arcHeight: 0.28,
      markerElevation: 0.04,
      scale: 1.05,
      ...config,
    });

    canvasRef.current.style.opacity = "1";

    let animationFrameId: number;
    const animate = () => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.0035;
      }
      globe.update({
        phi: phiRef.current + rs.get(),
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[540px] flex items-center justify-center select-none",
        className
      )}
    >
      <canvas
        className="w-full h-full opacity-0 transition-opacity duration-700 cursor-grab contain-[layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default Globe;
