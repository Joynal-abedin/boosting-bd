import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import {
  ShieldAlert,
  Sliders,
  DollarSign,
  TrendingDown,
  Layers,
  Sparkles,
} from "lucide-react";

export const WhyUs: React.FC = () => {
  const differentiators = [
    {
      icon: DollarSign,
      title: "Clean Accounting: Zero Ad Markup",
      description:
        "Many local operators inflate USD-to-BDT exchange rates or conceal actual ad spend. With BOOSTING BD, your media budget is billed directly by Meta. You see every single dollar spent.",
    },
    {
      icon: Sliders,
      title: "Dual-Layer Event Tracking",
      description:
        "Browser-only pixels lose 30%+ of orders. We configure server-side Conversions API (CAPI) and Google Tag Manager containers so Meta's algorithm gets 100% of purchase signals.",
    },
    {
      icon: TrendingDown,
      title: "Cost-Per-Acquisition Focus",
      description:
        "We don't celebrate post likes or page followers. We optimize relentlessly for return on ad spend (ROAS), cost-per-lead (CPL), and profitable purchase volumes.",
    },
    {
      icon: Layers,
      title: "Multi-Angle Creative Testing",
      description:
        "Rather than guessing one graphic, we test multiple hooks, headlines, and visual styles to pinpoint winning creative combinations before scaling spend.",
    },
    {
      icon: ShieldAlert,
      title: "Compliance & Ban Protection",
      description:
        "Meta bans are costly. We design copy and funnels strictly compliant with Meta's Advertising Policies, keeping your Business Manager safe and running.",
    },
    {
      icon: Sparkles,
      title: "Direct WhatsApp Line Access",
      description:
        "No ticketing systems or unresponsive email threads. You communicate directly with your dedicated campaign strategist via WhatsApp during business hours.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-900/50 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Why BOOSTING BD"
          title="Engineered For Results, Built On Transparency"
          subtitle="We eliminate the guesswork, inflated currency charges, and vanity metrics so your ad spend actually builds a scalable business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-7 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 mb-5 shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
