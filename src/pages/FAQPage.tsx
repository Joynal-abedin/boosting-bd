import React from "react";
import { Link } from "react-router-dom";
import { FAQ } from "../sections/FAQ";
import { buildWhatsAppLink } from "../config/site";
import { MessageCircle, ArrowRight, HelpCircle } from "lucide-react";

export const FAQPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Knowledge Base &amp; Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Everything you need to know about working with BOOSTING BD, managing Facebook and Instagram ad budgets in Bangladesh, card endorsements, and tracking accuracy.
          </p>
        </div>
      </div>

      {/* Main FAQ Accordions */}
      <FAQ />

      {/* Quick WhatsApp Help Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Have a specific question?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Our media strategists are available on WhatsApp for direct answers.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppLink("Hi! I have a question that was not answered on your FAQ page.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
