'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/site';
import { BUSINESS } from '@/lib/site';
import { allServices, getContent } from '@/lib/content';

/**
 * The site is statically exported, so there is no server to post to. Rather than
 * pretend otherwise, this composes the enquiry into the visitor's mail client,
 * addressed to the business inbox with the owner in CC — which is exactly the
 * arrangement the old contact page asked for.
 *
 * When a form backend is chosen (PLAN.md §18), replace handleSubmit with a fetch
 * and keep the field names.
 */
export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const f = t.contact.fields;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    const lines = [
      `${f.name}: ${get('name')}`,
      `${f.phone}: ${get('phone')}`,
      `${f.email}: ${get('email') || '—'}`,
      `${f.service}: ${get('service')}`,
      `${f.preferred}: ${get('preferred')}`,
      '',
      `${f.message}:`,
      get('message'),
    ];

    const subject =
      locale === 'en'
        ? `Service request — ${get('service')}`
        : `طلب خدمة — ${get('service')}`;

    window.location.href =
      `mailto:${BUSINESS.email}` +
      `?cc=${encodeURIComponent(BUSINESS.emailCc)}` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(lines.join('\n'))}`;

    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">{f.name}</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="phone">{f.phone}</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required />
      </div>

      <div className="field">
        <label htmlFor="email">{f.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="field">
        <label htmlFor="service">{f.service}</label>
        <select id="service" name="service" defaultValue="" required>
          <option value="" disabled>
            {f.servicePlaceholder}
          </option>
          {allServices(locale).map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend style={{ fontWeight: 600, fontSize: '0.92rem', padding: 0 }}>
          {f.preferred}
        </legend>
        <div className="radio-row">
          <label>
            <input type="radio" name="preferred" value="WhatsApp" defaultChecked /> WhatsApp
          </label>
          <label>
            <input type="radio" name="preferred" value={t.cta.call} /> {t.cta.call}
          </label>
          <label>
            <input type="radio" name="preferred" value={t.contact.emailLabel} />{' '}
            {t.contact.emailLabel}
          </label>
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">{f.message}</label>
        <textarea
          id="message"
          name="message"
          placeholder={f.messagePlaceholder}
          required
        />
      </div>

      <div className="btn-row">
        <button className="btn btn--primary" type="submit">
          {f.submit}
        </button>
      </div>

      <p className="form-note" role={sent ? 'status' : undefined}>
        {t.contact.formNote}
      </p>
    </form>
  );
}
