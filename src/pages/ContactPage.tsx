import React from "react";
import { Contact } from "../sections/Contact";

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            Inquiries &amp; Strategy Calls
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Start Your Campaign With BOOSTING BD
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Share your business goals, target monthly ad spend, and website link. We respond within 30 minutes during BST business hours.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <Contact />
    </div>
  );
};
