import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Math only internationalized pathnames
  matcher: [
    // Enable redirect to a matching locale at the root
    '/',

    // Set a cookie to remember previous locale for requests that have a locale prefix
    '/(fr|en)/:path*',

    // Enables redirects that add missing locale (e.g. `/pathname` -> `/en/pathname`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
