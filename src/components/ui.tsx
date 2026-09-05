import Link from 'next/link';
import type { Locale } from '@/lib/site';
import { TEL_MOBILE, WHATSAPP_URL } from '@/lib/site';
import { getContent, type Faq, type Service } from '@/lib/content';
import { href, ROUTES, servicePath } from '@/lib/paths';
import { photoSrc, type Photo } from '@/lib/images';

/* --------------------------------------------------------------------- images */

export function Img({
  photo,
  locale,
  sizes = '(max-width: 700px) 100vw, 33vw',
  priority = false,
  className,
}: {
  photo: Photo;
  locale: Locale;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={photoSrc(photo.slug, 800)}
      srcSet={`${photoSrc(photo.slug, 800)} 800w, ${photoSrc(photo.slug, 1600)} 1600w`}
      sizes={sizes}
      alt={photo.alt[locale]}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      // eslint-disable-next-line @next/next/no-img-element
      fetchPriority={priority ? 'high' : undefined}
      width={800}
      height={600}
    />
  );
}

export function Gallery({ photos, locale }: { photos: Photo[]; locale: Locale }) {
  return (
    <div className="gallery">
      {photos.map((p) => (
        <figure key={p.slug} className={`shot${p.portrait ? ' shot--portrait' : ''}`}>
          <img
            src={photoSrc(p.slug, 800)}
            srcSet={`${photoSrc(p.slug, 800)} 800w, ${photoSrc(p.slug, 1600)} 1600w`}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            alt={p.alt[locale]}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
          <figcaption>{p.alt[locale]}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ page head */

export function PageHero({
  locale,
  title,
  lead,
  crumb,
}: {
  locale: Locale;
  title: string;
  lead?: string;
  crumb?: { label: string; to: string }[];
}) {
  const t = getContent(locale);
  return (
    <div className="page-hero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={href(locale)}>{t.common.breadcrumbHome}</Link>
          {crumb?.map((c) => (
            <span key={c.to}>
              <span aria-hidden="true">/</span>
              <Link href={href(locale, c.to)}>{c.label}</Link>
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- service */

export function ServiceGrid({
  locale,
  services,
  photos,
}: {
  locale: Locale;
  services: Service[];
  photos: Record<string, Photo | undefined>;
}) {
  const t = getContent(locale);
  return (
    <div className="grid grid--3">
      {services.map((s) => {
        const photo = photos[s.slug];
        return (
          <Link key={s.slug} className="service-card" href={servicePath(locale, s.slug)}>
            <div className="service-card__img">
              {photo ? (
                <img
                  src={photoSrc(photo.slug, 800)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={500}
                />
              ) : null}
            </div>
            <div className="service-card__body">
              <h3>{s.name}</h3>
              <p>{s.teaser}</p>
              <span className="service-card__more">{t.cta.learnMore} →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------------ faq */

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div>
      {items.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>{f.q}</summary>
          <div>{f.a}</div>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ cta */

export function CtaBlock({
  locale,
  title,
  body,
}: {
  locale: Locale;
  title: string;
  body: string;
}) {
  const t = getContent(locale);
  return (
    <div className="emergency">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="btn-row">
        <a className="btn btn--whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener">
          {t.cta.whatsapp}
        </a>
        <a className="btn btn--ghost" href={TEL_MOBILE}>
          {t.cta.call}
        </a>
        <Link className="btn btn--ghost" href={href(locale, ROUTES.contact)}>
          {t.cta.request}
        </Link>
      </div>
    </div>
  );
}
