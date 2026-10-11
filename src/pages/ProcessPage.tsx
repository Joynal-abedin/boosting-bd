import React from "react";
import { Link } from "react-router-dom";
import { Process } from "../sections/Process";
import { buildWhatsAppLink } from "../config/site";
import { ArrowRight, MessageCircle, Calendar, CheckSquare, Clock } from "lucide-react";

export const ProcessPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Agency Operational Workflow
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Disciplined Media Buying Execution, Step-by-Step
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Great advertising is not about luck or random boosting; it is about repeatable engineering. See how we guide your campaigns from onboarding and tracking configuration to sustained ad spend scaling.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
            >
              <span>Start Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink("Hello! I want to understand the campaign launch timeline for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-900/60 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Timeline</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4-Step Process Section */}
      <Process />

      {/* Launch Timeline & Client Checklist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Timeline Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Typical Launch Timeline (2–4 Days)
              </h3>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                <span className="font-mono font-bold text-emerald-400 w-16 shrink-0">Day 1</span>
                <div>
                  <h4 className="font-semibold text-white">Discovery &amp; Asset Access</h4>
                  <p className="text-slate-400 mt-0.5">
                    Meta Business Manager partner access requested, historical data audit conducted, and target audience profiles defined.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                <span className="font-mono font-bold text-emerald-400 w-16 shrink-0">Day 2</span>
                <div>
                  <h4 className="font-semibold text-white">Tracking &amp; CAPI Implementation</h4>
                  <p className="text-slate-400 mt-0.5">
                    Pixel verification, Conversions API dual-tagging, domain verification, and event deduplication configured via GTM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-slate-800">
                <span className="font-mono font-bold text-emerald-400 w-16 shrink-0">Day 3</span>
                <div>
                  <h4 className="font-semibold text-white">Creative Matrix &amp; Copy Approval</h4>
                  <p className="text-slate-400 mt-0.5">
                    Ad copy variants, hook angles, and format combinations reviewed with you prior to activation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-emerald-400 w-16 shrink-0">Day 4+</span>
                <div>
                  <h4 className="font-semibold text-white">Live Launch &amp; Algorithmic Optimization</h4>
                  <p className="text-slate-400 mt-0.5">
                    Campaigns go live under controlled budget caps. Daily bid monitoring and weekly performance reports initiated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Onboarding Checklist Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                What We Need From You
              </h3>
            </div>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block">1. Meta Business Manager Access</span>
                <p className="text-slate-400 mt-0.5">
                  Partner access (Ad Account + Pixel + Facebook Page). We provide a simple 2-minute video guide.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block">2. Dual-Currency Payment Card</span>
                <p className="text-slate-400 mt-0.5">
                  An endorsed credit or debit card attached directly to your Ads Manager for Meta billing.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block">3. Product &amp; Offer Details</span>
                <p className="text-slate-400 mt-0.5">
                  High-resolution product photos, pricing margins, current best-sellers, and active delivery lead times.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block">4. Communication Contact</span>
                <p className="text-slate-400 mt-0.5">
                  Designated WhatsApp contact person to receive lead notifications and weekly campaign reviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-md"
          >
            <span>Ready To Get Started? Reach Out Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
