import React from "react";
import { sampleTestimonials, TestimonialItem } from "../data/testimonials";
import { SectionHeading } from "../components/SectionHeading";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Feedback Structure"
          title="Sample Client Feedback & Engagements"
          subtitle="Real client reviews and verified case accounts will be published here upon client authorization. Below are illustrative examples of typical client engagements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sampleTestimonials.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 sm:p-7 bg-slate-900 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Honest Placeholder Indicator */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4 text-xs">
                  <span className="font-semibold text-emerald-400">
                    {item.businessCategory}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                    Sample Placeholder
                  </span>
                </div>

                <Quote className="w-6 h-6 text-emerald-500/40 mb-3" />

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-850">
                <div className="text-xs font-semibold text-slate-200">
                  {item.authorLabel}
                </div>
                <div className="text-[11px] text-slate-400">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Notice */}
        <div className="mt-8 text-center text-xs text-slate-400 max-w-xl mx-auto">
          Notice: In compliance with our transparent business ethics, client identity cards are maintained as sample placeholders until verified testimonial releases are approved by individual enterprise partners.
        </div>
      </div>
    </section>
  );
};
