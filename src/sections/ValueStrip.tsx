import React from "react";
import { ShieldCheck, LineChart, Layers, Users } from "lucide-react";

export const ValueStrip: React.FC = () => {
  const valuePoints = [
    {
      icon: ShieldCheck,
      title: "100% Transparent Ad Spend",
      description: "Direct payment to Meta via your card. Zero hidden commission cuts or inflated dollar exchange rates.",
    },
    {
      icon: LineChart,
      title: "Pixel & CAPI Precision",
      description: "Server-side tracking setup via Google Tag Manager recovers lost events and optimizes Meta's delivery AI.",
    },
    {
      icon: Layers,
      title: "Engineered Funnel Architecture",
      description: "Cold reach, warm consideration, and high-converting retargeting funnels tailored for local & global buyers.",
    },
    {
      icon: Users,
      title: "Bangladesh Market Expertise",
      description: "Deep understanding of Bangladeshi shopper habits, cash-on-delivery flows, and peak buying windows.",
    },
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-900/40 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex flex-col space-y-2.5 text-left border-l border-slate-800 pl-4 sm:pl-5"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-center text-emerald-400 shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
