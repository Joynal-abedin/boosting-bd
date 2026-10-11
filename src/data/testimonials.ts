/**
 * Testimonials data for BOOSTING BD
 * 
 * STRICT CONTENT INTEGRITY RULE:
 * As strictly required by prompt guidelines, these items are clearly
 * designated as sample feedback templates / placeholders. Real client names,
 * ratings, and testimonials will replace these items once verified and provided
 * by the business owner.
 */

export interface TestimonialItem {
  id: string;
  isSamplePlaceholder: boolean;
  businessCategory: string;
  quote: string;
  authorLabel: string;
  location: string;
}

export const sampleTestimonials: TestimonialItem[] = [
  {
    id: "sample-1",
    isSamplePlaceholder: true,
    businessCategory: "Dhaka Fashion & Boutique Brand",
    quote:
      "Working with BOOSTING BD brought clarity to our advertising spend. They set up our Meta Pixel properly, separated our campaign audiences, and showed us exactly which product ads were converting instead of burning cash blindly.",
    authorLabel: "Client Sample Placeholder #1 (Retail Founder)",
    location: "Dhaka, Bangladesh",
  },
  {
    id: "sample-2",
    isSamplePlaceholder: true,
    businessCategory: "Online Electronics Store",
    quote:
      "The transparency is what stands out. They clearly separated our actual Facebook ad budget from their agency service fee, and their weekly reporting helped us understand cost-per-purchase and catalog performance.",
    authorLabel: "Client Sample Placeholder #2 (E-Commerce Manager)",
    location: "Chittagong, Bangladesh",
  },
  {
    id: "sample-3",
    isSamplePlaceholder: true,
    businessCategory: "Educational Skill Academy",
    quote:
      "Their Click-to-WhatsApp and instant lead form campaigns generated high-intent student inquiries for our batch admissions. Highly recommend for any Bangladeshi business wanting structured media buying.",
    authorLabel: "Client Sample Placeholder #3 (Operations Director)",
    location: "Dhaka, Bangladesh",
  },
];
