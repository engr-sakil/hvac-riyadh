import Link from 'next/link';
import type { Metadata } from 'next';
import { BUSINESS, TEL_MOBILE, WHATSAPP_URL, toLocale } from '@/lib/site';
import { allServices, getContent } from '@/lib/content';
import { href, ROUTES } from '@/lib/paths';
import { bySlug, byCategory, HERO_SLUG, photoSrc, PHOTOS } from '@/lib/images';
import { faqSchema, JsonLd, localBusinessSchema, pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import { CtaBlock, FaqList, Gallery, ServiceGrid } from '@/components/ui';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);
  return {
    ...pageMeta({
      locale,
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
    }),
    // Already names the service and the city; the template suffix would only
    // push it past the SERP truncation point.
    title: { absolute: t.meta.homeTitle },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);
  const services = allServices(locale);
  const hero = bySlug(HERO_SLUG)!;

  // One representative photograph per service card.
  const cardPhotos = {
    'hvac-installation': bySlug('install-fancoil-ceiling-void'),
    'hvac-repair': bySlug('facility-parts-counter'),
    'hvac-maintenance': bySlug('install-rooftop-ahu-riyadh'),
    'upgrades-retrofits': bySlug('install-insulated-duct-flex-drops'),
    'energy-management': bySlug('install-rooftop-ductwork-condensers'),
    'ductwork-fabrication': bySlug('fab-spiral-duct-stacks'),
  };

  const projectPreview = PHOTOS.filter((p) => p.category !== 'facility').slice(0, 6);
  const workshopPreview = byCategory('facility').slice(0, 3);
  const ductPhoto = bySlug('fab-galvanised-fittings-batch')!;
  const energyPhoto = bySlug('install-rooftop-ahu-riyadh')!;

  return (
    <>
      <Header locale={locale} path={ROUTES.home} />
      <JsonLd data={localBusinessSchema(locale)} />
      <JsonLd data={faqSchema(t.home.faq)} />

      <main id="main">
        {/* ---------------------------------------------------------- hero */}
        <section className="hero">
          <div className="hero__media">
            <img
              src={photoSrc(hero.slug, 1600)}
              alt=""
              fetchPriority="high"
              decoding="sync"
              width={1600}
              height={1110}
            />
          </div>
          <div className="wrap hero__inner">
            <p className="hero__eyebrow">{t.home.heroEyebrow}</p>
            <h1>{t.home.heroTitle}</h1>
            <p className="hero__sub">{t.home.heroSubtitle}</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href={href(locale, ROUTES.contact)}>
                {t.cta.request}
              </Link>
              <a
                className="btn btn--whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
              >
                {t.cta.whatsapp}
              </a>
              <a className="btn btn--ghost" href={TEL_MOBILE}>
                {t.cta.call} · <bdi>{BUSINESS.mobileDisplay}</bdi>
              </a>
            </div>
          </div>
          <div className="hero__strip">
            <div className="wrap">
              {t.home.trust.map((item) => (
                <span key={item.title}>
                  <strong>{item.title}</strong>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- trust */}
        <section className="section">
          <div className="wrap">
            <div className="grid grid--4">
              {t.home.trust.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ services */}
        <section className="section section--tint">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.nav.services}</span>
              <h2>{t.home.servicesTitle}</h2>
              <p>{t.home.servicesIntro}</p>
            </div>
            <ServiceGrid locale={locale} services={services} photos={cardPhotos} />
          </div>
        </section>

        {/* ----------------------------------------------------- emergency */}
        <section className="section">
          <div className="wrap">
            <CtaBlock
              locale={locale}
              title={t.home.emergencyTitle}
              body={t.home.emergencyBody}
            />
          </div>
        </section>

        {/* ------------------------------------------------------ ductwork */}
        <section className="section section--dark">
          <div className="wrap">
            <div className="split split--wide-text">
              <div>
                <span
                  className="eyebrow"
                  style={{ color: '#8fc0e8' }}
                >
                  {t.nav.services}
                </span>
                <h2>{t.home.ductTitle}</h2>
                <p style={{ color: '#cfe0ef', fontSize: '1.05rem' }}>{t.home.ductIntro}</p>
                <p className="standards">{t.home.ductStandards}</p>
                <ul className="ticks">
                  {t.home.ductProducts.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '1.75rem', color: '#8fc0e8', fontWeight: 600 }}>
                  {t.home.ductAlso}
                </p>
                <ul className="tags">
                  {t.home.ductAlsoItems.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <div className="btn-row" style={{ marginTop: '2rem' }}>
                  <Link
                    className="btn btn--primary"
                    href={href(locale, '/services/ductwork-fabrication')}
                  >
                    {t.cta.learnMore}
                  </Link>
                  <a
                    className="btn btn--ghost"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    {t.cta.getQuote}
                  </a>
                </div>
              </div>
              <div>
                <img
                  src={photoSrc(ductPhoto.slug, 800)}
                  srcSet={`${photoSrc(ductPhoto.slug, 800)} 800w, ${photoSrc(ductPhoto.slug, 1600)} 1600w`}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  alt={ductPhoto.alt[locale]}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- energy */}
        <section className="section">
          <div className="wrap">
            <div className="split">
              <div>
                <span className="eyebrow">{t.home.energyTitle}</span>
                <h2>{t.home.energyTitle}</h2>
                <p className="muted" style={{ fontSize: '1.05rem' }}>
                  {t.home.energyBody}
                </p>
                <ul className="ticks">
                  {t.home.energyItems.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <div className="btn-row" style={{ marginTop: '1.75rem' }}>
                  <Link
                    className="btn btn--outline"
                    href={href(locale, '/services/energy-management')}
                  >
                    {t.cta.learnMore}
                  </Link>
                </div>
              </div>
              <img
                src={photoSrc(energyPhoto.slug, 800)}
                srcSet={`${photoSrc(energyPhoto.slug, 800)} 800w, ${photoSrc(energyPhoto.slug, 1600)} 1600w`}
                sizes="(max-width: 900px) 100vw, 45vw"
                alt={energyPhoto.alt[locale]}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ projects */}
        <section className="section section--tint">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.nav.projects}</span>
              <h2>{t.home.projectsTitle}</h2>
              <p>{t.home.projectsIntro}</p>
            </div>
            <Gallery photos={projectPreview} locale={locale} />
            <div className="btn-row" style={{ marginTop: '2rem' }}>
              <Link className="btn btn--outline" href={href(locale, ROUTES.projects)}>
                {t.cta.viewAll}
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ workshop */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{t.nav.workshop}</span>
              <h2>{t.home.workshopTitle}</h2>
              <p>{t.home.workshopIntro}</p>
            </div>
            <Gallery photos={workshopPreview} locale={locale} />
            <div className="btn-row" style={{ marginTop: '2rem' }}>
              <Link className="btn btn--outline" href={href(locale, ROUTES.workshop)}>
                {t.cta.learnMore}
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- why */}
        <section className="section section--tint">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.home.whyTitle}</h2>
            </div>
            <div className="grid grid--3">
              {t.home.why.map((w) => (
                <div className="card" key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- faq */}
        <section className="section">
          <div className="wrap" style={{ maxWidth: '820px' }}>
            <div className="section-head">
              <h2>{t.home.faqTitle}</h2>
            </div>
            <FaqList items={t.home.faq} />
          </div>
        </section>

        {/* --------------------------------------------------------- final */}
        <section className="section section--tint">
          <div className="wrap">
            <CtaBlock
              locale={locale}
              title={t.home.finalTitle}
              body={t.home.finalBody}
            />
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CallBar locale={locale} />
    </>
  );
}
