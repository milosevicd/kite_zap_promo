import type { Dict } from "../types";

const en: Dict = {
  nav: {
    english: "English",
    portuguese: "Português",
    spanish: "Español",
  },
  hero: {
    headline: "The marketplace for second-hand kite gear in Portugal",
    subhead:
      "Tired of digging through WhatsApp groups? KiteZap lets you search and filter real listings — find exactly what you need in seconds.",
    ctaBeta: "I want to try it early",
    ctaNotify: "Just let me know when it's ready",
  },
  problem: {
    title: "Why KiteZap?",
    bullets: [
      "Listings vanish into WhatsApp group history within minutes",
      "No search, no filters — you scroll endlessly hoping to spot the right gear",
      "By the time you see it, someone else already snapped it up",
    ],
  },
  listings: {
    title: "Real search. Real filters.",
    subtitle:
      "This is what a WhatsApp group can never give you — every listing, filterable in seconds.",
    searchPlaceholder: "Search brand, model, location…",
    filtersTitle: "Filters",
    filters: {
      type: "Equipment type",
      brand: "Brand",
      model: "Model",
      year: "Year",
      priceRange: "Price range",
      condition: "Condition",
      location: "Location",
    },
    anyOption: "Any",
    card: {
      price: "Price",
      condition: "Condition",
      location: "Location",
      year: "Year",
      express: "I'm interested",
    },
    conditions: {
      new: "New",
      excellent: "Excellent",
      good: "Good",
      fair: "Fair",
    },
    types: {
      kite: "Kite",
      board: "Board",
      bar: "Bar",
      harness: "Harness",
      wetsuit: "Wetsuit",
    },
  },
  buying: {
    title: "How buying works",
    steps: [
      "Search and filter listings by gear type, brand, price, location, and more",
      "Find what you want — click to express interest",
      "Leave your WhatsApp number — the seller will contact you directly",
    ],
    privacyTitle: "Your number stays private",
    privacyBody:
      "Your number goes to the seller privately — it is never shown on the platform. The seller makes the first move.",
  },
  selling: {
    title: "How selling works",
    steps: [
      "Send a WhatsApp message to KiteZap with your gear details",
      "AI drafts your listing and confirms it with you",
      "Your listing goes live — buyers express interest and you contact them directly",
    ],
    tagline: "No account, no form, no hassle.",
  },
  free: {
    badge: "100% free",
    title: "KiteZap is free. Always.",
    body: "No listing fees, no transaction fees, no commissions. The price you agree on is between you and the other person — the platform never touches it.",
  },
  cta: {
    title: "Help shape KiteZap",
    subtitle:
      "We're validating interest before we build. Pick the option that fits you.",
    betaLabel: "I want to try it early",
    betaSub: "Join the beta — test the platform and help shape it.",
    notifyLabel: "Just let me know when it's ready",
    notifySub: "We'll ping you once on launch day. No spam.",
    whatsappLabel: "WhatsApp number",
    whatsappPlaceholder: "+351 …",
    emailLabel: "Email",
    emailOptional: "optional",
    emailPlaceholder: "you@example.com",
    submit: "Sign me up",
    followUp: "Are you more likely to buy or sell gear?",
    buy: "Buy",
    sell: "Sell",
    both: "Both",
    thanksTitle: "Thanks — you're on the list.",
    thanksBody:
      "We'll be in touch on WhatsApp. In the meantime, tell a kiter friend who's tired of scrolling groups.",
  },
  footer: {
    note: "Built by a kiter who got tired of scrolling through WhatsApp groups looking for a bar, never finding it, and then watching someone else snap it up 10 minutes later. There had to be a better way.",
  },
};

export default en;
