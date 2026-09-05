import type { Locale } from './site';
import type { ServiceSlug } from './content';
import { asset } from './paths';

// Catalogue of the company's own photographs.
//
// Captions describe ONLY what is visible in the frame. No client names, no project
// locations, no dates — none of that is confirmed, and PLAN.md §0 rule 2 forbids
// inventing it. When the owner supplies real project details, extend `caption` here.

export type ImageCategory = 'installation' | 'fabrication' | 'facility';

export type Photo = {
  slug: string;
  category: ImageCategory;
  /** Descriptive alt text, per locale. Doubles as the gallery caption. */
  alt: Record<Locale, string>;
  /** Service pages this photograph is relevant to. */
  services: ServiceSlug[];
  /** Portrait-orientation source; the grid gives these a taller cell. */
  portrait?: boolean;
};

export const PHOTOS: Photo[] = [
  // ---------------------------------------------------------------- installations
  {
    slug: 'install-rooftop-ductwork-condensers',
    category: 'installation',
    alt: {
      en: 'Insulated rectangular ductwork with radiused bends running across a roof, beside a bank of split-system condenser units.',
      ar: 'قنوات مستطيلة معزولة بانحناءات دائرية ممتدة على السطح، بجوار مجموعة من وحدات التكثيف المنفصلة.',
    },
    services: ['hvac-installation', 'ductwork-fabrication'],
  },
  {
    slug: 'install-rooftop-ahu-riyadh',
    category: 'installation',
    alt: {
      en: 'Rooftop air handling plant with painted duct transitions and Carrier condensers, Riyadh skyline behind.',
      ar: 'وحدة مناولة هواء على السطح مع تحويلات قنوات مطلية ووحدات تكثيف Carrier، وأفق الرياض في الخلفية.',
    },
    services: ['hvac-installation', 'upgrades-retrofits'],
  },
  {
    slug: 'install-fancoil-ceiling-void',
    category: 'installation',
    alt: {
      en: 'Ducted fan coil unit installed in a ceiling void with sheet metal ductwork, cable tray and services first fix.',
      ar: 'وحدة فان كويل مجهّزة بقنوات مركّبة في فراغ السقف مع قنوات معدنية وحامل كابلات وتمديدات أولية.',
    },
    services: ['hvac-installation'],
  },
  {
    slug: 'install-insulated-duct-flex-drops',
    category: 'installation',
    alt: {
      en: 'Insulated rectangular duct run with flexible duct drops feeding ceiling diffusers.',
      ar: 'مسار قنوات مستطيلة معزولة مع وصلات مرنة تغذّي مخارج الهواء في السقف.',
    },
    services: ['hvac-installation', 'ductwork-fabrication'],
  },
  {
    slug: 'install-exposed-spiral-duct',
    category: 'installation',
    alt: {
      en: 'Exposed spiral ductwork painted lime green against a dark ceiling, with circular ceiling diffusers, in a retail fit-out.',
      ar: 'قنوات حلزونية ظاهرة مطلية باللون الأخضر على سقف داكن، مع مخارج هواء دائرية، في تشطيب تجاري.',
    },
    services: ['hvac-installation', 'ductwork-fabrication'],
    portrait: true,
  },
  {
    slug: 'install-exposed-spiral-diffusers',
    category: 'installation',
    alt: {
      en: 'Exposed painted spiral duct branches and circular diffusers feeding from a ceiling-mounted fan coil unit.',
      ar: 'تفرعات قنوات حلزونية مطلية ظاهرة ومخارج دائرية تتغذى من وحدة فان كويل معلّقة بالسقف.',
    },
    services: ['hvac-installation'],
    portrait: true,
  },
  {
    slug: 'install-evaporative-cooler-stand',
    category: 'installation',
    alt: {
      en: 'Evaporative cooler mounted on a fabricated steel stand with a fabric duct connection, installed on a rooftop.',
      ar: 'مبرّد تبخيري مركّب على قاعدة معدنية مصنّعة مع وصلة قماشية للهواء، على السطح.',
    },
    services: ['hvac-installation'],
  },

  // ----------------------------------------------------------------- fabrication
  {
    slug: 'fab-spiral-duct-stacks',
    category: 'fabrication',
    alt: {
      en: 'Stacks of finished galvanised spiral duct sections in the workshop, with forming machinery in use behind.',
      ar: 'أرتال من أقسام القنوات الحلزونية المجلفنة الجاهزة في الورشة، وخلفها آلات التشكيل أثناء العمل.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'fab-galvanised-fittings-batch',
    category: 'fabrication',
    alt: {
      en: 'A batch of fabricated galvanised fittings — reducers, plenum boxes with spigots and radiused bends — marked up by size.',
      ar: 'دفعة من الوصلات المجلفنة المصنّعة — مخفّضات وصناديق توزيع بفتحات وانحناءات دائرية — مرقّمة حسب المقاس.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'fab-preinsulated-rect-duct',
    category: 'fabrication',
    alt: {
      en: 'Stacked pre-insulated rectangular duct sections with foil-faced insulation and banding, ready to leave the workshop.',
      ar: 'أقسام قنوات مستطيلة معزولة مسبقًا بعزل مغلّف بالألمنيوم وأشرطة تثبيت، جاهزة للخروج من الورشة.',
    },
    services: ['ductwork-fabrication'],
    portrait: true,
  },
  {
    slug: 'fab-insulated-breeches-piece',
    category: 'fabrication',
    alt: {
      en: 'A large insulated breeches fitting under fabrication on the workshop floor, foil-faced insulation over sheet metal.',
      ar: 'وصلة تفريع كبيرة معزولة قيد التصنيع في أرض الورشة، بعزل مغلّف بالألمنيوم فوق الصاج.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'fab-spiral-duct-and-fittings',
    category: 'fabrication',
    alt: {
      en: 'Spiral duct sections stacked alongside fabricated shoes, boots, transitions and elbows awaiting dispatch.',
      ar: 'أقسام قنوات حلزونية مرصوفة إلى جانب وصلات وتحويلات وأكواع مصنّعة بانتظار التسليم.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'fab-insulated-round-duct-batch',
    category: 'fabrication',
    alt: {
      en: 'A production batch of acoustically lined round duct sections wrapped for delivery, with the workshop team at work.',
      ar: 'دفعة إنتاج من أقسام قنوات دائرية مبطّنة صوتيًا ومغلّفة للتسليم، مع فريق الورشة أثناء العمل.',
    },
    services: ['ductwork-fabrication'],
    portrait: true,
  },
  {
    slug: 'fab-round-elbow-boot',
    category: 'fabrication',
    alt: {
      en: 'A segmented galvanised elbow and a duct boot finished on the workshop bench.',
      ar: 'كوع مجلفن مقسّم ووصلة قناة جاهزان على طاولة الورشة.',
    },
    services: ['ductwork-fabrication'],
    portrait: true,
  },

  // -------------------------------------------------------- workshop & premises
  {
    slug: 'facility-warehouse-interior',
    category: 'facility',
    alt: {
      en: 'The workshop interior at Al Sina’iyah — a full-length steel-framed building with a forklift, racked sheet metal and fabricated duct in progress.',
      ar: 'داخل الورشة في الصناعية — مبنى بهيكل معدني ممتد، مع رافعة شوكية وألواح معدنية مرصوفة وقنوات قيد التصنيع.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'facility-folding-machine',
    category: 'facility',
    alt: {
      en: 'Sheet metal folding plant in the workshop, with galvanised coil stock and formed duct sections alongside.',
      ar: 'آلة ثني الصاج في الورشة، إلى جانبها لفائف مجلفنة وأقسام قنوات مشكّلة.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'facility-sheet-metal-stock',
    category: 'facility',
    alt: {
      en: 'Pallets of galvanised sheet and insulation board stacked in the warehouse, with flexible duct racked behind.',
      ar: 'منصات من الألواح المجلفنة وألواح العزل مرصوفة في المستودع، وخلفها قنوات مرنة على الرفوف.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'facility-flexduct-warehouse',
    category: 'facility',
    alt: {
      en: 'Warehouse stock of flexible duct stacked to the roof, with a forklift and racked galvanised sheet.',
      ar: 'مخزون من القنوات المرنة مرصوف حتى السقف في المستودع، مع رافعة شوكية وألواح مجلفنة على الرفوف.',
    },
    services: ['ductwork-fabrication', 'hvac-installation'],
  },
  {
    slug: 'facility-insulation-store',
    category: 'facility',
    alt: {
      en: 'Rolls of duct insulation held in the warehouse.',
      ar: 'لفائف عزل القنوات المخزّنة في المستودع.',
    },
    services: ['ductwork-fabrication'],
  },
  {
    slug: 'facility-parts-counter',
    category: 'facility',
    alt: {
      en: 'The parts counter — hand tools, cutting discs, fittings and boxed refrigeration tube on the shelves.',
      ar: 'منفذ قطع الغيار — عدد يدوية وأقراص قص ووصلات وأنابيب تبريد معبأة على الرفوف.',
    },
    services: ['hvac-repair', 'hvac-maintenance'],
  },
  {
    slug: 'facility-shopfront-sign',
    category: 'facility',
    alt: {
      en: 'The Nasmat Sheta Co. shopfront sign at the Al Sina’iyah premises in Riyadh.',
      ar: 'لوحة شركة نسمة شتاء على واجهة المقر في الصناعية بالرياض.',
    },
    services: [],
  },
];

export const photoSrc = (slug: string, width: 800 | 1600) =>
  asset(`/img/${slug}-${width}.webp`);

export const bySlug = (slug: string) => PHOTOS.find((p) => p.slug === slug);

export const byCategory = (category: ImageCategory) =>
  PHOTOS.filter((p) => p.category === category);

export const forService = (service: ServiceSlug, limit = 3) =>
  PHOTOS.filter((p) => p.services.includes(service)).slice(0, limit);

/** Above-the-fold hero image — preloaded, never lazy. */
export const HERO_SLUG = 'install-rooftop-ductwork-condensers';
