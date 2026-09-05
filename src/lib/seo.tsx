import type { Metadata } from 'next';
import { BUSINESS, SITE_URL, type Locale } from './site';
import { getContent } from './content';
import { href } from './paths';

/**
 * Canonical + hreflang for one page. `path` is the route without the locale prefix.
 * Both language versions and an x-default are always declared — the old site had
 * neither, which is one of the reasons nothing ranked. PLAN.md §14.
 */
export function pageMeta({
  locale,
  path = '',
  title,
  description,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE_URL}${href(locale, path)}/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}${href('en', path)}/`,
        ar: `${SITE_URL}${href('ar', path)}/`,
        'x-default': `${SITE_URL}${href('en', path)}/`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: getContent(locale).meta.siteName,
      title,
      description,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      images: [
        {
          url: '/img/install-rooftop-ductwork-condensers-1600.webp',
          width: 1600,
          height: 1110,
          alt:
            locale === 'ar'
              ? 'قنوات معزولة ووحدات تكثيف على سطح مبنى في الرياض'
              : 'Insulated ductwork and condenser units on a Riyadh rooftop',
        },
      ],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

/**
 * LocalBusiness schema. Every field is verifiable — no aggregateRating, no
 * openingHours and no priceRange, because none of those are confirmed.
 * PLAN.md §0 rule 13.
 */
export function localBusinessSchema(locale: Locale) {
  const addr = locale === 'ar' ? BUSINESS.addressAr : BUSINESS.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${SITE_URL}/#business`,
    name: locale === 'ar' ? BUSINESS.legalNameAr : BUSINESS.legalName,
    alternateName: BUSINESS.brand,
    url: `${SITE_URL}${href(locale)}/`,
    logo: `${SITE_URL}/brand/icon-512.png`,
    image: `${SITE_URL}/img/install-rooftop-ductwork-condensers-1600.webp`,
    telephone: BUSINESS.mobile,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: addr.street,
      addressLocality: addr.city,
      postalCode: addr.postalCode,
      addressCountry: BUSINESS.address.countryCode,
    },
    areaServed: { '@type': 'City', name: locale === 'ar' ? 'الرياض' : 'Riyadh' },
    availableLanguage: BUSINESS.languages,
    founder: { '@type': 'Person', name: BUSINESS.owner },
  };
}

export function serviceSchema(
  locale: Locale,
  name: string,
  description: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType: name,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: locale === 'ar' ? 'الرياض' : 'Riyadh' },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

/** Renders a JSON-LD block. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
