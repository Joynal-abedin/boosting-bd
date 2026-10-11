import React from "react";
import { Link } from "react-router-dom";
import { WhyUs } from "../sections/WhyUs";
import { ValueStrip } from "../sections/ValueStrip";
import { buildWhatsAppLink } from "../config/site";
import { ArrowRight, MessageCircle, Check, X } from "lucide-react";

export const WhyUsPage: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Ad Spend Billing",
      boostingBd: "Direct from your card to Meta (100% transparent)",
      traditional: "Inflated USD conversion rates and hidden markups",
    },
    {
      feature: "Event Tracking Setup",
      boostingBd: "Meta Pixel + Server-Side Conversions API (CAPI)",
      traditional: "Basic browser pixel or no tracking at all",
    },
    {
      feature: "Campaign Focus",
      boostingBd: "Purchase ROAS, Cost-per-Lead & Unit Economics",
      traditional: "Page Likes, Post Boosts & Vanity Reactions",
    },
    {
      feature: "Creative Testing",
      boostingBd: "Systematic multi-hook A/B matrices (Reels, Feeds)",
      traditional: "Single static flyer with arbitrary boosting",
    },
    {
      feature: "Ad Account Ownership",
      boostingBd: "You retain 100% ownership of Business Manager",
      traditional: "Locked inside agency account; data lost if you leave",
    },
    {
      feature: "Communication Channel",
      boostingBd: "Direct WhatsApp contact with Senior Media Buyer",
      traditional: "Unresponsive ticket portals or junior interns",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Agency Standards &amp; Principles
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Built On Radical Transparency &amp; Real Performance
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            We founded BOOSTING BD to fix the broken agency ecosystem in Bangladesh. No arbitrary currency exchange rates, no fake vanity metrics, and no hostage ad accounts.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink("Hello! I want to understand more about how BOOSTING BD manages ad spend and accounts.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-900/60 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Value Pillars */}
      <ValueStrip />

      {/* Why Us Detailed Section */}
      <WhyUs />

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            BOOSTING BD vs. Typical Page Boosters
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Compare our professional media buying infrastructure with standard local boosting services.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
                <th className="p-4 sm:p-5">Capability / Policy</th>
                <th className="p-4 sm:p-5 text-emerald-400 font-bold">
                  BOOSTING BD
                </th>
                <th className="p-4 sm:p-5 text-slate-400">
                  Standard Local "Page Boosters"
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-white">
                    {item.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.boostingBd}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-md"
          >
            <span>Explore Retainer Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
