import React from "react";
import { servicesData, ServiceItem } from "../data/services";
import { SectionHeading } from "../components/SectionHeading";
import {
  TrendingUp,
  ShoppingBag,
  Target,
  Cpu,
  RefreshCw,
  BarChart3,
  Check,
} from "lucide-react";

const iconMap = {
  TrendingUp,
  ShoppingBag,
  Target,
  Cpu,
  RefreshCw,
  BarChart3,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Core Capabilities"
          title="Engineered Services For Scalable Advertising"
          subtitle="From initial tracking infrastructure to high-volume campaign optimization, every service is focused on business metrics, not vanity likes."
        />

        {/* Asymmetric Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            const isHighlighted = service.highlight;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-200 flex flex-col justify-between ${
                  isHighlighted
                    ? "bg-slate-900 border-slate-750 hover:border-emerald-500/50 shadow-lg shadow-black/30 md:col-span-2 lg:col-span-2"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Clean unboxed editorial index */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-400">
                        0{index + 1}.
                      </span>
                    </div>
                    {isHighlighted && (
                      <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                        Signature Service
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Outcome Highlight Box */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-emerald-300">
                    <span className="font-semibold text-slate-200">Outcome: </span>
                    {service.outcome}
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Deliverables:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-850 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
                  >
                    <span>Request Strategy Call</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
