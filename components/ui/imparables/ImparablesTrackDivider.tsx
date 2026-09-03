"use client";

import React from "react";

export interface ImparablesTrackDividerProps {
  bgColor?: string;
  height?: number;
  className?: string;
}

export const ImparablesTrackDivider: React.FC<ImparablesTrackDividerProps> = ({
  bgColor = "#FFFFFF",
  height = 56,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none flex items-center justify-center ${className}`.trim()}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        className="w-full block"
        height={height}
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow behind yellow thread */}
        <path
          d="M -10 28 Q 360 18, 720 28 T 1450 28"
          stroke="#FFB100"
          strokeOpacity="0.4"
          strokeWidth="6"
          className="blur-sm"
        />

        {/* Dotted Yellow Thread Line */}
        <path
          d="M -10 28 Q 360 18, 720 28 T 1450 28"
          stroke="#FFB100"
          strokeWidth="3"
          strokeDasharray="10 10"
          strokeLinecap="round"
        />

        {/* Golden Node Connector Circles */}
        <circle cx="360" cy="23" r="5" fill="#FFB100" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="1080" cy="28" r="5" fill="#FFB100" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ImparablesTrackDivider;
