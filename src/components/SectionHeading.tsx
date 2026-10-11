import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Reusable SectionHeading adhering strictly to frontend design rules:
 * - Clean unboxed text kicker (no pill boxes / colored capsules)
 * - Balanced headlines (text-wrap: balance)
 * - Single-line control discipline
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {kicker && (
        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-400 mb-2">
          {kicker}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
