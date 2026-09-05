import type { Metadata } from 'next';
import { BUSINESS, formatAddress, LOCALES, toLocale } from '@/lib/site';
import { getContent } from '@/lib/content';
import { ROUTES } from '@/lib/paths';
import { bySlug, photoSrc } from '@/lib/images';
import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import { CtaBlock, PageHero } from '@/components/ui';

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
  return pageMeta({
    locale,
    path: ROUTES.about,
    title: t.about.title,
    description: t.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);
  const shopfront = bySlug('facility-shopfront-sign')!;
  const addr = formatAddress(locale);

  return (
    <>
      <Header locale={locale} path={ROUTES.about} />
      <main id="main">
        <PageHero locale={locale} title={t.about.title} lead={t.about.lead} />

        <section className="section">
          <div className="wrap">
            <div className="split split--wide-text">
              <div className="prose">
                {t.about.body.map((p) => (
                  <p key={p.slice(0, 24)} style={{ fontSize: '1.05rem' }}>
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <img
                  src={photoSrc(shopfront.slug, 800)}
                  srcSet={`${photoSrc(shopfront.slug, 800)} 800w, ${photoSrc(shopfront.slug, 1600)} 1600w`}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  alt={shopfront.alt[locale]}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  style={{ borderRadius: 'var(--radius)' }}
                />
                <p className="small muted" style={{ marginTop: '0.75rem' }}>
                  {addr.oneLine}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.about.capabilitiesTitle}</h2>
            </div>
            <div className="grid grid--4">
              {t.about.capabilities.map((c) => (
                <div className="card" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap" style={{ maxWidth: '760px' }}>
            <h2>{t.about.languagesTitle}</h2>
            <p className="muted" style={{ fontSize: '1.05rem' }}>
              {t.about.languagesBody}
            </p>
            <ul className="tags" style={{ marginTop: '1rem' }}>
              {BUSINESS.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="small muted" style={{ marginTop: '2.5rem' }}>
              {t.about.disclaimer}
            </p>
          </div>
        </section>

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
