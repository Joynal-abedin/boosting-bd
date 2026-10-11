import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Pricing } from "../sections/Pricing";
import { buildWhatsAppLink } from "../config/site";
import { ArrowRight, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";

export const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    navigate("/contact", { state: { selectedPlan: planName } });
  };

  return (
    <div className="py-12 sm:py-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Investment &amp; Retainers
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Transparent Management Fees. Zero Hidden Cuts.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            We bill solely for our strategic engineering, technical tracking configuration, and weekly media buying optimization. You pay your ad budget directly to Meta in USD with your bank card.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink("Hi! I have questions regarding your monthly agency retainer packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-900/60 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Pricing Section */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Retainer Policy & Banking FAQ Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">
                How Banking &amp; Ad Spend Billing Works
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Meta charges in US Dollars ($). In Bangladesh, you can use any dual-currency Visa/Mastercard (issued by City Bank, EBL, BRAC Bank, Standard Chartered, MTB, etc.) endorsed with your passport. Meta charges your card directly. BOOSTING BD never acts as an unauthorized currency broker.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">
                No Long-Term Lock-in Contracts
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our retainers are month-to-month. If you decide to pause your advertising after any billing month, you retain full ownership of your Business Manager, Pixel events, audience history, and ad creatives with zero termination penalties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
