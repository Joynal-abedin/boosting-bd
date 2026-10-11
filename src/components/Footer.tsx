import React from "react";
import { Link } from "react-router-dom";
import { siteConfig, buildWhatsAppLink } from "../config/site";
import { navigationItems } from "../data/navigation";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 border-t border-slate-850 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-850">
          {/* Column 1: Brand & Overview (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center font-black text-slate-950 text-sm">
                B
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                BOOSTING <span className="text-emerald-400">BD</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Data-driven Meta (Facebook &amp; Instagram) advertising agency in Bangladesh.
              We engineer high-converting sales funnels, pixel tracking, and targeted lead generation campaigns with transparent ad spend.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Facebook Page"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Instagram Profile"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <span className="text-xs font-bold">IN</span>
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-medium hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Agency Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  Facebook &amp; Instagram Ads
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  E-Commerce Catalog Campaigns
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  Pixel &amp; Conversions API (CAPI)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  High-Intent Lead Funnels
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  Account Audits &amp; Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.city},{" "}
                  {siteConfig.contact.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.whatsappNumber}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {siteConfig.contact.officeHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {currentYear} {siteConfig.brandName}. All rights reserved. Registered agency in Dhaka, Bangladesh.
            </p>
            <p className="text-[11px] text-slate-400">
              Disclaimer: {siteConfig.brandName} is an independent performance marketing agency. Facebook®, Instagram®, and Meta® are registered trademarks of Meta Platforms, Inc. We do not claim official Meta partnership or endorsement.
            </p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <Link
              to="/privacy"
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/terms"
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
