import Link from "next/link";
import { ArrowRight, Shield, Star, Phone, CheckCircle, Clock, MapPin, Car } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your First Visit | What to Expect | The Skin to Love Clinic",
  description:
    "Nervous about your first visit? Here's exactly what happens â a genuine medical consultation with no pressure, no obligation, and no hard sell. CQC-registered clinic in St Albans.",
};

export default function YourFirstVisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="accent-font text-gold-light text-lg italic mb-4">
              Our Approach
            </p>
            <h1 className="font-heading text-cream text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Your First Visit
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              We know this might be the first time you&rsquo;ve ever walked into
              an aesthetic clinic. Here&rsquo;s exactly what will happen â so
              there are no surprises, no awkwardness, and nothing to feel
              nervous about.
            </p>
          </div>
        </div>
      </section>

      {/* What Won't Happen */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-4">
              What Won&rsquo;t Happen
            </h2>
            <p className="text-charcoal-light">
              Let&rsquo;s start by getting the worries out of the way.
            </p>
          </div>

          <div className="bg-cream p-8 lg:p-10 space-y-5">
            {[
              "Nobody will pressure you into booking a treatment on the day",
              "Nobody will try to upsell you on products or additional services",
              "Nobody will make you feel judged for wanting to look your best",
              "You won't be rushed through a scripted sales process",
              "You won't leave feeling confused, overwhelmed, or unsure",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-sage mt-0.5 shrink-0" />
                <p className="text-charcoal text-sm leading-relaxed">{item}</p>
              </div>
            ))}
            <p className="text-xs text-charcoal-light italic pt-4 border-t border-warm-gray/50">
              Our practitioners are zero-commission. They earn the same
              regardless of what they recommend â which means the only thing
              guiding your consultation is what&rsquo;s genuinely right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-4">
              What Will Happen
            </h2>
            <p className="text-charcoal-light">
              Your consultation, step by step.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "You arrive",
                desc: "Our clinic is at 13-15 Chequer Street, right in the heart of St Albans. You'll be greeted by our front-of-house team in a calm, private environment â nothing clinical or intimidating. We'll offer you a drink and give you a moment to settle in.",
                detail: "If you're running late or can't find us, call us on 01727 837 429 â we're understanding, not strict.",
              },
              {
                step: "02",
                title: "A proper conversation",
                desc: "Your practitioner will sit with you for a full 30 minutes. They'll ask about your concerns, your medical history, your skincare routine, and â most importantly â what matters to you. This is a two-way conversation. We want to understand not just what you see in the mirror, but how it makes you feel.",
                detail: "There are no silly questions. If you're not sure how to describe what bothers you, that's completely fine â we'll guide the conversation.",
              },
              {
                step: "03",
                title: "A thorough assessment",
                desc: "Your practitioner will examine your skin under proper lighting, assess your skin quality, facial structure, and any specific areas of concern. This clinical assessment is what separates a genuine medical consultation from a beauty counter sales pitch.",
                detail: null,
              },
              {
                step: "04",
                title: "An honest recommendation",
                desc: "Based on their assessment and your goals, your practitioner will explain what's actually happening to your skin and what â if anything â they'd recommend. Sometimes the recommendation is 'nothing right now' or 'a better skincare routine before we consider anything else.' We'll always be straight with you.",
                detail: "Remember: zero-commission means your practitioner has no financial incentive to recommend more than you need.",
              },
              {
                step: "05",
                title: "You take it home",
                desc: "You'll receive a written treatment plan to take away with you. Read it. Think about it. Discuss it with your partner or a friend. There is no expiry date on your plan and absolutely no pressure to book there and then.",
                detail: "If you have questions afterwards, call or email us. We're here to help you feel confident in your decision, whatever that decision is.",
              },
              {
                step: "06",
                title: "If you decide to go ahead",
                desc: "When you're ready â whether that's the same week or three months later â you simply book your treatment appointment. Your practitioner will see you again, confirm the plan, and carry out the treatment in a calm, unhurried environment.",
                detail: null,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                    <span className="accent-font text-gold-light text-lg italic">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-navy text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  {item.detail && (
                    <p className="text-xs text-charcoal-light italic leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Fee */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-cream p-8 lg:p-12 text-center">
            <h2 className="font-heading text-navy text-2xl font-semibold mb-4">
              About the &pound;30 Consultation Fee
            </h2>
            <div className="space-y-4 text-charcoal text-sm leading-relaxed max-w-xl mx-auto">
              <p>
                Your first appointment is a genuine medical consultation with a
                qualified practitioner â not a thinly-disguised sales pitch.
                The &pound;30 fee reflects the clinical expertise you&rsquo;ll
                receive and is fully redeemable against any treatment you
                choose.
              </p>
              <p className="text-charcoal-light text-xs">
                Some clinics offer &ldquo;free consultations&rdquo; â which often
                means a rushed assessment designed to get you to commit on the
                spot. We believe you deserve better than that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 lg:py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-navy text-2xl font-semibold mb-8 text-center">
            Practical Details
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-warm-white p-6 lg:p-8">
              <MapPin size={20} className="text-gold mb-4" />
              <h3 className="font-heading text-navy font-semibold mb-2">Location</h3>
              <p className="text-sm text-charcoal leading-relaxed">
                13-15 Chequer Street, St Albans, AL1 3YJ. We&rsquo;re in the
                heart of the city centre, a short walk from both St Albans City
                and St Albans Abbey stations.
              </p>
            </div>
            <div className="bg-warm-white p-6 lg:p-8">
              <Car size={20} className="text-gold mb-4" />
              <h3 className="font-heading text-navy font-semibold mb-2">Parking</h3>
              <p className="text-sm text-charcoal leading-relaxed">
                The nearest car parks are Drovers Way and Christopher Place,
                both within a 2-minute walk. On-street parking is also
                available on surrounding streets.
              </p>
            </div>
            <div className="bg-warm-white p-6 lg:p-8">
              <Clock size={20} className="text-gold mb-4" />
              <h3 className="font-heading text-navy font-semibold mb-2">When to Arrive</h3>
              <p className="text-sm text-charcoal leading-relaxed">
                Please arrive 5 minutes before your appointment time. If
                you&rsquo;re running late, call us on 01727 837 429 â we&rsquo;ll
                always do our best to accommodate you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="accent-font text-gold-light text-lg italic mb-4">
            Ready?
          </p>
          <h2 className="font-heading text-cream text-3xl lg:text-4xl font-semibold mb-6">
            Book Your Consultation
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            A genuine conversation about your skin with a qualified
            practitioner. No pressure, no obligation, no hard sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Online
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:01727837429"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream text-sm tracking-wide hover:border-gold-light hover:text-gold-light transition-colors"
            >
              <Phone size={16} />
              01727 837 429
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
