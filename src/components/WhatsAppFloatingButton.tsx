import React from "react";
import { buildWhatsAppLink } from "../config/site";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp support">
      <a
        href={buildWhatsAppLink("Hi BOOSTING BD! I would like to consult with you about running Meta ads for my business.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-full shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 group"
        aria-label="Direct WhatsApp Chat with BOOSTING BD"
      >
        <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </aside>
  );
};
