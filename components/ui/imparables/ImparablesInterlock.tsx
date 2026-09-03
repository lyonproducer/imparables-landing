"use client";

import React from "react";
import Image from "next/image";

interface ImparablesInterlockProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  glow?: boolean;
}

export const ImparablesInterlock: React.FC<ImparablesInterlockProps> = ({
  size = "md",
  className = "",
  glow = false,
}) => {
  const sizeMap = {
    xs: "w-3.5 h-3.5",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-[22%] ${sizeMap[size]} ${
        glow ? "shadow-md shadow-[#FFB100]/30" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/logo/imparables-icon.png"
        alt="Imparables"
        fill
        sizes="48px"
        className="object-contain select-none"
      />
    </span>
  );
};
