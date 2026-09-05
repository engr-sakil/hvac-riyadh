import type { MetadataRoute } from 'next';
import { LOCALES, SITE_URL } from '@/lib/site';
import { SERVICE_SLUGS } from '@/lib/content';
import { href, ROUTES } from '@/lib/paths';

// The old Google Sites property had no sitemap at all — it returned the 404 page.
// PLAN.md §2.4 item 3.

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...Object.values(ROUTES),
    ...SERVICE_SLUGS.map((s) => `${ROUTES.services}/${s}`),
  ];

  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}${href(locale, path)}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path.startsWith('/services') ? 0.8 : 0.6,
      alternates: {
        languages: {
          en: `${SITE_URL}${href('en', path)}/`,
          ar: `${SITE_URL}${href('ar', path)}/`,
        },
      },
    })),
  );
}

export const dynamic = 'force-static';
