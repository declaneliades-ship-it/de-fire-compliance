---
description: "Build and expand the DE Fire Compliance website with SEO service pages, quote calculator, lead magnet, and blog posts"
name: "Build Fire Compliance Site"
agent: "agent"
model: "Claude Opus 4.6 (copilot)"
argument-hint: "Which part to build? e.g. all, fire-door-inspection-page, fire-stopping-page, quote-calculator, lead-magnet, blog"
---

You are an expert UK-based SEO strategist AND conversion-focused website builder specialising in fire compliance, construction, and B2B lead generation.

Your task is to build out the DE Fire Compliance website at `/Users/declan/Projects/chiltern-fire-doors/` to generate high-quality inbound leads, booked surveys, and remedial works.

---

# BUSINESS CONTEXT

- **Business Name:** DE Fire Compliance (trading as DE Site Solutions — Fire Compliance Division)
- **Phone:** +44 7770 871782
- **Email:** info@defirecompliance.co.uk
- **Website:** defirecompliance.co.uk
- **Google Analytics:** G-M4VQ12H1EB
- **Coverage:** Buckinghamshire, Berkshire, Oxfordshire, London, South East England

## Services
- Fire door inspections (BS 8214:2016, FDIS-qualified reports)
- Compartmentation surveys
- Fire stopping installation / remedials
- Passive fire protection
- Fire door installation & maintenance

## Target Clients
- Housing associations & managing agents
- Facilities management companies
- Care homes & NHS / healthcare facilities
- Commercial property managers
- Local councils
- Property developers

## USPs
- Inspectors are qualified carpenters and firestoppers (practical trade experience)
- FDIS-qualified reporting
- Fully insured
- Multi-site capability
- White-label reports available for FM subcontracting
- Fast turnaround, competitive pricing

## Pricing (Fire Door Inspections)
- 1–28 doors → £150 minimum OR £12/door (whichever is higher)
- 29–60 doors → £10/door
- 60+ doors → £9/door

---

# EXISTING SITE STRUCTURE

Read these files before creating anything new to match styles, nav, and patterns exactly:
- [index.html](../../index.html) — homepage (already built, do not break)
- [css/style.css](../../css/style.css) — shared stylesheet (do not modify)
- [js/main.js](../../js/main.js) — shared JS (do not modify)
- [seo/london.html](../../seo/london.html) — example location page for reference

The site uses:
- Fonts: `DM Serif Display` (headings), `Inter` (body) via Google Fonts
- CSS variables: `--color-primary: #b91c1c`, `--color-accent: #1e40af`, `--color-bg-dark: #0f172a`
- Classes: `.btn.btn-primary`, `.btn.btn-outline-dark`, `.section`, `.container`, `.section-header`, `.section-tag`
- Nav: fixed dark navbar with logo "DE Fire Compliance" and links

All new pages must:
1. Use the same `<head>` structure (fonts, style.css, GA tag, structured data)
2. Use the same `<nav class="navbar">` component
3. Use the same `<footer>` component
4. Link `css/style.css` and `js/main.js` with correct relative paths
5. Include canonical URL, meta description, and OG tags

---

# KEYWORD STRATEGY

## Primary High-Intent
- fire door inspection, fire door inspector near me, fire door survey UK
- fire door inspection cost UK, fire door inspection quote
- fire stopping contractors, compartmentation survey, passive fire protection company

## Local SEO
- fire door inspection Buckinghamshire / Oxfordshire / London
- fire stopping contractors Buckinghamshire
- compartmentation survey London, passive fire protection London

## Buyer Intent
- fire door inspection price per door UK, how much does fire door inspection cost
- fire door compliance check cost, fire stopping quote UK
- compartmentation survey cost, passive fire protection contractors near me

## Long-Tail
- how often should fire doors be inspected UK
- are fire door inspections a legal requirement
- who can carry out fire door inspections UK
- what is a compartmentation survey
- fire door inspection checklist UK

---

# DELIVERABLES

Build the following. If an argument was passed to this prompt, build only that item. Otherwise build all.

---

## 1. FIRE DOOR INSPECTION PAGE → `services/fire-door-inspections.html`

**SEO title:** `Fire Door Inspections UK | BS 8214 Compliant | DE Fire Compliance`
**Meta description:** `Professional fire door inspections against BS 8214. FDIS-qualified reports with pass/fail per door, photos, and remedial recommendations. Covering Bucks, Berkshire, Oxfordshire & London.`
**Primary keyword:** fire door inspection
**Target URL:** `/services/fire-door-inspections`

