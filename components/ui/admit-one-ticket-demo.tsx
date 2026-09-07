"use client";

import React from "react";
import AdmitOneTicket from "@/components/ui/admit-one-ticket";

export default function AdmitOneTicketDemo() {
  return (
    <div className="flex min-h-[640px] w-full items-center justify-center bg-[#03152b] p-8">
      <AdmitOneTicket
        name="EL FUTURO DE LAS EMPRESAS"
        presenter="IMPARABLES PRESENTA"
        event="IMPARABLES NEXUS 2026"
        venue="PUERTO ORDAZ, VZLA"
        dates="NOVIEMBRE 2026"
        stubText="ADMIT ONE · NEXUS"
        watermark="2026"
        width={741}
      />
    </div>
  );
}
