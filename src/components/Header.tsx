import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";
import { navigationItems } from "../data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

/**
 * Top Navigation Bar adhering to the Top Bar Contract with separate page routing:
 * Zone 1: Single-element brand wordmark (BOOSTING BD -> /)
 * Zone 2: Single-line clean text nav links to dedicated routes (/services, /why-us, etc.)
 * Zone 3: Exactly 1 primary CTA button -> /contact
 */
export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-slate-800 shadow-lg shadow-black/20"
          : "bg-slate-950/70 backdrop-blur-sm border-slate-850"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark (Single element navigating to /) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
            aria-label={`${siteConfig.brandName} Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center font-black text-slate-950 text-sm shadow-sm group-hover:opacity-95 transition-opacity">
              B
            </div>
            <span>
              BOOSTING{" "}
              <span className="text-emerald-400">BD</span>
            </span>
          </Link>

          {/* Zone 2: Clean text navigation links to dedicated pages */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm py-1 ${
                    isActive
                      ? "text-emerald-400 font-semibold"
                      : "text-slate-300 hover:text-emerald-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action navigating to /contact + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <span>{siteConfig.cta.primaryText}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-850 text-emerald-400 font-semibold"
                      : "text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
            >
              <span>{siteConfig.cta.primaryText}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