### Page Structure:

**HERO**
- Headline: "Fire Door Inspections for Compliance & Safety"
- Subheading: "Ensure your fire doors are fully compliant and protecting occupants. FDIS-qualified reports, practical inspectors, fast turnaround."
- 3 CTAs: "Book an Inspection" → #contact | "Get an Instant Quote" → /quote-calculator.html | "Book Free Consultation" → #contact
- Trust badges: FDIS Qualified · BS 8214:2016 · Fully Insured · Multi-Site

**WHAT IS A FIRE DOOR INSPECTION** (section)
Clear, simple explanation. Fire doors are life-safety systems. Under the Fire Safety Act 2021 and Building Safety Act 2022, responsible persons must ensure fire doors in communal areas are regularly inspected. Non-compliance = enforcement action, fines, prosecution. Each inspection assesses the door as a complete assembly — leaf, frame, ironmongery, seals, glazing.

**WHAT WE CHECK** (detailed checklist — 2-column grid)
1. Door leaf condition — damage, delamination, warping
2. Door gaps — leaf to frame (max 3mm), threshold (max 8mm with threshold seal, or 3mm without)
3. Intumescent strips & cold smoke seals — present, intact, correctly fitted
4. Hinges — correct grade (CE marked), quantity, condition, fixings
5. Door closer — fitted, functioning, closes fully from any position
6. Locks & latches — correct type, operation, engagement
7. Glazing — integrity, correct fire-rated glass, beads, intumescent glazing seals
8. Signage — mandatory "Fire Door Keep Shut" / "Fire Door Keep Locked" labels
9. Frame condition — fixings, gaps, damage, integrity
10. Threshold seals — automatic drop seals where fitted

**COMMON ISSUES FOUND**
- Gaps too large (>3mm leaf-to-frame or >8mm threshold)
- Missing, damaged, or incorrectly fitted intumescent strips
- Door closers missing, faulty, or misadjusted (door not closing fully)
- Incorrect hinge type or insufficient fixings
- Physical damage — holes, splits, delamination
- Poor original installation
- Include callout: "Most buildings we inspect contain multiple non-compliant doors. A single failed fire door can compromise an entire compartment line."

**WHO CAN INSPECT A FIRE DOOR**
- Must be a competent person — knowledge, training, and experience
- No single mandatory qualification in UK law
- In practice: requires deep understanding of standards (BS 8214, Approved Document B), construction, and what compliance looks like in practice
- Our position: "Our inspectors are qualified carpenters and firestoppers. They've installed and repaired hundreds of fire doors — they know what good looks like and what failure looks like. We don't just identify issues — we know how to fix them."

**TRUST POSITIONING**
- NVQ-qualified tradespeople
- Hands-on experience in installation and remediation
- FDIS-qualified report production
- Fully insured
- "We don't just identify issues — we know how to fix them."

**WHAT OUR REPORT INCLUDES**
- Full door schedule (every door numbered and located)
- Pass / Fail status per door
- Photographs of every defect
- Categorised defect descriptions
- Severity ratings (critical / major / minor)
- Prioritised remedial recommendations
- Suitable for submission to responsible persons, housing associations, local authorities

**WHAT YOU NEED TO PROVIDE**
- Site access and a contact on the day
- Keys, fobs, or access codes
- Floor plans or door schedules (if available — not essential)
- Fire strategy drawings (if available)

**FAQ** (accordion or simple list)
1. What does an inspection include? — Full assessment of every fire door as a system against BS 8214 and current legislation.
2. How often should fire doors be inspected? — Quarterly for high-use doors (main entrances), annually for others. Guidance from BS 8214 and Fire Safety Act 2021.
3. What does the report include? — Door schedule, pass/fail, photos of all defects, severity ratings, remedial recommendations.
4. How long does it take? — Approx. 10–15 minutes per door depending on accessibility and condition.
5. Do you carry out repairs? — Yes. We scope and deliver remedial works directly so issues can be resolved immediately without a separate contractor.
6. Do you cover my area? — We cover Buckinghamshire, Berkshire, Oxfordshire, London, and the wider South East.

**UPSELLS — "While we're on site, we can also..."**
- Compartmentation survey — check all penetrations and fire stopping in the building
- Final exit door inspection — check ironmongery, panic hardware, and compliance
- Fire signage check — ensure all mandatory signage is present and legible
- Fire evacuation plan review
- Fire risk assessment support
- Ongoing compliance contract — scheduled inspections on a rolling basis

