export type Locale = "en" | "pt" | "es";

export type Dict = {
  nav: {
    english: string;
    portuguese: string;
    spanish: string;
  };
  hero: {
    headline: string;
    subhead: string;
    ctaBeta: string;
    ctaNotify: string;
  };
  problem: {
    title: string;
    bullets: [string, string, string];
  };
  listings: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filtersTitle: string;
    filters: {
      type: string;
      brand: string;
      model: string;
      year: string;
      priceRange: string;
      condition: string;
      location: string;
    };
    anyOption: string;
    card: {
      price: string;
      condition: string;
      location: string;
      year: string;
      express: string;
    };
    conditions: {
      new: string;
      excellent: string;
      good: string;
      fair: string;
    };
    types: {
      kite: string;
      board: string;
      bar: string;
      harness: string;
      wetsuit: string;
    };
  };
  buying: {
    title: string;
    steps: [string, string, string];
    privacyTitle: string;
    privacyBody: string;
  };
  selling: {
    title: string;
    steps: [string, string, string];
    tagline: string;
  };
  free: {
    badge: string;
    title: string;
    body: string;
  };
  cta: {
    title: string;
    subtitle: string;
    betaLabel: string;
    betaSub: string;
    notifyLabel: string;
    notifySub: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    emailLabel: string;
    emailOptional: string;
    emailPlaceholder: string;
    submit: string;
    followUp: string;
    buy: string;
    sell: string;
    both: string;
    thanksTitle: string;
    thanksBody: string;
  };
  footer: {
    note: string;
  };
};
