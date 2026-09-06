import type { Metadata } from 'next';
import {
  BUSINESS,
  formatAddress,
  LOCALES,
  MAILTO,
  TEL_LANDLINE,
  TEL_MOBILE,
  WHATSAPP_URL,
  toLocale,
} from '@/lib/site';
import { getContent } from '@/lib/content';
import { ROUTES } from '@/lib/paths';
import { JsonLd, localBusinessSchema, pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import ContactForm from '@/components/ContactForm';
import { PageHero } from '@/components/ui';

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
    path: ROUTES.contact,
    title: t.contact.title,
    description: t.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getContent(locale);
  const addr = formatAddress(locale);

  return (
    <>
      <Header locale={locale} path={ROUTES.contact} />
      <JsonLd data={localBusinessSchema(locale)} />

      <main id="main">
        <PageHero locale={locale} title={t.contact.title} lead={t.contact.lead} />

        <section className="section">
          <div className="wrap">
            <div className="split split--wide-text" style={{ alignItems: 'start' }}>
              <div>
                <h2>{t.contact.formTitle}</h2>
                <p className="muted">{t.contact.formIntro}</p>
                <ContactForm locale={locale} />
              </div>

              <div className="stack">
                <div className="card">
                  <h3>{t.contact.directTitle}</h3>
                  <div className="btn-row" style={{ marginTop: '0.75rem' }}>
                    <a
                      className="btn btn--whatsapp"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener"
                    >
                      {t.cta.whatsapp}
                    </a>
                    <a className="btn btn--primary" href={TEL_MOBILE}>
                      {t.cta.call}
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>{t.contact.detailsTitle}</h3>
                  <ul className="contact-list" style={{ marginTop: '0.75rem' }}>
                    <li>
                      <span className="label">{t.contact.phoneLabel}</span>
                      <a href={TEL_MOBILE}><bdi>{BUSINESS.mobileDisplay}</bdi></a>
                    </li>
                    <li>
                      <span className="label">{t.contact.emailLabel}</span>
                      <a href={MAILTO}>{BUSINESS.email}</a>
                    </li>
                     <li>
                      <span className="label">{t.contact.emailLabel}</span>
                      <a href={MAILTO}>{BUSINESS.emailCc}</a>
                    </li>
                    <li>
                      <span className="label">{t.contact.addressLabel}</span>
                      <span>
                        {addr.line1}
                        <br />
                        {addr.line2}
                      </span>
                    </li>
                    <li>
                      <span className="label">{t.contact.hoursLabel}</span>
                      <span className="muted">{t.contact.hoursValue}</span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h3>{t.contact.areaTitle}</h3>
                  <p>{t.contact.areaBody}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <CallBar locale={locale} />
    </>
  );
}
