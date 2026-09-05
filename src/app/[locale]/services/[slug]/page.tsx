import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCALES, SITE_URL, toLocale } from '@/lib/site';
import { getContent, getService, isServiceSlug, SERVICE_SLUGS } from '@/lib/content';
import { ROUTES, servicePath } from '@/lib/paths';
import { forService } from '@/lib/images';
import { faqSchema, JsonLd, pageMeta, serviceSchema } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import { CtaBlock, FaqList, Gallery, PageHero } from '@/components/ui';

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SERVICE_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const locale = toLocale(localeParam);
  const s = getService(locale, slug);
  return pageMeta({
    locale,
    path: `${ROUTES.services}/${slug}`,
    title: s.seoTitle,
    description: s.intro.slice(0, 175),
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { locale: localeParam, slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const locale = toLocale(localeParam);
  const t = getContent(locale);
  const s = getService(locale, slug);
  const photos = forService(slug, 3);

  return (
    <>
      <Header locale={locale} path={ROUTES.services} />
      <JsonLd
        data={serviceSchema(
          locale,
          s.name,
          s.teaser,
          `${SITE_URL}${servicePath(locale, slug)}/`,
        )}
      />
      <JsonLd data={faqSchema(s.faq)} />

      <main id="main">
        <PageHero
          locale={locale}
          title={s.h1}
          crumb={[{ label: t.nav.services, to: ROUTES.services }]}
        />

        <section className="section">
          <div className="wrap">
            <div className="split split--wide-text">
              <div className="prose">
                <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)' }}>{s.intro}</p>
                <h2 style={{ marginTop: '2.5rem' }}>{t.services.problemsTitle}</h2>
                <ul className="ticks">
                  {s.problems.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="card" style={{ alignSelf: 'start' }}>
                <h3>{t.services.providesTitle}</h3>
                <ul className="ticks" style={{ marginTop: '0.75rem' }}>
                  {s.provides.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.services.processTitle}</h2>
            </div>
            <ol className="steps">
              {s.process.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {photos.length > 0 ? (
          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <h2>{t.services.relatedWorkTitle}</h2>
              </div>
              <Gallery photos={photos} locale={locale} />
            </div>
          </section>
        ) : null}

        <section className="section section--tint">
          <div className="wrap" style={{ maxWidth: '820px' }}>
            <div className="section-head">
              <h2>{t.services.faqTitle}</h2>
            </div>
            <FaqList items={s.faq} />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <CtaBlock
              locale={locale}
              title={t.services.ctaTitle}
              body={t.services.ctaBody}
            />
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CallBar locale={locale} />
    </>
  );
}
