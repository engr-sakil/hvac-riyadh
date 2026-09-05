import type { Locale } from '@/lib/site';
import { TEL_MOBILE, WHATSAPP_URL } from '@/lib/site';
import { getContent } from '@/lib/content';

/** Fixed bottom action bar. Mobile only — hidden above 900px by CSS. */
export default function CallBar({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  return (
    <div className="callbar">
      <a className="btn btn--whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener">
        {t.cta.whatsapp}
      </a>
      <a className="btn btn--primary" href={TEL_MOBILE}>
        {t.cta.call}
      </a>
    </div>
  );
}
