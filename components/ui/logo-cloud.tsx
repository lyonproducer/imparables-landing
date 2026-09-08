import Image from "next/image";
import { Plus } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-3 rounded-2xl md:rounded-3xl border border-white/12 bg-[#0D1626]/30 backdrop-blur-2xl backdrop-saturate-200 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
      {...props}
    >
      <LogoCard
        className="relative border-b border-r border-white/10 rounded-tl-2xl md:rounded-tl-3xl"
        logo={logos[0]}
      >
        <Plus
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#7CC9FF]/80 md:hidden"
          weight="light"
          aria-hidden="true"
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-r border-white/10 md:border-r-0"
        logo={logos[1]}
      >
        <Plus
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 hidden size-6 text-[#7CC9FF]/80 md:block"
          weight="light"
          aria-hidden="true"
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-white/10 rounded-tr-2xl md:rounded-tr-3xl"
        logo={logos[2]}
      >
        <Plus
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#7CC9FF]/80 md:hidden"
          weight="light"
          aria-hidden="true"
        />
        <Plus
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-[#7CC9FF]/80 md:block"
          weight="light"
          aria-hidden="true"
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-r border-white/10 md:border-b-0"
        logo={logos[3]}
      />

      <LogoCard
        className="relative border-r border-white/10 md:border-r-0"
        logo={logos[4]}
      />

      <LogoCard
        className="rounded-br-2xl md:rounded-br-3xl"
        logo={logos[5]}
      />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center px-4 py-8 md:p-8 transition-colors duration-300 hover:bg-[#0D1626]/60 hover:border-[#004F9E]/50",
        className
      )}
      {...props}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        title={logo.alt}
        width={0}
        height={0}
        sizes="160px"
        className="pointer-events-none h-9 w-auto max-w-[80%] select-none object-contain md:h-11 grayscale contrast-125 opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}