import type { Metadata } from 'next';
import { LOCALES, toLocale } from '@/lib/site';
import { getContent } from '@/lib/content';
import { ROUTES } from '@/lib/paths';
import { byCategory, bySlug, photoSrc } from '@/lib/images';
import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import { CtaBlock, Gallery, PageHero } from '@/components/ui';

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
    path: ROUTES.workshop,
    title: t.workshop.title,
    description: t.workshop.description,
  });
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);
  const lead = bySlug('facility-warehouse-interior')!;

  return (
    <>
      <Header locale={locale} path={ROUTES.workshop} />
      <main id="main">
        <PageHero locale={locale} title={t.workshop.title} lead={t.workshop.lead} />

        <section className="section">
          <div className="wrap">
            <div className="split">
              <div className="prose">
                {t.workshop.body.map((p) => (
                  <p key={p.slice(0, 24)} style={{ fontSize: '1.05rem' }}>
                    {p}
                  </p>
                ))}
              </div>
              <img
                src={photoSrc(lead.slug, 800)}
                srcSet={`${photoSrc(lead.slug, 800)} 800w, ${photoSrc(lead.slug, 1600)} 1600w`}
                sizes="(max-width: 900px) 100vw, 45vw"
                alt={lead.alt[locale]}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="wrap">
            <Gallery photos={byCategory('facility')} locale={locale} />
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
