import Link from "next/link";
import { ArrowRight, Star, Quote, Clock, CheckCircle, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Look Tired | Restore Natural Vitality | The Skin to Love Clinic",
  description:
    "Looking tired despite feeling well? Volume loss, skin laxity and dullness can be expertly treated with subtle, natural-looking results. CQC-registered clinic in St Albans.",
};

/* âââ Hero âââ */
function ConcernHero() {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-light/80" />
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative">
        <div className="max-w-2xl">
          <p className="accent-font text-gold-light text-lg italic mb-4">
            Your Concern
          </p>
          <h1 className="font-heading text-cream text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            &ldquo;I Look Tired&rdquo;
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed mb-8">
            People keep asking if you&rsquo;re okay. You catch your reflection
            and see someone who looks older and more fatigued than you actually
            feel. It&rsquo;s not vanity â it&rsquo;s the gap between how you
            feel inside and what you see in the mirror.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#how-we-help"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cream/25 text-cream text-sm tracking-wide hover:border-gold-light hover:text-gold-light transition-colors"
            >
              See How We Can Help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââ What's Happening âââ */
function WhatsHappening() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="gold-divider mb-6" />
            <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-6">
              What&rsquo;s Actually Happening to Your Face
            </h2>
            <div className="space-y-5 text-charcoal leading-relaxed">
              <p>
                From your mid-thirties onwards, your face begins to lose volume
                naturally. The fat pads that sit beneath your skin â giving your
                face its youthful contours â start to diminish and descend.
                Collagen production slows. Skin becomes thinner and less
                elastic.
              </p>
              <p>
                The result is a face that looks drawn, hollow, and tired â even
                when you&rsquo;re well-rested. The under-eye area darkens.
                Cheeks flatten. The jawline softens. It&rsquo;s not about
                ageing badly. It&rsquo;s simply biology.
              </p>
              <p className="text-navy font-medium">
                The good news? These changes respond beautifully to the right
                clinical intervention â and &ldquo;the right intervention&rdquo;
                almost always means subtle, not dramatic.
              </p>
            </div>
          </div>

          {/* Visual placeholder for before/after or illustration */}
          <div className="bg-cream p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-6">
              Common Signs
            </p>
            <ul className="space-y-4">
              {[
                "Hollow or sunken cheeks",
                "Under-eye shadows and dark circles",
                "Loss of definition in the jawline",
                "Skin that looks dull or dehydrated",
                "Deeper nasolabial folds (nose-to-mouth lines)",
                "Overall appearance of fatigue or sadness",
                "Temples that appear sunken",
              ].map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-charcoal">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââ How We Help âââ */
function HowWeHelp() {
  const treatments = [
    {
      name: "Profhilo",
      description:
        "A bio-remodelling injectable that floods the skin with hyaluronic acid, stimulating collagen and elastin from within. It restores hydration, firmness, and a natural glow without adding volume or changing your features.",
      ideal: "Early volume loss, skin dullness, fine crepey skin",
      time: "15â20 minutes, 2 sessions",
      href: "/treatments/profhilo",
    },
    {
      name: "Sculptra",
      description:
        "A collagen stimulator that works gradually over months, rebuilding your skin's structural support from the inside. Results look entirely natural because they develop slowly â like turning back the clock rather than pressing pause.",
      ideal: "Significant volume loss, hollowed cheeks, overall facial thinning",
      time: "30â45 minutes, 2â3 sessions",
      href: "/treatments/sculptra",
    },
    {
      name: "Dermal Fillers",
      description:
        "Expert placement of hyaluronic acid filler to restore lost volume exactly where it's needed. In experienced hands, the result is a rested, refreshed appearance â never overdone, never obvious.",
      ideal: "Targeted volume loss in cheeks, temples, under-eyes, or jawline",
      time: "30â45 minutes, immediate results",
      href: "/treatments/dermal-fillers",
    },
    {
      name: "Thermage",
      description:
        "Radiofrequency energy that tightens and lifts existing skin without injections. It stimulates deep collagen renewal for firmer, more defined contours that continue to improve over 3â6 months.",
      ideal: "Skin laxity, softened jawline, overall skin tightening",
      time: "60â90 minutes, single session",
      href: "/treatments/thermage",
    },
  ];

  return (
    <section id="how-we-help" className="py-16 lg:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-3">
            How We Can Help
          </p>
          <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-4">
            Treatments We May Recommend
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Every face is different. Your practitioner will recommend the right
            approach for your skin during your consultation. These are the
            treatments most commonly suited to this concern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {treatments.map((t) => (
            <div key={t.name} className="bg-warm-white p-8 lg:p-10 group">
              <h3 className="font-heading text-navy text-xl font-semibold mb-3">
                {t.name}
              </h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">
                {t.description}
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-xs text-charcoal-light">
                  <span className="font-medium text-charcoal">Best for:</span>{" "}
                  {t.ideal}
                </p>
                <p className="text-xs text-charcoal-light flex items-center gap-1.5">
                  <Clock size={12} />
                  {t.time}
                </p>
              </div>
              <Link
                href={t.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-gold transition-colors"
              >
                Learn more about {t.name}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-charcoal-light mb-4">
            Not sure which treatment is right for you? That&rsquo;s exactly what
            your consultation is for.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-cream text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors"
          >
            Book Your Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* âââ Reassurance / First Visit âââ */
function Reassurance() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-4">
            What Your First Visit Looks Like
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "A real conversation",
              desc: "Your practitioner will spend 30 minutes listening to your concerns, examining your skin, and understanding what matters to you. This isn't a sales pitch â it's a clinical assessment.",
            },
            {
              step: "02",
              title: "An honest recommendation",
              desc: "You'll receive a clear, jargon-free explanation of what's happening and what can help. Sometimes the best recommendation is \"you don't need anything right now\" â and our zero-commission practitioners are free to say exactly that.",
            },
            {
              step: "03",
              title: "Time to decide",
              desc: "You'll take home a written treatment plan. There's no pressure to commit on the day. We want you to feel completely confident before you proceed â and if that means going away to think about it, we fully support that.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="shrink-0">
                <span className="accent-font text-gold text-2xl italic">
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

        <div className="mt-12 text-center">
          <Link
            href="/approach/your-first-visit"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            Read more about what to expect
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* âââ Testimonial âââ */
function ConcernTestimonial() {
  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Quote size={32} className="text-gold/30 mx-auto mb-6" />
        <blockquote className="font-heading text-navy text-xl lg:text-2xl leading-relaxed italic mb-6">
          &ldquo;I was so nervous about looking &lsquo;done&rsquo; â but Emma
          listened to exactly what I wanted and the results are beautifully
          natural. People just tell me I look well and rested. Nobody has any
          idea I&rsquo;ve had anything done, which is exactly what I wanted.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-gold fill-gold" />
          ))}
        </div>
        <p className="text-sm text-charcoal-light">
          Verified Google Review &bull; Skin Rejuvenation Patient
        </p>
      </div>
    </section>
  );
}

/* âââ CTA âââ */
function ConcernCTA() {
  return (
    <section className="py-16 lg:py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="accent-font text-gold-light text-lg italic mb-4">
          You deserve to look how you feel
        </p>
        <h2 className="font-heading text-cream text-3xl lg:text-4xl font-semibold mb-6">
          Start With a Conversation
        </h2>
        <p className="text-cream/60 mb-10 max-w-xl mx-auto">
          Your &pound;30 consultation is a genuine medical assessment with a
          qualified practitioner â not a sales appointment. It&rsquo;s
          redeemable against any treatment you choose.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            Book Your Consultation
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:01727837429"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream text-sm tracking-wide hover:border-gold-light hover:text-gold-light transition-colors"
          >
            Call 01727 837 429
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-cream/40 text-xs">
          <span className="flex items-center gap-1.5">
            <Shield size={12} /> CQC Registered
          </span>
          <span className="flex items-center gap-1.5">
            <Shield size={12} /> Save Face Accredited
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={12} /> 4.9/5 â 529 Reviews
          </span>
        </div>
      </div>
    </section>
  );
}

/* âââ Page âââ */
export default function ILookTiredPage() {
  return (
    <>
      <ConcernHero />
      <WhatsHappening />
      <HowWeHelp />
      <Reassurance />
      <ConcernTestimonial />
      <ConcernCTA />
    </>
  );
}
