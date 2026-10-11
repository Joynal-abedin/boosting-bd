import React, { useState } from "react";
import { siteConfig, buildWhatsAppLink } from "../config/site";
import { SectionHeading } from "../components/SectionHeading";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  monthlyAdSpend: string;
  serviceNeeded: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessType: "e-commerce",
    monthlyAdSpend: "$300 - $600 / month",
    serviceNeeded: "Meta Ads Campaign Management",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      errs.email = "Please provide at least an email or WhatsApp phone number.";
      errs.phone = "Please provide at least an email or WhatsApp phone number.";
    } else {
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Please enter a valid email address.";
      }
      if (formData.phone.trim() && !/^(\+?[0-9\s-]{8,20})$/.test(formData.phone)) {
        errs.phone = "Please enter a valid phone number.";
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please describe your business goals in at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  // Generate WhatsApp pre-filled text with all client form values
  const generateWhatsAppMessage = () => {
    return `Hello BOOSTING BD!
Here is my inquiry:
- Name: ${formData.fullName}
- Business Type: ${formData.businessType}
- Email: ${formData.email || "N/A"}
- Phone: ${formData.phone || "N/A"}
- Monthly Ad Spend: ${formData.monthlyAdSpend}
- Service Needed: ${formData.serviceNeeded}
- Message: ${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900/60 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Get In Touch"
          title="Ready To Elevate Your Meta Ads?"
          subtitle="Submit your inquiry below or connect directly on WhatsApp to discuss your advertising goals, tracking requirements, and campaign timeline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Agency Contact Info (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Agency Office &amp; Inquiries
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Office Location</span>
                    <p className="text-slate-400">
                      {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Phone / Direct Line</span>
                    <a
                      href={`tel:${siteConfig.contact.whatsappNumber}`}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Office Consultation Hours</span>
                    <p className="text-slate-400">{siteConfig.contact.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Priority Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-xl transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Instant WhatsApp Chat</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Typical response time: Under 30 minutes during BST business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form with Real Validation & Honest Submission Behavior (Span 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900 border border-slate-800">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send Campaign Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below. Once validated, you can immediately send these exact details to our WhatsApp media team or submit for manual review.
              </p>

              {isSubmitted ? (
                /* Honest Submission Result with WhatsApp Hand-off (Prompt Requirement) */
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/50 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Inquiry Form Validated!
                      </h4>
                      <p className="text-xs text-slate-400">
                        Client-side validation complete.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
                    <p className="font-semibold text-emerald-400">
                      Honest Integration Notice:
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      This site operates as a static Cloudflare Pages app. To avoid silent message loss without a configured server backend, click the button below to dispatch your validated form details directly to our WhatsApp team in 1 click:
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppLink(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Send Inquiry to WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full py-2 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    ← Edit Form Details
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Tanvir Ahmed"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.fullName
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-err" : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-err" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="tanvir@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-err" : undefined}
                      />
                      {errors.email && (
                        <p id="email-err" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        WhatsApp / Phone <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+880 1700 000000"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.phone
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                        }`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-err" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-err" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Type & Monthly Ad Spend */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Business Sector
                      </label>
                      <select
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <option value="e-commerce">E-Commerce &amp; Online Retail</option>
                        <option value="fashion-boutique">Fashion / Boutique / Apparel</option>
                        <option value="real-estate">Real Estate &amp; Property</option>
                        <option value="education-coaching">Education / EdTech / Academy</option>
                        <option value="service-b2b">Professional Services &amp; B2B</option>
                        <option value="startup">Tech Startup / Personal Brand</option>
                        <option value="other">Other Business Type</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="monthlyAdSpend"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Planned Meta Ad Budget
                      </label>
                      <select
                        id="monthlyAdSpend"
                        value={formData.monthlyAdSpend}
                        onChange={(e) =>
                          setFormData({ ...formData, monthlyAdSpend: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <option value="$150 - $300 / month">$150 – $300 / month (18k - 35k BDT)</option>
                        <option value="$300 - $600 / month">$300 – $600 / month (35k - 70k BDT)</option>
                        <option value="$600 - $1,500 / month">$600 – $1,500 / month (70k - 180k BDT)</option>
                        <option value="$1,500+ / month">$1,500+ / month (High volume)</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label
                      htmlFor="serviceNeeded"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeeded: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <option value="Meta Ads Campaign Management">Meta Ads Campaign Management</option>
                      <option value="E-Commerce Catalog & Sales Campaigns">E-Commerce Catalog &amp; Sales Campaigns</option>
                      <option value="Meta Pixel & Conversions API (CAPI)">Meta Pixel &amp; Conversions API (CAPI) Setup</option>
                      <option value="High-Intent Lead Generation">High-Intent Lead Generation</option>
                      <option value="Account Audit & Creative Testing">Account Audit &amp; Creative Testing</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Campaign Goals &amp; Website/Page Link <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your Facebook page, website link, and what specific outcomes you want to achieve..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.message
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-err" : undefined}
                    />
                    {errors.message && (
                      <p id="message-err" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                      <Send className="w-4 h-4" />
                      <span>Validate &amp; Send Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
