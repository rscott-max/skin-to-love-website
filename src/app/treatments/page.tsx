import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments | Non-Surgical Aesthetics & Dermatology | The Skin to Love Clinic",
  description:
    "Explore our full range of CQC-regulated non-surgical treatments. From Profhilo and dermal fillers to laser therapy and body sculpting. St Albans, Hertfordshire.",
};

const categories = [
  {
    name: "Injectables & Bio-Remodelling",
    description: "Expert placement for natural-looking results. Every injectable treatment is performed by a qualified Independent Nurse Prescriber.",
    treatments: [
      { name: "Profhilo", desc: "Bio-remodelling for hydration, firmness and glow", href: "/treatments/profhilo", from: "£665" },
      { name: "Profhilo Structura", desc: "Next-generation structural remodelling", href: "/treatments/profhilo-structura", from: "£665" },
      { name: "Dermal Fillers", desc: "Volume restoration for cheeks, lips, jawline and more", href: "/treatments/dermal-fillers", from: "£220" },
      { name: "Sculptra", desc: "Collagen stimulator for gradual, natural rejuvenation", href: "/treatments/sculptra", from: "£760" },
      { name: "Radiesse", desc: "Biostimulatory filler for jawline and structural support", href: "/treatments/radiesse", from: "£350" },
      { name: "Wrinkle Relaxing Injections", desc: "Soften expression lines while maintaining natural movement", href: "/treatments/wrinkle-relaxing", from: "£210" },
      { name: "Non-Surgical Rhinoplasty", desc: "Reshape the nose without surgery", href: "/treatments/non-surgical-rhinoplasty", from: "£750" },
    ],
  },
  {
    name: "Skin Rejuvenation",
    description: "Treatments that work with your skin's own biology to restore texture, tone, and luminosity.",
    treatments: [
      { name: "SuneKos", desc: "Amino acid and hyaluronic acid regeneration", href: "/treatments/sunekos", from: "£550" },
      { name: "Polynucleotides (PhilArt)", desc: "DNA-based skin regeneration therapy", href: "/treatments/polynucleotides", from: "£350" },
      { name: "Mesotherapy", desc: "Microinjections of vitamins and nutrients", href: "/treatments/mesotherapy", from: "£175" },
      { name: "Platelet Rich Plasma (PRP)", desc: "Your own growth factors for natural healing", href: "/treatments/prp", from: "£290" },
      { name: "HydraFacial", desc: "Deep cleanse, exfoliation and hydration", href: "/treatments/hydrafacial", from: "£140" },
      { name: "Chemical Peel", desc: "Controlled exfoliation for texture and tone", href: "/treatments/chemical-peel", from: "£75" },
      { name: "Obagi Nu-Derm", desc: "Prescription skincare for skin transformation", href: "/treatments/obagi", from: "£400" },
    ],
  },
  {
    name: "Laser & Light Therapy",
    description: "Medical-grade laser and light technology for targeted skin concerns, operated by trained specialists.",
    treatments: [
      { name: "Clear and Brilliant", desc: "Gentle laser for skin tone and texture", href: "/treatments/clear-and-brilliant", from: "£325" },
      { name: "Fraxel Dual", desc: "Fractional laser for deeper rejuvenation", href: "/treatments/fraxel", from: "£695" },
      { name: "Thermage", desc: "Radiofrequency skin tightening and lifting", href: "/treatments/thermage", from: "£1,600" },
      { name: "HIFU", desc: "High-intensity focused ultrasound for lifting", href: "/treatments/hifu", from: "£450" },
      { name: "Regenlite", desc: "Pulsed dye laser for redness and collagen", href: "/treatments/regenlite", from: "£250" },
      { name: "Laser Hair Removal", desc: "Soprano Ice platinum technology", href: "/treatments/laser-hair-removal", from: "£30" },
      { name: "Veinwave", desc: "Thread vein and vascular lesion treatment", href: "/treatments/veinwave", from: "£250" },
    ],
  },
  {
    name: "Body Sculpting",
    description: "Non-surgical body contouring for areas that resist diet and exercise.",
    treatments: [
      { name: "Emsculpt Neo", desc: "Simultaneous fat reduction and muscle building", href: "/treatments/emsculpt-neo", from: "£1,400" },
      { name: "Cristal", desc: "Medical-grade fat freezing (cryolipolysis)", href: "/treatments/cristal", from: "£850" },
      { name: "Liposonix", desc: "Focused ultrasound fat reduction", href: "/treatments/liposonix", from: "£600" },
      { name: "Deso Fat Dissolving", desc: "Injectable fat reduction for face and body", href: "/treatments/deso", from: "£225" },
    ],
  },
  {
    name: "Wellness",
    description: "Clinically-supported treatments for broader health and wellbeing.",
    treatments: [
      { name: "Emsella Chair", desc: "Non-invasive pelvic floor strengthening", href: "/treatments/emsella", from: "£125" },
      { name: "Medical Weight Loss Programme", desc: "Clinician-supervised weight management", href: "/treatments/weight-loss", from: "£250" },
      { name: "Hyperhidrosis Treatment", desc: "Medical treatment for excessive sweating", href: "/treatments/hyperhidrosis", from: "£530" },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-heading text-cream text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Our Treatments
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-6">
              Every treatment we offer is clinically proven, performed by
              qualified practitioners, and recommended only when it&rsquo;s
              genuinely right for you.
            </p>
            <p className="text-cream/50 text-sm">
              Not sure what you need?{" "}
              <Link href="/book" className="text-gold-light hover:text-gold transition-colors underline">
                Book a consultation
              </Link>{" "}
              and your practitioner will guide you to the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="mb-8">
                <div className="gold-divider mb-4" />
                <h2 className="font-heading text-navy text-2xl lg:text-3xl font-semibold mb-2">
                  {cat.name}
                </h2>
                <p className="text-charcoal-light text-sm max-w-2xl">
                  {cat.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.treatments.map((t) => (
                  <Link
                    key={t.name}
                    href={t.href}
                    className="group bg-cream p-6 hover:bg-cream-dark transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-navy font-semibold group-hover:text-gold transition-colors">
                        {t.name}
                      </h3>
                      <span className="text-xs text-charcoal-light shrink-0 ml-4">
                        From {t.from}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed mb-3">
                      {t.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-navy group-hover:text-gold transition-colors opacity-0 group-hover:opacity-100">
                      Learn more <ArrowRight size={11} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="accent-font text-gold-light text-lg italic mb-4">
            Every treatment plan starts with a conversation
          </p>
          <h2 className="font-heading text-cream text-3xl font-semibold mb-6">
            Book Your Consultation
          </h2>
          <p className="text-cream/60 mb-10 max-w-xl mx-auto">
            Your practitioner will assess your skin, listen to your concerns,
            and recommend the right approach — with zero pressure and zero
            commission.
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
    </>
  );
}
