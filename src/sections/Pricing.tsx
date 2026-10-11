import React, { useState } from "react";
import { pricingPlans, pricingNotice, PricingPlan } from "../data/pricing";
import { SectionHeading } from "../components/SectionHeading";
import { Check, X, Info, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "../config/site";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<"bdt" | "usd">("bdt");

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-900/60 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Transparent Retainers"
          title="Predictable Agency Fees, Zero Hidden Margins"
          subtitle="We maintain an absolute separation between our Agency Management Fee and your Meta Ad Budget. You always know exactly what you are paying for."
        />

        {/* Currency Switcher (Functional Segmented Control) */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center p-1 bg-slate-800/80 rounded-xl border border-slate-700">
            <button
              type="button"
              onClick={() => setCurrency("bdt")}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                currency === "bdt"
                  ? "bg-emerald-400 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Bangladeshi Taka (BDT)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("usd")}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                currency === "usd"
                  ? "bg-emerald-400 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              US Dollar (USD)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan: PricingPlan) => {
            const feeDisplay =
              currency === "bdt" ? plan.managementFee.bdt : plan.managementFee.usd;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
                  plan.isPopular
                    ? "bg-slate-900 border-emerald-500 shadow-xl shadow-black/40 ring-1 ring-emerald-500/50"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Pricing Fee (Clearly labeled as Agency Management Fee) */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Agency Management Fee
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums">
                        {feeDisplay}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {plan.managementFee.period}
                      </span>
                    </div>
                    {/* Clear editable placeholder note */}
                    <p className="mt-1.5 text-[11px] text-emerald-400/90 italic">
                      ({plan.managementFee.isPlaceholderNote})
                    </p>
                  </div>

                  {/* Ad Spend Distinction Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-6 text-xs text-slate-300">
                    <span className="font-semibold text-white block mb-0.5">
                      Direct Ad Spend (Paid to Meta):
                    </span>
                    <p className="text-slate-400">{plan.recommendedAdSpend}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    <span className="font-semibold text-white">Ideal for: </span>
                    {plan.bestFor}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-850">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What&rsquo;s Included:
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                      {plan.exclusions.map((excl, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2.5 text-slate-400">
                          <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="line-through">{excl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-sm font-semibold transition-colors duration-150 ${
                      plan.isPopular
                        ? "bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md"
                        : "bg-slate-800 hover:bg-slate-750 text-white border border-slate-700"
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Transparency Callout Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
            <h4 className="text-sm font-bold text-white">
              Strict Advertising Spend Transparency
            </h4>
            <p className="text-slate-400">
              {pricingNotice.adSpendDistinction}
            </p>
            <p className="text-slate-400 pt-1 border-t border-slate-800 text-[11px]">
              {pricingNotice.transparentGuarantees}
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink("Hi! I would like to discuss a custom advertising retainer package for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Need a custom monthly budget or enterprise volume? Message us on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
