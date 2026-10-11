import React from "react";
import { siteConfig, buildWhatsAppLink } from "../config/site";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden bg-slate-950">
      {/* Subtle radial ambient gradients (subdued, not neon) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-950/20 via-emerald-950/10 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTAs (Span 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Unboxed editorial kicker - Zero pill discipline */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400">
              <span>Performance Marketing Agency</span>
              <span aria-hidden="true">·</span>
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Hero Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] [text-wrap:balance]">
              Scale Your Revenue With Data-Backed{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-emerald-400">
                Meta Advertising
              </span>
            </h1>

            {/* Subtitle / Concrete description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 [text-wrap:balance]">
              We build, manage, and optimize Facebook and Instagram ad funnels for Bangladeshi e-commerce brands, startups, and service businesses. Server-side tracking, zero vanity metrics, and 100% transparent ad spend.
            </p>

            {/* CTAs: Primary + Secondary + Quick WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onGetStarted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-md transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span>{siteConfig.cta.primaryText}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-slate-850 border border-slate-750 hover:border-slate-650 rounded-xl transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>{siteConfig.cta.secondaryText}</span>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-900/60 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>

            {/* Trust bullet markers (Adjacency proof) */}
            <div className="pt-4 border-t border-slate-850 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Ad Markup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Meta Pixel + CAPI Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Media Buyer Contact</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="/images/hero-meta-ads-dashboard.jpg"
                alt="BOOSTING BD Meta Ads Performance Analytics Center"
                width={720}
                height={405}
                className="w-full h-auto object-cover aspect-[16/9] lg:aspect-[4/3] rounded-2xl"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              
              {/* Contextual verified overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-750 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Strategy Framework</span>
                  <span className="text-emerald-400">Bangladeshi Market</span>
                </div>
                <p className="mt-2 text-slate-300 text-xs leading-relaxed">
                  Dual-layer tracking architecture: Meta Pixel + Server-Side CAPI with dynamic catalog delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