**CTA SECTION**
- "Ready to book an inspection?" 
- Primary: "Get an Instant Quote" → /quote-calculator.html
- Secondary: "Book a Free 15-Minute Consultation — Speak with an expert about your building."
- Phone: +44 7770 871782

---

## 2. FIRE STOPPING & COMPARTMENTATION PAGE → `services/fire-stopping-compartmentation.html`

**SEO title:** `Fire Stopping & Compartmentation Surveys | DE Fire Compliance`
**Meta description:** `Expert fire stopping installation and compartmentation surveys across Buckinghamshire, London & South East. Identify and fix hidden breaches. FDIS-qualified reports.`
**Primary keyword:** fire stopping contractors, compartmentation survey

### Page Structure:

**HERO**
- Headline: "Fire Stopping & Compartmentation Surveys for UK Buildings"
- Subheading: "Identify hidden breaches. Restore compartment integrity. Meet your legal obligations."
- CTAs: "Book a Survey" | "Get a Quote"

**WHAT IS FIRE STOPPING**
Fire stopping is the passive fire protection used to seal openings and gaps around services (pipes, cables, ducts) where they penetrate walls, floors, and ceilings that form part of a fire compartment. Without it, fire and smoke can spread rapidly between compartments — bypassing fire doors entirely. It includes: intumescent collars and wraps, fire-rated sealants and mortars, fire batt and board systems, cavity barriers.

**WHAT IS COMPARTMENTATION**
Fire compartmentation is the division of a building into separate fire-resisting sections (compartments) to contain the spread of fire and smoke. Each compartment is only as strong as its weakest point — a single unsealed penetration can compromise an entire floor or building.

**COMMON ISSUES FOUND**
- Unsealed service penetrations (pipes, cables, ducts through walls and floors)
- Missing or deteriorated fire stopping around services
- Poor original installation — wrong products, incorrect application
- Breaches created by refurbishment or M&E works
- Hidden voids above ceilings and in risers with no cavity barriers
- Include callout: "In our experience, most buildings contain hidden compartmentation breaches — many created during otherwise routine maintenance works."

**WHY IT MATTERS**
- Uncontrolled fire spread = accelerated risk to life
- Legal liability — Regulatory Reform (Fire Safety) Order 2005, Fire Safety Act 2021, Building Safety Act 2022
- Insurance validity — insurers increasingly require evidence of compartmentation compliance
- Building Safety Regulations — higher-risk buildings now require documented passive fire protection

**HOW WE WORK — SURVEY TO CERTIFICATION**
1. Survey — full visual inspection of all accessible compartment lines, penetrations, and voids
2. Report — photographic evidence, defect schedule, severity ratings, product recommendations
3. Remedial works — installation of appropriate fire stopping products to manufacturer's specification
4. Certification — completion record with product data sheets and photographic sign-off

**COMPARTMENTATION SURVEYS EXPLAINED**
A compartmentation survey is a systematic inspection of a building's passive fire protection — checking all penetrations, seals, cavity barriers, and construction elements. We produce a full defect schedule with photos, locations, severity, and recommended remedials. Suitable for: housing associations, NHS trusts, schools, commercial landlords, FM companies requiring evidence of compliance.

**PRODUCTS & SYSTEMS WE USE**
- Intumescent collars and wraps (pipe penetrations)
- Fire-rated acrylic and intumescent sealants (cable and service gaps)
- Fire batts and boards (larger openings)
- Cavity barriers (void closures)
- All products installed to manufacturer's specification and current guidance

**UPSELLS**
- Fire door inspection programme — inspect all fire doors in the same visit
- Ongoing compliance contract — scheduled surveys to maintain compliance
- White-label reports for FM companies

**FAQ**
1. What is a compartmentation survey? — A systematic inspection of a building's passive fire protection to identify breaches and produce a remedial schedule.
2. Do I need a compartmentation survey? — If your building is subject to the Fire Safety Act 2021 or Building Safety Act, you should be able to demonstrate your compartmentation is intact. Many buildings have never been surveyed.
3. How long does a survey take? — Depends on building size, number of floors, and accessibility.
4. Do you carry out the remedial works? — Yes. We survey and fix — no need to manage a separate contractor.
5. Can you provide white-label reports? — Yes, for FM companies and contractors.

**CTA SECTION**
- Primary: "Book a Compartmentation Survey"
- Secondary: "Book a Free 15-Minute Fire Compliance Consultation"
- Phone: +44 7770 871782

---

## 3. INSTANT QUOTE CALCULATOR → `quote-calculator.html`

