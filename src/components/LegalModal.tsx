import React, { useEffect } from "react";
import { siteConfig } from "../config/site";
import { X } from "lucide-react";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && type) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-bold text-white">
            {isPrivacy ? "Privacy Policy" : "Terms of Service"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-5 text-sm sm:text-base leading-relaxed text-slate-300">
          {isPrivacy ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026. This Privacy Policy details how{" "}
                <strong>{siteConfig.brandName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;agency&rdquo;) handles personal and business information collected through our website and marketing consultancy operations in Bangladesh.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">1. Information We Collect</h3>
              <p>
                We only collect information voluntarily submitted by you via our consultation request forms, email communications, or WhatsApp messages. This includes your name, business name, phone/WhatsApp number, email address, website URL, and estimated monthly advertising budget.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">2. Meta Business Manager &amp; Ad Account Access</h3>
              <p>
                To provide campaign management and Pixel/CAPI tracking configuration, we request Partner access via Meta Business Manager. We never request or store your personal Facebook account passwords or banking PINs. You retain full administrative ownership and may revoke agency access at any time.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">3. Third-Party Tracking &amp; Cookies</h3>
              <p>
                Our website may utilize standard analytical tools to measure aggregate website traffic and interaction patterns. We do not sell, rent, or lease your commercial data to third-party brokers.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">4. Inquiries &amp; Contact</h3>
              <p>
                If you have questions regarding our privacy practices or wish to update your details, contact us directly at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-emerald-400 underline">
                  {siteConfig.contact.email}
                </a>{" "}
                or via our registered office at {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026. These Terms of Service govern the engagement between{" "}
                <strong>{siteConfig.brandName}</strong> and clients contracting our digital marketing and Meta advertising services.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">1. Scope of Services &amp; Fees</h3>
              <p>
                {siteConfig.brandName} provides strategic campaign setup, ad copywriting, audience targeting, tracking implementation (Pixel &amp; Conversions API), and continuous optimization on Meta Platforms. Our quoted prices represent <strong>Agency Management Fees</strong> solely for our professional labor and expertise.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">2. Advertising Spend Separation (Direct to Meta)</h3>
              <p>
                The advertising budget (&ldquo;Ad Spend&rdquo;) is paid directly to Meta Platforms, Inc. by the client through an endorsed dual-currency credit/debit card attached to the client&rsquo;s Meta Ads Manager account. {siteConfig.brandName} does not mark up direct ad spend or charge hidden ad budget percentages unless explicitly contracted under a managed card facility.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">3. No Guaranteed Financial Outcomes</h3>
              <p>
                While we employ rigorous audience testing, historical data, and conversion-focused copywriting, we do not promise guaranteed return on ad spend (ROAS), fixed sales figures, or revenue targets. Advertising performance is influenced by external variables including market demand, product pricing, competitor activity, shipping reliability, and landing page conversion efficiency.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">4. Compliance with Meta Advertising Policies</h3>
              <p>
                Clients agree to promote only legitimate products and services adhering to Meta&rsquo;s Advertising Standards. We reserve the right to decline or terminate campaigns promoting prohibited items, counterfeit goods, or deceptive offers.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-white">5. Independent Agency Disclaimer</h3>
              <p>
                {siteConfig.brandName} is an independent digital marketing agency based in Dhaka, Bangladesh. We are not affiliated with, endorsed by, or an official representative of Meta Platforms, Inc.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
