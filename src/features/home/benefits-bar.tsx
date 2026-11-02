
import {
  CreditCard,
  ShieldCheck,
  Truck,
} from "lucide-react";

type Locale = "en" | "ar";

type Benefit = {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  Icon: typeof Truck;
};

const benefits: Benefit[] = [
  {
    id: "delivery",
    title: {
      en: "Next-Day Cairo & Giza",
      ar: "توصيل في اليوم التالي للقاهرة والجيزة",
    },
    description: {
      en: "Fast Aramex priority dispatch",
      ar: "شحن سريع عبر أرامكس",
    },
    Icon: Truck,
  },
  {
    id: "warranty",
    title: {
      en: "Official 2-Year Warranty",
      ar: "ضمان رسمي لمدة سنتين",
    },
    description: {
      en: "Direct authorized agent repair",
      ar: "خدمة إصلاح عبر الوكيل المعتمد",
    },
    Icon: ShieldCheck,
  },
  {
    id: "payments",
    title: {
      en: "Fawry & valU Available",
      ar: "فوري وڤاليو متاحان",
    },
    description: {
      en: "Up to 24 months zero interest",
      ar: "تقسيط حتى 24 شهرًا بدون فوائد",
    },
    Icon: CreditCard,
  },
];

type BenefitsBarProps = {
  locale?: Locale;
};

export function BenefitsBar({
  locale = "en",
}: BenefitsBarProps) {
  const isRTL = locale === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={
        isRTL ? "مميزات التسوق" : "Shopping benefits"
      }
      className="mx-auto w-full border rounded-2xl "
    >
      <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-border rtl:sm:divide-x-reverse">
        {benefits.map(({ id, title, description, Icon }) => (
          <li
            key={id}
            className="flex min-w-0 items-center gap-3 py-4 sm:px-3 md:gap-3 md:px-4 lg:px-6"
          >
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-md border border-border-glass bg-surface text-brand-primary"
            >
              <Icon className="size-5" strokeWidth={1.8} />
            </span>

            <div className="min-w-0">
              <h2 className="text-sm font-semibold leading-5 text-foreground">
                {title[locale]}
              </h2>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {description[locale]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
