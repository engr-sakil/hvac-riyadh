import type { Metadata } from 'next';
import '../globals.css';
import { BUSINESS, LOCALES, SITE_URL, isRtl, toLocale } from '@/lib/site';
import { getContent } from '@/lib/content';
import { asset } from '@/lib/paths';

// This is the root layout: every route lives under /[locale], which is what lets
// <html lang> and dir be set correctly for Arabic. See PLAN.md §15.

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.homeTitle,
      // Short suffix: page titles must survive SERP truncation at ~60 chars.
      template: `%s | ${BUSINESS.brand}`,
    },
    description: t.meta.homeDescription,
    applicationName: t.meta.siteName,
    manifest: asset('/site.webmanifest'),
    icons: {
      icon: [
        { url: asset('/brand/icon-16.png'), sizes: '16x16', type: 'image/png' },
        { url: asset('/brand/icon-32.png'), sizes: '32x32', type: 'image/png' },
        { url: asset('/brand/icon-192.png'), sizes: '192x192', type: 'image/png' },
        { url: asset('/brand/icon-512.png'), sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: asset('/brand/apple-icon-180.png'), sizes: '180x180' }],
      shortcut: asset('/favicon.ico'),
    },
    // No formatDetection override: Next renders `telephone=no` for it, which stops
    // iOS turning written phone numbers into call links. On a contractor site the
    // number appears as text in several places and must stay tappable.
  };
}

export const viewport = {
  themeColor: '#062c4f',
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);

  return (
    <html lang={locale} dir={isRtl(locale) ? 'rtl' : 'ltr'}>
      <body>
        <a className="skip-link" href="#main">
          {t.common.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
