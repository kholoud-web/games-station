import Image from "next/image";
import { Link } from "@/i18n/navigation";
export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Games Station home"
      className="flex min-w-0 items-center gap-2.5 justify-self-start"
    >
      <span className="relative size-9 shrink-0 overflow-hidden rounded-md border border-border-glass bg-surface-elevated sm:size-10">
        <Image
          src="/images/logo.jpeg"
          alt=""
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>

      <span className="hidden whitespace-nowrap text-sm font-bold tracking-wide sm:inline lg:text-base">
        GAMES STATION
      </span>
    </Link>
  );
}