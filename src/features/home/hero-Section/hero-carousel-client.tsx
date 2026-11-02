"use client";
import { useEffect, useState } from "react";
import type { HeroSlide, Locale } from "./hero-slides";

import { HeroSlideContent } from "./hero-slide-content";
import { HeroSlideMedia } from "./hero-slide-media";
import { HeroCarouselControls } from "./hero-carousel-controls";

type Props = {
  slides: HeroSlide[];
  locale: Locale;
};

export function HeroCarouselClient({ slides, locale }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (
      slides.length < 2 ||
      userPaused ||
      hovered ||
      focused ||
      reducedMotion
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slides.length, userPaused, hovered, focused, reducedMotion]);

  if (slides.length === 0) return null;

  const isRTL = locale === "ar";
  const slide = slides[activeIndex];

  function goTo(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  function previous() {
    goTo(activeIndex - 1);
  }

  function next() {
    goTo(activeIndex + 1);
  }

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      role="region"
      aria-roledescription={isRTL ? "عرض شرائح" : "carousel"}
      aria-label={isRTL ? "عروض المتجر" : "Store highlights"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
      className="mx-auto w-full max-w-[1440px] px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
    <div className="grid items-center gap-7 md:grid-cols-2 md:gap-8 lg:gap-12">
  {/* Content: first in DOM, so right column in RTL, left column in LTR */}
  <div
    key={`${slide.id}-content`}
    className="hero-slide-content flex min-w-0 flex-col items-start gap-4"
  >
    <HeroSlideContent slide={slide} locale={locale} />
  </div>

  {/* Image */}
  <div key={`${slide.id}-media`} className="hero-slide-image min-w-0">
    <HeroSlideMedia slide={slide} locale={locale} />
  </div>
</div>

      <HeroCarouselControls
        activeIndex={activeIndex}
        slideCount={slides.length}
        locale={locale}
        paused={userPaused || reducedMotion}
        onPrevious={previous}
        onNext={next}
        onSelect={goTo}
        onTogglePause={() => setUserPaused((value) => !value)}
        showPause={!reducedMotion && slides.length > 1}
      />
    </div>
  );
}
