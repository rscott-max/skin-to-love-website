"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";

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
  { label: "Your First Visit", href: "/approach/your-first-visit", desc: "What to expect — no pressure, just expertise" },
  { label: "Our Clinical Team", href: "/team", desc: "140+ years of combined experience" },
  { label: "Safety & Standards", href: "/approach/safety", desc: "CQC, Save Face, and what they mean for you" },
  { label: "Zero-Commission Promise", href: "/approach/zero-commission", desc: "Why your practitioner will never oversell" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-cream/70 text-[13px] py-2.5 hidden lg:block border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-gold font-medium tracking-[0.15em] text-[11px] uppercase">
              CQC Registered
            </span>
            <span className="text-cream/20">&bull;</span>
            <span className="text-gold font-medium tracking-[0.15em] text-[11px] uppercase">
              Save Face Accredited
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:01727837429" className="flex items-center gap-2 hover:text-gold-light transition-colors duration-300">
              <Phone size={12} />
              01727 837 429
            </a>
            <span className="text-cream/15">|</span>
            <span className="flex items-center gap-1.5 text-cream/50">
              <MapPin size={12} />
              13-15 Chequer Street, St Albans, AL1 3YJ
            </span>
          </div>
        </div>
      </div>

      {/* Main nav — glass-morphism on scroll */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-warm-gray/30 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
            : "bg-warm-white/95 backdrop-blur-sm border-b border-warm-gray/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex flex-col group">
              <span className="font-heading text-navy text-xl lg:text-[22px] font-semibold tracking-tight group-hover:text-gold transition-colors duration-300">
                The Skin to Love
              </span>
              <span className="text-charcoal-light text-[10px] tracking-[0.25em] uppercase font-light">
                Clinic &bull; St Albans
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {/* Your Concerns */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("concerns")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2.5 text-[13px] font-medium text-charcoal hover:text-navy transition-colors duration-300 flex items-center gap-1.5 tracking-wide">
                  Your Concerns
                  <ChevronDown size={13} className={`transition-transform duration-300 ${activeDropdown === "concerns" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 w-[340px] bg-warm-white border border-warm-gray/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] py-2 transition-all duration-300 origin-top ${
                    activeDropdown === "concerns"
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {concerns.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3.5 hover:bg-cream/80 transition-colors duration-200 group"
                    >
                      <span className="block text-[13px] font-medium text-navy group-hover:text-gold transition-colors duration-200">{item.label}</span>
                      <span className="block text-[11px] text-charcoal-light mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("approach")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2.5 text-[13px] font-medium text-charcoal hover:text-navy transition-colors duration-300 flex items-center gap-1.5 tracking-wide">
                  Our Approach
                  <ChevronDown size={13} className={`transition-transform duration-300 ${activeDropdown === "approach" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 w-[340px] bg-warm-white border border-warm-gray/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] py-2 transition-all duration-300 origin-top ${
                    activeDropdown === "approach"
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {approach.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3.5 hover:bg-cream/80 transition-colors duration-200 group"
                    >
                      <span className="block text-[13px] font-medium text-navy group-hover:text-gold transition-colors duration-200">{item.label}</span>
                      <span className="block text-[11px] text-charcoal-light mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/treatments"
                className="px-4 py-2.5 text-[13px] font-medium text-charcoal hover:text-navy transition-colors duration-300 tracking-wide"
              >
                Treatments
              </Link>

              <Link
                href="/journal"
                className="px-4 py-2.5 text-[13px] font-medium text-charcoal hover:text-navy transition-colors duration-300 tracking-wide"
              >
                Journal
              </Link>

              {/* CTA */}
              <Link
                href="/book"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-muted text-navy text-[13px] font-semibold tracking-wide hover:shadow-[0_4px_20px_-4px_rgba(184,149,106,0.4)] hover:-translate-y-[1px] transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy hover:text-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu — refined */}
        <div
          className={`lg:hidden bg-warm-white border-t border-warm-gray/40 overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-6 overflow-y-auto max-h-[80vh]">
            <a
              href="tel:01727837429"
              className="flex items-center gap-2 text-navy font-medium text-sm"
            >
              <Phone size={16} className="text-gold" />
              01727 837 429
            </a>

            <div className="gold-divider" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-3">
                Your Concerns
              </p>
              <div className="space-y-1">
                {concerns.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2.5 text-sm text-charcoal hover:text-navy hover:pl-2 transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="gold-divider" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-3">
                Our Approach
              </p>
              <div className="space-y-1">
                {approach.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2.5 text-sm text-charcoal hover:text-navy hover:pl-2 transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="gold-divider" />

            <Link href="/treatments" className="block py-2.5 text-sm font-medium text-charcoal hover:text-navy" onClick={() => setMobileOpen(false)}>
              Treatments
            </Link>
            <Link href="/journal" className="block py-2.5 text-sm font-medium text-charcoal hover:text-navy" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>

            <Link
              href="/book"
              className="block w-full text-center py-4 bg-gradient-to-r from-gold to-gold-muted text-navy text-sm font-semibold tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </Link>

            <p className="text-[10px] text-charcoal-light text-center tracking-wide">
              CQC Registered &bull; Save Face Accredited &bull; Est. 2013
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
