import React from "react";
import { siteConfig } from "../config/site";

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="pb-8 border-b border-slate-800 mb-8">
        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-2">
          Legal &amp; Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last Updated: January 2026 · {siteConfig.brandName}
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          These Terms of Service govern the engagement between <strong>{siteConfig.brandName}</strong> and clients contracting our digital marketing and Meta advertising management services in Bangladesh and internationally.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          1. Scope of Services &amp; Fees
        </h2>
        <p>
          {siteConfig.brandName} provides strategic campaign setup, ad copywriting, audience targeting, tracking implementation (Pixel &amp; Conversions API), and continuous optimization on Meta Platforms. Our quoted prices represent <strong>Agency Management Fees</strong> solely for our professional labor and expertise.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          2. Advertising Spend Separation (Direct to Meta)
        </h2>
        <p>
          The advertising budget (&ldquo;Ad Spend&rdquo;) is paid directly to Meta Platforms, Inc. by the client through an endorsed dual-currency credit/debit card attached to the client&rsquo;s Meta Ads Manager account. {siteConfig.brandName} does not mark up direct ad spend or charge hidden ad budget percentages unless explicitly contracted under a managed card facility.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          3. No Guaranteed Financial Outcomes
        </h2>
        <p>
          While we employ rigorous audience testing, historical data, and conversion-focused copywriting, we do not promise guaranteed return on ad spend (ROAS), fixed sales figures, or revenue targets. Advertising performance is influenced by external variables including market demand, product pricing, competitor activity, shipping reliability, and landing page conversion efficiency.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          4. Compliance with Meta Advertising Policies
        </h2>
        <p>
          Clients agree to promote only legitimate products and services adhering to Meta&rsquo;s Advertising Standards. We reserve the right to decline or terminate campaigns promoting prohibited items, counterfeit goods, or deceptive offers.
        </p>

        <h2 className="text-xl font-bold text-white pt-4 border-t border-slate-800">
          5. Independent Agency Disclaimer
        </h2>
        <p>
          {siteConfig.brandName} is an independent digital marketing agency based in Dhaka, Bangladesh. We are not affiliated with, endorsed by, or an official representative of Meta Platforms, Inc.
        </p>
      </div>
    </div>
  );
};
