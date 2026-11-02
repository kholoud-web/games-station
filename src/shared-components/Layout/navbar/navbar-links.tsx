import { NavLink } from "./nav-link";
import { navigation } from "./navbar.config";

// Server Component: renders the list; only each NavLink is a client island.
export function NavbarLinks() {
  return (
    <div className="flex items-center justify-center gap-6">
      {navigation.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}