import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HeroSlide, Locale } from "./hero-slides";

type Props = {
  slide: HeroSlide;
  locale: Locale;
};

export function HeroSlideContent({ slide, locale }: Props) {
  const isRTL = locale === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border-glass bg-surface px-3 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-brand-primary sm:text-xs">
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-brand-primary"
        />
        {slide.badge[locale]}
      </span>

      <div className="space-y-3">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          {slide.title[locale]}
          <span className="mt-1 block text-brand-primary">
            {slide.highlight[locale]}
          </span>
        </h1>

        <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {slide.description[locale]}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button
          size="lg"
          className="gap-2"
          nativeButton={false}
          render={<Link href={slide.href} />}
        >
          {slide.cta[locale]}
          <Arrow aria-hidden="true" className="size-4" />
        </Button>

        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
          <BadgeCheck
            aria-hidden="true"
            className="size-4 shrink-0 text-brand-primary"
          />
          {isRTL
            ? "منتجات أصلية بضمان معتمد"
            : "Genuine hardware. Official warranty."}
        </span>
      </div>
    </>
  );
}
