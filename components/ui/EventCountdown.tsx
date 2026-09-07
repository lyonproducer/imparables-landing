"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "@phosphor-icons/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface EventCountdownProps {
  targetDate?: string;
  className?: string;
}

// Target: November 7, 2026 at 09:00 AM (Venezuela Time UTC-4)
const DEFAULT_TARGET = "2026-11-07T09:00:00-04:00";

function calculateTimeLeft(targetIso: string): TimeLeft {
  const difference = +new Date(targetIso) - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}

export const EventCountdown: React.FC<EventCountdownProps> = ({
  targetDate = DEFAULT_TARGET,
  className = "",
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Días", value: timeLeft.days, isHighlight: true },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Header Label (Clean, no background) */}
      <div className="inline-flex items-center gap-2 text-white/75 text-xs font-sans font-semibold uppercase tracking-[0.1em]">
        <Clock size={14} weight="duotone" className="text-[#FFB100] animate-spin" style={{ animationDuration: "12s" }} />
        <span>CUENTA REGRESIVA · 7 DE NOVIEMBRE 2026</span>
      </div>

      {/* Digits Row */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {units.map((unit, idx) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-22 rounded-2xl bg-[#0D1626]/65 backdrop-blur-2xl backdrop-saturate-150 border border-white/12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-center transition-transform hover:scale-105 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent">
                <span
                  className={`font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tabular-nums tracking-tight ${
                    unit.isHighlight ? "text-[#FFB100]" : "text-white"
                  }`}
                >
                  {mounted ? formatNumber(unit.value) : "--"}
                </span>
              </div>
              <span className="mt-2 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.12em] text-white/60">
                {unit.label}
              </span>
            </div>

            {idx < units.length - 1 && (
              <span className="font-display font-bold text-xl sm:text-2xl text-white/30 -mt-6">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EventCountdown;
