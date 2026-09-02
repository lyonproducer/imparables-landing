import React from "react";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "form";
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  as: Component = "div",
  id,
}) => {
  return (
    <Component
      id={id}
      className={`glass-card p-6 sm:p-8 md:p-12 transition-shadow duration-300 ${className}`}
    >
      {children}
    </Component>
  );
};
