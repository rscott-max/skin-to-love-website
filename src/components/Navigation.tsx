"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-navy border-b border-cream/[0.06] text-cream/60 text-[11px] tracking-[0.2em] uppercase hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-gold/80 font-medium">CQC Registered</span>
            <span className="text-cream/20">&bull;</span>
            <span className="text-gold/80 font-medium">Save Face Accredited</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:01727837429" className="hover:text-gold transition-colors duration-300">01727 837 429</a>
            <span className="text-cream/20">|</span>
            <span className="text-cream/40">13-15 Chequer Street, St Albans</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-cream/95 shadow-sm border-b border-navy/5"
            : "bg-cream border-b border-navy/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-6 lg:py-8">
            {/* Left Navigation Links — Desktop */}
            <div className="hidden lg:flex items-center gap-12 flex-1">
              {/* Your Concerns Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("concerns")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-navy text-xs font-medium uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-60 transition-opacity">
                  Your Concerns
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === "concerns" ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === "concerns" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-navy/10 shadow-xl py-2 z-50">
                    {concerns.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-4 hover:bg-navy/5 transition-colors first:rounded-t last:rounded-b group"
                      >
                        <span className="block text-navy text-xs font-medium uppercase tracking-[0.15em] group-hover:opacity-80">{item.label}</span>
                        <span className="block text-charcoal-light text-[11px] mt-1">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Approach Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("approach")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-navy text-xs font-medium uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-60 transition-opacity">
                  Our Approach
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === "approach" ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === "approach" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-navy/10 shadow-xl py-2 z-50">
                    {approach.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-4 hover:bg-navy/5 transition-colors first:rounded-t last:rounded-b group"
                      >
                        <span className="block text-navy text-xs font-medium uppercase tracking-[0.15em] group-hover:opacity-80">{item.label}</span>
                        <span className="block text-charcoal-light text-[11px] mt-1">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Centered Logo */}
            <Link href="/" className="flex-shrink-0 mx-8 lg:mx-12">
              <div className={`transition-all duration-500 ${scrolled ? "w-14 h-14" : "w-[88px] h-[88px]"}`}>
                <Image
                  src="https://skintolovecommunity.co.uk/images/Skin-to-Love-Logo.png"
                  alt="Skin to Love — Clinic, St Albans"
                  width={176}
                  height={176}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Right Navigation Links — Desktop */}
            <div className="hidden lg:flex items-center gap-12 flex-1 justify-end">
              <Link
                href="/treatments"
                className="text-navy text-xs font-medium uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
              >
                Treatments
              </Link>

              <Link
                href="/journal"
                className="text-navy text-xs font-medium uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
              >
                Journal
              </Link>

              {/* Book a Consultation CTA — Outlined Style */}
              <Link href="/book">
                <button className="text-navy text-xs font-medium uppercase tracking-[0.2em] border border-navy px-6 py-3 hover:bg-navy hover:text-cream transition-colors duration-300">
                  Book a Consultation
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-navy hover:opacity-60 transition-opacity p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-navy transition-all ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-navy transition-all ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-navy transition-all ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-navy/10 bg-cream px-6 py-6 space-y-6 pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12">
                  <Image
                    src="https://skintolovecommunity.co.uk/images/Skin-to-Love-Logo.png"
                    alt="Skin to Love Clinic"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "concerns" ? null : "concerns"
                    )
                  }
                  className="w-full text-left text-navy text-xs font-medium uppercase tracking-[0.2em] flex items-center justify-between hover:opacity-60 transition-opacity pb-3"
                >
                  Your Concerns
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeDropdown === "concerns" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "concerns" && (
                  <div className="space-y-3 pl-4 mt-3">
                    {concerns.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-navy text-xs uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "approach" ? null : "approach"
                    )
                  }
                  className="w-full text-left text-navy text-xs font-medium uppercase tracking-[0.2em] flex items-center justify-between hover:opacity-60 transition-opacity pb-3"
                >
                  Our Approach
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeDropdown === "approach" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "approach" && (
                  <div className="space-y-3 pl-4 mt-3">
                    {approach.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-navy text-xs uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/treatments"
                className="block text-navy text-xs font-medium uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Treatments
              </Link>

              <Link
                href="/journal"
                className="block text-navy text-xs font-medium uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Journal
              </Link>

              <Link href="/book" onClick={() => setMobileOpen(false)}>
                <button className="w-full text-navy text-xs font-medium uppercase tracking-[0.2em] border border-navy px-6 py-3 hover:bg-navy hover:text-cream transition-colors duration-300">
                  Book a Consultation
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
