import Image from "next/image";
import { Zap } from "lucide-react";

import type { HeroSlide, Locale } from "./hero-slides";

type Props = {
  slide: HeroSlide;
  locale: Locale;
};

export function HeroSlideMedia({ slide, locale }: Props) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border-glass bg-surface shadow-[0_0_32px_var(--glow-cyan)]">
      {/* <Image
        src={slide.image}
        alt={slide.imageAlt[locale]}
        fill
        unoptimized 
        priority={slide.id === "gaming-gear"}
        sizes="(max-width: 767px) calc(100vw - 24px), (max-width: 1024px) 46vw, 600px"
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
      /> */}

      <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={slide.image}
          alt={slide.imageAlt[locale]}
          fill
          unoptimized
          priority={slide.id === "gaming-gear"}
          sizes="(max-width: 767px) calc(100vw - 24px), (max-width: 1024px) 46vw, 600px"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,7,13,0.55)_70%,rgba(5,7,13,0.9)_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-border-glass transition-shadow duration-300 group-hover:ring-border-glass-hover group-hover:shadow-[inset_0_0_24px_var(--glow-cyan)]"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
      />

      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 sm:inset-x-4 sm:bottom-4">
        <span className="inline-flex min-w-0 items-center gap-2 rounded-md border border-border-glass bg-background/90 px-3 py-2 font-mono text-[9px] tracking-wider text-foreground backdrop-blur-sm sm:text-[10px]">
          <Zap
            aria-hidden="true"
            className="size-3 shrink-0 text-brand-primary"
          />
          <span className="truncate">{slide.offerLabel[locale]}</span>
        </span>
      </div>
    </div>
  );
}
