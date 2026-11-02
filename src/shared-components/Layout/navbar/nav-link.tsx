"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { isActivePath } from "./navbar.config";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "desktop" | "mobile";
};

// Client Component only because it reads the current pathname.
export function NavLink({ href, children, variant = "desktop" }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "rounded-md px-3 py-3 text-sm font-medium transition-colors",
         active
  ? "bg-accent text-primary"
  : "text-muted-foreground hover:bg-accent hover:text-primary",
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
    className={cn(
  "group relative whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  active ? 
  "text-brand-primary" : "text-muted-foreground hover:text-brand-primary",
)}
>
  {children}
  <span
    className={cn(
      "absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-brand-primary transition-transform origin-left",
      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
    )}
  />
</Link>
  );
}



