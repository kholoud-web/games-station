export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export function isActivePath(pathname: string, href: string): boolean {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

/** Shared look for the square icon controls (theme, cart, account, menu). */
export const iconControlClass =
  "inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-10";