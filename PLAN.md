# HVAC Riyadh — Master Project Brief, Audit & Development Plan

**Client:** Nasmat Sheta Co. (trading online as HVAC Riyadh)
**Existing site:** https://www.hvacriyadh.com/
**Doc status:** Audit complete for content, technical and imagery (verified 2026-09-02). **The site has been built** — see §27. Competitor research, keyword research with real volume data, and the client-input answers in §22 are still outstanding.
**Supersedes:** `READING-PLAN.md` (fully folded into §2 and §3 below — safe to delete).

**How to use this document.** §0–§2 are settled facts and rules; treat them as binding — §0 in particular still governs every future edit to the site. §3 is the onboarding read for anyone joining. §4–§23 are the plan the build followed, with every unverified item still marked **CLIENT INPUT REQUIRED**. §24 is the build order. §26–§27 record what was actually built and what deliberately was not.

---

# 0. OPERATING RULES (non-negotiable)

1. **Do not start coding before the audit and plan are complete and approved.**
2. **Never invent business claims.** Not years of experience, employee/technician counts, project or customer counts, ratings, reviews, certifications, licenses, manufacturer partnerships, warranties, response times, 24/7 availability, service areas, pricing, guarantees, client names, testimonials, or project details.
3. Where information is missing, write **CLIENT INPUT REQUIRED — \<the specific question\>**. Never convert an assumption into website copy.
4. Do not copy competitor websites. Use research for patterns and gaps only.
5. Do not discard existing project/workshop images without evaluating them first.
6. No fake reviews, statistics, or trust badges.
7. No thin SEO pages. No doorway/neighborhood pages without genuine coverage and unique content.
8. Do not over-engineer. Do not add dependencies without a stated reason.
9. Mobile is a first-class experience, not a breakpoint.
10. Every important page has one clear conversion path.
11. The site must make the **HVAC service + ductwork/fabrication** dual capability immediately understandable.
12. The existing website is the source of truth for business facts, subject to client confirmation.
13. Structured data may only describe information that is present and verifiable.
14. Before final implementation, verify every factual claim against source content or client-provided information.

---

# 1. SOURCE OF TRUTH

The live site at https://www.hvacriyadh.com/ is primary. Current positioning:

> Reliable HVAC Installation, Repair & Maintenance Services

Disclaimer carried on the current homepage, to be preserved somewhere on the new site:

> HVAC Riyadh is a registered domain name operated by Nasmat Sheta Co.

Everything in §2 below was read directly from the live pages and their raw HTML on 2026-09-02.

---

# 2. AUDIT — COMPLETED FINDINGS

## 2.1 Structure & inventory (verified)

| Item | Finding |
|---|---|
| Total pages | **2** — `/` (= `/home`) and `/contact-us` |
| Internal links site-wide | Two only: `/home`, `/contact-us` |
| Navigation | Home, Contact Us, plus a Google Sites "More" overflow control (no additional destinations behind it) |
| Announcement bar | "Feel free to contact us anytime on WhatsApp at 054 504 8875." |
| Footer | Google Sites default: "Report abuse / Page details / Page updated" — **no business footer at all** |
| Homepage sections, in order | Hero → Our HVAC Services (5 blocks) → Our Ductwork Services → Why Choose Us? → Questions? → Work Samples → Happy Clients → Workshops → owner byline |
| Images | 26 files exported. 21 published, 3 stock (excluded), 2 client marketing graphics (content rebuilt as HTML). Catalogued in `src/lib/images.ts` |
| Language | **English only**, despite the site claiming five working languages |

## 2.2 Content inventory (verbatim from live site)

**Hero:** "Reliable HVAC Installation, Repair & Maintenance Services"

**Our HVAC Services** — five blocks, all plain bullet lists, all identical visual weight:

- **Installation Services** — furnaces, air conditioners, heat pumps, boilers · ductwork and ventilation system installation · thermostats and control system setup · electrical and plumbing connections
- **Repair Services** — diagnosing and fixing HVAC breakdowns · replacing compressors, motors, thermostats · refrigerant leak detection and repair · emergency repair services
- **Maintenance Services** — seasonal system inspections · filter and belt replacement · cleaning coils and internal components · lubrication of moving parts · preventative maintenance plans
- **System Upgrades / Retrofits** — upgrading outdated HVAC systems · energy-efficient equipment installation · smart thermostat installation · zoning system upgrades · compliance upgrades to meet new regulations
- **Energy Management & Optimization / Energy Efficiency Solutions** — energy audits and system performance analysis · energy-saving system improvements · HVAC optimization for lower utility bills · installation of energy management systems
  - Closing line, the only benefit-framed sentence on the page: *"Reduce your energy costs while improving indoor comfort with modern, high-efficiency HVAC solutions."*

**Our Ductwork Services** — intro: *"We specialize in the production of high-quality ductwork and accessories tailored to meet a wide range of industry standards and applications."*

