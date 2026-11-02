
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");
  const locale = isArabic ? "ar" : "en";
  const nextLocale = isArabic ? "en" : "ar";

  function handleToggle() {
    const segments = pathname.split("/");
    segments[1] = nextLocale;

    router.push(segments.join("/") || `/${nextLocale}`);
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleToggle}
      aria-label={`Switch language to ${nextLocale === "ar" ? "Arabic" : "English"}`}
      className="h-10 gap-2 border-border bg-surface px-3 text-foreground hover:bg-accent"
    >
      <Languages className="size-4" />
      <span>{locale === "en" ? "العربية" : "English"}</span>
    </Button>
  );
}
