import React from "react";
import { Link } from "react-router-dom";
import { Portfolio } from "../sections/Portfolio";
import { Testimonials } from "../sections/Testimonials";
import { buildWhatsAppLink } from "../config/site";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Strategy Blueprints &amp; Proof of Concept
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Commercial Case Studies &amp; Funnel Architectures
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Review the exact targeting frameworks, server-side tracking pipelines, and creative testing systems we engineer for Bangladeshi e-commerce brands, retail stores, and service institutes.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
            >
              <span>Build My Campaign Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink("Hi! I would like to discuss campaign strategies similar to your case studies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-900/60 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Case Studies Portfolio Section */}
      <Portfolio />

      {/* Testimonials / Feedback Placeholders */}
      <Testimonials />

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Have a Unique Business Model in Bangladesh?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Whether you sell apparel, gadgets, cosmetics, courses, or real estate, our media buying frameworks can be tailored to your specific profit margins.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-md"
            >
              <span>Schedule Strategy Call</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
