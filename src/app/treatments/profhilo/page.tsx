import Link from "next/link";
import { ArrowRight, Star, Clock, CheckCircle, XCircle, Quote, Shield, Syringe, CalendarDays, Timer } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profhilo Treatment St Albans | Bio-Remodelling | The Skin to Love Clinic",
  description:
    "Profhilo bio-remodelling at our CQC-registered clinic in St Albans. Restore skin hydration, firmness and glow from within. Zero-commission practitioners. From Â£665.",
};

/* âââ Hero âââ */
function TreatmentHero() {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light/80" />
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative">
        <div className="max-w-2xl">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-gold-light/70 text-sm mb-6 hover:text-gold-light transition-colors"
          >
            &larr; All Treatments
          </Link>
          <p className="accent-font text-gold-light text-lg italic mb-3">
            Skin Rejuvenation
          </p>
          <h1 className="font-heading text-cream text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Profhilo
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed mb-8">
            The bio-remodelling treatment that works with your skin&rsquo;s own
            biology to restore hydration, firmness, and a natural glow â without
            adding volume or changing your features.
          </p>
          <div className="flex flex-wrap gap-6 text-cream/50 text-sm">
            <span className="flex items-center gap-2">
              <Timer size={16} className="text-gold-light" />
              15â20 minutes
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-gold-light" />
              2 sessions, 4 weeks apart
            </span>
            <span className="flex items-center gap-2">
              <Syringe size={16} className="text-gold-light" />
              From &pound;665
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââ What Is It âââ */
function WhatIsIt() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <div className="gold-divider mb-6" />
            <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-6">
              What Profhilo Does â And Why It&rsquo;s Different
            </h2>
            <div className="space-y-5 text-charcoal leading-relaxed">
              <p>
                Profhilo isn&rsquo;t a filler. It doesn&rsquo;t add volume or
                change the shape of your face. Instead, it delivers one of the
                highest concentrations of hyaluronic acid available directly into
                the skin, where it spreads beneath the surface and triggers your
                body&rsquo;s own collagen and elastin production.
              </p>
              <p>
                The result, over the following weeks, is skin that looks and
                feels genuinely healthier â more hydrated, firmer, and with a
                natural luminosity that no cream can replicate. It&rsquo;s
                bio-remodelling: working with your skin&rsquo;s biology rather
                than masking or filling over the top of it.
              </p>
              <p>
                This is why Profhilo has become one of the most requested
                treatments at our clinic. The results are visible but
                undetectable â people notice you look well, not that you&rsquo;ve
                had something done.
              </p>
            </div>
          </div>

          {/* Quick facts sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-cream p-8 lg:p-10 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                At a Glance
              </h3>
              {[
                { label: "Treatment time", value: "15â20 minutes per session" },
                { label: "Sessions needed", value: "2 sessions, 4 weeks apart" },
                { label: "Discomfort", value: "Minimal â fine needle, well-tolerated" },
                { label: "Downtime", value: "None â small bumps resolve within hours" },
                { label: "Results visible", value: "2â4 weeks after second session" },
                { label: "Results last", value: "6â9 months (maintenance recommended)" },
                { label: "Price", value: "From Â£665 for the course" },
              ].map((item) => (
                <div key={item.label} className="border-b border-warm-gray/50 pb-4 last:border-0 last:pb-0">
                  <p className="text-xs text-charcoal-light mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-navy">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââ Who It's For / Not For âââ */
function WhoItsFor() {
  return (
    <section className="py-16 lg:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-4">
            Is Profhilo Right for You?
          </h2>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Honesty is central to everything we do. Profhilo is an excellent
            treatment â but it&rsquo;s not the right treatment for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Right for */}
          <div className="bg-warm-white p-8 lg:p-10">
            <h3 className="font-heading text-navy text-xl font-semibold mb-6">
              Profhilo may be right for you if&hellip;
            </h3>
            <ul className="space-y-4">
              {[
                "Your skin has lost its firmness or glow",
                "You're noticing fine lines and crepey texture",
                "You want improvement but don't want to look 'done'",
                "You'd prefer a treatment that works with your natural biology",
                "You want something subtle that builds over time",
                "Your skin feels dehydrated despite a good skincare routine",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-sage mt-0.5 shrink-0" />
                  <span className="text-sm text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not right for */}
          <div className="bg-warm-white p-8 lg:p-10">
            <h3 className="font-heading text-navy text-xl font-semibold mb-6">
              Profhilo may not be right for you if&hellip;
            </h3>
            <ul className="space-y-4">
              {[
                "You need significant volume replacement (fillers may be better)",
                "You want to change the shape of specific features",
                "You have significant skin laxity (Thermage may be more suitable)",
                "You're looking for an immediate, dramatic transformation",
                "You're pregnant or breastfeeding",
                "You have active skin infection in the treatment area",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle size={18} className="text-blush mt-0.5 shrink-0" />
                  <span className="text-sm text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-charcoal-light mt-6 italic">
              If Profhilo isn&rsquo;t the right fit, your practitioner will
              recommend what is â or tell you that you don&rsquo;t need
              anything at all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââ The Experience âââ */
function TheExperience() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-heading text-navy text-3xl font-semibold mb-4">
            What the Treatment Involves
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              step: "Before",
              title: "Your consultation",
              desc: "Your practitioner will assess your skin, discuss your goals, and confirm whether Profhilo is the right approach. If it's not, they'll tell you â our team don't earn commission, so there's no incentive to recommend a treatment you don't need.",
            },
            {
              step: "During",
              title: "The treatment itself",
              desc: "Profhilo is injected at 5 specific points on each side of the face using a very fine needle. The product then disperses naturally beneath the skin. Most patients describe the sensation as a mild pinch. The whole process takes around 15â20 minutes.",
            },
            {
              step: "After",
              title: "Recovery and results",
              desc: "You can return to normal activities immediately. Small bumps at the injection sites typically resolve within a few hours. After your second session (4 weeks later), you'll begin to notice firmer, more hydrated, more luminous skin over the following weeks.",
            },
            {
              step: "Ongoing",
              title: "Maintenance",
              desc: "We recommend a maintenance session every 6â9 months to sustain results. Your practitioner will advise on the right schedule for your skin during your follow-up appointment.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="shrink-0 w-16">
                <span className="accent-font text-gold text-lg italic">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-navy text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* âââ FAQ âââ */
function FAQ() {
  const faqs = [
    {
      q: "Does Profhilo hurt?",
      a: "Most patients describe a mild pinch at each injection point. The needles are very fine and the treatment is quick. We can apply a topical numbing cream beforehand if you're particularly sensitive.",
    },
    {
      q: "How is Profhilo different from dermal fillers?",
      a: "Dermal fillers add volume to specific areas and change contours. Profhilo doesn't add volume â it remodels your skin from within by stimulating collagen and elastin production. Think of fillers as architecture and Profhilo as renovation.",
    },
    {
      q: "When will I see results?",
      a: "Most patients notice an improvement in skin quality 2â4 weeks after their second session. The full effect continues to develop over the following months as your body produces new collagen and elastin.",
    },
    {
      q: "Can I combine Profhilo with other treatments?",
      a: "Absolutely. Profhilo works beautifully alongside other treatments â it's often part of a broader skin health plan. Your practitioner will advise on the right combination and timing during your consultation.",
    },
    {
      q: "Is Profhilo safe?",
      a: "Profhilo has an excellent safety profile and is one of the most researched aesthetic treatments available. As a CQC-registered clinic with Save Face accreditation, we adhere to the highest safety standards in the industry.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-navy text-3xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-warm-white p-6 lg:p-8">
              <h3 className="font-heading text-navy text-lg font-semibold mb-3">
                {faq.q}
              </h3>
              <p className="text-charcoal text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* âââ Pricing âââ */
function Pricing() {
  return (
    <section className="py-16 lg:py-20 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-cream-dark p-8 lg:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-navy text-2xl font-semibold mb-2">
                Profhilo Pricing
              </h2>
              <p className="text-charcoal text-sm leading-relaxed">
                Full course (2 sessions, 4 weeks apart). Your practitioner will
                confirm the exact plan and cost during your consultation.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs text-charcoal-light mb-1">From</p>
              <p className="font-heading text-navy text-3xl font-semibold">
                &pound;665
              </p>
              <p className="text-xs text-charcoal-light mt-1">
                Finance options available
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-warm-gray/50">
            <p className="text-xs text-charcoal-light leading-relaxed">
              Your &pound;30 consultation fee is redeemable against any
              treatment. Our practitioners are zero-commission â your treatment
              plan will always be based on what&rsquo;s right for your skin,
              not a sales target.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââ Related âââ */
function Related() {
  const related = [
    { name: "Profhilo Structura", href: "/treatments/profhilo-structura", desc: "The next generation â for deeper structural improvement" },
    { name: "Sculptra", href: "/treatments/sculptra", desc: "Collagen stimulator for more significant volume restoration" },
    { name: "SuneKos", href: "/treatments/sunekos", desc: "Amino acid and hyaluronic acid blend for skin regeneration" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-warm-white border-t border-warm-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal-light font-medium mb-6">
          You May Also Be Interested In
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 border border-warm-gray/50 hover:border-gold/40 transition-all"
            >
              <h4 className="font-heading text-navy font-semibold mb-1 group-hover:text-gold transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-charcoal-light">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* âââ CTA âââ */
function TreatmentCTA() {
  return (
    <section className="py-16 lg:py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-cream text-3xl lg:text-4xl font-semibold mb-6">
          Interested in Profhilo?
        </h2>
        <p className="text-cream/60 mb-10 max-w-xl mx-auto">
          Book a consultation and your practitioner will assess whether
          Profhilo is the right approach for your skin â with complete honesty
          and zero pressure.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
        >
          Book Your Consultation
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* âââ Page âââ */
export default function ProfhiloPage() {
  return (
    <>
      <TreatmentHero />
      <WhatIsIt />
      <WhoItsFor />
      <TheExperience />
      <FAQ />
      <Pricing />
      <Related />
      <TreatmentCTA />
    </>
  );
}
