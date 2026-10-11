/**
 * Single Source of Truth for BOOSTING BD
 * 
 * Edit this file to update the agency's contact information, URLs,
 * social links, and core business metadata across the entire application.
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  productionUrl: string;
  description: string;
  contact: {
    whatsappNumber: string; // International format without '+' or spaces (for wa.me)
    phoneDisplay: string;
    email: string;
    address: string;
    city: string;
    country: string;
    officeHours: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube?: string;
  };
  meta: {
    defaultTitle: string;
    titleTemplate: string;
    keywords: string[];
  };
  cta: {
    primaryText: string;
    secondaryText: string;
    whatsappDefaultMessage: string;
  };
}

export const siteConfig: SiteConfig = {
  // Brand identity
  brandName: "BOOSTING BD",
  tagline: "High-Performance Meta Advertising & Performance Marketing",
  // Production URL - PLACEHOLDER: Update to your custom domain upon launch
  productionUrl: "https://boostingagencyofficial.site/",
  description:
    "BOOSTING BD is a premier digital marketing agency in Bangladesh specializing in Facebook and Instagram ad campaigns, pixel tracking, and data-driven e-commerce growth.",

  // Contact Details
  contact: {
    // WhatsApp number in E.164 digits without '+' (e.g., 8801518961899)
    whatsappNumber: "8801518961899",
    phoneDisplay: "+880 1518 961899",
    email: "turjoy144@gmail.com",
    address: "Rupnagor R/A, Road-16, Mirpur-2",
    city: "Dhaka-1216",
    country: "Bangladesh",
    officeHours: "Saturday - Thursday: 10:00 AM - 8:00 PM (BST)",
  },

  // Social Channels
  socialLinks: {
    facebook: "https://www.facebook.com/boostingagencyofficial",
    instagram: "https://www.instagram.com/boostingbd.official",
    linkedin: "https://www.linkedin.com/company/boosting-bd",
  },

  // SEO & Head Metadata
  meta: {
    defaultTitle: "BOOSTING BD | Meta Ads & Digital Marketing Agency",
    titleTemplate: "%s | BOOSTING BD",
    keywords: [
      "Meta Ads Bangladesh",
      "Facebook Advertising Agency Dhaka",
      "Instagram Boosting Service",
      "Digital Marketing Agency Bangladesh",
      "E-commerce Meta Ads ROAS",
      "Conversions API Setup Bangladesh",
      "Lead Generation Meta Ads",
      "BOOSTING BD"
    ],
  },

  // Calls to Action
  cta: {
    primaryText: "Get Started",
    secondaryText: "Explore Services",
    whatsappDefaultMessage:
      "Hello BOOSTING BD! I am interested in discussing Meta advertising campaigns for my business.",
  },
};

/**
 * Helper to build prefilled WhatsApp URLs safely
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const message = customMessage || siteConfig.cta.whatsappDefaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}
