# HVAC Riyadh — Nasmat Sheta Co.

Bilingual (English / Arabic) static site for Nasmat Sheta Co., an HVAC contractor
and ductwork fabricator in Al Sina'iyah, Riyadh.

Replaces the two-page Google Sites property at hvacriyadh.com. Background, audit
findings and the full plan are in [PLAN.md](PLAN.md).

## Commands

```bash
npm install
npm run dev      # development server on :3000
npm run images   # re-encode /images -> /public/img as responsive WebP
npm run brand    # /brand -> logo variants, app icons and the web manifest
npm run build    # static export to /out, then writes the branded 404
npm start        # serve /out on :4321 to preview the real build
```

`npm run images` and `npm run brand` only need re-running when a source asset is
added or replaced. Everything they write — `public/img/`, `public/brand/`,
`public/favicon.ico`, `public/site.webmanifest` — is build output. Regenerate it
rather than editing it by hand.

> **Note:** `images/` no longer exists in this working copy. The photographs were
> exported from the old Google Sites property, converted, and the originals then
> deleted. Only the 800px and 1600px WebP in `public/img/` remain. Recover the
> originals before that Google Sites property is retired — see PLAN.md §25.

## Stack

Next.js 15 App Router with `output: 'export'`. The build produces plain HTML, CSS
and a small JS bundle in `out/` — no server, deployable to any static host.

No CSS framework and no component library: the styles are one hand-written
stylesheet with custom properties, which keeps the payload small and makes the RTL
work straightforward (logical properties throughout).

## Structure

```
src/
  app/
    [locale]/            the root layout — sets <html lang> and dir per language
      page.tsx           home
      about/ services/ projects/ workshop/ contact/
      services/[slug]/   the six service pages
    robots.ts sitemap.ts globals.css
  components/            Header, Footer, CallBar, ContactForm, ui.tsx
  lib/
    site.ts              verified business facts + CLIENT_INPUT_REQUIRED
    content.ts           the Content type shared by both languages
    content.en.ts        English copy
    content.ar.ts        Arabic copy — REVIEW REQUIRED, see docs/ARABIC-REVIEW.md
    images.ts            photo catalogue: categories, per-locale alt text
    seo.tsx              canonical, hreflang, JSON-LD
    paths.ts             URL helpers
scripts/
  optimize-images.mjs    originals -> WebP at two widths
  brand-assets.mjs       logo + icon sources -> logo variants, icons, manifest
  post-build.mjs         writes the bilingual 404
  serve.mjs              static preview server
brand/                   logo and icon sources (checked in, not shipped)
  nasmat-sheta-logo.png    the "NSA" wordmark, 1983x793 on transparency
  icon-source-512.png      the mark cropped square, for every app icon
  favicon.ico              multi-resolution 16/32/48; copied through, since
                           sharp cannot author ICO containers
```

## Routing

Every page exists at `/en/...` and `/ar/...`. `/` redirects: `vercel.json` sends a
308 on Vercel; `public/index.html` does a language-detecting redirect on any other
host. `vercel.json` also carries 301s from the old Google Sites URLs (`/home`,
`/contact-us`).

## Adding content

**Copy** — edit `content.en.ts` and `content.ar.ts`. They share the `Content` type,
so a field added to one but missing from the other is a type error at build time.
That is deliberate: the two languages cannot drift apart silently.

**Photographs** — drop the original in `images/`, add it to the `MAP` in
`scripts/optimize-images.mjs`, run `npm run images`, then add an entry to `PHOTOS`
in `src/lib/images.ts` with alt text in both languages.

**A new service** — add the slug to `SERVICE_SLUGS` in `content.ts` and fill in the
`Service` object in both language files. The route, sitemap entry, nav, footer and
schema all follow from that.

## The one rule

Do not add a claim about the business that no source confirms — no years in
business, technician counts, ratings, certifications, response times, or 24/7
availability. Unverified items are tracked in `CLIENT_INPUT_REQUIRED` in
`src/lib/site.ts` and in PLAN.md §22. Fill those in with the owner, then add them
to `site.ts` and surface them in the copy.

## Before launch

See PLAN.md §24 Phase 0. The blocking items are Arabic review, the working hours
and emergency-availability answers, and confirming the landline is still in service.
