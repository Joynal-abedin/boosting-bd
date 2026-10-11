import React from "react";
import { Link } from "react-router-dom";
import { Services } from "../sections/Services";
import { buildWhatsAppLink } from "../config/site";
import { ArrowRight, MessageCircle, Cpu, CheckCircle2 } from "lucide-react";

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      {/* Dedicated Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Agency Capabilities &amp; Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Full-Funnel Meta Advertising &amp; Tracking Architecture
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            From technical server-side Conversions API (CAPI) implementation to daily bid pacing and creative A/B testing, our services are built to lower customer acquisition costs across Facebook and Instagram.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink("Hello BOOSTING BD! I want to consult about your advertising services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-900/60 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <Services />

      {/* Deep-Dive Technical Feature: CAPI & Pixel Setup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Standard Browser Pixels Are Failing in 2026
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Browser cookie drop-offs, iOS privacy restrictions, and native ad-blockers prevent standard Meta Pixels from recording up to 35% of purchases and leads in Bangladesh. This blind spot starves Meta&rsquo;s machine learning algorithm of vital conversion feedback.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We implement <strong>Meta Conversions API (CAPI)</strong> via server-side Google Tag Manager (sGTM) or Cloudflare workers, ensuring 100% of purchase signals, customer parameters, and event deduplication are transmitted securely directly to Meta.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Server-side event deduplication</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Enhanced Event Quality Match (EMQ)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Offline purchase sync for COD orders</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Domain verification &amp; Aggregated Events</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-md"
              >
                <span>Fix My Pixel &amp; CAPI</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
