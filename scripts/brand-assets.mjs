// Generates the logo variants, app icons and web manifest from the brand sources.
//
// Sources (checked in, all under brand/):
//   nasmat-sheta-logo.png  the "NSA" wordmark, slate-grey letters (#788898) with a
//                          blue swoosh (#0068d0) on transparency, 1983x793. Used for
//                          the header and footer logo.
//   icon-source-512.png    the same mark cropped square on transparency. Used for
//                          every app icon.
//   favicon.ico            multi-resolution ICO (16/32/48) supplied with the icon
//                          set. sharp cannot author ICO containers, so this one is
//                          copied through rather than generated.
//
// Run: npm run brand

import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const LOGO_SRC = join('brand', 'nasmat-sheta-logo.png');
const ICON_SRC = join('brand', 'icon-source-512.png');
const ICO_SRC = join('brand', 'favicon.ico');
const OUT = join('public', 'brand');

mkdirSync(OUT, { recursive: true });
const written = [];

/* ------------------------------------------------------------ header logo */
// Displayed ~36px tall; 240w and 480w cover 1x and 2x on any screen.
const logo = readFileSync(LOGO_SRC);
for (const w of [240, 480]) {
  const file = join(OUT, `logo-${w}.webp`);
  await sharp(logo).resize({ width: w }).webp({ quality: 90 }).toFile(file);
  written.push(file);
}

/* -------------------------------------------------------------- app icons */
const icon = readFileSync(ICON_SRC);

// Browser tab and PWA icons keep the transparent background — that is the
// convention, and tab strips are light in every default theme.
for (const size of [16, 32, 192, 512]) {
  const file = join(OUT, `icon-${size}.png`);
  await sharp(icon)
    .resize({ width: size, height: size, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(file);
  written.push(file);
}

// The Apple touch icon MUST be opaque. iOS draws no background of its own, so a
// transparent PNG lands on black and the grey letters all but disappear. White is
// the mark's intended ground — it is what the shopfront sign uses.
const appleFile = join(OUT, 'apple-icon-180.png');
await sharp(icon)
  .resize({ width: 152, height: 152, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .extend({
    top: 14, bottom: 14, left: 14, right: 14,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .flatten({ background: { r: 255, g: 255, b: 255 } })
  .png({ compressionLevel: 9 })
  .toFile(appleFile);
written.push(appleFile);

/* -------------------------------------------------------------- favicon.ico */
// Copied through: 16/32/48 in one container, which sharp cannot produce.
copyFileSync(ICO_SRC, join('public', 'favicon.ico'));
written.push(join('public', 'favicon.ico'));

/* ------------------------------------------------------------ web manifest */
// The supplied manifest shipped with empty name/short_name and root-relative icon
// paths that do not match this site's layout, so it is authored here instead.
const manifest = {
  name: 'HVAC Riyadh — Nasmat Sheta Co.',
  short_name: 'HVAC Riyadh',
  description:
    'HVAC installation, repair and maintenance across Riyadh, and ductwork fabricated in our own workshop.',
  start_url: '/en/',
  scope: '/',
  display: 'standalone',
  // Splash ground: white, because the wordmark's grey letters need a light field.
  background_color: '#ffffff',
  // Browser UI: the site's brand navy.
  theme_color: '#062c4f',
  icons: [
    { src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
};
const manifestFile = join('public', 'site.webmanifest');
writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
written.push(manifestFile);

console.log(`${written.length} files written:`);
for (const f of written) console.log(`  ${f}`);
