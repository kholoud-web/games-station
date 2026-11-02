import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto grid min-h-16 max-w-[1440px] grid-cols-[1fr_auto] items-center gap-3 px-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-8">
        <NavbarLogo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <NavbarLinks />
        </nav>

        <NavbarActions />
      </div>
    </header>
  );
}