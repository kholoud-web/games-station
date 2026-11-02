
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Locale } from "./hero-slides";

type Props = {
  activeIndex: number;
  slideCount: number;
  locale: Locale;
  paused: boolean;
  showPause: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  onTogglePause: () => void;
};

export function HeroCarouselControls({
  activeIndex,
  slideCount,
  locale,
  paused,
  showPause,
  onPrevious,
  onNext,
  onSelect,
  onTogglePause,
}: Props) {
  const isRTL = locale === "ar";
  const PreviousIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  if (slideCount < 2) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
      <div
        role="group"
        aria-label={isRTL ? "اختيار الشريحة" : "Choose slide"}
        className="flex items-center gap-2"
      >
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={
              isRTL
                ? `الشريحة ${index + 1} من ${slideCount}`
                : `Go to slide ${index + 1} of ${slideCount}`
            }
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => onSelect(index)}
            className={`h-2.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeIndex === index
                ? "w-8 bg-brand-primary"
                : "w-2.5 bg-muted-foreground/40 hover:bg-brand-primary/70"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isRTL ? "الشريحة السابقة" : "Previous slide"}
          onClick={onPrevious}
        >
          <PreviousIcon aria-hidden="true" className="size-4" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isRTL ? "الشريحة التالية" : "Next slide"}
          onClick={onNext}
        >
          <NextIcon aria-hidden="true" className="size-4" />
        </Button>

        {showPause && (
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={
              paused
                ? isRTL
                  ? "استئناف العرض التلقائي"
                  : "Resume autoplay"
                : isRTL
                  ? "إيقاف العرض التلقائي"
                  : "Pause autoplay"
            }
            onClick={onTogglePause}
          >
            {paused ? (
              <Play aria-hidden="true" className="size-4" />
            ) : (
              <Pause aria-hidden="true" className="size-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