**SEO title:** `Fire Door Inspection Quote Calculator | DE Fire Compliance`
**Meta description:** `Get an instant estimate for your fire door inspection. Enter number of doors, property type, and location. No obligation.`

Build a clean, on-brand single-page calculator. No external JS libraries.

### UI / UX

**Step 1 — Inputs (shown upfront, no gating)**

| Input | Type | Options |
|---|---|---|
| Number of fire doors | Number input | Min 1 |
| Property type | Select | Housing Association / Residential Block · Care Home / Healthcare · Commercial / Office · School / Education · Industrial / Warehouse · Other |
| Location | Select | Buckinghamshire · Berkshire · Oxfordshire · London · Other South East · Outside coverage area |
| Multi-site? | Radio | Yes / No |

**Button:** "Calculate My Quote"

**Step 2 — Result (shown below on same page)**

Display:
- "Estimated cost: **£[X]**"
- "Price per door: **£[X.XX]**" 
- "This is a no-obligation estimate based on standard day-rate pricing."
- Note: "Final price confirmed after a brief site discussion. Multi-site discounts available."

Pricing logic:
```
doors = input value
if doors <= 0: show error
if doors <= 28: price = max(150, doors * 12)
if doors > 28 && doors <= 60: price = doors * 10
if doors > 60: price = doors * 9
pricePerDoor = price / doors
```

If location = "Outside coverage area": show "We may be able to cover this — please call us to discuss." and hide price.

**Step 3 — Lead Capture (shown after result, NOT gating the price)**

"Want a formal written quote? We'll email it to you."

Form fields:
- Name (text, required)
- Email (email, required)  
- Phone (tel, optional)
- "Send Me the Quote" button

Below form: "Or call us now: **+44 7770 871782**"

**Upsell block** (shown with result):
"While we're on site, we can also include:"
- [ ] Compartmentation survey
- [ ] Final exit door check
- [ ] Fire signage audit
- [ ] Ongoing compliance contract

"Tick any that apply and we'll include them in your quote."

---

## 4. LEAD MAGNET PAGE → `fire-compliance-checklist.html`

**SEO title:** `Free Fire Compliance Checklist for Building Managers | DE Fire Compliance`
**Meta description:** `Download our free Fire Compliance Checklist for Building Managers (UK). Covers fire doors, compartmentation, signage, and legal obligations. Free PDF.`

### Page Structure:

**HERO**
- Headline: "Free Download: Fire Compliance Checklist for Building Managers (UK)"
- Subheading: "A practical checklist covering fire doors, compartmentation, signage, evacuation, and your legal obligations under the Fire Safety Act 2021."
- Visual: Checklist preview graphic (use a styled HTML mockup if no image)

**WHAT'S IN THE CHECKLIST**
- Fire door condition and compliance points (10 items)
- Compartmentation and fire stopping checks (8 items)
- Signage requirements (5 items)  
- Record-keeping and documentation obligations
- Key legislation references (Fire Safety Order 2005, Fire Safety Act 2021, Building Safety Act 2022)
- "What to do if you find a defect" guidance

**GATE: Email capture form**
- Name (required)
- Email (required)
- Organisation / Building name (optional)
- "Send Me the Checklist" button
- Small print: "We'll email you the checklist immediately. We may send occasional compliance updates — you can unsubscribe at any time."

After submit: show thank-you message with:
- "Your checklist is on its way to [email]."
- "While you're here — would you like a free 15-minute compliance consultation?"
- CTA: "Book a Free Call" → #contact or tel link

**Trust signals:** FDIS Qualified · Practical Experience · No Spam

**NOTE:** The actual PDF does not need to exist yet. The form submit can POST to the existing `/api/enquiry.js` endpoint or simply show a thank-you message. Do not build a PDF generator.

---

## 5. BLOG POST 1 → `blog/are-fire-door-inspections-a-legal-requirement.html`

**SEO title:** `Are Fire Door Inspections a Legal Requirement in the UK? | DE Fire Compliance`
**Meta description:** `Find out if fire door inspections are legally required under the Fire Safety Act 2021, Building Safety Act 2022, and the Regulatory Reform Order. What responsible persons must do.`
**Primary keyword:** are fire door inspections a legal requirement
**Word count target:** ~1,000 words

