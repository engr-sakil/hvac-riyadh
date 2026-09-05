import type { Locale } from './site';
import type { ServiceSlug } from './content';

/**
 * Sub-path the site is served from, or '' at a domain root. GitHub Pages project
 * sites are published at /<repo>/; Vercel and local dev serve from the root.
 *
 * next/link prefixes this automatically — only hand-written absolute URLs (raw
 * <img src>, metadata icons, the manifest) need `asset()`.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Prefix a root-absolute public asset path with the base path. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

/** Build a locale-prefixed path. `href('en', '/about')` -> `/en/about`. */
export const href = (locale: Locale, path = '') => `/${locale}${path}`;

export const servicePath = (locale: Locale, slug: ServiceSlug) =>
  href(locale, `/services/${slug}`);

export const ROUTES = {
  home: '',
  about: '/about',
  services: '/services',
  projects: '/projects',
  workshop: '/workshop',
  contact: '/contact',
} as const;

/** The same page in the other language, for the switcher and hreflang tags. */
export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'ar' : 'en');
