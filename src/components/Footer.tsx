import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/80 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-cream text-2xl font-semibold mb-1 tracking-tight">
              The Skin to Love
            </h3>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-8">
              Clinic &bull; St Albans
            </p>
            <p className="text-sm leading-relaxed text-cream/50 mb-8">
              CQC-registered, medically-led dermatology and aesthetics.
              Restoring your natural vitality since 2013.
            </p>
            <div className="flex gap-3">
              <div className="px-4 py-2.5 border border-cream/10 hover:border-gold/20 transition-colors duration-300">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold font-medium">CQC</p>
                <p className="text-[10px] text-cream/40">Rated Good</p>
              </div>
              <div className="px-4 py-2.5 border border-cream/10 hover:border-gold/20 transition-colors duration-300">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold font-medium">Save Face</p>
                <p className="text-[10px] text-cream/40">Accredited</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium mb-8">
              Your Concerns
            </h4>
            <ul className="space-y-3.5">
              {[
                ["I Look Tired", "/concerns/i-look-tired"],
                ["My Skin Has Changed", "/concerns/my-skin-has-changed"],
                ["Lines & Wrinkles", "/concerns/lines-and-wrinkles"],
                ["Body Confidence", "/concerns/body-confidence"],
                ["Skin Health Check", "/concerns/skin-health-check"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-cream/50 hover:text-gold-light transition-colors duration-300 hover:translate-x-1 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium mb-8">
              Our Approach
            </h4>
            <ul className="space-y-3.5">
              {[
                ["The Rested Effect", "/approach/the-rested-effect"],
                ["Your First Visit", "/approach/your-first-visit"],
                ["Our Clinical Team", "/team"],
                ["Safety & Standards", "/approach/safety"],
                ["Zero-Commission Promise", "/approach/zero-commission"],
                ["Price Guide", "/prices"],
                ["Finance Options", "/finance"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-cream/50 hover:text-gold-light transition-colors duration-300 hover:translate-x-1 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium mb-8">
              Get in Touch
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:01727837429" className="flex items-center gap-3 text-sm text-cream/50 hover:text-gold-light transition-colors duration-300 group">
                  <div className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-300">
                    <Phone size={14} className="text-gold" />
                  </div>
                  01727 837 429
                </a>
              </li>
              <li>
                <a href="mailto:info@theskintoloveclinic.co.uk" className="flex items-center gap-3 text-sm text-cream/50 hover:text-gold-light transition-colors duration-300 group">
                  <div className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-300">
                    <Mail size={14} className="text-gold" />
                  </div>
                  info@theskintoloveclinic.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream/50">
                  <div className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-gold" />
                  </div>
                  <span>
                    13-15 Chequer Street<br />
                    St Albans, Hertfordshire<br />
                    AL1 3YJ
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-muted text-navy text-sm font-semibold tracking-wide hover:shadow-[0_4px_20px_-4px_rgba(184,149,106,0.4)] hover:-translate-y-[1px] transition-all duration-300"
              >
                Book a Consultation
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-cream/30">
            &copy; {new Date().getFullYear()} The Skin to Love Clinic Ltd. Registered Company 08397290. VAT: 162291028.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[11px] text-cream/30 hover:text-cream/60 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-[11px] text-cream/30 hover:text-cream/60 transition-colors duration-300">
              Disclaimer
            </Link>
            <a href="https://www.cqc.org.uk/location/1-7739567376" target="_blank" rel="noopener noreferrer" className="text-[11px] text-cream/30 hover:text-cream/60 transition-colors duration-300">
              CQC Report
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
