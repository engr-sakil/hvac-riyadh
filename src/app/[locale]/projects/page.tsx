import type { Metadata } from 'next';
import { LOCALES, toLocale } from '@/lib/site';
import { getContent } from '@/lib/content';
import { ROUTES } from '@/lib/paths';
import { byCategory } from '@/lib/images';
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
    path: ROUTES.projects,
    title: t.projects.title,
    description: t.projects.description,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);

  // Grouped rather than filtered with JavaScript — the categories are the
  // structure, and this keeps the page working with no script at all.
  const groups = [
    { key: 'installation', title: t.projects.filters.installation },
    { key: 'fabrication', title: t.projects.filters.fabrication },
    { key: 'facility', title: t.projects.filters.facility },
  ] as const;

  return (
    <>
      <Header locale={locale} path={ROUTES.projects} />
      <main id="main">
        <PageHero locale={locale} title={t.projects.title} lead={t.projects.lead} />

        {groups.map((g, i) => (
          <section
            key={g.key}
            className={i % 2 === 1 ? 'section section--tint' : 'section'}
          >
            <div className="wrap">
              <div className="section-head">
                <h2>{g.title}</h2>
                {i === 0 ? <p>{t.projects.note}</p> : null}
              </div>
              <Gallery photos={byCategory(g.key)} locale={locale} />
            </div>
          </section>
        ))}

        <section className="section">
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
