'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/site';
import { BUSINESS, TEL_MOBILE, WHATSAPP_URL } from '@/lib/site';
import { getContent } from '@/lib/content';
import { asset, href, ROUTES, otherLocale } from '@/lib/paths';

/**
 * `path` is the current route without its locale prefix ('' for home, '/about', …).
 * It drives both the language switcher target and aria-current.
 */
export default function Header({ locale, path = '' }: { locale: Locale; path?: string }) {
  const t = getContent(locale);
  const [open, setOpen] = useState(false);
  const other = otherLocale(locale);

  const links = [
    { label: t.nav.services, to: ROUTES.services },
    { label: t.nav.projects, to: ROUTES.projects },
    { label: t.nav.workshop, to: ROUTES.workshop },
    { label: t.nav.about, to: ROUTES.about },
    { label: t.nav.contact, to: ROUTES.contact },
  ];

  return (
    <header className="header">
      {/* <div className="topbar">
        <div className="wrap">
          <span>
            {locale === 'en'
              ? 'Riyadh · Al Sina’iyah workshop'
              : 'الرياض · ورشة الصناعية'}
          </span>
          <span className="topbar__links">
            <a href={TEL_MOBILE}><bdi>{BUSINESS.mobileDisplay}</bdi></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              {t.cta.whatsapp}
            </a>
          </span>
        </div>
      </div> */}

      <div className="wrap header__inner">
        <Link className="brand" href={href(locale)}>
          {/* alt="" — the company name sits right beside it, so announcing the
              logo too would just repeat the link's accessible name. */}
          <img
            className="brand__logo"
            src={asset('/brand/logo-240.webp')}
            srcSet={`${asset('/brand/logo-240.webp')} 240w, ${asset('/brand/logo-480.webp')} 480w`}
            sizes="90px"
            alt=""
            width={240}
            height={96}
            fetchPriority="high"
          />
          <span className="brand__name">
            {locale === 'en' ? BUSINESS.legalName : BUSINESS.legalNameAr}
            <span className="brand__sub">
              {locale === 'en' ? 'HVAC Riyadh' : 'تكييف الرياض'}
            </span>
          </span>
        </Link>

        <nav className="nav" aria-label={t.nav.menu}>
          {links.map((l) => (
            <Link
              key={l.to}
              href={href(locale, l.to)}
              aria-current={path === l.to ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="lang" href={href(other, path)} lang={other} hrefLang={other}>
            {t.common.switchTo}
          </Link>
          <Link className="btn btn--primary" href={href(locale, ROUTES.contact)}>
            {t.cta.request}
          </Link>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        aria-label={t.nav.menu}
      >
        {links.map((l) => (
          <Link key={l.to} href={href(locale, l.to)} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
