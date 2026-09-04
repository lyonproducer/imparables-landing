"use client";

import React, { useState } from "react";
import { ImparablesTrackDivider } from "@/components/ui/imparables";
import { ImparablesEventFormats } from "./ImparablesEventFormats";
import { ImparablesEventsTimeline } from "./ImparablesEventsTimeline";

const formatToTimelineMap: Record<string, string> = {
  conferencias: "2024-el-comienzo",
  "business-summit": "2025-business-summit",
  "liderazgo-360": "2026-liderazgo-360",
  "voces-imparables": "2026-voces-imparables",
  nexus: "2026-imparables-nexus",
};

export const EventosContent: React.FC = () => {
  const [activeTimelineId, setActiveTimelineId] = useState<string | null>("2024-el-comienzo");

  const handleSelectFormat = (formatId: string) => {
    const targetId = formatToTimelineMap[formatId] || formatId;
    setActiveTimelineId(targetId);

    // Smooth scroll down to the corresponding timeline card
    setTimeout(() => {
      const el = document.getElementById(`timeline-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  };

  return (
    <div className="w-full">
      {/* 1. Header Hero with Staggered 4-Flyer Deck (Ref 1) */}
      <ImparablesEventFormats onSelectFormat={handleSelectFormat} />

      {/* Track Divider Connecting Thread (Signature Design System Seam) */}
      <ImparablesTrackDivider bgColor="#FFFFFF" />

      {/* 2. Interactive Timeline with Collapsible Photo Galleries (Ref 2 & 3) */}
      <div id="timeline-section">
        <ImparablesEventsTimeline
          activeId={activeTimelineId}
          onToggle={setActiveTimelineId}
        />
      </div>
    </div>
  );
};

export default EventosContent;
