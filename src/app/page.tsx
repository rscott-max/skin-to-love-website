import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Star,
  Award,
  HeartHandshake,
  ArrowRight,
  Clock,
  Users,
  Phone,
  CheckCircle,
  Sparkles,
  Eye,
  Leaf,
  Play,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

/* Image base URL */
const IMG = "https://skintolovecommunity.co.uk/images";

/* ═══════════════════════════════════════════════════════
   HERO — Cinematic with hero image background
   ═══════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-bleed hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${IMG}/Skin-to-Love-Hero.jpg`}
          alt="The Skin to Love Clinic — premium dermatology and aesthetics"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-dark to-transparent" />
      </div>

      {/* Subtle grain */}
      <div className="absolute inset-0 z-[1] grain-overlay pointer-events-none" />

      {/* Decorative radial glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* Subtle geometric accent */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-gold/[0.08] rotate-45 hidden lg:block z-[1]" />
      <div className="absolute bottom-32 right-40 w-20 h-20 border border-gold/[0.06] rotate-12 hidden lg:block z-[1]" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Eyebrow with ornament */}
            <div className="hero-subtitle flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-gradient-to-r from-gold to-gold-light" />
              <p className="text-gold-light text-[11px] uppercase tracking-[0.3em] font-medium">
                Medically-led dermatology &amp; aesthetics
              </p>
            </div>

            {/* Main headline */}
            <h1 className="hero-title font-heading text-cream display-xl font-semibold mb-8 text-balance">
              Look Like Yourself.{" "}
              <span className="text-gold-shimmer italic font-normal block mt-2">
                Only Rested.
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-body text-cream/60 text-lg lg:text-xl leading-relaxed max-w-xl mb-12">
              CQC-registered. Zero-commission practitioners. Over 140 years of
              combined clinical expertise. We restore your natural vitality — we
              never alter your identity.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row gap-5">
              <Link href="/book" className="inline-flex items-center gap-3 px-10 py-4 border border-gold/60 text-cream text-xs font-medium uppercase tracking-[0.2em] hover:bg-gold/10 hover:border-gold transition-all duration-500">
                <span>Book Your Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <a href="tel:01727837429" className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream/70 text-xs font-medium uppercase tracking-[0.2em] hover:border-cream/40 hover:text-cream transition-all duration-500">
                <Phone size={14} />
                <span>01727 837 429</span>
              </a>
            </div>
          </div>

          {/* Right — Stats column */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="space-y-10 pl-12 border-l border-cream/[0.08]">
              {[
                { number: "529", label: "Five-Star Reviews", sub: "4.9 / 5 on Google" },
                { number: "140+", label: "Years Combined Experience", sub: "Across Our Clinical Team" },
                { number: "2013", label: "Established", sub: "Over a Decade of Trust" },
              ].map((stat, i) => (
                <div key={stat.label} className="group" style={{ animationDelay: `${1.2 + i * 0.2}s` }}>
                  <div className="hero-cta" style={{ animationDelay: `${1.2 + i * 0.2}s` }}>
                    <p className="stat-number mb-1">{stat.number}</p>
                    <p className="text-cream text-sm font-medium tracking-wide">{stat.label}</p>
                    <p className="text-cream/40 text-xs mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TRUST BAR — Animated, premium feel
   ═══════════════════════════════════════════════════════ */
function TrustBar() {
  const items = [
    { icon: Shield, label: "CQC Registered", sub: "Rated Good — All Areas" },
    { icon: Award, label: "Save Face Accredited", sub: "Voluntary Quality Standard" },
    { icon: Star, label: "529 Five-Star Reviews", sub: "4.9/5 on Google" },
    { icon: Clock, label: "Established 2013", sub: "140+ Years Combined Experience" },
  ];
  return (
    <ScrollReveal>
      <div className="bg-cream border-y border-warm-gray/40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center shrink-0 group-hover:from-gold/10 group-hover:to-gold/5 transition-all duration-500">
                  <item.icon size={20} className="text-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-navy tracking-wide">{item.label}</p>
                  <p className="text-[11px] text-charcoal-light">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════════════════
   EMPATHY SECTION — Emotional, with visual depth
   ═══════════════════════════════════════════════════════ */
function EmpathySection() {
  return (
    <section className="py-32 lg:py-44 bg-mesh relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 border border-gold/[0.06] rounded-full hidden lg:block" />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-48 h-48 border border-gold/[0.04] rounded-full hidden lg:block" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <ScrollReveal>
          <div className="gold-divider-center mb-8" />
          <p className="accent-font text-gold text-xl italic mb-6">The honest truth</p>
          <h2 className="font-heading text-navy display-lg font-semibold mb-10 text-balance">
            We Know Why You Haven&rsquo;t Booked Yet
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="space-y-6 text-charcoal text-lg leading-relaxed">
            <p>
              You&rsquo;ve seen the frozen faces. You&rsquo;ve heard the horror
              stories. You&rsquo;re worried that someone will try to sell you
              something you don&rsquo;t need — or that you&rsquo;ll end up looking
              like someone else entirely.
            </p>
            <p className="text-charcoal-light">
              We built this clinic to be the opposite of all of that. Since 2013,
              every treatment we recommend, every plan we create, every result we
              deliver has been guided by one principle:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 p-8 lg:p-10 bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <p className="relative text-cream text-xl lg:text-2xl font-heading italic leading-relaxed">
              &ldquo;You should look like yourself — only rested, vital, and confident.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   VIDEO SECTION — Cinematic promo video
   ═══════════════════════════════════════════════════════ */
function VideoSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <ScrollReveal className="text-center mb-14">
          <p className="accent-font text-gold-light text-xl italic mb-4">See the clinic</p>
          <h2 className="font-heading text-cream display-lg font-semibold mb-5 text-balance">
            Where Clinical Excellence Meets Calm
          </h2>
          <p className="text-cream/40 max-w-xl mx-auto leading-relaxed">
            Step inside The Skin to Love Clinic. A CQC-registered, medically-led
            practice designed around your comfort — and built on trust.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative max-w-4xl mx-auto video-container">
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-gold/10 pointer-events-none z-10" />
            <div className="absolute -inset-1 border border-gold/5 pointer-events-none z-10" />

            {/* Video */}
            <div className="relative aspect-video bg-navy-dark overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster={`${IMG}/Skin-to-Love-Hero.jpg`}
              >
                <source src={`${IMG}/Skin-to-Love-Promo.mp4`} type="video/mp4" />
              </video>

              {/* Subtle vignette over video */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-navy/10 pointer-events-none" />
            </div>

            {/* Play indicator */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-navy/60 backdrop-blur-sm px-4 py-2 border border-cream/10">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-cream/60 text-xs tracking-wider uppercase">Playing</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ZERO-COMMISSION — Split layout with Jane & Kerri image
   ═══════════════════════════════════════════════════════ */
function ZeroCommission() {
  return (
    <section className="py-32 lg:py-44 bg-cream-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — content */}
          <ScrollReveal variant="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="ornament-dot" />
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
                  Our Zero-Commission Promise
                </p>
              </div>
              <h2 className="font-heading text-navy display-lg font-semibold mb-8 leading-snug">
                Your Practitioner Earns the Same Whether They Recommend One
                Treatment or Five
              </h2>
              <div className="space-y-5 text-charcoal leading-relaxed">
                <p>
                  That means the only thing guiding your plan is what&rsquo;s
                  right for your skin. Not a sales target. Not a monthly
                  quota. Not a commission cheque.
                </p>
                <p className="text-charcoal-light">
                  In an industry where high-pressure selling is disturbingly
                  common, our zero-commission policy is our most fundamental
                  promise to you. It&rsquo;s why our practitioners will
                  sometimes tell you that you don&rsquo;t need a treatment — and
                  it&rsquo;s why 529 patients have given us 4.9 out of 5 stars.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/approach/your-first-visit"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 link-underline"
                >
                  Learn more about our approach
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Clinic image + feature cards */}
          <ScrollReveal variant="right">
            <div className="space-y-6">
              {/* Jane & Kerri image */}
              <div className="relative overflow-hidden mb-8">
                <div className="absolute -inset-1 border border-gold/10 pointer-events-none z-10" />
                <Image
                  src={`${IMG}/front-of-house-full.png`}
                  alt="Jane and Kerri — your front-of-house team at The Skin to Love Clinic"
                  width={1024}
                  height={662}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-dark/80 to-transparent pointer-events-none" />
              </div>

              {/* Feature cards below image */}
              {[
                {
                  icon: HeartHandshake,
                  title: "No Pressure. Ever.",
                  text: "Your consultation is a conversation, not a pitch. You\u2019ll receive a written plan to take home and consider — with absolutely no obligation to proceed.",
                },
                {
                  icon: Shield,
                  title: "Clinically Regulated",
                  text: "We\u2019re registered with the Care Quality Commission and accredited by Save Face — standards that most aesthetic clinics don\u2019t hold.",
                },
                {
                  icon: Users,
                  title: "140+ Years of Expertise",
                  text: "Our team includes Independent Nurse Prescribers, an MSc in Dermatology, and practitioners with decades of experience in plastic surgery and medical aesthetics.",
                },
              ].map((item) => (
                <div key={item.title} className="card-premium p-8 lg:p-10 flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full flex items-center justify-center shrink-0">
                    <item.icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-navy text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   THE RESTED EFFECT — Visual storytelling with texture
   ═══════════════════════════════════════════════════════ */
function RestedEffect() {
  const pillars = [
    {
      icon: Eye,
      title: "Natural Results",
      desc: "People notice you look well — not that you\u2019ve had something done. That\u2019s the standard we hold every treatment to.",
    },
    {
      icon: Leaf,
      title: "Proactive Skin Health",
      desc: "We treat your skin\u2019s underlying health, not just surface symptoms. Prevention is always better than correction.",
    },
    {
      icon: Sparkles,
      title: "Clinical Precision",
      desc: "Every treatment plan is built on a comprehensive medical consultation, not a menu of \u201Ctweakments.\u201D",
    },
    {
      icon: HeartHandshake,
      title: "Absolute Trust",
      desc: "Zero-commission practitioners. Written treatment plans. No obligation. Your interests are the only thing that matters.",
    },
  ];

  return (
    <section className="py-32 lg:py-44 bg-warm-white relative overflow-hidden">
      {/* Rested Effect texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <Image
          src={`${IMG}/rested-effect-texture.png`}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Top line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-warm-gray to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-20">
          <div className="gold-divider-center mb-6" />
          <p className="accent-font text-gold text-xl italic mb-4">Our philosophy</p>
          <h2 className="font-heading text-navy display-lg font-semibold mb-6 text-balance">
            The Rested Effect
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg leading-relaxed">
            Not frozen. Not filled. Not &ldquo;done.&rdquo; The quiet confidence of skin that
            looks genuinely healthy — restored from within by experts who know
            when to treat and when to say no.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card-premium p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cream-dark to-cream rounded-full flex items-center justify-center group-hover:from-gold/10 group-hover:to-gold/5 transition-all duration-500">
                <pillar.icon size={28} className="text-gold transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-navy text-lg font-semibold mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-14 text-center">
          <Link
            href="/approach/the-rested-effect"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 link-underline"
          >
            Read about our approach in full
            <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS — Editorial style
   ═══════════════════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    {
      text: "A good experience from start to finish. I was not pressured in any way. Jane was professional, calm and very knowledgeable. The clinic clearly takes safety seriously with careful and well managed processes.",
      name: "Recent Patient",
      treatment: "Consultation & Treatment",
    },
    {
      text: "I\u2019ve been going to the Skin to Love Clinic for over 20 years. The team are incredibly professional and I always feel completely at ease. They\u2019ve never once recommended something I didn\u2019t need.",
      name: "Long-standing Patient",
      treatment: "Ongoing Skin Health",
    },
    {
      text: "Emma was wonderful \u2014 she explained everything clearly, answered all my questions, and the results are beautifully natural. Nobody can tell I\u2019ve had anything done, which is exactly what I wanted.",
      name: "Recent Patient",
      treatment: "Skin Rejuvenation",
    },
  ];

  return (
    <section className="py-32 lg:py-44 bg-warm-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="gold-divider-center mb-6" />
          <h2 className="font-heading text-navy display-lg font-semibold mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="text-charcoal-light">
            529 reviews &bull; 4.9 out of 5 stars on Google
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="testimonial-card">
              <p className="text-charcoal text-sm leading-relaxed mb-8 relative z-10 pt-8">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-xs text-charcoal-light">
                <span className="font-medium text-charcoal">{review.name}</span> &bull; {review.treatment}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CONCERNS GRID — Rich cards on dark background
   ═══════════════════════════════════════════════════════ */
function ConcernsGrid() {
  const items = [
    {
      title: "I Look Tired",
      description: "Volume loss, skin laxity, and dullness that make you look older than you feel.",
      href: "/concerns/i-look-tired",
    },
    {
      title: "My Skin Has Changed",
      description: "Pigmentation, melasma, rosacea, or acne scarring that affects your confidence.",
      href: "/concerns/my-skin-has-changed",
    },
    {
      title: "Lines & Wrinkles",
      description: "Fine lines, expression lines, or deeper folds that you want to soften naturally.",
      href: "/concerns/lines-and-wrinkles",
    },
    {
      title: "Body Confidence",
      description: "Stubborn fat, loose skin, or muscle tone that diet and exercise can\u2019t reach.",
      href: "/concerns/body-confidence",
    },
    {
      title: "I Want to Feel Confident",
      description: "A comprehensive rejuvenation journey tailored entirely to you.",
      href: "/concerns/confidence",
    },
    {
      title: "Skin Health Check",
      description: "Moles, skin lesions, or dermatological concerns that need expert assessment.",
      href: "/concerns/skin-health-check",
    },
  ];

  return (
    <section className="py-32 lg:py-44 bg-gradient-navy relative overflow-hidden grain-overlay">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="accent-font text-gold-light text-xl italic mb-4">
            Not sure where to start?
          </p>
          <h2 className="font-heading text-cream display-lg font-semibold mb-5">
            Tell Us How You Feel
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
            You don&rsquo;t need to know which treatment you want. Start with
            what concerns you, and we&rsquo;ll guide you to the right solution.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="card-dark p-8 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-cream text-xl font-semibold group-hover:text-gold-light transition-colors duration-300">
                  {item.title}
                </h3>
                <ArrowRight size={14} className="text-cream/20 group-hover:text-gold-light group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1.5" />
              </div>
              <p className="text-cream/40 text-sm leading-relaxed group-hover:text-cream/60 transition-colors duration-300">
                {item.description}
              </p>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   THE DIFFERENCE — With clinic front-of-house image
   ═══════════════════════════════════════════════════════ */
function TheDifference() {
  return (
    <section className="py-32 lg:py-44 bg-cream-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal variant="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="ornament-dot" />
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
                What Sets Us Apart
              </p>
            </div>
            <h2 className="font-heading text-navy display-lg font-semibold mb-8 leading-snug">
              This Isn&rsquo;t a Beauty Salon. It&rsquo;s a Medical Practice.
            </h2>
            <p className="text-charcoal leading-relaxed mb-8">
              We hold ourselves to the same clinical, ethical, and regulatory
              standards as a private Harley Street dermatology practice — because
              that&rsquo;s exactly what we are, just in St Albans.
            </p>

            {/* Clinic exterior image */}
            <div className="relative overflow-hidden mt-8">
              <div className="absolute -inset-1 border border-gold/10 pointer-events-none z-10" />
              <Image
                src={`${IMG}/front-of-house.png`}
                alt="The Skin to Love Clinic — 13-15 Chequer Street, St Albans"
                width={800}
                height={520}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="space-y-6 lg:pt-16">
              {[
                "CQC-registered and inspected — rated Good in all areas",
                "Save Face accredited — an independent verification of safety and quality",
                "Zero-commission practitioners — your plan is always in your interest",
                "Comprehensive medical consultations, not 15-minute \u201Cquick fixes\u201D",
                "Independent Nurse Prescribers with genuine clinical autonomy",
                "Over 140 years of combined experience across dermatology, plastic surgery, and medical aesthetics",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 group">
                  <CheckCircle size={20} className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-charcoal text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CTA SECTION — Premium with background image
   ═══════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${IMG}/Skin-to-Love-Hero.jpg`}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark/50" />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 z-[1] grain-overlay pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none z-[1]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <p className="accent-font text-gold-light text-xl italic mb-6">
            Ready to take the first step?
          </p>
          <h2 className="font-heading text-cream display-lg font-semibold mb-8 text-balance">
            Your First Appointment Is a Conversation, Not a Commitment
          </h2>
          <p className="text-cream/50 leading-relaxed mb-12 max-w-xl mx-auto text-lg">
            A 30-minute, one-to-one consultation with a qualified practitioner
            who will listen, assess, and give you an honest recommendation —
            with no obligation to proceed. The &pound;30 consultation fee is
            redeemable against any treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center gap-3 px-10 py-4 border border-gold/60 text-cream text-xs font-medium uppercase tracking-[0.2em] hover:bg-gold/10 hover:border-gold transition-all duration-500">
              <span>Book Your Consultation</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/approach/your-first-visit" className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream/70 text-xs font-medium uppercase tracking-[0.2em] hover:border-cream/40 hover:text-cream transition-all duration-500">
              <span>What to Expect at Your First Visit</span>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex items-center justify-center gap-8 text-cream/30 text-xs">
            <span className="flex items-center gap-1.5">
              <Shield size={12} /> CQC Registered
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={12} /> Save Face Accredited
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={12} /> 4.9/5 — 529 Reviews
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <EmpathySection />
      <VideoSection />
      <RestedEffect />
      <ZeroCommission />
      <Testimonials />
      <ConcernsGrid />
      <TheDifference />
      <CTASection />
    </>
  );
}
