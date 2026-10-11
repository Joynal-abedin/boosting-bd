/**
 * Frequently Asked Questions for BOOSTING BD
 * 
 * Provides clear, transparent answers addressing common concerns
 * regarding Meta advertising in Bangladesh.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-fee-vs-adspend",
    question: "What is the difference between the Agency Management Fee and Meta Ad Spend?",
    answer:
      "The Agency Management Fee is what you pay BOOSTING BD for our strategic planning, technical setup (Pixel/CAPI), ad copywriting, creative testing, bid optimization, and weekly reporting. The Meta Ad Spend is the advertising budget paid directly to Meta (Facebook/Instagram) for displaying your ads to users. We keep these 100% separate with zero hidden markups.",
  },
  {
    id: "faq-payment-bd",
    question: "How do I pay for Facebook ad spend in Bangladesh? Do I need a dual-currency card?",
    answer:
      "Ideally, you pay Meta directly by attaching your own international credit/debit card (endorsed with passport for dual currency/USD limits by a Bangladeshi bank such as EBL, City Bank, SCB, Brac Bank, etc.) to your Meta Ads Manager. If you do not yet have an endorsed card, we can guide you through the process or discuss compliant agency ad account support options.",
  },
  {
    id: "faq-guarantees",
    question: "Do you guarantee specific sales results or a 10x ROAS?",
    answer:
      "No, and any agency that promises guaranteed sales is being dishonest. Advertising results depend on several outside variables including your product quality, pricing, stock availability, landing page speed, and customer service delivery. What BOOSTING BD guarantees is rigorous, data-backed audience targeting, high-converting copywriting, technical tracking accuracy, and transparent weekly optimization to maximize your return.",
  },
  {
    id: "faq-account-ownership",
    question: "Who owns the Facebook Ad Account, Page, and Pixel data?",
    answer:
      "You retain 100% ownership of your digital assets. We request partner access via Meta Business Manager (or assist you in creating one). You retain ownership of your Facebook Page, Instagram account, customer data, and Pixel event history at all times.",
  },
  {
    id: "faq-minimum-budget",
    question: "What is the minimum recommended ad budget to start?",
    answer:
      "While Meta technically allows $1/day, we recommend a minimum ad budget of $5–$15 per day (approx. 600–1,800 BDT/day) to give Meta's machine learning algorithm enough conversion data to exit the learning phase and optimize delivery effectively.",
  },
  {
    id: "faq-pixel-capi",
    question: "Why do I need both the Meta Pixel and Conversions API (CAPI)?",
    answer:
      "Standard browser-based Pixels now lose up to 30% of user data due to iOS privacy policies, browser cookie restrictions, and ad-blockers. Conversions API (CAPI) sends purchase and lead events directly from the server to Meta's servers, restoring tracking accuracy, improving custom audience matching, and lowering your cost per result.",
  },
  {
    id: "faq-turnaround",
    question: "How quickly can our campaigns go live after onboarding?",
    answer:
      "Typical launch time is 2 to 4 business days. This timeframe allows us to complete your ad account audit, verify your Pixel and domain, research target audiences, write persuasive ad copy, and set up tracking funnels before going live.",
  },
  {
    id: "faq-reporting",
    question: "How will I know how my ads are performing?",
    answer:
      "You receive regular performance summaries detailing spend, cost-per-click (CPC), cost-per-lead (CPL) or cost-per-purchase (CPP), and actionable recommendations. Plus, you will have direct access to your media buyer via WhatsApp during business hours.",
  },
];
