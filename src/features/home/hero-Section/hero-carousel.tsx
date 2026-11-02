import { HeroCarouselClient } from "./hero-carousel-client";
import { heroSlides, type Locale } from "./hero-slides";

type HeroCarouselProps = {
  locale?: Locale;
};

export function HeroCarousel({
  locale = "en",
}: HeroCarouselProps) {
  return (
    <section
      aria-label={
        locale === "ar"
          ? "العروض المميزة"
          : "Featured promotions"
      }
      className="border-y border-border-glass bg-background"
    >
      <HeroCarouselClient
        slides={heroSlides}
        locale={locale}
      />
    </section>
  );
}