import { getRequestConfig } from 'next-intl/server';

import { Locale, routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // If no locale found, uses the default locale
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'fr'
        ? // Will enable HMR for 'fr' with Turbopack
          import(`../../messages/fr.json`)
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
