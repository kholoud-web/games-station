export type Locale = "en" | "ar";

export type HeroSlide = {
  id: string;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  highlight: Record<Locale, string>;
  description: Record<Locale, string>;
  cta: Record<Locale, string>;
  image: string;
  imageAlt: Record<Locale, string>;
  href: string;
  offerLabel: Record<Locale, string>;
};

export const heroSlides = [
  {
    id: "gaming-gear",
    badge: {
      en: "EGYPT'S OFFICIAL GAMING HUB",
      ar: "وجهتك الرسمية للألعاب في مصر",
    },
    title: {
      en: "Precision Gaming Gear.",
      ar: "معدات ألعاب باحترافية.",
    },
    highlight: {
      en: "Delivered Fast Across Egypt.",
      ar: "توصيل سريع في مصر.",
    },
    description: {
      en: "Discover gaming peripherals, mechanical keyboards, precision mice, and esports gear with official warranty.",
      ar: "اكتشف ملحقات الألعاب ولوحات المفاتيح الميكانيكية وماوس الألعاب مع ضمان رسمي.",
    },
    cta: {
      en: "Shop Now",
      ar: "تسوق الآن",
    },
    image: "/images/logo.jpeg",
    imageAlt: {
      en: "Gaming headset, mechanical keyboard and mouse",
      ar: "سماعة ألعاب ولوحة مفاتيح ميكانيكية وماوس",
    },
    href: "/products",
    offerLabel: {
      en: "TIER-1 ESPORTS GEAR",
      ar: "معدات ألعاب احترافية",
    },
  },
  {
    id: "latest-arrivals",
    badge: {
      en: "JUST LANDED",
      ar: "وصل حديثًا",
    },
    title: {
      en: "Upgrade Your Setup.",
      ar: "طوّر تجربة اللعب لديك.",
    },
    highlight: {
      en: "Discover What's New.",
      ar: "اكتشف أحدث المنتجات.",
    },
    description: {
      en: "Explore the latest gaming accessories and find the right gear for your setup.",
      ar: "اكتشف أحدث ملحقات الألعاب واختر المعدات المناسبة لجهازك.",
    },
    cta: {
      en: "New Arrivals",
      ar: "أحدث المنتجات",
    },
    image: "/images/carasol.jpg",
    imageAlt: {
      en: "Latest gaming accessories",
      ar: "أحدث ملحقات الألعاب",
    },
    href: "/products?sort=newest",
    offerLabel: {
      en: "NEW ARRIVALS",
      ar: "منتجات جديدة",
    },
  },
  {
    id: "special-offers",
    badge: {
      en: "SPECIAL OFFERS",
      ar: "عروض مميزة",
    },
    title: {
      en: "Level Up. Spend Less.",
      ar: "ارتقِ بمستواك ووفر أكثر.",
    },
    highlight: {
      en: "Find Your Next Upgrade.",
      ar: "اكتشف ترقيتك القادمة.",
    },
    description: {
      en: "Explore selected gaming gear offers and check current product prices and availability.",
      ar: "اكتشف عروض معدات الألعاب وراجع الأسعار والتوفر الحاليين.",
    },
    cta: {
      en: "Explore Offers",
      ar: "اكتشف العروض",
    },
    image: "/images/carasol.jpg",
    imageAlt: {
      en: "Gaming accessories featured in special offers",
      ar: "ملحقات ألعاب ضمن العروض المميزة",
    },
    href: "/products?promotion=true",
    offerLabel: {
      en: "FEATURED DEALS",
      ar: "عروض مختارة",
    },
  },
] satisfies HeroSlide[];
