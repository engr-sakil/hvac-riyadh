// Post-export fixups that Next cannot express in a static build:
//
//   1. A branded bilingual 404 page.
//   2. Base-path rewriting for the hand-written files under public/.
//   3. Static stand-ins for the vercel.json redirects, so the same export also
//      works on a host with no redirect layer (GitHub Pages).
//
// The site's root layout lives at app/[locale]/layout.tsx so that <html lang> and
// dir can be set per language. Next.js will not accept an app/not-found.tsx without
// a root layout above it, so the 404 is written here instead — it is a single
// static page with no locale of its own, and a visitor landing on it could be
// reading either language.

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';

// Must match next.config.mjs. '' at a domain root, '/<repo>' on GitHub Pages.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

const cssHref = findCss();

function findCss() {
  // Reuse the compiled stylesheet the rest of the site already loads.
  // Webpack emits it under static/css/, Turbopack under static/chunks/ —
  // match either, or the 404 silently ships unstyled.
  const home = join(OUT, 'en', 'index.html');
  if (!existsSync(home)) return null;
  const html = readFileSync(home, 'utf8');
  const m = html.match(/href="([^"]*\/_next\/static\/[^"]+\.css)"/);
  return m ? m[1] : null;
}

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found | HVAC Riyadh — Nasmat Sheta Co.</title>
<meta name="robots" content="noindex, follow">
<meta name="theme-color" content="#062c4f">
${cssHref ? `<link rel="stylesheet" href="${cssHref}">` : ''}
</head>
<body>
<main class="wrap" style="padding-block:5rem;max-width:640px;text-align:center">
  <img src="${BASE}/brand/logo-240.webp" alt="Nasmat Sheta Co." width="240" height="96" style="height:44px;width:auto;margin:0 auto 2rem">
  <p class="eyebrow">404</p>
  <h1>Page not found</h1>
  <p class="muted">That page does not exist. It may have moved when the site was rebuilt.</p>
  <p class="muted" dir="rtl" lang="ar">هذه الصفحة غير موجودة. ربما تغيّر موقعها عند إعادة بناء الموقع.</p>
  <div class="btn-row" style="justify-content:center;margin-top:2rem">
    <a class="btn btn--primary" href="${BASE}/en/">Home</a>
    <a class="btn btn--outline" href="${BASE}/ar/" lang="ar">العربية</a>
    <a class="btn btn--whatsapp" href="https://wa.me/966545048875" target="_blank" rel="noopener">WhatsApp</a>
    <a class="btn btn--outline" href="tel:+966545048875">+966 54 504 8875</a>
  </div>
</main>
</body>
</html>
`;

writeFileSync(join(OUT, '404.html'), page, 'utf8');
console.log(`404.html written${cssHref ? ` (styles: ${cssHref})` : ' (no stylesheet found)'}`);

// --- base-path rewriting for files copied verbatim out of public/ ------------
//
// Next rewrites its own output for basePath, but everything under public/ is
// copied byte-for-byte. Only these two files contain absolute paths.

if (BASE) {
  for (const file of ['index.html', 'site.webmanifest']) {
    const path = join(OUT, file);
    if (!existsSync(path)) continue;
    const src = readFileSync(path, 'utf8');
    // Absolute paths only — leave full URLs and relative paths alone.
    // A single pass: overlapping rules would prefix an already-rewritten
    // path a second time.
    const out = src.replace(
      /(["'(]|url=)\/(en|ar|brand|img|favicon)/g,
      `$1${BASE}/$2`,
    );
    if (out !== src) {
      writeFileSync(path, out, 'utf8');
      console.log(`${file} rewritten for basePath ${BASE}`);
    }
  }
}

// --- static redirects --------------------------------------------------------
//
// vercel.json serves these as real 301s. On a host without a redirect layer the
// same URLs need a page that forwards, or they 404.

const REDIRECTS = {
  home: `${BASE}/en/`,
  'contact-us': `${BASE}/en/contact/`,
};

for (const [from, to] of Object.entries(REDIRECTS)) {
  const dir = join(OUT, from);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'index.html'),
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${to}">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)});</script>
</head>
<body><p>Redirecting to <a href="${to}">HVAC Riyadh</a>.</p></body>
</html>
`,
    'utf8',
  );
}

console.log(`redirect stubs written: ${Object.keys(REDIRECTS).join(', ')}`);
