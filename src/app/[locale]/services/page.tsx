import type { Metadata } from 'next';
import { LOCALES, toLocale } from '@/lib/site';
import { allServices, getContent } from '@/lib/content';
import { ROUTES } from '@/lib/paths';
import { bySlug } from '@/lib/images';
import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import { CtaBlock, PageHero, ServiceGrid } from '@/components/ui';

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
    path: ROUTES.services,
    title: t.services.indexTitle,
    description: t.services.indexDescription,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);

  const cardPhotos = {
    'hvac-installation': bySlug('install-fancoil-ceiling-void'),
    'hvac-repair': bySlug('facility-parts-counter'),
    'hvac-maintenance': bySlug('install-rooftop-ahu-riyadh'),
    'upgrades-retrofits': bySlug('install-insulated-duct-flex-drops'),
    'energy-management': bySlug('install-rooftop-ductwork-condensers'),
    'ductwork-fabrication': bySlug('fab-spiral-duct-stacks'),
  };

  return (
    <>
      <Header locale={locale} path={ROUTES.services} />
      <main id="main">
        <PageHero
          locale={locale}
          title={t.services.indexTitle}
          lead={t.services.indexIntro}
        />
        <section className="section">
          <div className="wrap">
            <ServiceGrid
              locale={locale}
              services={allServices(locale)}
              photos={cardPhotos}
            />
          </div>
        </section>
        <section className="section section--tint">
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
