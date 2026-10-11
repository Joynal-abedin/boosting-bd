import React, { useState } from "react";
import { faqData, FAQItem } from "../data/faq";
import { SectionHeading } from "../components/SectionHeading";
import { ChevronDown } from "lucide-react";

export const FAQ: React.FC = () => {
  // Store expanded item IDs
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-950 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with BOOSTING BD, Meta advertising spend, dual-currency banking, and tracking in Bangladesh."
        />

        <div className="space-y-4">
          {faqData.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-semibold text-white hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
