/**
 * Portfolio and Case Studies data for BOOSTING BD
 * 
 * STRICT CONTENT INTEGRITY RULE:
 * As required, portfolio examples below are clearly labeled as
 * illustrative campaign frameworks demonstrating the agency's methodology,
 * audience architecture, and optimization protocols until verified client
 * data is supplied by the agency owner.
 */

export interface CaseStudy {
  id: string;
  isIllustrativePlaceholder: boolean;
  industry: string;
  title: string;
  challenge: string;
  strategy: string;
  frameworkHighlights: string[];
  imageSrc: string;
  imageAlt: string;
}

export const portfolioCaseStudies: CaseStudy[] = [
  {
    id: "case-apparel-ecommerce",
    isIllustrativePlaceholder: true,
    industry: "Bangladeshi Apparel & Lifestyle D2C",
    title: "Full-Funnel Catalog & Retargeting Architecture",
    challenge:
      "High ad spend fatigue with rising cost-per-click and lost conversions due to unoptimized Facebook pixel event tracking and iOS privacy gaps.",
    strategy:
      "Implemented server-side Conversions API (CAPI) alongside dynamic catalog ads. Split audiences into Cold Interest clusters, 30-day website visitors, and 7-day cart abandoners with dedicated hook creatives.",
    frameworkHighlights: [
      "Dynamic Product Ads (DPA) synced with real-time website stock",
      "CAPI dual-tagging implemented via Google Tag Manager",
      "Short-form video hook testing across Facebook Reels & Instagram Feed",
      "Exclusion of previous 30-day buyers to protect ad budget"
    ],
    imageSrc: "/src/assets/images/ecommerce_growth_mockup_1791719557359.jpg",
    imageAlt: "E-commerce advertising campaign and analytics review setup",
  },
  {
    id: "case-lead-gen-professional",
    isIllustrativePlaceholder: true,
    industry: "Professional Education & Training Institute",
    title: "High-Intent Instant Form & WhatsApp Lead Architecture",
    challenge:
      "Low form completion rates and high volume of unresponsive contact numbers from standard Facebook lead ads.",
    strategy:
      "Re-engineered the lead flow using two-step qualifying instant forms and direct Click-to-WhatsApp ad funnels with automated qualification prompts.",
    frameworkHighlights: [
      "Added required confirmation steps to filter out accidental clicks",
      "Direct WhatsApp Business API routing with instant greetings",
      "Geographic radius targeting around major metropolitan centers (Dhaka & Chittagong)",
      "Daily manual lead pacing aligned with sales counselor shift hours"
    ],
    imageSrc: "/src/assets/images/meta_campaign_strategy_1791719546836.jpg",
    imageAlt: "Marketing strategist reviewing lead generation campaign performance",
  },
  {
    id: "case-gadgets-retail",
    isIllustrativePlaceholder: true,
    industry: "Consumer Electronics & Tech Accessories",
    title: "Advantage+ Shopping & Creative Testing Protocol",
    challenge:
      "Price-sensitive market with intense local competitor bidding driving up auction costs across standard interest targeting.",
    strategy:
      "Shifted from generic broad targeting to Advantage+ Shopping Campaigns (ASC) with structured creative variant testing (unboxing video vs. feature infographics).",
    frameworkHighlights: [
      "Advantage+ Shopping Campaigns tested against manual ABO ad sets",
      "Price-anchoring video creatives highlighting cash-on-delivery trust",
      "Messenger click-to-chat bot handling common warranty queries",
      "Frequency capped to 2.2 impressions per user per week"
    ],
    imageSrc: "/src/assets/images/hero_meta_ads_dashboard_1791719532130.jpg",
    imageAlt: "Performance marketing dashboard displaying advertising analytics",
  },
];
