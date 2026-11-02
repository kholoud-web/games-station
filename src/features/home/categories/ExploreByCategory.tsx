import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

import { categories } from "./categories.mock";
import { CategoryCard } from "./CategoryCard";

export async function ExploreByCategory() {
      const t = await getTranslations("home");

  return (
    <section
      aria-labelledby="explore-categories-heading"
      className="w-full bg-background py-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {t("eyebrow")}
            </p>

            <h2
              id="explore-categories-heading"
              className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {t("title")}
            </h2>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              {t("description")}
            </p>
          </div>

          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-medium text-primary
              transition-opacity hover:opacity-80
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2
              sm:inline-flex"
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => (
                <CategoryCard
              key={category.id}
              category={{
                ...category,
                name: t(
                  `categories.${category.id}` as
                    | "categories.keyboards"
                    | "categories.gaming-mice"
                    | "categories.headphones-audio"
                    | "categories.monitors"
                    | "categories.controllers"
                    | "categories.pc-components"
                ),
              }}
            />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2"
          >
             {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
