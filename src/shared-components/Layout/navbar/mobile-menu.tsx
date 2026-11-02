"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink } from "./nav-link";
import { iconControlClass, navigation } from "./navbar.config";

export function MobileMenu() {
  const pathname = usePathname();


  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpenPath(open ? null : pathname)}
        className={cn(iconControlClass, "lg:hidden")}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {/* Positioned against the sticky <header>, directly under the bar. */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-t border-border bg-background px-4 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href} variant="mobile">
                {item.label}
              </NavLink>
            ))}
            <NavLink href="/account" variant="mobile">
              My Account
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
}