import type { MetadataRoute } from 'next';
import { IS_PRODUCTION_HOST, SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // A preview deployment must never compete with the production domain in search.
  if (!IS_PRODUCTION_HOST) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

export const dynamic = 'force-static';
