import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Rested Effect | Our Philosophy | The Skin to Love Clinic",
  description:
    "We believe in The Rested Effect — subtle, expert enhancement that projects vitality and health without obvious intervention. Our philosophy explained.",
};

export default function TheRestedEffectPage() {
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
              The Rested Effect
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Our philosophy is simple: you should look like yourself — only
              rested, vital, and confident. Never altered. Never overdone.
              Never obvious.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="gold-divider mb-8" />
          <div className="space-y-6 text-charcoal text-lg leading-relaxed">
            <p>
              There&rsquo;s a moment — you might have experienced it already —
              when someone looks at you and says{" "}
              <span className="italic">&ldquo;you look really well.&rdquo;</span>{" "}
              Not &ldquo;have you had something done?&rdquo; Just a genuine,
              unprompted observation that you look healthy, rested, vital.
            </p>
            <p>
              That moment is what we call <strong>The Rested Effect.</strong>{" "}
              It&rsquo;s the gold standard of everything we do at The Skin to
              Love Clinic. It means the treatment was so expertly placed, so
              precisely calibrated, that the result is invisible — even though
              the difference is unmistakable.
            </p>
            <p>
              This isn&rsquo;t about turning back the clock or chasing someone
              else&rsquo;s definition of beauty. It&rsquo;s about restoring
              the version of you that already exists — the one that appears
              when you&rsquo;ve had a perfect night&rsquo;s sleep, a week
              without stress, a holiday in the sun. We just help that version
              show up more consistently.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-navy text-3xl lg:text-4xl font-semibold mb-4">
              What This Means in Practice
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "We say no",
                desc: "If a treatment won't improve your appearance naturally, we won't do it. If you're asking for something that would look overdone or unnatural, we'll tell you. Gently, kindly — but honestly. Our reputation is built on results that look beautiful, not extreme.",
              },
              {
                title: "We go slow",
                desc: "Great results almost never come from a single dramatic session. We prefer building gradually — adding a little, assessing, adjusting. This approach means every step looks natural and you maintain complete control over the process.",
              },
              {
                title: "We treat the whole face",
                desc: "A rested appearance isn't about fixing one feature in isolation. It's about balance — the relationship between your cheeks, eyes, jawline, skin quality. We always assess the whole picture, even when you come to us about one specific concern.",
              },
              {
                title: "We think long-term",
                desc: "Your skin health is a journey, not a quick fix. We design treatment plans that protect and maintain your results over years — investing in your collagen, your skin quality, and your confidence for the long term.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-white p-8 lg:p-10">
                <h3 className="font-heading text-navy text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opposite */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-navy text-3xl font-semibold mb-4">
              What We&rsquo;re Not
            </h2>
          </div>
          <div className="space-y-5 text-charcoal leading-relaxed">
            <p>
              We are not a high-street beauty salon. We&rsquo;re not an
              injectables bar chasing the latest TikTok trend. We don&rsquo;t
              do &ldquo;pillow faces&rdquo; or overfilled features. We
              don&rsquo;t run flash sales, limited-time discounts, or
              high-pressure promotions.
            </p>
            <p>
              We are a CQC-registered, medically-led practice with over 140
              years of combined clinical experience. Our practitioners are
              qualified Independent Nurse Prescribers and medical professionals
              who chose this field because they believe expert aesthetic
              treatment can genuinely transform how people feel about
              themselves — when it&rsquo;s done properly.
            </p>
            <p className="text-navy font-medium">
              We believe the best work is the work nobody notices. And
              that&rsquo;s exactly the standard we hold ourselves to, every
              single day.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quote size={32} className="text-gold/30 mx-auto mb-6" />
          <blockquote className="font-heading text-navy text-xl lg:text-2xl leading-relaxed italic mb-6">
            &ldquo;Overfilled is insecurity. Rested is confidence. We treat
            the latter.&rdquo;
          </blockquote>
          <p className="text-sm text-charcoal-light">
            Jane Lewis, Founder &amp; Managing Director
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-cream text-3xl lg:text-4xl font-semibold mb-6">
            Experience The Rested Effect
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Start with a conversation. Your consultation is a genuine
            assessment of your skin — with complete honesty and zero pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/approach/your-first-visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream text-sm tracking-wide hover:border-gold-light hover:text-gold-light transition-colors"
            >
              What to Expect at Your First Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
