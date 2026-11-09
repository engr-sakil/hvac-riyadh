import Link from 'next/link';
import { getContent } from '@/lib/content';
import { asset, href, ROUTES } from '@/lib/paths';
import { WHATSAPP_URL, type Locale } from '@/lib/site';

export default function KitchenHoodSection({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const hood = t.home.kitchenHood;

  return (
    <section id="kitchen-hood" className="section section--dark" aria-labelledby="kitchen-hood-title">
      <div className="wrap">
        <div className="split split--wide-text" dir="ltr">
          <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <span className="eyebrow" style={{ color: '#8fc0e8' }}>
              {t.nav.services}
            </span>
            <h2 id="kitchen-hood-title">{hood.title}</h2>
            <p style={{ color: '#cfe0ef', fontSize: '1.05rem' }}>{hood.intro}</p>
            <p className="standards">{hood.coverage}</p>
            <ul className="ticks">
              {hood.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: '1.75rem', color: '#8fc0e8', fontWeight: 600 }}>
              {hood.subheading}
            </p>
            <ul className="tags">
              {hood.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: '2rem' }}>
              <Link className="btn btn--primary" href={href(locale, ROUTES.contact)}>
                {t.nav.contact}
              </Link>
              <a
                className="btn btn--ghost"
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(hood.message)}`}
                target="_blank"
                rel="noopener"
              >
                {t.cta.getQuote}
              </a>
            </div>
          </div>
          <div>
            <img
              src={asset('/img/kitchen-hood-projects.webp')}
              alt={hood.alt}
              width={960}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
