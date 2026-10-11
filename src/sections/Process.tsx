import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Search, Server, Play, BarChart2 } from "lucide-react";

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Audit & Commercial Strategy",
      description:
        "We inspect your historical ad performance, product pricing margins, target demographics, and competitor placements to map out a clear media buying roadmap.",
      bullets: [
        "Historical ad account diagnostic",
        "Competitor creative benchmarking",
        "Ideal customer profile (ICP) definition",
      ],
    },
    {
      number: "02",
      icon: Server,
      title: "Tracking Infrastructure & CAPI",
      description:
        "We configure server-side Conversions API (CAPI) and Google Tag Manager. We verify domain routing, ensure event deduplication, and set up custom conversion triggers.",
      bullets: [
        "Meta Pixel + CAPI dual-tagging",
        "Domain verification & event prioritization",
        "Custom event and lead hook triggers",
      ],
    },
    {
      number: "03",
      icon: Play,
      title: "Creative Testing & Launch",
      description:
        "We launch structured test campaigns exploring multiple video/image hooks, headline angles, and audience segments to identify winning variants quickly.",
      bullets: [
        "Structured Hook & Angle testing matrices",
        "Broad, interest, and Lookalike clusters",
        "Strict initial budget capping to prevent waste",
      ],
    },
    {
      number: "04",
      icon: BarChart2,
      title: "Optimization & Scaling",
      description:
        "Winning ads receive budget scaling; underperforming ads are cut. We implement retargeting funnels and provide weekly data reviews and transparent spend summaries.",
      bullets: [
        "Incremental vertical & horizontal scaling",
        "Dynamic retargeting for cart abandoners",
        "Weekly metric reviews & ongoing creative refreshes",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Agency Workflow"
          title="A Structured 4-Step Media Buying Method"
          subtitle="No random button-boosting. Every campaign follows a disciplined, step-by-step engineering process designed to maximize your advertising capital."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl p-6 sm:p-7 bg-slate-900 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <span className="text-2xl font-black text-emerald-400 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-850">
                    <ul className="space-y-2 text-xs text-slate-400">
                      {step.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