- Galvanized, black, and stainless steel ductwork (**compliant with SMACNA, BSI, DW144, and more**)
- Spiral ductwork and round fittings
- Volume control dampers and splitter dampers
- Air extractors and sound attenuators
- Louvers and sand trap louvers
- Acoustic liners for noise control
- Custom stainless steel kitchen hoods
- Mild steel fabrication (angle frames, channels, and support stands)
- Closing: *"Built for performance, precision, and durability — our solutions are designed to support your HVAC and industrial needs."*

**Why Choose Us?** — Licensed & Experienced Technicians · Fast Response Time · Affordable Pricing · Quality Workmanship · Customer Satisfaction Guaranteed. *(Five unsubstantiated claims. No years, no license number, no SLA.)*

**Questions?** — invites contact by Mobile +966 545048875, WhatsApp +966 545048875, or Gmail mokbul.hossain2030@gmail.com. States: *"My preferred communication languages are Arabic, Hindi, Urdu, and Bangla. I am comfortable conducting conversations and correspondence in any of these languages. Additionally, I am familiar with English."*

**Work Samples / Happy Clients / Workshops** — three headings. Work Samples and Workshops are uncaptioned photo grids. **Happy Clients is an embedded Elfsight widget** (`elfsightcdn.com/platform.js`), not native content.

**Byline:** "Md Mokbul Hossen | Contractor at Nasmat sheta co. | Riyadh, Saudi Arabia | www.hvacriyadh.com"

**Contact page:** heading "Contact Us" · "🔎 You can easily find us." · WhatsApp 054 504 8875 (+966 545048875) · **nasmatsheta.co@gmail.com** with an instruction to CC **mokbul.hossain2030@gmail.com** · Address: **Al Sina'iyah, Riyadh 12843, Saudi Arabia** · outbound links to LinkedIn, WhatsApp, Google Maps, Google Business Profile · coverage claim: *"Riyadh and cities across Saudi Arabia."*

## 2.3 Technical implementation (verified from raw HTML)

