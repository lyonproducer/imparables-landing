import React from "react";

interface ImparablesBadgeProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

export const ImparablesBadge: React.FC<ImparablesBadgeProps> = ({
  children,
  theme = "dark",
  className = "",
}) => {
  const themeStyles =
    theme === "light"
      ? "bg-black/[0.04] hover:bg-black/[0.09] text-neutral-800 hover:text-neutral-950 border-black/10 hover:border-black/20 shadow-2xs"
      : "bg-white/[0.06] hover:bg-white/[0.14] text-[#FFB100] hover:text-amber-300 border-white/12 hover:border-white/25 shadow-lg shadow-black/20";

  return (
    <div
      className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full border backdrop-blur-xl text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-default select-none ${themeStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default ImparablesBadge;
