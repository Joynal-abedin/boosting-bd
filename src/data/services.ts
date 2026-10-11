/**
 * Services data for BOOSTING BD
 * 
 * Edit this file to add, modify, or reorder agency service offerings.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  outcome: string;
  deliverables: string[];
  icon: "TrendingUp" | "ShoppingBag" | "Target" | "Cpu" | "RefreshCw" | "BarChart3";
  highlight?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "meta-ads-management",
    title: "Meta Ads Campaign Management",
    shortDescription:
      "Full-cycle Facebook and Instagram advertising engineered for maximum return on ad spend across Bangladeshi and international audiences.",
    outcome: "Lower cost-per-acquisition with targeted ad delivery and daily bid monitoring.",
    deliverables: [
      "Targeted audience segmentation (demographic, interest, lookalike)",
      "Ad copywriting and creative placement optimization",
      "Daily budget pacing and bid cap adjustments",
      "Weekly performance summary and transparent analytics dashboard"
    ],
    icon: "TrendingUp",
    highlight: true,
  },
  {
    id: "ecommerce-sales",
    title: "E-Commerce Catalog & Sales Campaigns",
    shortDescription:
      "Engineered sales funnels designed for online retail stores, D2C brands, and boutique shops to move inventory efficiently.",
    outcome: "Accelerate online orders, repeat purchases, and cart recovery.",
    deliverables: [
      "Dynamic Product Ads (DPA) catalog setup",
      "Abandoned checkout retargeting sequences",
      "Average Order Value (AOV) bundle promotions",
      "Seasonal and promotional blitz scheduling"
    ],
    icon: "ShoppingBag",
    highlight: false,
  },
  {
    id: "lead-generation",
    title: "High-Intent Lead Generation",
    shortDescription:
      "Direct instant forms and Messenger/WhatsApp click-to-chat campaigns for service providers, real estate, education, and B2B businesses.",
    outcome: "Deliver qualified prospect inquiries straight to your sales team.",
    deliverables: [
      "Custom on-Facebook instant lead forms with qualifying questions",
      "Direct Click-to-WhatsApp conversational ad flows",
      "Lead hygiene filtering to reduce invalid phone numbers",
      "CRM / Google Sheets automated lead webhook alerts"
    ],
    icon: "Target",
    highlight: false,
  },
  {
    id: "pixel-capi-setup",
    title: "Meta Pixel & Conversions API (CAPI)",
    shortDescription:
      "Server-side tracking implementation ensuring 100% data fidelity despite iOS privacy restrictions, ad blockers, and cookie loss.",
    outcome: "Recover 25–40% lost conversion events for superior Meta AI algorithm learning.",
    deliverables: [
      "Meta Pixel + CAPI dual-tagging implementation",
      "Google Tag Manager (GTM) container architecture",
      "Deduplication parameter configuration",
      "Aggregated Event Measurement & domain verification"
    ],
    icon: "Cpu",
    highlight: true,
  },
  {
    id: "retargeting-funnels",
    title: "Audience Research & Retargeting Funnels",
    shortDescription:
      "Multi-stage full-funnel architectures guiding cold prospects from brand awareness to decision and checkout.",
    outcome: "Extract revenue from warm visitors who previously left without buying.",
    deliverables: [
      "Custom website visitor & video viewer audiences",
      "Customer list match and high-value Lookalike models",
      "Exclusion rules to avoid wasting budget on recent buyers",
      "Time-delayed frequency capping to prevent ad fatigue"
    ],
    icon: "RefreshCw",
    highlight: false,
  },
  {
    id: "creative-audit",
    title: "Campaign Audits & Creative Testing",
    shortDescription:
      "Rigorous diagnostic review of underperforming ad accounts, creative hook analysis, and multi-variant creative matrices.",
    outcome: "Pinpoint ad fatigue, budget leakage, and find winning ad hooks.",
    deliverables: [
      "Complete historical account audit and benchmark review",
      "Creative fatigue analysis and CTR/Thumbstop drop diagnostics",
      "A/B creative testing matrix (Hook, Headline, Call-to-action)",
      "Actionable 30-day performance optimization roadmap"
    ],
    icon: "BarChart3",
    highlight: false,
  },
];
