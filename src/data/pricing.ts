/**
 * Pricing data for BOOSTING BD
 * 
 * STRICT CONTENT INTEGRITY RULE:
 * 1. Pricing figures below represent Agency Management Fees ONLY.
 * 2. Advertising spend (the ad budget paid directly to Meta) is separate
 *    and paid by the client via their own international dual-currency card
 *    or through authorized payment methods.
 * 3. These figures are editable placeholders and can be adjusted anytime.
 */

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  managementFee: {
    bdt: string;
    usd: string;
    period: string;
    isPlaceholderNote?: string;
  };
  recommendedAdSpend: string;
  bestFor: string;
  features: string[];
  exclusions: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Launch",
    managementFee: {
      bdt: "15,000 BDT",
      usd: "$130 USD",
      period: "/ month",
      isPlaceholderNote: "Editable agency management fee placeholder",
    },
    recommendedAdSpend: "$150 – $400 / month ad budget (paid directly to Meta)",
    bestFor: "Early-stage local businesses, new boutique shops, or initial market validation.",
    features: [
      "Up to 2 active campaign funnels",
      "Audience targeting & demographic segmentation",
      "Copywriting & creative formatting for up to 4 ad variants",
      "Basic Meta Pixel check & standard event verification",
      "Weekly performance snapshot via WhatsApp/Email",
      "Campaign bid & budget pacing management",
    ],
    exclusions: [
      "Server-side Conversions API (CAPI) not included",
      "Ad creative video shooting not included",
    ],
  },
  {
    id: "growth",
    name: "E-Commerce Growth",
    badge: "Most Popular",
    isPopular: true,
    managementFee: {
      bdt: "28,000 BDT",
      usd: "$240 USD",
      period: "/ month",
      isPlaceholderNote: "Editable agency management fee placeholder",
    },
    recommendedAdSpend: "$400 – $1,200 / month ad budget (paid directly to Meta)",
    bestFor: "Established e-commerce brands, active retail stores, and growing D2C brands.",
    features: [
      "Up to 5 active campaign funnels (Cold, Warm, Retargeting)",
      "Dynamic Product Ads (DPA) catalog feed optimization",
      "Meta Pixel + Server-Side Conversions API (CAPI) dual-tagging",
      "Abandoned checkout & high-intent retargeting sequences",
      "Weekly A/B creative hook testing",
      "Bi-weekly live video/audio review & strategic roadmap",
      "Direct priority WhatsApp support during business hours",
    ],
    exclusions: [
      "Physical video production (client supplies product footage)",
    ],
  },
  {
    id: "scale",
    name: "Scale & High-Volume",
    managementFee: {
      bdt: "45,000 BDT",
      usd: "$380 USD",
      period: "/ month",
      isPlaceholderNote: "Editable agency management fee placeholder",
    },
    recommendedAdSpend: "$1,200 – $4,000+ / month ad budget (paid directly to Meta)",
    bestFor: "High-volume e-commerce brands, real estate firms, educational institutes, & scaling startups.",
    features: [
      "Unlimited active campaign funnels & regional testing",
      "Full-funnel lead generation + CRM webhook automation",
      "Advanced CAPI deduplication & custom offline conversion tracking",
      "Multi-format creative iteration (Reels, Carousels, Stories, Feeds)",
      "Ad account health monitoring & ban prevention protocols",
      "Dedicated senior media buyer & weekly strategy call",
      "Custom live Looker Studio / Sheets reporting dashboard",
    ],
    exclusions: [],
  },
];

export const pricingNotice = {
  adSpendDistinction:
    "Agency Management Fee vs. Meta Ad Spend: The fees above cover BOOSTING BD's professional strategy, campaign creation, technical tracking, creative optimization, and media buying service. Your ad budget is paid directly to Meta via your dual-currency bank card (or coordinated account). We never take hidden margins from your advertising spend.",
  transparentGuarantees:
    "Honest Performance Policy: We do not offer unrealistic 'guaranteed ROAS' claims because advertising outcomes depend on product-market fit, pricing, delivery speed, and customer service. Instead, we guarantee systematic testing, transparent data reporting, and rigorous weekly optimization.",
};
