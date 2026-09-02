"use client";

import React from "react";
import { LinesBackground } from "@/components/ui/LinesBackground";

interface ImparablesLinesBackgroundProps {
  opacity?: number;
  showGlows?: boolean;
  className?: string;
}

export const ImparablesLinesBackground: React.FC<ImparablesLinesBackgroundProps> = ({
  opacity = 0.5,
  showGlows = true,
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}>
      {/* SVG Concéntrico de Pistas */}
      <div className="absolute inset-0" style={{ opacity }}>
        <LinesBackground />
      </div>

      {/* Atmospheric Ambient Lighting */}
      {showGlows && (
        <>
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[350px] bg-[#004F9E]/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[350px] bg-[#FFB100]/08 blur-[150px] rounded-full pointer-events-none" />
        </>
      )}

      {/* Subtle radial dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
};
