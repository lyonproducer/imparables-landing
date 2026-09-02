"use client";

import React from "react";

interface ImparablesInterlockProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ImparablesInterlock: React.FC<ImparablesInterlockProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top Left: Blue square with inner cutout */}
        <path d="M4 4H22V16H16V22H4V4Z" fill="#004F9E" />
        {/* Center Interlock: Amber connector */}
        <rect x="18" y="14" width="12" height="12" fill="#FFB100" />
        {/* Top Right: Amber square */}
        <path d="M26 4H44V22H32V16H26V4Z" fill="#FFB100" />
        {/* Bottom Left: Light neutral square */}
        <rect x="4" y="26" width="18" height="18" fill="#F4F4F6" fillOpacity="0.8" />
        {/* Bottom Right: Dark square */}
        <rect x="26" y="26" width="18" height="18" fill="#0E1015" />
      </svg>
    </div>
  );
};
