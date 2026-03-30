"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Shield, Star, CheckCircle } from "lucide-react";
import type { FormEvent } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="accent-font text-gold-light text-lg italic mb-4">
              Start here
            </p>
            <h1 className="font-heading text-cream text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Book Your Consultation
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              A 30-minute, one-to-one assessment with a qualified practitioner.
              No obligation to proceed with anything — just honest expertise
              about your skin.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-cream p-10 lg:p-14 text-center">
                  <CheckCircle size={40} className="text-sage mx-auto mb-6" />
                  <h2 className="font-heading text-navy text-2xl font-semibold mb-4">
                    Thank You
                  </h2>
                  <p className="text-charcoal leading-relaxed mb-6">
                    We've received your enquiry and a member of our team
                    will be in touch within 24 hours to arrange your
                    consultation.
                  </p>
                  <p className="text-sm text-charcoal-light">
                    Prefer to speak to someone now?{" "}
                    <a
                      href="tel:01727837429"
                      className="text-navy font-medium hover:text-gold transition-colors"
                    >
                      Call 01727 837 429
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                        First name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-cream border border-warm-gray/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                        Last name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-cream border border-warm-gray/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-cream border border-warm-gray/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-cream border border-warm-gray/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                      What concerns you most?
                    </label>
                    <select className="w-full px-4 py-3 bg-cream border border-warm-gray/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors">
                      <option value="">Please select...</option>
                      <option>I look tired — volume loss, dullness, laxity</option>
                      <option>My skin has changed — pigmentation, melasma, rosacea</option>
                      <option>Lines and wrinkles</option>
                      <option>Body confidence — stubborn fat, skin tightening</option>
                      <option>Skin health check — moles, lesions</option>
                      <option>I know which treatment I want</option>
                      <option>I'm not sure — I need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                      Tell us a little more (optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-cream border border-warm-gray/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Anything you'd like us to know before your consultation..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-light font-medium mb-2">
                      Are you a new or existing patient?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="patient-type" value="new" defaultChecked className="accent-gold" />
                        <span className="text-sm text-charcoal">New patient</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="patient-type" value="existing" className="accent-gold" />
                        <span className="text-sm text-charcoal">Existing patient</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 accent-gold" />
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      I consent to The Skin to Love Clinic contacting me by
                      email or phone to process my enquiry. Your details will
                      never be passed to third parties.{" "}
                      <Link href="/privacy" className="underline hover:text-navy transition-colors">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-navy text-cream font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
                  >
                    Request a Consultation
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Consultation info */}
              <div className="bg-cream p-8">
                <h3 className="font-heading text-navy text-lg font-semibold mb-4">
                  About Your Consultation
                </h3>
                <ul className="space-y-3">
                  {[
                    "30 minutes with a qualified practitioner",
                    "Full skin assessment under proper lighting",
                    "Honest recommendation — or honest 'you don't need anything'",
                    "Written treatment plan to take home",
                    "No obligation to proceed",
                    "30 fee redeemable against any treatment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-sage mt-0.5 shrink-0" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prefer to call */}
              <div className="bg-cream p-8">
                <h3 className="font-heading text-navy text-lg font-semibold mb-3">
                  Prefer to Call?
                </h3>
                <p className="text-sm text-charcoal-light mb-4">
                  Our team is available to help you over the phone.
                </p>
                <a
                  href="tel:01727837429"
                  className="inline-flex items-center gap-2 text-navy font-semibold text-lg hover:text-gold transition-colors"
                >
                  <Phone size={18} />
                  01727 837 429
                </a>
              </div>

              {/* Trust signals */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-charcoal">
                  <Shield size={16} className="text-gold shrink-0" />
                  CQC Registered — Rated Good
                </div>
                <div className="flex items-center gap-3 text-sm text-charcoal">
                  <Shield size={16} className="text-gold shrink-0" />
                  Save Face Accredited
                </div>
                <div className="flex items-center gap-3 text-sm text-charcoal">
                  <Star size={16} className="text-gold shrink-0" />
                  4.9/5 from 529 Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
