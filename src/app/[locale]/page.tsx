import { notFound } from "next/navigation";
import { HeroCarousel } from "@/features/home/hero-Section/hero-carousel";
import { BenefitsBar } from "@/features/home/benefits-bar";
import { ExploreByCategory } from "@/features/home/categories/ExploreByCategory";
import {Footer} from "@/shared-components/Layout/footer/footer";

type Locale = "en" | "ar";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const currentLocale: Locale = locale;

  return (
    <div
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      lang={currentLocale}
      className="flex min-h-screen flex-1 flex-col items-stretch px-4"
    >
      <HeroCarousel locale={currentLocale} />
      <BenefitsBar locale={currentLocale} />
      <ExploreByCategory  />
      <Footer/>
    </div>
  );
}
