import type { Content } from './content';

// English source copy.
//
// Rule: nothing here asserts a fact about the company that isn't visible on the old
// site, the shopfront sign, or the project photographs. Where the old site made a
// bare claim ("Fast Response Time"), it is either restated as a plain claim or
// replaced with something demonstrable (an in-house workshop, materials held in
// stock) that the photographs actually show. See PLAN.md §0 rule 2.

export const en: Content = {
  meta: {
    siteName: 'HVAC Riyadh — Nasmat Sheta Co.',
    homeTitle: 'HVAC Installation, Repair & Ductwork Fabrication in Saudi Arabia',
    homeDescription:
      'Nasmat Sheta Co. installs, repairs and maintains HVAC systems across Saudi Arabia, and fabricates ductwork to SMACNA, BSI and DW144 in our own workshop in Al Sina’iyah. Call or WhatsApp +966 54 504 8875.',
  },

  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    workshop: 'Workshop',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
  },

  cta: {
    request: 'Request HVAC Service',
    whatsapp: 'WhatsApp Us',
    call: 'Call Now',
    callLandline: 'Call Office',
    email: 'Email Us',
    learnMore: 'Learn more',
    viewAll: 'View all',
    getQuote: 'Request a Quote',
  },

  home: {
    heroEyebrow: 'Saudi Arabia · Commercial, industrial and residential',
    heroTitle: 'Reliable HVAC Installation, Repair & Maintenance in Saudi Arabia',
    heroSubtitle:
      'Nasmat Sheta Co. services HVAC systems across Saudi Arabia and fabricates ductwork in our own workshop in Al Sina’iyah — galvanised, black and stainless steel, built to SMACNA, BSI and DW144.',

    trust: [
      {
        title: 'Our own workshop',
        body: 'Ductwork is cut, formed and insulated on our own machines in Al Sina’iyah — not subcontracted out.',
      },
      {
        title: 'Built to standard',
        body: 'Ductwork manufactured to SMACNA, BSI and DW144 specifications.',
      },
      {
        title: 'Materials in stock',
        body: 'Galvanised sheet, insulation, flexible duct and copper tube held in our warehouse, so jobs are not held up waiting on supply.',
      },
      {
        title: 'Service and fabrication together',
        body: 'One contractor for the install, the ductwork behind it and the maintenance after it.',
      },
    ],

    servicesTitle: 'Our HVAC Services',
    servicesIntro:
      'From a single unit that has stopped working to a full ductwork package for a new fit-out.',

    emergencyTitle: 'HVAC problem right now?',
    emergencyBody:
      'Breakdowns, refrigerant leaks and units that have stopped cooling. Send us a message on WhatsApp with a photo of the unit and we will tell you what is involved.',

    ductTitle: 'Ductwork & Fabrication',
    ductIntro:
      'This is the part of the business most people do not know about. We manufacture ductwork and accessories in our own workshop, for our own installations and for other contractors.',
    ductStandards: 'Compliant with SMACNA, BSI and DW144',
    ductProducts: [
      'Galvanised, black and stainless steel ductwork',
      'Spiral ductwork and round fittings',
      'Volume control dampers and splitter dampers',
      'Air extractors and sound attenuators',
      'Louvers and sand trap louvers',
      'Acoustic liners for noise control',
      'Custom stainless steel kitchen hoods',
      'Mild steel fabrication — angle frames, channels and support stands',
    ],
    ductAlso: 'Also fabricated',
    ductAlsoItems: [
      'GI and PI duct',
      'Round and spiral duct',
      'Black steel duct',
      'Kitchen hoods',
      'All types of dampers',
      'Aluminium cladding',
      'Air balancing',
    ],

    energyTitle: 'Energy Management & Optimisation',
    energyBody:
      'Reduce your energy costs while improving indoor comfort with modern, high-efficiency HVAC solutions.',
    energyItems: [
      'Energy audits and system performance analysis',
      'Energy-saving system improvements',
      'HVAC optimisation for lower utility bills',
      'Installation of energy management systems',
    ],

    projectsTitle: 'Recent Work',
    projectsIntro:
      'Installations and fabrication from Riyadh sites and from our workshop floor.',

    workshopTitle: 'Inside Our Workshop',
    workshopIntro:
      'Sheet metal plant, forklifts and racked stock at our premises in Al Sina’iyah — where the ductwork on our jobs is actually made.',

    whyTitle: 'Why Choose Nasmat Sheta Co.',
    why: [
      {
        title: 'Experienced technicians',
        body: 'Installation, diagnosis, repair and sheet metal work handled by the same company.',
      },
      {
        title: 'Quality workmanship',
        body: 'Ductwork made to recognised standards and installed by the people who made it.',
      },
      {
        title: 'Fast response',
        body: 'WhatsApp reaches us directly. Send a photo of the problem and get a straight answer.',
      },
      {
        title: 'Affordable pricing',
        body: 'Fabricating in-house and holding our own stock keeps costs down on both service and duct packages.',
      },
      {
        title: 'We speak your language',
        body: 'Arabic, Hindi, Urdu, Bangla and English — deal with us in whichever you prefer.',
      },
      {
        title: 'A real address',
        body: 'A workshop and warehouse in Al Sina’iyah, Riyadh, that you are welcome to visit.',
      },
    ],

    faqTitle: 'Common Questions',
    faq: [
      {
        q: 'Which areas of Riyadh do you cover?',
        a: 'We work across Riyadh from our base in Al Sina’iyah. For work outside the city, message us with the location and we will tell you whether we can take it on.',
      },
      {
        q: 'Do you work on residential as well as commercial systems?',
        a: 'Yes — homes and businesses both. Our project photos include retail and commercial fit-outs, rooftop plant and residential cooling.',
      },
      {
        q: 'Can you supply ductwork to other contractors?',
        a: 'Yes. We fabricate for our own installations and for other contractors. Send drawings or a schedule of sizes and we will quote.',
      },
      {
        q: 'What is the fastest way to reach you?',
        a: 'WhatsApp on +966 54 504 8875. Photos of the unit or the drawings help us answer quickly.',
      },
    ],

    finalTitle: 'Tell us what you need',
    finalBody:
      'A unit that has stopped working, a maintenance contract, or a duct package for a new fit-out — send us the details and we will come back to you.',
  },

  services: {
    indexTitle: 'HVAC Services in Riyadh',
    indexDescription:
      'HVAC installation, repair, maintenance, upgrades, energy management and ductwork fabrication across Riyadh from Nasmat Sheta Co.',
    indexIntro:
      'Six service lines, all delivered by the same company — including the ductwork behind the systems we install.',

    problemsTitle: 'When you need this',
    providesTitle: 'What we provide',
    processTitle: 'How the work runs',
    relatedWorkTitle: 'Related work',
    faqTitle: 'Questions',
    ctaTitle: 'Get this booked in',
    ctaBody: 'Call, WhatsApp or send the details and we will come back to you with what is involved.',

    items: {
      'hvac-installation': {
        slug: 'hvac-installation',
        name: 'HVAC Installation',
        seoTitle: 'HVAC Installation in Riyadh — Air Conditioning, Ductwork & Controls',
        h1: 'HVAC Installation in Riyadh',
        teaser: 'New systems installed complete — units, ductwork, controls and connections.',
        intro:
          'We install complete HVAC systems for homes and businesses in Riyadh: the equipment, the ductwork that distributes the air, the controls that run it, and the electrical and plumbing connections that tie it together. Because we fabricate our own ductwork, the distribution side is made to fit the building rather than forced to fit stock parts.',
        problems: [
          'A new building, unit or fit-out with no system installed yet',
          'An extension or new area that the existing system does not reach',
          'A system that was never sized correctly and cannot hold temperature',
          'A fit-out on a programme, where duct lead times decide the finish date',
        ],
        provides: [
          'Installation of furnaces, air conditioners, heat pumps and boilers',
          'Ductwork and ventilation system installation',
          'Thermostats and control system setup',
          'Electrical and plumbing connections',
          'Fan coil units, diffusers, grilles and flexible duct connections',
          'Rooftop plant, condenser sets and supporting steelwork',
        ],
        process: [
          { title: 'Site visit', body: 'We look at the space, the existing services and the access before quoting.' },
          { title: 'Quote and drawings', body: 'A written scope and price. For duct packages, a schedule of sizes and fittings.' },
          { title: 'Fabrication', body: 'Ductwork is made in our workshop while the site is being prepared.' },
          { title: 'Install and commission', body: 'Units set, ductwork installed and sealed, controls set up and the system balanced and handed over.' },
        ],
        faq: [
          { q: 'Do you install equipment I have already bought?', a: 'Yes. Send us the model and we will confirm what the installation involves.' },
          { q: 'Can you handle the ductwork as well as the units?', a: 'Yes — that is our own workshop, so duct and equipment come from one contractor.' },
          { q: 'Do you work with main contractors on fit-outs?', a: 'Yes. Send drawings and a programme and we will price the package.' },
        ],
      },

      'hvac-repair': {
        slug: 'hvac-repair',
        name: 'HVAC Repair',
        seoTitle: 'HVAC & AC Repair in Riyadh — Breakdowns, Leaks, Emergency Call-Out',
        h1: 'HVAC Repair in Riyadh',
        teaser: 'Diagnosis and repair of breakdowns, leaks and units that have stopped cooling.',
        intro:
          'When a system stops working in Riyadh it stops being an inconvenience very quickly. We diagnose the fault properly before replacing parts, so you are not paying for a component that was never the problem. Send a photo of the unit and its nameplate on WhatsApp and we can usually tell you what we are dealing with before we arrive.',
        problems: [
          'The system runs but the air is not cold',
          'A unit that trips, will not start, or cuts out under load',
          'Ice on the pipework, or water where it should not be',
          'Noise, vibration or a smell that has just started',
          'Refrigerant that keeps needing topping up — which means there is a leak',
        ],
        provides: [
          'Diagnosing and fixing HVAC breakdowns',
          'Replacing compressors, motors and thermostats',
          'Refrigerant leak detection and repair',
          'Emergency repair services',
          'Fan, belt, bearing and control faults',
          'Drain, condensate and airflow problems',
        ],
        process: [
          { title: 'Describe the fault', body: 'WhatsApp us what is happening, with a photo of the unit and its nameplate.' },
          { title: 'Attend and diagnose', body: 'We test the system rather than guessing at the part.' },
          { title: 'Confirm the repair', body: 'You get the cause and the cost before we proceed.' },
          { title: 'Repair and test', body: 'Parts replaced, system run up and checked before we leave.' },
        ],
        faq: [
          { q: 'Do you offer emergency repairs?', a: 'Emergency repair is one of the services we provide. Message or call and we will tell you honestly how quickly we can attend.' },
          { q: 'Will you tell me the cost before starting?', a: 'Yes. We confirm the fault and the price before any repair work begins.' },
          { q: 'My system keeps losing refrigerant. Can you find the leak?', a: 'Yes — leak detection and repair is part of what we do. Topping up without finding the leak only postpones the problem.' },
        ],
      },

      'hvac-maintenance': {
        slug: 'hvac-maintenance',
        name: 'HVAC Maintenance',
        seoTitle: 'HVAC Maintenance in Riyadh — Servicing & Preventative Plans',
        h1: 'HVAC Maintenance in Riyadh',
        teaser: 'Planned servicing that keeps systems running through the Riyadh summer.',
        intro:
          'Most of the breakdowns we attend in July were preventable in April. Riyadh conditions are hard on HVAC equipment — dust loads filters and coils, and heat keeps systems running at full duty for months. Planned maintenance keeps capacity where it should be and catches the small faults before they become a call-out.',
        problems: [
          'Cooling capacity dropping off as the season goes on',
          'Dust and filter loading choking airflow',
          'Rising energy bills from a system working harder than it needs to',
          'A portfolio of units with no service history',
          'Equipment warranties that require documented servicing',
        ],
        provides: [
          'Seasonal system inspections',
          'Filter and belt replacement',
          'Cleaning coils and internal components',
          'Lubrication of moving parts',
          'Preventative maintenance plans',
          'Condensate drain clearing and airflow checks',
        ],
        process: [
          { title: 'Survey the equipment', body: 'We list what you have, where it is and what condition it is in.' },
          { title: 'Agree a schedule', body: 'Visit frequency set around your equipment and how hard it works.' },
          { title: 'Service visits', body: 'Filters, coils, belts, moving parts and controls checked and cleaned.' },
          { title: 'Report', body: 'You are told what was done and what needs watching before next time.' },
        ],
        faq: [
          { q: 'How often should a system be serviced in Riyadh?', a: 'It depends on the equipment and the dust exposure. We will recommend a frequency after seeing the system rather than selling a fixed package.' },
          { q: 'Do you maintain systems you did not install?', a: 'Yes.' },
          { q: 'Can you cover several buildings under one plan?', a: 'Yes — send us the equipment list and locations.' },
        ],
      },

      'upgrades-retrofits': {
        slug: 'upgrades-retrofits',
        name: 'Upgrades & Retrofits',
        seoTitle: 'HVAC Upgrades & Retrofits in Riyadh — Efficiency and Controls',
        h1: 'HVAC Upgrades & Retrofits in Riyadh',
        teaser: 'Modernising older systems — efficiency, controls, zoning and compliance.',
        intro:
          'An ageing system rarely fails all at once. It gets more expensive to run, harder to control and less comfortable, year after year. A retrofit replaces what is worth replacing and keeps what is not — often the ductwork, if it was built properly, which is something we can assess honestly because we make ductwork ourselves.',
        problems: [
          'Running costs climbing every year on ageing equipment',
          'Areas of the building that are always too hot or too cold',
          'Manual controls where a schedule would do the job better',
          'Equipment past its service life and increasingly hard to get parts for',
          'A system that no longer meets current requirements',
        ],
        provides: [
          'Upgrading outdated HVAC systems',
          'Energy-efficient equipment installation',
          'Smart thermostat installation',
          'Zoning system upgrades',
          'Compliance upgrades to meet new regulations',
          'Ductwork modification, extension and replacement',
        ],
        process: [
          { title: 'Assess what you have', body: 'Equipment, ductwork and controls surveyed before anything is recommended.' },
          { title: 'Identify what to keep', body: 'Sound ductwork is worth keeping. We will say so rather than sell a full replacement.' },
          { title: 'Stage the work', body: 'Phased where the building has to stay in use.' },
          { title: 'Install and rebalance', body: 'New equipment installed, controls configured and airflow rebalanced.' },
        ],
        faq: [
          { q: 'Do I have to replace the ductwork as well?', a: 'Often not. We will inspect it and tell you whether it is worth keeping — we have no reason to condemn ductwork that is sound.' },
          { q: 'Can the work be phased around an operating building?', a: 'Yes. Tell us the constraints and we will plan around them.' },
          { q: 'Which regulations do compliance upgrades cover?', a: 'Tell us what you have been asked to meet and we will confirm what the work involves.' },
        ],
      },

      'energy-management': {
        slug: 'energy-management',
        name: 'Energy Management',
        seoTitle: 'HVAC Energy Management & Optimisation in Riyadh',
        h1: 'Energy Management & Optimisation',
        teaser: 'Audits, performance analysis and changes that lower running costs.',
        intro:
          'In most Riyadh buildings HVAC is the largest single load on the electricity bill. Before recommending equipment, we look at how the system is actually performing — because a well-chosen control change or a corrected airflow often saves more than new hardware, and costs a great deal less.',
        problems: [
          'Electricity bills that keep climbing without an obvious cause',
          'Plant running outside occupied hours',
          'Systems fighting each other, or running at full output all day',
          'Comfort complaints alongside high consumption — usually a distribution problem',
          'A need to understand where the energy actually goes before investing',
        ],
        provides: [
          'Energy audits and system performance analysis',
          'Energy-saving system improvements',
          'HVAC optimisation for lower utility bills',
          'Installation of energy management systems',
          'Airflow balancing and distribution correction',
          'Control strategy and scheduling review',
        ],
        process: [
          { title: 'Audit', body: 'We survey the plant, the controls and how the building actually uses it.' },
          { title: 'Analyse', body: 'Performance measured against what the equipment should be delivering.' },
          { title: 'Recommend', body: 'A list of changes, cheapest and highest-impact first.' },
          { title: 'Implement', body: 'We carry out the work and verify the result.' },
        ],
        faq: [
          { q: 'How much will I save?', a: 'We will not put a percentage on it before seeing your system. Any contractor who does is guessing.' },
          { q: 'Does this always mean buying new equipment?', a: 'No. Control changes, balancing and correcting distribution frequently deliver the largest share of the saving.' },
          { q: 'Do you audit systems you did not install?', a: 'Yes.' },
        ],
      },

      'ductwork-fabrication': {
        slug: 'ductwork-fabrication',
        name: 'Ductwork & Fabrication',
        seoTitle: 'Ductwork Fabrication in Riyadh — SMACNA, BSI & DW144',
        h1: 'Ductwork & Fabrication',
        teaser: 'Ductwork and accessories made in our own Riyadh workshop, to standard.',
        intro:
          'We manufacture ductwork and accessories at our workshop in Al Sina’iyah — galvanised, black and stainless steel, to SMACNA, BSI and DW144. We fabricate for our own installations and supply other contractors. Sheet metal plant, insulation and stock are held on site, so a duct package does not depend on a third party’s queue.',
        problems: [
          'A duct package needed to a programme, where lead time drives the finish date',
          'Fittings that do not exist off the shelf — transitions, breeches, odd angles',
          'A kitchen extract that has to be stainless and has to fit the space it is in',
          'Noise breaking out of a duct run into an occupied space',
          'Sand and dust entering through intake louvers',
          'Ductwork that has to be specified to a named standard for sign-off',
        ],
        provides: [
          'Galvanised, black and stainless steel ductwork (SMACNA, BSI, DW144)',
          'Spiral ductwork and round fittings',
          'Volume control dampers and splitter dampers',
          'Air extractors and sound attenuators',
          'Louvers and sand trap louvers',
          'Acoustic liners for noise control',
          'Custom stainless steel kitchen hoods',
          'Mild steel fabrication — angle frames, channels and support stands',
          'Pre-insulated rectangular and round duct',
          'Aluminium cladding and air balancing',
        ],
        process: [
          { title: 'Drawings or sizes', body: 'Send drawings, or a schedule of sizes and fittings. We will tell you what is missing.' },
          { title: 'Quote', body: 'Priced against the standard you need it built to.' },
          { title: 'Fabricate', body: 'Cut, formed, sealed and insulated on our own machines, marked up by size.' },
          { title: 'Deliver or install', body: 'Delivered to site, or installed by us if the install is ours.' },
        ],
        faq: [
          { q: 'Do you supply ductwork to other contractors?', a: 'Yes. Supply-only is a normal part of what the workshop does.' },
          { q: 'Which standards do you build to?', a: 'SMACNA, BSI and DW144. Tell us which one applies to your project.' },
          { q: 'Can you make non-standard fittings?', a: 'Yes — transitions, breeches pieces and custom stainless kitchen hoods are made to measure.' },
          { q: 'Do you insulate the ductwork as well?', a: 'Yes. Pre-insulated duct and acoustic lining are both made in the workshop.' },
        ],
      },
    },
  },

  about: {
    title: 'About Nasmat Sheta Co.',
    description:
      'Nasmat Sheta Co. is an HVAC contractor and ductwork fabricator based in Al Sina’iyah, Riyadh, trading online as HVAC Riyadh.',
    lead: 'An HVAC contractor with its own sheet metal workshop, based in Al Sina’iyah, Riyadh.',
    body: [
      'Nasmat Sheta Co. installs, repairs and maintains HVAC systems for homes and businesses across Riyadh. What makes the company unusual is the second half of it: a working sheet metal shop that manufactures the ductwork, fittings and accessories those systems depend on.',
      'That means a customer deals with one company for the equipment, the distribution and the servicing afterwards — and a contractor can order a duct package from the same workshop that could install it. Galvanised, black and stainless steel ductwork is built to SMACNA, BSI and DW144.',
      'The premises in Al Sina’iyah hold the fabrication plant, a materials warehouse and a parts counter. Insulation, flexible duct, galvanised sheet and copper tube are kept in stock so work is not held up waiting for supply.',
      'The business is run by Md Mokbul Hossen, contractor.',
    ],
    capabilitiesTitle: 'What we do',
    capabilities: [
      { title: 'HVAC contracting', body: 'Installation, repair, maintenance, upgrades and energy work for homes and businesses across Riyadh.' },
      { title: 'Duct fabrication', body: 'Galvanised, black and stainless steel ductwork and fittings, built to SMACNA, BSI and DW144.' },
      { title: 'Sheet metal work', body: 'Custom stainless kitchen hoods, mild steel angle frames, channels and support stands.' },
      { title: 'Supply to trade', body: 'Duct packages fabricated for other contractors, not only for our own installations.' },
    ],
    languagesTitle: 'Languages',
    languagesBody:
      'We work in Arabic, Hindi, Urdu, Bangla and English. Contact us in whichever you are most comfortable with.',
    disclaimer: 'HVAC Riyadh is a registered domain name operated by Nasmat Sheta Co.',
  },

  projects: {
    title: 'Projects & Work Samples',
    description:
      'Installations and ductwork fabrication by Nasmat Sheta Co. across Riyadh — commercial fit-outs, rooftop plant and workshop production.',
    lead: 'Installations from Riyadh sites, and fabrication from our own workshop floor.',
    note:
      'Captions describe what is shown in each photograph. Client names, project locations and dates are not published without permission.',
    filters: {
      all: 'All',
      installation: 'Installations',
      fabrication: 'Fabrication',
      facility: 'Workshop & premises',
    },
  },

  workshop: {
    title: 'Our Workshop & Premises',
    description:
      'Inside the Nasmat Sheta Co. workshop in Al Sina’iyah, Riyadh — sheet metal plant, materials warehouse and parts counter.',
    lead: 'Sheet metal plant, a materials warehouse and a parts counter in Al Sina’iyah, Riyadh.',
    body: [
      'Most HVAC companies buy their ductwork in. We make ours. The workshop runs sheet metal forming plant for rectangular and spiral duct, with insulation and acoustic lining applied in-house before anything leaves the building.',
      'The warehouse alongside it holds galvanised sheet, flexible duct, insulation rolls and copper tube. Keeping stock on site is why a duct package can start being made the day it is ordered rather than the week the material arrives.',
      'You are welcome to visit. The premises are in Al Sina’iyah, Riyadh 12843.',
    ],
  },

  contact: {
    title: 'Contact Us',
    description:
      'Contact Nasmat Sheta Co. for HVAC service or ductwork in Riyadh. WhatsApp +966 54 504 8875, or visit our workshop in Al Sina’iyah.',
    lead: 'Tell us what you need. WhatsApp is the fastest way to reach us.',
    directTitle: 'Reach us directly',
    formTitle: 'Request service',
    formIntro: 'Send the details and we will come back to you.',
    fields: {
      name: 'Your name',
      phone: 'Phone number',
      email: 'Email (optional)',
      service: 'What do you need?',
      servicePlaceholder: 'Select a service',
      message: 'Describe the job',
      messagePlaceholder:
        'The unit or system, what is happening, and where in Riyadh you are. Photos help — you can send them on WhatsApp.',
      preferred: 'Preferred contact method',
      submit: 'Send request',
    },
    formNote:
      'This form opens your email app with the details filled in, addressed to our office. Prefer WhatsApp? Use the button above.',
    detailsTitle: 'Business details',
    addressLabel: 'Address',
    phoneLabel: 'Mobile / WhatsApp',
    landlineLabel: 'Office',
    emailLabel: 'Email',
    hoursLabel: 'Working hours',
    hoursValue: 'Contact us to confirm',
    areaTitle: 'Where we work',
    areaBody:
      'Riyadh, from our base in Al Sina’iyah. For work elsewhere in Saudi Arabia, message us with the location.',
  },

  footer: {
    tagline:
      'HVAC installation, repair and maintenance across Saudi Arabia — and ductwork fabricated in our own workshop.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    operatedBy: 'HVAC Riyadh is a registered domain name operated by Nasmat Sheta Co.',
  },

  common: {
    skipToContent: 'Skip to content',
    languageName: 'English',
    switchTo: 'العربية',
    switchToLabel: 'Switch to Arabic',
    breadcrumbHome: 'Home',
  },
};
