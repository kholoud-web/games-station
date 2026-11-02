
"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { SearchInput } from "./search-input";

interface ProductSearchProps {
  initialQuery?: string;
}

export function ProductSearch({
  initialQuery = "",
}: ProductSearchProps) {
  const t = useTranslations("products.search");

  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState(initialQuery);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) {
      handleClear();
      return;
    }

    const params = new URLSearchParams();
    params.set("q", searchQuery);

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  function handleClear() {
    setQuery("");

    router.push(pathname, {
      scroll: false,
    });
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <SearchInput
        value={query}
        onChange={setQuery}
        onClear={handleClear}
        placeholder={t("placeholder")}
        label={t("label")}
        searchLabel={t("submit")}
        clearLabel={t("clear")}
      />
    </form>
  );
}
