import type { Locale } from './site';
import { en } from './content.en';
import { ar } from './content.ar';

export const SERVICE_SLUGS = [
  'hvac-installation',
  'hvac-repair',
  'hvac-maintenance',
  'upgrades-retrofits',
  'energy-management',
  'ductwork-fabrication',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Route params arrive as plain strings; this gates them before any lookup. */
export const isServiceSlug = (value: string): value is ServiceSlug =>
  (SERVICE_SLUGS as readonly string[]).includes(value);

export type Faq = { q: string; a: string };

export type Service = {
  slug: ServiceSlug;
  /** Short label for nav and cards. */
  name: string;
  /** <title> and H1 are derived from these two. */
  seoTitle: string;
  h1: string;
  /** One line for the services grid. */
  teaser: string;
  /** Opening paragraph on the service page. */
  intro: string;
  /** Symptoms and situations that bring a customer to this page. */
  problems: string[];
  /** Scope of work. Sourced from the current site's own bullet lists. */
  provides: string[];
  /** How a job runs, start to finish. */
  process: { title: string; body: string }[];
  faq: Faq[];
};

export type Content = {
  meta: {
    /** Site-wide default title suffix. */
    siteName: string;
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    workshop: string;
    contact: string;
    menu: string;
    close: string;
  };
  cta: {
    request: string;
    whatsapp: string;
    call: string;
    callLandline: string;
    email: string;
    learnMore: string;
    viewAll: string;
    getQuote: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    trust: { title: string; body: string }[];
    servicesTitle: string;
    servicesIntro: string;
    emergencyTitle: string;
    emergencyBody: string;
    ductTitle: string;
    ductIntro: string;
    ductStandards: string;
    ductProducts: string[];
    ductAlso: string;
    ductAlsoItems: string[];
    energyTitle: string;
    energyBody: string;
    energyItems: string[];
    projectsTitle: string;
    projectsIntro: string;
    workshopTitle: string;
    workshopIntro: string;
    whyTitle: string;
    why: { title: string; body: string }[];
    faqTitle: string;
    faq: Faq[];
    finalTitle: string;
    finalBody: string;
  };
  services: {
    indexTitle: string;
    indexDescription: string;
    indexIntro: string;
    items: Record<ServiceSlug, Service>;
    problemsTitle: string;
    providesTitle: string;
    processTitle: string;
    relatedWorkTitle: string;
    faqTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    title: string;
    description: string;
    lead: string;
    body: string[];
    capabilitiesTitle: string;
    capabilities: { title: string; body: string }[];
    languagesTitle: string;
    languagesBody: string;
    disclaimer: string;
  };
  projects: {
    title: string;
    description: string;
    lead: string;
    note: string;
    filters: { all: string; installation: string; fabrication: string; facility: string };
  };
  workshop: {
    title: string;
    description: string;
    lead: string;
    body: string[];
  };
  contact: {
    title: string;
    description: string;
    lead: string;
    directTitle: string;
    formTitle: string;
    formIntro: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      preferred: string;
      submit: string;
    };
    formNote: string;
    detailsTitle: string;
    addressLabel: string;
    phoneLabel: string;
    landlineLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    areaTitle: string;
    areaBody: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    rights: string;
    operatedBy: string;
  };
  common: {
    skipToContent: string;
    languageName: string;
    switchTo: string;
    switchToLabel: string;
    breadcrumbHome: string;
  };
};

const CONTENT: Record<Locale, Content> = { en, ar };

export const getContent = (locale: Locale): Content => CONTENT[locale];

export const getService = (locale: Locale, slug: ServiceSlug): Service =>
  CONTENT[locale].services.items[slug];

export const allServices = (locale: Locale): Service[] =>
  SERVICE_SLUGS.map((s) => CONTENT[locale].services.items[s]);
