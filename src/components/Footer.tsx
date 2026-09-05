import Link from 'next/link';
import type { Locale } from '@/lib/site';
import {
  BUSINESS,
  formatAddress,
  MAILTO,
  TEL_LANDLINE,
  TEL_MOBILE,
  WHATSAPP_URL,
} from '@/lib/site';
import { allServices, getContent } from '@/lib/content';
import { asset, href, ROUTES, servicePath } from '@/lib/paths';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const addr = formatAddress(locale);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__about">
            {/* On a light chip: the wordmark's slate grey only reaches ~3.8:1
                against the navy footer, which reads muddy. */}
            <img
              className="footer__logo"
              src={asset('/brand/logo-240.webp')}
              srcSet={`${asset('/brand/logo-240.webp')} 240w, ${asset('/brand/logo-480.webp')} 480w`}
              sizes="110px"
              alt=""
              width={240}
              height={96}
              loading="lazy"
            />
            <h3>{locale === 'en' ? BUSINESS.legalName : BUSINESS.legalNameAr}</h3>
            <p>{t.footer.tagline}</p>
          </div>

          <div>
            <h3>{t.footer.servicesTitle}</h3>
            <ul>
              {allServices(locale).map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(locale, s.slug)}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t.footer.companyTitle}</h3>
            <ul>
              <li>
                <Link href={href(locale, ROUTES.about)}>{t.nav.about}</Link>
              </li>
              <li>
                <Link href={href(locale, ROUTES.projects)}>{t.nav.projects}</Link>
              </li>
              <li>
                <Link href={href(locale, ROUTES.workshop)}>{t.nav.workshop}</Link>
              </li>
              <li>
                <Link href={href(locale, ROUTES.contact)}>{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.contactTitle}</h3>
            <ul>
              <li>
                <a href={TEL_MOBILE}><bdi>{BUSINESS.mobileDisplay}</bdi></a>
              </li>
              <li>
                <a href={TEL_LANDLINE}><bdi>{BUSINESS.landlineDisplay}</bdi></a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                  {t.cta.whatsapp}
                </a>
              </li>
              <li>
                <a href={MAILTO}>{BUSINESS.email}</a>
              </li>
              <li>
                {addr.line1}
                <br />
                {addr.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()}{' '}
            {/* legalName already ends in "Co." — no extra full stop. */}
            {locale === 'en' ? BUSINESS.legalName : BUSINESS.legalNameAr}{' '}
            {t.footer.rights}
          </span>
          <span>{t.footer.operatedBy}</span>
        </div>
      </div>
    </footer>
  );
}
