import React from "react";
import { portfolioCaseStudies, CaseStudy } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Layers, CheckCircle2 } from "lucide-react";

export const Portfolio: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Campaign Methodologies"
          title="Illustrative Case Studies & Frameworks"
          subtitle="Explore the structural targeting funnels, technical CAPI configurations, and media buying architectures we deploy across different commercial sectors."
        />

        <div className="space-y-12 sm:space-y-16">
          {portfolioCaseStudies.map((caseStudy: CaseStudy, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={caseStudy.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 lg:p-10 transition-all hover:border-slate-750"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Media Column (Span 5) */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
                      <img
                        src={caseStudy.imageSrc}
                        alt={caseStudy.imageAlt}
                        width={600}
                        height={450}
                        className="w-full h-auto object-cover aspect-[4/3] rounded-2xl"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Honest Status Label */}
                      <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-slate-900/95 backdrop-blur-md border border-slate-750 text-[11px] text-slate-300 flex items-center justify-between">
                        <span className="font-semibold text-emerald-400">
                          Architecture Blueprints
                        </span>
                        <span className="text-slate-400">Sample Campaign</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (Span 7) */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Unboxed Metadata Header */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <span className="text-emerald-400">{caseStudy.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">
                        Illustrative Strategy Architecture
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                      {caseStudy.title}
                    </h3>

                    {/* Challenge & Strategy Blocks */}
                    <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <div>
                        <strong className="text-white block mb-0.5">
                          Commercial Challenge:
                        </strong>
                        <p>{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5">
                          Strategy &amp; Funnel Execution:
                        </strong>
                        <p>{caseStudy.strategy}</p>
                      </div>
                    </div>

                    {/* Framework Highlights */}
                    <div className="pt-4 border-t border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Execution Highlights:</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                        {caseStudy.frameworkHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
