import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import type { Category } from "@/types/home-types/category";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group relative block overflow-hidden rounded-lg border border-border
        bg-card p-3 transition-[transform,box-shadow,border-color] duration-300 ease-out
        hover:border-brand-primary
        motion-safe:hover:-translate-y-1
        hover:shadow-[0_8px_30px_-8px_var(--glow-cyan)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 ease-out
            motion-safe:group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t
            from-brand-primary/20 to-transparent opacity-0
            transition-opacity duration-300 group-hover:opacity-100"
        />
        <span
          aria-hidden="true"
          className="absolute end-2 top-2 flex size-8 items-center justify-center
            rounded-full bg-background/80 text-brand-primary backdrop-blur-sm
            opacity-0 transition-all duration-300
            motion-safe:translate-y-1 group-hover:opacity-100
            motion-safe:group-hover:translate-y-0"
        >
          <ArrowUpRight className="size-4 rtl:-scale-x-100" />
        </span>
      </div>

      <h3 className="mt-3 font-heading text-base font-semibold transition-colors duration-300 group-hover:text-brand-primary">
        {category.name}
      </h3>

      {category.description && (
        <p className="mt-1 text-sm text-muted-foreground">
          {category.description}
        </p>
      )}

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-primary
          motion-safe:scale-x-0 transition-transform duration-300
          group-hover:scale-x-100 rtl:origin-right"
      />
    </Link>
  );
}
