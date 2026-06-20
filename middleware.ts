import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const LOCALES = ['pt', 'en', 'es'] as const;
type Locale = typeof LOCALES[number];
const LOCALE_COOKIE = 'NEXT_LOCALE';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Portuguese-speaking countries (ISO 3166-1 alpha-2)
const PT_COUNTRIES = new Set(['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL']);
// Spanish-speaking countries
const ES_COUNTRIES = new Set([
  'AR', 'MX', 'CO', 'ES', 'CL', 'VE', 'EC', 'GT', 'CU', 'BO',
  'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'DO', 'PE', 'GQ',
]);

function detectLocaleByIP(req: NextRequest): Locale {
  const country = req.headers.get('x-vercel-ip-country') ?? '';
  if (PT_COUNTRIES.has(country)) return 'pt';
  if (ES_COUNTRIES.has(country)) return 'es';
  return 'en';
}

// next-intl handles routing/rewriting; we control locale detection ourselves
const handleI18n = createIntlMiddleware({
  locales: LOCALES,
  defaultLocale: 'en',
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const storedLocale = req.cookies.get(LOCALE_COOKIE)?.value as Locale | undefined;
  const pathLocale = LOCALES.find(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  // Priority: explicit URL locale → stored cookie → IP detection
  const locale: Locale =
    pathLocale ??
    (storedLocale && LOCALES.includes(storedLocale) ? storedLocale : detectLocaleByIP(req));

  if (!pathLocale) {
    // No locale in URL → redirect to the correct locale-prefixed path
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    const res = NextResponse.redirect(url);
    res.cookies.set(LOCALE_COOKIE, locale, { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' });
    return res;
  }

  // Locale is in URL — let next-intl serve it; persist locale choice in cookie
  const res = handleI18n(req);
  if (pathLocale !== storedLocale) {
    res.cookies.set(LOCALE_COOKIE, pathLocale, { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' });
  }
  return res;
}

export const config = {
  matcher: ['/', '/(pt|en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