### Structure:
1. Introduction — the short answer: yes, for most non-domestic and multi-occupied residential buildings
2. The key legislation
   - Regulatory Reform (Fire Safety) Order 2005 — "responsible person" duty to maintain fire doors
   - Fire Safety Act 2021 — extends coverage to include communal areas of multi-occupied residential buildings; fire doors must be inspected at least every 12 months (or every 3 months for high-traffic doors)
   - Building Safety Act 2022 — higher-risk buildings (18m+ / 7 storeys+) have additional duties
3. Who is the "responsible person"?
   - Building owner, landlord, employer, managing agent, or anyone with control of the premises
4. How often must fire doors be inspected?
   - High-traffic (entrance doors to blocks) — at least every 3 months
   - Other communal fire doors — at least every 12 months
   - BS 8214 recommends a frequency based on usage and risk
5. Who can carry out the inspection?
   - A "competent person" — knowledge, training, and experience
   - No mandatory certification — but competence must be demonstrable
6. What happens if you don't comply?
   - Enforcement notice, improvement notice, prohibition notice
   - Fines (unlimited in Crown Court)
   - Prosecution — criminal liability for responsible persons
7. Conclusion + CTA
   - "If you're unsure whether your building is compliant, we offer a free 15-minute consultation."
   - Link to fire door inspection service page

---

## 6. BLOG POST 2 → `blog/how-often-should-fire-doors-be-inspected.html`

**SEO title:** `How Often Should Fire Doors Be Inspected? UK Guidance 2024 | DE Fire Compliance`
**Meta description:** `UK guidance on fire door inspection frequency. The Fire Safety Act 2021 sets minimum requirements. Find out what applies to your building type.`
**Primary keyword:** how often should fire doors be inspected UK
**Word count target:** ~900 words

### Structure:
1. Introduction — frequency depends on building type, usage, and door location
2. Legal minimum frequencies (Fire Safety Act 2021)
   - Quarterly (every 3 months): front entrance doors to individual flats / apartments in multi-occupied residential buildings
   - Annually (every 12 months): all other fire doors in communal areas
3. BS 8214:2016 guidance — risk-based approach; busy doors may need more frequent inspection
4. Practical guidance by building type
   - Housing associations / residential blocks — quarterly for entrance doors, annually for stairwells
   - Care homes — at least annually, but high-use doors potentially more frequently
   - Commercial premises — annually as minimum; risk assessment may indicate more
   - Schools — annually, with termly visual checks recommended
5. What counts as an "inspection"?
   - Full third-party inspection vs. in-house visual checks
   - Visual checks by staff are not a substitute for a competent inspection
6. Record-keeping
   - Every inspection should be documented
   - Records should include date, inspector, findings, actions taken
7. Conclusion + CTA
   - "Not sure of the right programme for your building? Talk to us — we'll advise with no obligation."
   - Link to fire door inspection service page and quote calculator

---

## AFTER BUILDING ALL PAGES

### Update `sitemap.xml`
Add entries for all new pages with `<lastmod>` set to today's date (2026-04-11) and appropriate `<priority>`:
- `/services/fire-door-inspections` — priority 0.9
- `/services/fire-stopping-compartmentation` — priority 0.9
- `/quote-calculator` — priority 0.8
- `/fire-compliance-checklist` — priority 0.7
- `/blog/are-fire-door-inspections-a-legal-requirement` — priority 0.7
- `/blog/how-often-should-fire-doors-be-inspected` — priority 0.7

### Update `index.html` navigation
Add links to new service pages and quote calculator in the navbar. Add a "Services" dropdown with:
- Fire Door Inspections → /services/fire-door-inspections.html
- Fire Stopping & Compartmentation → /services/fire-stopping-compartmentation.html
- Quote Calculator → /quote-calculator.html

Also add a "Blog" link → /blog/

---

# CONVERSION RULES (apply to every page)

Every page must:
1. Explain the risk (legal, safety, financial)
2. Build trust (qualifications, experience, what we fix)
3. Drive action (clear CTAs at top and bottom of page, phone number visible)
4. Include "Book a Free 15-Minute Fire Compliance Consultation" CTA on every page
5. Internal link to other service pages where relevant
6. Include structured data (Service schema) in the `<head>`

---

# OUTPUT QUALITY STANDARD

Think like a business generating £20k+/month from inbound leads.

Write copy that speaks to decision-makers — facilities managers, housing officers, care home managers, building owners. They care about:
- Legal compliance (not getting prosecuted)
- Evidence (documentation they can rely on)
- Competence (people who actually know what they're doing)
- Value (competitive pricing, no hidden costs)
- Speed (fast turnaround)

Avoid vague marketing language. Be specific, authoritative, and direct.
