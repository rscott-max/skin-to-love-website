import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-cream text-xl font-semibold mb-1">
              The Skin to Love
            </h3>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold-light mb-6">
              Clinic &bull; St Albans
            </p>
            <p className="text-sm leading-relaxed text-cream/60 mb-6">
              CQC-registered, medically-led dermatology and aesthetics.
              Restoring your natural vitality since 2013.
            </p>
            <div className="flex gap-3">
              {/* Trust badges */}
              <div className="px-3 py-2 border border-cream/20 rounded-sm">
                <p className="text-[10px] uppercase tracking-wider text-gold-light">CQC</p>
                <p className="text-[10px] text-cream/50">Rated Good</p>
              </div>
              <div className="px-3 py-2 border border-cream/20 rounded-sm">
                <p className="text-[10px] uppercase tracking-wider text-gold-light">Save Face</p>
                <p className="text-[10px] text-cream/50">Accredited</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium mb-6">
              Your Concerns
            </h4>
            <ul className="space-y-3">
              {[
                ["I Look Tired", "/concerns/i-look-tired"],
                ["My Skin Has Changed", "/concerns/my-skin-has-changed"],
                ["Lines & Wrinkles", "/concerns/lines-and-wrinkles"],
                ["Body Confidence", "/concerns/body-confidence"],
                ["Skin Health Check", "/concerns/skin-health-check"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-cream/60 hover:text-gold-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium mb-6">
              Our Approach
            </h4>
            <ul className="space-y-3">
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
                  <Link href={href} className="text-sm text-cream/60 hover:text-gold-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:01727837429" className="flex items-start gap-3 text-sm text-cream/60 hover:text-gold-light transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  01727 837 429
                </a>
              </li>
              <li>
                <a href="mailto:info@theskintoloveclinic.co.uk" className="flex items-start gap-3 text-sm text-cream/60 hover:text-gold-light transition-colors">
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  info@theskintoloveclinic.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream/60">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>
                    13-15 Chequer Street<br />
                    St Albans, Hertfordshire<br />
                    AL1 3YJ
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/book"
                className="inline-block px-6 py-3 bg-gold text-navy text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} The Skin to Love Clinic Ltd. Registered Company 08397290. VAT: 162291028.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              Disclaimer
            </Link>
            <a href="https://www.cqc.org.uk/location/1-7739567376" target="_blank" rel="noopener noreferrer" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              CQC Report
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
