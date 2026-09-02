"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { InstagramLogo, ArrowUpRight } from "@phosphor-icons/react";

const instagramPhotos = [
  { id: "ig-01", src: "/ig/ig-01.jpg", alt: "Imparables Instagram 1" },
  { id: "ig-02", src: "/ig/ig-02.jpeg", alt: "Imparables Instagram 2" },
  { id: "ig-03", src: "/ig/ig-03.jpg", alt: "Imparables Instagram 3" },
  { id: "ig-04", src: "/ig/ig-04.jpeg", alt: "Imparables Instagram 4" },
  { id: "ig-05", src: "/ig/ig-05.png", alt: "Imparables Instagram 5" },
  { id: "ig-06", src: "/ig/ig-06.png", alt: "Imparables Instagram 6" },
  { id: "ig-07", src: "/ig/ig-07.png", alt: "Imparables Instagram 7" },
  { id: "ig-08", src: "/ig/ig-08.png", alt: "Imparables Instagram 8" },
  { id: "ig-09", src: "/ig/ig-09.png", alt: "Imparables Instagram 9" },
  { id: "ig-10", src: "/ig/ig-10.png", alt: "Imparables Instagram 10" },
];

// Duplicate array for seamless infinite marquee loop
const marqueePhotos = [...instagramPhotos, ...instagramPhotos];

export const ImparablesInstagramFeed: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-background border-t border-b border-white/10 overflow-hidden py-0">
      {/* Infinite Marquee Swiper Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
          className="flex flex-nowrap items-center w-max"
        >
          {marqueePhotos.map((photo, idx) => (
            <a
              key={`${photo.id}-${idx}`}
              href="https://www.instagram.com/imparables.ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-square border-r border-white/10 overflow-hidden bg-neutral-900"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark Overlay & Hover Indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider">
                    <InstagramLogo size={16} weight="bold" className="text-[#FFB100]" />
                    <span>@imparables.ia</span>
                  </div>
                  <ArrowUpRight size={16} weight="bold" className="text-white/80" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Center Floating Instagram Badge */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          <a
            href="https://www.instagram.com/imparables.ia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sigue a Imparables en Instagram"
            className="pointer-events-auto relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-white text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            {/* Subtle pulse ring behind circle */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />

            <InstagramLogo
              size={32}
              weight="bold"
              className="text-neutral-950 group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImparablesInstagramFeed;
