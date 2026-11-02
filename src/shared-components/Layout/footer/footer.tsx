import { getTranslations } from "next-intl/server";
import { ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const supportLinks = [
  { key: "tracking", href: "/tracking" },
  { key: "returns", href: "/returns" },
  { key: "warranty", href: "/warranty" },
  { key: "terms", href: "/terms" },
  { key: "hubs", href: "/stores" },
] as const;

const paymentMethods = ["Visa / 3DSecure", "Mastercard", "Cash on Delivery", "Apple Pay", "Google Pay", "PayPal"] as const;

export async function Footer() {
  const t = await getTranslations("home");

  return (
    <footer className=" bg-surface-elevated rounded-2xl px-4">
      <div className="mx-auto w-full max-w-[var(--container-max-width)] px-[var(--page-gutter)] py-10 lg:py-12 ">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <section aria-labelledby="footer-brand" className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo.jpeg" alt="Games Station Logo" width={40} height={40} className="h-auto w-auto border border-primary rounded-2xl p-2" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("about")}</p>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="size-4 text-success" aria-hidden="true" />
              {t("verified")}
            </p>
          </section>

          {/* Support links */}
          <nav aria-labelledby="footer-support">
            <h2 id="footer-support" className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
              {t("support.title")}
            </h2>
            <ul className="mt-4 space-y-1">
              {supportLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:min-h-8"
                  >
                    {t(`support.links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logistics */}
          <section aria-labelledby="footer-logistics">
            <h2 id="footer-logistics" className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
              {t("logistics.title")}
            </h2>
            <div className="mt-4 rounded-lg border border-border bg-surface p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold">Aramex Express</span>
                <span className="rounded bg-warning/15 px-2 py-0.5 font-mono text-[11px] uppercase text-warning">
                  {t("logistics.badge")}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t("logistics.body")}</p>
            </div>
          </section>

          {/* Payments */}
          <section aria-labelledby="footer-payments">
            <h2 id="footer-payments" className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
              {t("payments.title")}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{t("payments.body")}</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {paymentMethods.map((m) => (
                <li
                  key={m}
                  className="rounded-md border border-border bg-surface px-2 py-2 text-center font-mono text-xs"
                >
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">{t("payments.cod")}</p>
          </section>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-background ">
        <div className="mx-auto flex w-full max-w-[var(--container-max-width)] flex-col gap-2 px-[var(--page-gutter)] py-4 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}