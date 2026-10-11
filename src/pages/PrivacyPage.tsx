import React from "react";
import { siteConfig } from "../config/site";

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="pb-8 border-b border-slate-800 mb-8">
        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-2">
          Legal &amp; Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last Updated: January 2026 · {siteConfig.brandName}
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          This Privacy Policy details how <strong>{siteConfig.brandName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;agency&rdquo;) handles personal and business information collected through our website and marketing consultancy operations in Bangladesh.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          1. Information We Collect
        </h2>
        <p>
          We only collect information voluntarily submitted by you via our consultation request forms, email communications, or WhatsApp messages. This includes your name, business name, phone/WhatsApp number, email address, website URL, and estimated monthly advertising budget.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          2. Meta Business Manager &amp; Ad Account Access
        </h2>
        <p>
          To provide campaign management and Pixel/CAPI tracking configuration, we request Partner access via Meta Business Manager. We never request or store your personal Facebook account passwords or banking PINs. You retain full administrative ownership and may revoke agency access at any time.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          3. Third-Party Tracking &amp; Cookies
        </h2>
        <p>
          Our website may utilize standard analytical tools to measure aggregate website traffic and interaction patterns. We do not sell, rent, or lease your commercial data to third-party brokers.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          4. Contact Information
        </h2>
        <p>
          If you have questions regarding our privacy practices or wish to update your details, contact us directly at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-emerald-400 underline">
            {siteConfig.contact.email}
          </a>{" "}
          or visit our registered office at {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}.
        </p>
      </div>
    </div>
  );
};
