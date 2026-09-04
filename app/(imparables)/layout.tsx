import React from "react";
import { Header } from "@/components/layout/Header";
import { ImparablesFooter } from "@/components/sections/imparables/ImparablesFooter";

export default function ImparablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <ImparablesFooter />
    </div>
  );
}
