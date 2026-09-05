// Single source of truth for verifiable business facts.
//
// EVERY value here was read off the client's own material: the live site at
// hvacriyadh.com, the shopfront signage photograph, or the company's own bilingual
// marketing graphic. Nothing is inferred. See PLAN.md §0 rule 2 and §22 before
// adding anything — unverified claims belong in CLIENT_INPUT_REQUIRED, not here.

/** The domain the finished site is meant to live on. Canonicals point here. */
export const PRODUCTION_URL = 'https://www.hvacriyadh.com';

/**
 * Origin this build is published under, including any sub-path. Overridden with
 * NEXT_PUBLIC_SITE_URL for preview deployments (GitHub Pages, staging) so their
 * canonicals and sitemap describe where they actually are.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL;

/** Only the real production domain should be indexable. See app/robots.ts. */
export const IS_PRODUCTION_HOST = SITE_URL === PRODUCTION_URL;

export const BUSINESS = {
  /** Trading name used online. */
  brand: 'HVAC Riyadh',
  /** Legal operator, per the disclaimer on the current homepage. */
  legalName: 'Nasmat Sheta Co.',
  /** From the shopfront sign photographed at the Al Sina'iyah premises. */
  legalNameAr: 'شركة نسمة شتاء',
  owner: 'Md Mokbul Hossen',
  ownerRole: 'Contractor',

  /** Mobile + WhatsApp. Published on both pages of the current site. */
  mobile: '+966545048875',
  mobileDisplay: '+966 54 504 8875',
  /** Landline from the shopfront sign. Riyadh 011 area code. */
  landline: '+966112953365',
  landlineDisplay: '011 295 3365',

  /** Primary business inbox, per the current contact page. */
  email: 'nasmatsheta.co@gmail.com',
  /** The contact page asks for this address in CC. */
  emailCc: 'mokbul.hossain2030@gmail.com',

  address: {
    street: "Al Sina'iyah",
    city: 'Riyadh',
    postalCode: '12843',
    country: 'Saudi Arabia',
    countryCode: 'SA',
  },
  addressAr: {
    street: 'الصناعية',
    city: 'الرياض',
    postalCode: '12843',
    country: 'المملكة العربية السعودية',
  },

  /** Spoken by the team, per the current site's "Questions?" section. */
  languages: ['Arabic', 'Hindi', 'Urdu', 'Bangla', 'English'],

  /** Standards named on the current site's ductwork section. */
  standards: ['SMACNA', 'BSI', 'DW144'],

  maps: 'https://maps.app.goo.gl/',
} as const;

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.mobile.replace('+', '')}`;
export const TEL_MOBILE = `tel:${BUSINESS.mobile}`;
export const TEL_LANDLINE = `tel:${BUSINESS.landline}`;
export const MAILTO = `mailto:${BUSINESS.email}?cc=${BUSINESS.emailCc}`;

/** Address on two lines, with the Arabic comma (U+060C) in Arabic. */
export const formatAddress = (locale: 'en' | 'ar') => {
  const a = locale === 'ar' ? BUSINESS.addressAr : BUSINESS.address;
  const comma = locale === 'ar' ? '،' : ',';
  return {
    line1: `${a.street}${comma} ${a.city} ${a.postalCode}`,
    line2: a.country,
    oneLine: `${a.street}${comma} ${a.city} ${a.postalCode}${comma} ${a.country}`,
  };
};

export const LOCALES = ['en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const isRtl = (locale: Locale) => locale === 'ar';

/**
 * Narrow a route param to a Locale. Next types `params` as plain strings, but
 * generateStaticParams only ever emits LOCALES, so anything else is a stray URL
 * and falls back to the default rather than indexing content with `undefined`.
 */
export const toLocale = (value: string): Locale =>
  (LOCALES as readonly string[]).includes(value) ? (value as Locale) : DEFAULT_LOCALE;

/**
 * Facts the site deliberately does NOT state, because no source confirms them.
 * Resolve these with the owner, then add them here and surface them in the copy.
 * Kept in code so they cannot be quietly forgotten. PLAN.md §22.
 */
export const CLIENT_INPUT_REQUIRED = [
  'Commercial registration (CR) number — needed before any "licensed" claim carries weight.',
  'Years in business / founding year.',
  'Team size and number of technicians.',
  'Working hours, and whether emergency call-out runs outside them.',
  'Whether emergency service is genuinely 24/7 — the site currently says only that emergency repairs are offered.',
  'Any response-time commitment (the old site claimed "fast response" with no number).',
  'Any workmanship guarantee or warranty period.',
  'Confirmation that the landline 011 295 3365 from the shopfront sign is still in service.',
  'Real customer testimonials, with names and written permission to publish.',
  'Project names, locations and clients for the photographs — captions are currently descriptive only.',
  'Service coverage beyond Riyadh: the old contact page claimed "cities across Saudi Arabia". Which ones?',
  'Which regulations the "compliance upgrades" service refers to.',
  'Logo artwork — the shopfront "NSA" mark is currently only available as a photograph.',
  'Arabic copy review by a native Saudi speaker before launch.',
] as const;
