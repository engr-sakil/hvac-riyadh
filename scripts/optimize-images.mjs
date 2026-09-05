// Converts the client's original photos into responsive WebP assets in /public/img.
//
// Source photos live in /images (exported from the old Google Sites property before
// it is retired — those originals are hosted on lh3.googleusercontent.com and will
// disappear with the site). Nothing here is generated or altered beyond resize and
// re-encode; every asset is a real photograph of Nasmat Sheta Co. work or premises.
//
// Run: npm run images

import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'images';
const OUT = join('public', 'img');
const WIDTHS = [800, 1600];

// original filename -> descriptive slug. Slugs describe what is actually visible in
// each photograph; see src/lib/images.ts for the captions and alt text built on them.
const MAP = {
  // Installations on site
  '1742174561132.jpg': 'install-rooftop-ductwork-condensers',
  '1742174562721.jpg': 'install-fancoil-ceiling-void',
  '1742174615000.jpg': 'install-rooftop-ahu-riyadh',
  '1742345218526.jpg': 'install-insulated-duct-flex-drops',
  '1716586140504.jpg': 'install-exposed-spiral-duct',
  '1716586142167.jpg': 'install-exposed-spiral-diffusers',
  '1745847589207.jpg': 'install-evaporative-cooler-stand',

  // Fabrication output
  '1716586141285.jpg': 'fab-round-elbow-boot',
  '1716586142789.jpg': 'fab-insulated-round-duct-batch',
  '1742174572766.jpg': 'fab-insulated-breeches-piece',
  '1742174618932.jpg': 'fab-preinsulated-rect-duct',
  '1742345217436.jpg': 'fab-galvanised-fittings-batch',
  '1742345217439.jpg': 'fab-spiral-duct-stacks',
  '1743122621999.jpg': 'fab-spiral-duct-and-fittings',

  // Premises, plant and stock
  'Screenshot 2026-02-11 at 13.50.08.png': 'facility-shopfront-sign',
  'Screenshot 2026-02-11 at 13.49.10.png': 'facility-parts-counter',
  'Screenshot 2026-02-11 at 13.49.23.png': 'facility-insulation-store',
  'Screenshot 2026-02-11 at 13.49.41.png': 'facility-flexduct-warehouse',
  'Screenshot 2026-02-11 at 13.49.55.png': 'facility-folding-machine',
  'Screenshot 2026-02-11 at 13.50.24.png': 'facility-warehouse-interior',
  'Screenshot 2026-02-11 at 13.50.36.png': 'facility-sheet-metal-stock',
};

// Deliberately NOT published:
//   65bc3f47...st-george-min.png        stock photography, not this company's work
//   air-duct-systems-set-vector-...jpg  stock vector
//   istockphoto-1432705315-612x612.jpg  stock photography
//   1746526298476.jpg                   client's own bilingual duct-fabrication graphic;
//                                       its content is rebuilt as real HTML on the
//                                       ductwork page instead of shipped as an image
//   1770892255264.jpg                   old web banner, superseded by this site

mkdirSync(OUT, { recursive: true });

let made = 0;
let bytesIn = 0;
let bytesOut = 0;

for (const [file, slug] of Object.entries(MAP)) {
  const src = join(SRC, file);
  if (!existsSync(src)) {
    console.warn(`  missing: ${file}`);
    continue;
  }
  const buf = readFileSync(src);
  bytesIn += buf.length;

  for (const w of WIDTHS) {
    const dest = join(OUT, `${slug}-${w}.webp`);
    const info = await sharp(buf)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72, effort: 5 })
      .toFile(dest);
    bytesOut += info.size;
    made++;
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(
  `${made} files written to ${OUT} — ${mb(bytesIn)}MB originals to ${mb(bytesOut)}MB WebP`,
);
