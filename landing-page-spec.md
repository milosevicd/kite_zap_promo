# Landing Page — Spec

## Purpose
Make the KiteZap concept tangible enough for potential users to react to it. Primary goals:
- Capture beta tester signups (high-intent)
- Capture "notify me" signups (passive interest)
- Validate demand before building

## Technology
Static page — no real functionality needed. 

---

## Language Switcher

The page must be fully translated into three languages:
- **English** (default)
- **Spanish**
- **Portuguese**

### Switcher UI
- Placed in the top navigation bar, right-aligned
- Three items, each with a small country flag icon followed by the language name:
  - English
  - Português
  - Español
- Clicking a language instantly switches all page text to that language — no page reload required
- Active language is visually highlighted (e.g. underline or bold)
- All sections must be translated: hero, problem, listings demo labels, how buying/selling works, free section, CTA forms, follow-up question, and footer note

### Implementation notes for the coding agent
- Use Next.js i18n routing or a lightweight client-side approach (e.g. a simple context/hook with translation strings)
- Keep translation strings in a dedicated file per locale (e.g. `locales/en.ts`, `locales/es.ts`, `locales/pt.ts`)
- Flag icons can be emoji or small SVGs — emoji is fine and simpler
- Default locale is English; Portuguese should be the second priority (primary market)

---

## Sections

### 1. Hero
- **Headline:** Something like "The marketplace for second-hand kite gear in Portugal"
- **Subhead:** 1–2 sentences on the problem — e.g. "Tired of digging through WhatsApp groups? KiteZap lets you search and filter real listings — find exactly what you need in seconds."
- **CTA:** Two buttons (see CTA section below)

### 2. The Problem (optional, brief)
- 2–3 bullet points or a short paragraph
- Relatable frustrations: listings disappear, no search, no filters, hard to find what you need

### 3. Mock Listings + Search/Filter Demo
- Prominently show a search bar and filter panel above the listing cards — this is the core value for buyers
- Filters to display (even if static/non-functional): equipment type, brand, model, year, price range, condition, location
- 3–5 fake but realistic listing cards below
- Each card shows: equipment type, brand, model, year, price, condition, location
- **Key message to convey:** this is what WhatsApp groups can never give you — real search, real filters
- Note for the coding agent: filters don't need to work; the visual should communicate the capability

### 4. How Buying Works
- 3-step illustration or simple diagram:
  1. Search and filter listings by gear type, brand, price, location, and more
  2. Find what you want — click to express interest
  3. Leave your WhatsApp number — the seller will contact you directly
- **Privacy message (must be visually prominent):** "Your number goes to the seller privately — it is never shown on the platform. The seller makes the first move."

### 5. How Selling Works
- 3-step illustration or simple diagram:
  1. Send a WhatsApp message to KiteZap with your gear details
  2. AI drafts your listing and confirms it with you
  3. Your listing goes live — buyers express interest and you contact them directly
- Key message: no account, no form, no hassle

### 6. Completely Free
- Dedicated section or prominent badge/banner — must be impossible to miss
- **Message:** KiteZap is free. No listing fees, no transaction fees, no commissions. The price you agree on is between you and the other person — the platform never touches it.
- Tone: straightforward, not a marketing gimmick — just a fact worth stating clearly

### 7. CTA (repeated / standalone section)
Two options, each with a short label:

**Option A — Beta tester**
- Label: "I want to try it early"
- Subtext: "Join the beta — test the platform and help shape it"
- Fields: WhatsApp number (required), email (optional)

**Option B — Stay in the loop**
- Label: "Just let me know when it's ready"
- Fields: WhatsApp number (required), email (optional)

After submitting either form, ask one follow-up question:
> "Are you more likely to buy or sell gear?"
> [ Buy ] [ Sell ] [ Both ]

---

## What's NOT needed
- Functional search or filters — static/visual only, to demonstrate the concept
- User accounts or login
- Backend of any kind
- Mobile app

---

## Footer / Side note
- Small, human note at the bottom of the page — low-key, not a headline
- Tone: honest, slightly self-deprecating, relatable to any kiter
- Example copy: *"Built by a kiter who got tired of scrolling through WhatsApp groups looking for a bar, never finding it, and then watching someone else snap it up 10 minutes later. There had to be a better way."*
- Keep it short — one or two sentences max. The coding agent can adjust the exact wording but should preserve the personal, community-member tone.

---

## Success metric
Enough signups (beta testers especially) to validate there's genuine interest before investing in a build.
