"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const concerns = [
  { label: "I Look Tired", href: "/concerns/i-look-tired", desc: "Volume loss, skin laxity, dullness" },
  { label: "My Skin Has Changed", href: "/concerns/my-skin-has-changed", desc: "Pigmentation, melasma, rosacea" },
  { label: "Lines & Wrinkles", href: "/concerns/lines-and-wrinkles", desc: "Fine lines, expression lines, deep folds" },
  { label: "I Want to Feel Confident Again", href: "/concerns/confidence", desc: "Comprehensive rejuvenation journeys" },
  { label: "Body Confidence", href: "/concerns/body-confidence", desc: "Stubborn fat, skin tightening" },
  { label: "Skin Health Check", href: "/concerns/skin-health-check", desc: "Moles, lesions, dermatology" },
];

const approach = [
  { label: "The Rested Effect", href: "/approach/the-rested-effect", desc: "Our philosophy and methodology" },
  { label: "Your First Visit", href: "/approach/your-first-visit", desc: "What to expect â no pressure, just expertise" },
  { label: "Our Clinical Team", href: "/team", desc: "140+ years of combined experience" },
  { label: "Safety & Standards", href: "/approach/safety", desc: "CQC, Save Face, and what they mean for you" },
  { label: "Zero-Commission Promise", href: "/approach/zero-commission", desc: "Why your practitioner will never oversell" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-cream/80 text-sm py-2.5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-gold-light font-medium tracking-wide text-xs uppercase">
              CQC Registered &bull; Save Face Accredited
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:01727837429" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Phone size={13} />
              01727 837 429
            </a>
            <span className="text-cream/40">|</span>
            <span>13-15 Chequer Street, St Albans, AL1 3YJ</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-warm-white border-b border-warm-gray/60 sticky top-0 z-50 backdrop-blur-sm bg-warm-white/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="font-heading text-navy text-xl lg:text-2xl font-semibold tracking-tight">
                The Skin to Love
              </span>
              <span className="text-charcoal-light text-[11px] tracking-[0.2em] uppercase font-light">
                Clinic &bull; St Albans
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Your Concerns */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("concerns")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-charcoal hover:text-navy transition-colors flex items-center gap-1.5 tracking-wide">
                  Your Concerns
                  <ChevronDown size={14} className={`transition-transform ${activeDropdown === "concerns" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "concerns" && (
                  <div className="absolute top-full left-0 w-80 bg-warm-white border border-warm-gray/60 shadow-xl rounded-sm py-3 mt-0">
                    {concerns.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3 hover:bg-cream transition-colors"
                      >
                        <span className="block text-sm font-medium text-navy">{item.label}</span>
                        <span className="block text-xs text-charcoal-light mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Approach */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("approach")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-charcoal hover:text-navy transition-colors flex items-center gap-1.5 tracking-wide">
                  Our Approach
                  <ChevronDown size={14} className={`transition-transform ${activeDropdown === "approach" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "approach" && (
                  <div className="absolute top-full left-0 w-80 bg-warm-white border border-warm-gray/60 shadow-xl rounded-sm py-3 mt-0">
                    {approach.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3 hover:bg-cream transition-colors"
                      >
                        <span className="block text-sm font-medium text-navy">{item.label}</span>
                        <span className="block text-xs text-charcoal-light mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Treatments */}
              <Link
                href="/treatments"
                className="px-4 py-2 text-sm font-medium text-charcoal hover:text-navy transition-colors tracking-wide"
              >
                Treatments
              </Link>

              {/* Journal */}
              <Link
                href="/journal"
                className="px-4 py-2 text-sm font-medium text-charcoal hover:text-navy transition-colors tracking-wide"
              >
                Journal
              </Link>

              {/* CTA */}
              <Link
                href="/book"
                className="ml-4 px-6 py-3 bg-navy text-cream text-sm font-medium tracking-wide hover:bg-navy-light transition-colors"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-warm-white border-t border-warm-gray/60 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-6 space-y-6">
              {/* Phone */}
              <a
                href="tel:01727837429"
                className="flex items-center gap-2 text-navy font-medium"
              >
                <Phone size={16} />
                01727 837 429
              </a>

              <div className="gold-divider" />

              {/* Concerns */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-charcoal-light font-medium mb-3">
                  Your Concerns
                </p>
                <div className="space-y-2">
                  {concerns.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-charcoal hover:text-navy transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="gold-divider" />

              {/* Approach */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-charcoal-light font-medium mb-3">
                  Our Approach
                </p>
                <div className="space-y-2">
                  {approach.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-charcoal hover:text-navy transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="gold-divider" />

              <Link href="/treatments" className="block py-2 text-sm font-medium text-charcoal hover:text-navy" onClick={() => setMobileOpen(false)}>
                Treatments
              </Link>
              <Link href="/journal" className="block py-2 text-sm font-medium text-charcoal hover:text-navy" onClick={() => setMobileOpen(false)}>
                Journal
              </Link>

              {/* CTA */}
              <Link
                href="/book"
                className="block w-full text-center py-4 bg-navy text-cream text-sm font-medium tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Book a Consultation
              </Link>

              <p className="text-xs text-charcoal-light text-center">
                CQC Registered &bull; Save Face Accredited &bull; Est. 2013
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
