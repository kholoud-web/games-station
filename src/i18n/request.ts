
// import { getRequestConfig } from "next-intl/server";
// import { hasLocale } from "next-intl";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   const requested = await requestLocale;

//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   return {
//     locale,
//     messages: (
//       await import(`../messages/${locale}.json`)
//     ).default,
//   };
// });

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

// Names of the JSON files (without .json) that exist in BOTH messages/en and messages/ar
const namespaces = ["common", "home","products"] as const;

async function loadMessages(locale: string) {
  const entries = await Promise.all(
    namespaces.map(async (ns) => {
      const mod = await import(`../messages/${locale}/${ns}.json`);
      return [ns, mod.default] as const;
    }),
  );
  return Object.fromEntries(entries);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: await loadMessages(locale),
  };
});