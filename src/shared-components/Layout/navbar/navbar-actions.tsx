import Link from "next/link";
import { UserRound } from "lucide-react";

import { cn } from "@/lib/utils";
import { CartLink } from "./cart-link";
import { MobileMenu } from "./mobile-menu";
import { iconControlClass } from "./navbar.config";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function NavbarActions() {
  return (
    <div className="flex items-center justify-self-end gap-1.5 sm:gap-2">
      <ThemeToggle />
      <LanguageToggle  />
      <CartLink />

      <Link
        href="/account"
        aria-label="My account"
        className={cn(iconControlClass, "hidden sm:inline-flex")}
      >
        <UserRound className="size-4" />
      </Link>

      <MobileMenu />
    </div>
  );
}