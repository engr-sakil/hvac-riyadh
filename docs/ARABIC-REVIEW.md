# Arabic copy — review checklist

All Arabic on the site lives in `src/lib/content.ar.ts`. It mirrors the English in
`content.en.ts` line for line. **It has not been reviewed by a native Saudi speaker.**
This is the list of decisions a reviewer should check first; everything else is
ordinary prose that just needs reading for tone.

## 1. Company name

The site uses **شركة نسمة شتاء**, read off the shopfront sign at the Al Sina'iyah
premises. Confirm the spelling matches the commercial registration — the sign and
the CR do not always agree, and the CR spelling is the one that belongs in schema
and on invoices.

## 2. Terms taken from the client's own material

These come from the company's existing bilingual duct-fabrication graphic and were
kept as the client wrote them, even where a different term is more common in Saudi
HVAC tendering. Confirm each is what the company wants to be found under:

| Site uses | English | Note |
|---|---|---|
| قنوات | duct / ductwork | Client's word. مجاري الهواء is also common |
| قنوات حلزونية | spiral duct | Client's own term |
| شفاطات المطبخ | kitchen hoods | Client's own term |
| موازنة الهواء | air balancing | Client's own term |
| كسوة الألومنيوم | aluminium cladding | Client's own term |
| قنوات فولاذية سوداء | black steel duct | Client's own term |

## 3. Terms where the site chose the standard industry word

The client's graphic used **المثبطات** for dampers. The site uses **مخمدات**, which
is the term that appears in Saudi mechanical specifications. **Decide which one the
company wants** — if tender documents and customers say المثبطات, change it back.

Others chosen without a client reference:

| Site uses | English | Alternative to consider |
|---|---|---|
| مخمدات | dampers | مثبطات (the client's word) |
| كواتم صوت | sound attenuators | مخمدات صوتية |
| شيش مصائد الرمال | sand trap louvers | فتحات مصائد الرمال |
| بطانات عازلة للصوت | acoustic liners | عوازل صوتية |
| ستانلس ستيل | stainless steel | الفولاذ المقاوم للصدأ (more formal) |
| مجلفن | galvanised | مغلفن |
| فان كويل | fan coil | وحدة ملف مروحي (rarely used in practice) |
| الصناعية | Al Sina'iyah | Confirm how the district is written locally |

## 4. Register

The copy is written in modern standard Arabic, addressing the reader directly with
أنت-form verbs (أرسل، أخبرنا، اتصل). It is deliberately plain rather than formal —
matching the English, which is also plain. If the company would rather sound more
formal with commercial customers, that is a tone change across the whole file, not
a per-sentence edit.

## 5. Numbers and bidi

Phone numbers inside Arabic sentences are wrapped in LRM marks (U+200E) so the
leading `+` is not reordered to the end of the number. In JSX, numbers are wrapped
in `<bdi>`. **If you edit a sentence containing a phone number, keep the invisible
LRM characters on both sides of it** — deleting them reintroduces the bug where
`+966 54 504 8875` renders as `8875 504 54 966+`.

## 6. Things the Arabic deliberately does not say

Same as the English: no years in business, no technician count, no certifications,
no response-time promise, no 24/7 claim. If the owner supplies those facts, they go
into `src/lib/site.ts` and then into **both** language files.

## How to check the result

```bash
npm run build && npm start
```

Then open <http://localhost:4321/ar/> and read through every page. The language
switcher in the header lands on the same page in the other language, so English and
Arabic can be compared side by side.
