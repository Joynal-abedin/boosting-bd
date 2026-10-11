/**
 * Navigation items for BOOSTING BD
 * Configured as distinct dedicated routes
 */

export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