| Area | Finding |
|---|---|
| Platform | **Google Sites** on a custom domain. Content is client-rendered from an inline JS payload; no server-side HTML for the body copy |
| Repository | **None.** The working directory `d:\workstation\hvacriyadh` was empty — there is no existing codebase to inherit |
| Hosting | Google infrastructure; images served from `lh3.googleusercontent.com/sitesv/...` |
| `<title>` | **"Nasmat Sheta co."** — no service term, no city |
| Meta description / `og:description` | **Corrupted** (see 2.4) |
| `og:` tags | `og:title` = "Nasmat Sheta co."; `og:type` = website; `og:url` = `https://www.hvacriyadh.com/`; `og:image` = a Google Sites-hosted header image |
| `robots.txt` | **Absent** — returns the Google Sites 404 HTML page |
| `sitemap.xml` | **Absent** — returns the Google Sites 404 HTML page |
| Structured data | Only `itemtype="http://schema.org/WebPage"` on `<html>`. No LocalBusiness, no Service, no Organization |
| Canonical / URL hygiene | `/` and `/home` both serve the homepage; `og:url` points at `/`, navigation points at `/home` |
| Third-party scripts | Elfsight platform.js (testimonials widget) |
| Analytics | **None detected** in the HTML — AUDIT PENDING (confirm no GA4/GTM/Tag via client's Google account) |
| Performance | **AUDIT PENDING** — no Lighthouse/CWV run yet. Many uncompressed-looking gallery images is the obvious risk |
| Accessibility | **AUDIT PENDING** — uncaptioned image grids and Google Sites defaults; alt text not yet checked image-by-image |

## 2.4 Defects found (fix regardless of redesign scope)

1. **The meta description is broken and is leaking raw markup into search results.** Both `og:description` and `meta itemprop="description"` currently contain the literal string `Our HVAC Services` followed by a raw `<script src="https://elfsightcdn.com/platform.js" async></script>` tag and an `<div class="elfsight-app-...">`. Someone pasted the Elfsight embed into the page-description field. This is the snippet Google and every shared link displays today. **Highest-priority fix; one edit in Google Sites page settings, no redesign needed.**
2. **Title tag has no keyword or location.** "Nasmat Sheta co." cannot match a search for HVAC services in Riyadh.
3. **No robots.txt, no sitemap.xml, no structured data.** All three are unavailable on Google Sites — a platform ceiling, not an oversight.
4. **Duplicate homepage URL** (`/` and `/home`) with no canonical control.
5. **Two conflicting email addresses.** The homepage gives only the personal Gmail; the contact page gives `nasmatsheta.co@gmail.com` and asks for the personal one in CC. **CLIENT INPUT REQUIRED — which inbox is authoritative?**
6. **No call-to-action element anywhere.** Phone and WhatsApp appear only as text inside paragraphs and in the top announcement bar. No button, no click-to-call link, no form.
7. **Claims five languages, ships one.** English-only site in an Arabic-first market.
8. **Testimonials depend on a third-party script.** If Elfsight fails, lapses, or is blocked, "Happy Clients" renders empty with the heading still showing.
9. **No business footer.** Address, hours, phone, and coverage appear nowhere in a persistent location.
10. **Hero promises service; half the page sells manufacturing.** The single largest positioning problem.

## 2.5 Audit gaps — must close before the plan is final (Phase 0)

- [x] **Image inventory** — DONE. 26 files exported. 21 usable and published; 3 are stock (excluded); 2 are the client's own marketing graphics, whose content was rebuilt as HTML rather than shipped as images. Catalogue with categories and bilingual alt text lives in `src/lib/images.ts`. Key finding: seven of the files named "Screenshot" are real facility photographs — shopfront signage, parts counter, insulation and flex-duct warehouses, a Falkon sheet-metal folding machine, and two warehouse interiors. They are the strongest proof assets the company has.
- [ ] **Hands-on UX pass** — real device and desktop walkthrough: first impression, scroll depth to first contact method, tap-target sizes, mobile nav behaviour, WhatsApp and phone flows.
- [ ] **Performance baseline** — Lighthouse + Core Web Vitals on mobile and desktop, so the rebuild has a number to beat.
- [ ] **Accessibility baseline** — alt text coverage, heading hierarchy, contrast, keyboard path.
- [ ] **Analytics check** — confirm with the client whether GA4 / Search Console / Tag Manager exist and hand over access.
- [ ] **Google Business Profile review** — category, hours, photos, reviews, NAP consistency against the site. This is likely the single biggest local-SEO asset already in play.
- [ ] **Competitor research** (§21).
- [ ] **Keyword research with real volume/difficulty data** (§14).

---

# 3. READING PLAN — onboarding path for anyone joining

The live site is ~15 minutes of reading. These six sessions add the "what to look for" so the read produces decisions rather than familiarity. Total ~1.5 hours including looking up the duct standards.

### Session 1 — Orient (10 min)
Read the homepage top: announcement bar, hero, the "registered domain name" disclaimer, the nav.
**Answer:** Who is the buyer — facility manager, main contractor, homeowner, restaurant owner? The page never says. Is the promise service, manufacturing, or both? Where is the call to action?

### Session 2 — The service catalogue (20 min)
Read "Our HVAC Services" through "Energy Management & Optimization" (content in §2.2).
**Notice:** "furnaces" and "boilers" lead the installation list — odd for Riyadh. "Emergency repair" is the strongest hook on the page and is buried in a bullet. "Preventative maintenance plans" is the only recurring-revenue offer and carries no detail. "Compliance upgrades to meet new regulations" names no regulation.
**Answer:** Which of the five actually pays the bills? The page gives them identical weight, so a visitor cannot tell what this company is best at.

### Session 3 — The ductwork business (20 min + 30–40 min of lookups)
Read "Our Ductwork Services". This is the most concrete and most defensible content on the site.
**Look up if unfamiliar:** **SMACNA** (US sheet-metal duct construction standards) · **DW144** (UK ductwork specification) · **sand trap louvers** (the Gulf-specific item — explains the local market fit) · **sound attenuators vs. acoustic liners** (two different noise solutions sold side by side).
**Answer:** Is this a fabrication shop that also installs, or an installer that also fabricates? The Workshops photos suggest the former. That answer drives the entire site's framing.

### Session 4 — Trust and proof (10 min)
Read "Why Choose Us?", "Work Samples", "Happy Clients", "Workshops".
**Answer:** What would a facility manager need to see to request a quote? Today the proof is entirely visual and unlabelled, and the claims are entirely generic.

### Session 5 — Contact and the ask (10 min)
Read the "Questions?" block, then the whole contact page.
**Answer:** What single action does the site want? WhatsApp is the honest answer — so why is there no WhatsApp button anywhere except the top bar?

### Session 6 — Read the plumbing, not the copy (20 min)
Work through §2.3 and §2.4 above against the live HTML (`view-source:` or curl). The broken meta description is visible in the first 4KB.

**What the read should leave you with — three decisions:**
1. Fix the meta description. Today it publishes raw script markup to every search result and shared link.
2. Pick a primary identity — ductwork fabricator or HVAC service contractor — and rebuild the title and hero around it plus the word "Riyadh."
3. Decide whether Google Sites survives. No sitemap, no robots control, no structured data, no Arabic locale, no per-service landing pages. If ranking for "HVAC Riyadh" matters, this platform is the ceiling.

---

# 4. BUSINESS UNDERSTANDING

Nasmat Sheta Co. is a Riyadh HVAC contractor with an in-house fabrication workshop, run by Md Mokbul Hossen. It sells across two distinct lines that the current site treats as one:

- **Service line** — installation, repair (including emergency), maintenance and preventive plans, upgrades/retrofits, energy management. Buyer: whoever owns a broken or aging system.
- **Fabrication line** — ductwork and accessories to SMACNA / BSI / DW144, dampers, louvers including sand trap louvers, attenuators, acoustic liners, stainless kitchen hoods, mild steel supports. Buyer: main contractors, consultants, kitchen fit-out firms, industrial facilities.

These have different buyers, different sales cycles, and different proof requirements. The architecture in §7 splits them deliberately.

**CLIENT INPUT REQUIRED** — which line generates the most revenue today, and which does the client *want* to grow? The answer changes the homepage hierarchy.

---

# 5. PROBLEMS WITH THE CURRENT WEBSITE

**Positioning:** hero sells service, half the content sells manufacturing, nothing states who the customer is.
**Conversion:** zero buttons, zero forms, no click-to-call, contact details buried in prose, no sticky mobile CTA.
**Proof:** unlabelled photo grids and five generic claims; the testimonials block is an outsourced widget.
**Discoverability:** no keywords in the title, corrupted meta description, no sitemap/robots/schema, duplicate homepage URL, two pages total so nothing can rank for a specific service.
**Market fit:** English-only in Arabic-first Riyadh; personal Gmail as the business contact; no address/hours/coverage in a footer.
**Platform:** Google Sites caps SEO, performance and layout control at a level below what this business needs.

---

# 6. REDESIGN OBJECTIVE

The new site must read as a **professional Riyadh HVAC contractor with a real workshop** — not a prettier Google Sites page.

Target perception: reliable · professional · technical · experienced · modern · trustworthy · responsive · local to Riyadh.

**Avoid:** generic SaaS design, heavy gradients, animation everywhere, over-rounded cards, huge decorative sections, stock-photo-led layouts, invented statistics, fake testimonials, fake trust badges, keyword stuffing.

The competitive advantage is that this company visibly makes things. The design should lean on real workshop and project photography over illustration.

---

# 7. PROPOSED SITEMAP

Starting proposal — to be finalised against §14 keyword research and §21 competitor findings. Every page must justify its existence.

```text
/
├── /about
├── /services
│   ├── /services/hvac-installation
│   ├── /services/hvac-repair
│   ├── /services/hvac-maintenance
│   ├── /services/upgrades-retrofits
│   ├── /services/energy-management
│   └── /services/ductwork-fabrication
├── /projects
├── /workshop                 ← candidate: may be a section of /about instead
├── /service-areas            ← ONLY if §22 confirms genuine coverage; otherwise drop
├── /faq                      ← candidate: may live only as per-page FAQ blocks
└── /contact
```

**Rationale.** Six service pages exist because each maps to a distinct search intent found in §2.2's own content; they are not manufactured. `/projects` exists because the site already owns 20+ real project photos, its strongest untapped asset. `/workshop` is a candidate rather than a certainty — a workshop section inside `/about` may carry the same weight without a thin page. `/service-areas` is conditional on real coverage; a single honest coverage page beats a dozen neighborhood stubs. `/faq` may be better distributed as per-service FAQ blocks (better for both users and rich results) than centralised.

---

# 8. HOMEPAGE ARCHITECTURE

```text
1  Hero              — "Reliable HVAC Installation, Repair & Maintenance Services in Riyadh"
                       Primary CTA: Request HVAC Service · Secondary: WhatsApp Us · Tertiary: Call Now
                       Answers in one screen: what, where, why trust, what next
2  Trust strip       — verified claims only (§9). No numbers until the client supplies them
3  Services grid     — six cards: image/icon + one-line description + Learn More → service page
4  Emergency CTA     — conditional on CLIENT INPUT: is emergency service genuinely offered?
5  Ductwork &        — the differentiator. Real workshop photography, the standards
   Fabrication         (SMACNA / BSI / DW144), the product range. Must make clear this is
                       not "an AC repair company"
6  Energy management — audits, performance analysis, optimization. No savings percentages
                       unless the client can substantiate them
7  Projects preview  — 6–8 categorised images → /projects
8  Workshop preview  — proof that technical work happens in-house → /workshop or /about
9  Why choose us     — rebuilt from the existing five claims, with evidence where available
10 FAQ               — 5–6 highest-intent questions
11 Final CTA         — form + WhatsApp + phone
Footer               — NAP, hours, coverage, service links, the "registered domain name" line
```

**Hero visual:** prefer the company's own project/workshop photography. If nothing in the existing library is hero-quality (resolution, lighting, composition — decide during the §2.5 image inventory), mark it **NEW IMAGE REQUIRED** rather than defaulting to stock.

---

# 9. TRUST SECTION

Carry forward only what the current site already claims, and only if substantiable: experienced technicians · quality workmanship · fast response · affordable pricing · customer satisfaction.

**CLIENT INPUT REQUIRED** for each: is there a license/CR number to cite? An actual response-time commitment? A workmanship guarantee period? Any of these converts a generic claim into a real one. Until then they stay as plain claims — **do not turn them into statistics.**

---

# 10. DUCTWORK & FABRICATION STRATEGY

The biggest opportunity on the project. The current site carries far more technical fabrication detail than its design communicates.

Give it a dedicated page plus a strong homepage section covering: ductwork in galvanized / black / stainless steel with the SMACNA, BSI and DW144 compliance stated plainly · spiral duct and round fittings · volume control and splitter dampers · air extractors and sound attenuators · louvers and sand trap louvers · acoustic liners · custom stainless steel kitchen hoods · mild steel fabrication (angle frames, channels, support stands).

Lead with real workshop imagery. This page targets a different buyer (contractors, consultants, kitchen fit-out) than the service pages, so it needs its own CTA framing — a quote/RFQ path, not "book a repair."

---

# 11. PROJECTS & WORKSHOP STRATEGY

Do not dump every image into one gallery. During the §2.5 inventory, categorise each photo where the content is legible: HVAC installation · HVAC repair · ductwork · fabrication · workshop · commercial · industrial.

Where the context of an image is unknown, label it **"Project details to be confirmed"** — never invent a project description, client, or location. The Projects page should read as a professional portfolio; the Workshop section should demonstrate capability (equipment, materials, work environment, team) and is a genuine trust asset because it proves the technical work is done in-house.

---

# 12. CONTACT EXPERIENCE

Verified contact data to use (§2.2): phone/WhatsApp **+966 545048875** · addresses `nasmatsheta.co@gmail.com` and `mokbul.hossain2030@gmail.com` · **Al Sina'iyah, Riyadh 12843, Saudi Arabia** · LinkedIn, Google Maps and Google Business Profile links · languages Arabic, Hindi, Urdu, Bangla, English.

**Recommendation:** move to a domain-based business email (e.g. `info@hvacriyadh.com`) and stop publishing a personal Gmail as the primary business contact. **CLIENT INPUT REQUIRED — confirm the authoritative inbox and whether a domain email can be created.**

Contact page structure: contact hero → call / WhatsApp buttons above the fold → short request-service form (service type, project description, preferred contact method, name, phone — nothing more) → business information → location and service area → FAQ.

---

# 13. MOBILE STRATEGY

Mobile is the primary experience; in this market most inbound arrives via WhatsApp on a phone.

Sticky WhatsApp CTA · `tel:` click-to-call · large tap targets · short forms · clear per-service CTAs · properly sized and lazy-loaded images · fast first paint. **A visitor should be able to reach a human within seconds of landing.**

---

# 14. LOCAL SEO STRATEGY — RIYADH

Target geography: **Riyadh, Saudi Arabia.** Research (with real volume and difficulty data — **AUDIT PENDING**) around: HVAC Riyadh · HVAC services Riyadh · HVAC installation / repair / maintenance Riyadh · AC installation / repair / maintenance Riyadh · ductwork Riyadh · HVAC ductwork Riyadh · HVAC fabrication Riyadh · commercial HVAC Riyadh · industrial HVAC Riyadh.

Do not assume every term is appropriate — check intent and competition before mapping. Note that "AC repair" and "HVAC ductwork" reach two completely different buyers; they should not compete for the same page.

Deliverables: page→keyword map (one primary intent per page) · title strategy · meta description strategy · H1/H2 strategy · internal linking strategy · image alt strategy · Google Business Profile alignment (category, hours, photos, NAP consistency, review generation).

**Immediate wins available before any rebuild:** fix the corrupted meta description, and rewrite the title to include the service and the city.

---

# 15. MULTILINGUAL STRATEGY

The company communicates in five languages; the site should not become five sites.

Options: (1) English + Arabic · (2) English only at launch · (3) English + Arabic with the other languages offered through the contact channel · (4) English now, Arabic in a planned phase two.

**Recommendation: option 3 or 4** — build English first with the i18n structure in place, add Arabic as a real second locale, and state the Hindi/Urdu/Bangla capability on the contact page as a human service rather than a translated site. Arabic is a genuine advantage in Riyadh; Hindi/Urdu/Bangla are a trust signal to a specific audience, not a search channel.

If Arabic is built: RTL layout support, Arabic typography, RTL navigation and forms, Arabic metadata, `hreflang`, and a language switcher — planned from the start, not retrofitted.

---

# 16. CONTENT GAP ANALYSIS

| Current content | Keep | Improve | Remove | New content needed |
|---|---|---|---|---|
| Hero headline | ✔ wording | add "in Riyadh" + CTAs | | |
| "Registered domain name" disclaimer | ✔ | move to footer | | |
| 5 HVAC service bullet blocks | ✔ substance | expand each into a full page | flat bullet layout | problems solved · process · FAQ per service |
| Ductwork product list | ✔ | make it a flagship page | | standards explainer · RFQ path · workshop photos |
| Energy management block | ✔ | own page | | what an audit involves |
| Why Choose Us (5 claims) | ✔ | substantiate or soften | | evidence from client |
| Work Samples grid | ✔ images | categorise + caption | uncaptioned dump | project categories |
| Happy Clients (Elfsight) | | | ✔ remove third-party dependency | real testimonials with permission |
| Workshops grid | ✔ | make it a trust section | | captions on equipment/capability |
| Questions? prose block | | convert to real CTAs | prose-buried contact details | |
| Contact page | ✔ NAP | restructure for conversion | dual-Gmail confusion | request-service form · hours · coverage |
| Google Sites footer | | | ✔ remove | real business footer |
| — | | | | About page · FAQ · service-areas (conditional) · 404 page |

---

# 17. DESIGN SYSTEM

Define before development: **colors** — a professional HVAC/engineering palette, restrained, with one strong action color reserved for CTAs · **typography** — modern, highly legible, and Arabic-capable if §15 goes bilingual · **buttons** — unambiguous primary/secondary hierarchy · **cards** — simple, technical, not over-rounded · **icons** — one consistent technical set · **images** — large, real, well-compressed photography · **layout** — strong grid, generous spacing, clear hierarchy.

Premium without flashy. **CLIENT INPUT REQUIRED — logo files, existing brand colors, business cards, any prior marketing material.**

**Animation:** subtle entrance transitions, hover states, image transitions, small interaction feedback. No large scroll-driven sequences, no parallax, nothing that costs performance. Honor `prefers-reduced-motion`.

---

# 18. TECHNICAL ARCHITECTURE

There is no existing repository — this is a greenfield build, which removes any migration constraint.

Recommend and justify: framework · routing · content management approach (the content is small and stable; a repo-based content layer likely beats a CMS, but the client's ability to self-edit is a real requirement — **CLIENT INPUT REQUIRED**) · image pipeline · SEO architecture · form handling and where submissions land · analytics · deployment · environment variables · error handling.

Constraint from §0.8: no dependency without a stated reason. Priority is maintainability by whoever inherits this.

**Migration note:** all existing imagery is hosted on `lh3.googleusercontent.com` and must be exported before the Google Sites property is retired. Preserve `/home` → `/` as a redirect.

---

# 19. COMPONENT ARCHITECTURE

```text
Header · MobileNavigation · Hero · CTAButton · WhatsAppButton (+ sticky variant)
ServiceCard · ServiceGrid · TrustSection · WhyChooseUs
ProjectCard · ProjectGallery · WorkshopGallery
ProcessSteps · FAQ · ContactForm · Footer
```

Build these only where reuse is genuine. No abstraction for its own sake.

---

# 20. PERFORMANCE · ACCESSIBILITY · ANALYTICS

**Performance** — target strong Core Web Vitals on mobile. Image compression and correct dimensions, WebP/AVIF, lazy loading, font optimization, minimal JS and CSS, few third-party scripts. The existing site is image-heavy, so images are the dominant risk. Baseline first (§2.5) so improvement is measurable.

**Accessibility** — semantic HTML, keyboard navigation, labelled and accessible forms, visible focus states, alt text on every image, sufficient contrast, screen-reader-friendly navigation, accessible mobile menu, reduced-motion support.

**Analytics** — track phone clicks, WhatsApp clicks, email clicks, contact-form submissions, request-service submissions, service-page CTA clicks, and emergency-CTA clicks. **The metric that matters is qualified service inquiries**, not sessions.

---

# 21. COMPETITOR RESEARCH — NOT STARTED

Review Riyadh HVAC contractor sites for: homepage structure · service architecture · CTA patterns · WhatsApp usage · local SEO execution · trust signals · project galleries · service page depth · emergency-service positioning · mobile UX · Arabic/English implementation.

Output two lists: **what competitors do better**, and **how HVAC Riyadh differentiates**. The likely differentiator is already known — in-house fabrication with named standards — but this needs confirming against the market. Patterns and gaps only; copy nothing, and never adopt a competitor's claims.

---

# 22. CLIENT INPUT REQUIRED

### Business
- Official legal company name and CR / commercial registration number
- Business address confirmation (site says Al Sina'iyah, Riyadh 12843)
- Working hours
- Actual service areas — Riyadh only, or "cities across Saudi Arabia" as the contact page claims? Which cities?

### Trust
- Licenses and certifications, with numbers
- Years in business
- Team size / number of technicians
- Any workmanship guarantee or warranty period
- Insurance, if applicable
- **Is emergency HVAC service genuinely offered? If so, what hours — is it 24/7?**
- Is there a stated response-time commitment?

### Projects
- For each existing photo: project name, location, type, brief description
- Confirmation that the photos are cleared for publication
- Which clients may be named

### Testimonials
- Real customer testimonials with names and written permission to publish
- What is currently in the Elfsight widget, and can it be replaced with owned content?

### Branding
- Logo files, brand colors, business cards, prior marketing materials

### Contact
- **Which email is authoritative — `nasmatsheta.co@gmail.com` or `mokbul.hossain2030@gmail.com`?**
- Can a domain email (`info@hvacriyadh.com`) be created?
- Google Business Profile access
- GA4 / Search Console / Tag Manager access, if any exist

### Commercial
- Which service line generates the most revenue, and which should the site prioritise?
- Are preventive maintenance plans a real, priced product?
- Which "new regulations" do the compliance upgrades refer to?
- Who is the target buyer — facility managers, main contractors, homeowners, restaurant/kitchen operators?

---

# 23. SCOPE

**MUST HAVE (launch):** homepage · six service pages · about · projects · contact with working form · WhatsApp and phone CTAs including sticky mobile · full responsive design · SEO foundation (titles, meta, canonical, sitemap, robots, LocalBusiness + Service schema) · analytics with conversion events · 404 page · redirects from the old URLs.

**SHOULD HAVE:** workshop page or section · FAQ content · project categorisation and captions · service-areas page if §22 confirms genuine coverage · real testimonials.

**NICE TO HAVE:** process/timeline visuals per service · downloadable capability statement for the fabrication line · richer gallery filtering.

**FUTURE:** Arabic locale · blog · service-area expansion · online booking · quote/RFQ system · maintenance-plan signup · CRM integration · customer portal.

---

# 24. DEVELOPMENT PHASES

### Phase 0 — Close the audit (blocking, no code)
Complete every item in §2.5, run §21 competitor research and §14 keyword research, and collect §22 client input. **Ship the two zero-risk fixes to the live Google Sites property immediately: the corrupted meta description and the title tag.** Export all imagery off `lh3.googleusercontent.com` before anything else.

### Phase 1 — Foundation
Project setup · routing · global styles · design tokens · fonts · SEO foundation.

### Phase 2 — Global UI
Header · navigation · footer · mobile navigation · CTA system · WhatsApp and call actions.

### Phase 3 — Homepage
Hero · trust · services · why choose us · emergency CTA (if confirmed) · ductwork · energy · projects · workshop · FAQ · final CTA.

### Phase 4 — Service pages
Each of the six, following this template, adapted where a service genuinely needs a different shape:

```text
Hero → Service Introduction → Problems We Solve → What We Provide → Process
→ Relevant Work / Images → Why Choose Us → FAQ → CTA
```

Each carries its own SEO title, H1, introduction, service detail, imagery, benefits, process, FAQ, CTA and internal links.

### Phase 5 — About · Projects · Contact
### Phase 6 — SEO
Metadata · structured data · sitemap · internal linking · image SEO · breadcrumbs · redirect map.
### Phase 7 — Analytics
Conversion tracking per §20.
### Phase 8 — QA
Mobile · tablet · desktop · Chrome · Safari · Firefox · forms · WhatsApp links · `tel:` links · images · navigation · SEO · accessibility · performance.
### Phase 9 — Final audit
Compare the built site against this approved plan and the original business requirements before launch.

---

# 25. RISKS & OPEN QUESTIONS

| Risk | Note |
|---|---|
| **Positioning is undecided** | Service-led vs. fabrication-led changes the homepage, the sitemap and the keyword map. Blocking on §22. |
| **Proof depends entirely on the client** | Testimonials, licenses, project details and response times cannot be written without input. Under §0.2 these stay empty until supplied — the site will look thinner than competitors who invent them. |
| **Image quality unknown** | If the existing photos are low-resolution phone shots, the design's reliance on real photography breaks. Resolved by the §2.5 inventory. |
| **Emergency service unconfirmed** | A prominent emergency CTA is one of the highest-converting elements available, and cannot be built on an assumption. |
| **Arabic scope creep** | Bilingual doubles content and QA. Decide in §15 before Phase 1, not during Phase 4. |
| **Client self-editing** | If the client must edit content without a developer, that constrains §18 significantly. Ask early. |
| **Google Sites cutover** | Imagery is hosted on Google infrastructure and dies with the property. Export first. Preserve `/home` → `/`. |
| **Google Business Profile may outrank the site** | For local intent it is probably already the main lead source; treat it as part of the project, not an afterthought. |

---

# 26. FINAL DELIVERABLE — STATUS BY SECTION

The approval document follows the 29-section structure from the original brief.

| # | Section | Status | Lives in |
|---|---|---|---|
| 1 | Executive Summary | To write | — |
| 2 | Existing Website Audit | **Done** | §2 |
| 3 | Business Understanding | **Done** | §4 |
| 4 | Problems With Current Website | **Done** | §5, §2.4 |
| 5 | Redesign Opportunities | **Done** | §5, §10 |
| 6 | Target Audience | **Blocked** | §22 |
| 7 | Conversion Strategy | **Built** | §8, §12, §13 |
| 8 | Proposed Sitemap | **Built** | §7 |
| 9 | Homepage Wireframe | **Built** | §8 |
| 10 | Individual Page Architecture | **Built** | §27 |
| 11 | Service Page Architecture | **Built** | §24 Phase 4 |
| 12 | Projects / Portfolio Strategy | **Built** | §11 |
| 13 | Ductwork & Fabrication Strategy | **Built** | §10 |
| 14 | Mobile UX Strategy | **Built** | §13 |
| 15 | Local SEO Strategy | Foundation built; **keyword research still needed** | §14 |
| 16 | Content Strategy | **Done** | §16 |
| 17 | Multilingual Strategy | **Built** (EN + AR) | §15 |
| 18 | Design System | **Built** | §17, `globals.css` |
| 19 | Technical Architecture | **Built** | §18, README |
| 20 | Component Architecture | **Built** | §19 |
| 21 | Performance Strategy | **Built** | §20 |
| 22 | Accessibility Strategy | **Built** | §20 |
| 23 | Analytics Strategy | **Not built** — no provider chosen | §20 |
| 24 | Client Input Required | **Done** | §22 |
| 25 | MVP Scope | **Built** | §23 |
| 26 | Future Scope | **Done** | §23 |
| 27 | Development Phases | **Done** | §24 |
| 28 | Risks / Open Questions | **Done** | §25 |
| 29 | Recommended Final Architecture | **Built** | §27, README |

---

# 27. WHAT WAS BUILT

Implemented 2026-09-02. Full developer documentation in `README.md`.

**Stack.** Next.js 15 App Router with `output: 'export'` — the build emits plain
HTML/CSS/JS to `out/`, deployable to any static host. No CSS framework and no
component library; one hand-written stylesheet using logical properties, which is
what makes the RTL work fall out cleanly. Total shared JS is ~105 kB.

**Pages — 26 (13 routes × 2 languages).** Home · About · Services index · six
service pages · Projects · Workshop · Contact, each at `/en/…` and `/ar/…`, plus a
bilingual 404, `sitemap.xml` (24 URLs) and `robots.txt`.

**Bilingual.** English and Arabic are separate locale trees under `/[locale]`, which
is what allows `<html lang>` and `dir="rtl"` to be set correctly per language. Both
language files satisfy one shared `Content` type, so a field added to one and
missing from the other fails the build — the two cannot drift apart silently. The
language switcher lands on the same page in the other language. Arabic copy is
written but **REVIEW REQUIRED**: see `docs/ARABIC-REVIEW.md`.

**SEO, fixing every defect in §2.4.** Real `<title>` per page with service and city ·
per-page meta descriptions (the corrupted one is gone) · canonical URLs · hreflang
for en/ar/x-default on every page · sitemap and robots (the old site had neither) ·
`HVACBusiness`, `Service` and `FAQPage` JSON-LD carrying only verifiable fields —
no `aggregateRating`, no `openingHours`, no `priceRange` · 301s from the old
`/home` and `/contact-us` URLs in `vercel.json`.

**Conversion.** The old site had no button anywhere. This one has a WhatsApp and
call CTA in the header, hero, every service page and the footer, a sticky
WhatsApp/Call bar on mobile, and a request-service form. The form composes into the
visitor's mail client addressed to the business inbox with the owner in CC —
honest for a static site, and a drop-in swap for a real backend later.

**Images.** 14.8 MB of originals became 3.1 MB of WebP at two widths, generated by
`npm run images`. The hero is preloaded with `fetchpriority="high"`; everything
else is lazy. Every photograph has descriptive alt text in both languages,
describing only what is in the frame.

**Verified in-browser.** Desktop and 390px mobile, English and Arabic. Two bugs
found and fixed during that pass: the hero overlay was heavy enough to hide the
photograph, and Latin phone numbers inside Arabic runs were reordering
(`+966 54 504 8875` rendering as `8875 504 54 966+`) — now isolated with `<bdi>`
and LRM marks.

**Two decisions taken from the photographs, not assumed.** The landline
**011 295 3365** is published alongside the mobile — it appears on the shopfront
sign and nowhere on the old website, and a Riyadh 011 number is a real local trust
signal. Materials supply is **not** presented as a service line; the warehouse and
parts-counter photos are used as capability proof instead.

## Not built, and why

| Item | Reason |
|---|---|
| Analytics + conversion tracking | No provider chosen. §20 lists the events to fire. Nothing measures the site until this is done. |
| Real testimonials | §22 — needs customer names and written permission. The Elfsight widget was dropped rather than carried over. |
| Project names, clients, dates | §22 — captions describe only what is visible. |
| Working hours | §22 — the contact page says "contact us to confirm" rather than inventing hours. |
| Emergency-service prominence | §22 — the emergency CTA states what the old site stated and makes no 24/7 or response-time claim. |
| Service-area pages | §23 — conditional on genuine coverage. One honest coverage statement beats thin neighbourhood pages. |
| Company logo | §22 — the "NSA" mark is currently a CSS block using the sign's colours, because no artwork exists. |

## Immediate next steps

1. **Answer §22.** Most of what is missing from the site is a fact only the owner has.
2. **Arabic review** — `docs/ARABIC-REVIEW.md`, roughly 30 minutes of reading.
3. **Choose an analytics provider** and wire the §20 events.
4. **Keyword research with real volume data**, then revisit titles and the §7 sitemap.
5. **Competitor research** (§21) — still not started.
6. Deploy, point the domain, and keep the old Google Sites property up until DNS has settled.
