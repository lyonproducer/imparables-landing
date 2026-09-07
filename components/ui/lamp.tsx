"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LampProps {
  children?: React.ReactNode;
  className?: string;
  beamColor?: string;
  glowColor?: string;
  filamentColor?: string;
}

/**
 * LampEffect: Standalone light beam effect designed to be placed at the top
 * of a hero or banner section behind floating navigation and above headlines.
 */
export const LampEffect: React.FC<{
  className?: string;
  beamColor?: string;
  glowColor?: string;
  filamentColor?: string;
}> = ({
  className,
  beamColor = "#004F9E",
  glowColor = "#0284C7",
  filamentColor = "#FFB100",
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center isolate pointer-events-none select-none overflow-hidden",
        className
      )}
    >
      <div className="relative flex w-full scale-y-110 sm:scale-y-125 items-center justify-center isolate z-0">
        {/* Left Conic Beam */}
        <motion.div
          initial={{ opacity: 0.4, width: "14rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at 50% 0%, ${beamColor}, transparent 60%, transparent 100%)`,
          }}
          className="absolute inset-auto right-1/2 h-48 sm:h-56 w-[24rem] sm:w-[32rem] text-white"
        >
          <div className="absolute w-full left-0 bg-[#080808] h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-36 h-full left-0 bg-[#080808] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Conic Beam */}
        <motion.div
          initial={{ opacity: 0.4, width: "14rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at 50% 0%, transparent, transparent 40%, ${beamColor} 100%)`,
          }}
          className="absolute inset-auto left-1/2 h-48 sm:h-56 w-[24rem] sm:w-[32rem] text-white"
        >
          <div className="absolute w-36 h-full right-0 bg-[#080808] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#080808] h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Diffuse Central Glow Orbs */}
        <div className="absolute top-1/2 h-40 w-full translate-y-12 scale-x-150 bg-[#080808] blur-2xl opacity-90" />
        <div className="absolute top-1/2 z-30 h-40 w-full bg-transparent opacity-10 backdrop-blur-md" />

        <div
          style={{ backgroundColor: glowColor }}
          className="absolute inset-auto z-30 h-32 w-[24rem] sm:w-[28rem] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: glowColor }}
          className="absolute inset-auto z-30 h-28 w-56 -translate-y-[5rem] rounded-full opacity-60 blur-2xl"
        />

        {/* Amber Filament Glowing Line */}
        <motion.div
          initial={{ width: "14rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            background: `linear-gradient(to right, transparent, ${filamentColor}, transparent)`,
          }}
          className="absolute inset-auto z-40 h-0.5 w-[24rem] sm:w-[32rem] -translate-y-[6rem] shadow-[0_0_15px_rgba(255,177,0,0.8)]"
        />

        {/* Top Shadow Ceiling Mask */}
        <div className="absolute inset-auto z-30 h-36 w-full -translate-y-[11rem] bg-[#080808]" />
      </div>
    </div>
  );
};

/**
 * Standard Aceternity LampContainer component
 */
export const LampContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080808] w-full z-0",
        className
      )}
    >
      <LampEffect />
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export default LampContainer;
