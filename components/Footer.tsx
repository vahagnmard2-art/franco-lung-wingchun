import Link from "next/link";
import { MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";

const navLinks = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/lineage", label: "Lineage" },
  { href: "/system",  label: "The System" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-100 border-t border-ink-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-cinzel text-xl tracking-ultra text-white">
                FRANCO <span className="text-gold">LUNG</span>
              </span>
              <span className="block text-[10px] tracking-[0.45em] text-white/70 uppercase mt-1">
                Wing Chun
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Over five decades of Wing Chun mastery. Training in Los Angeles
              since 2009. Direct lineage from Hong Kong&apos;s greatest masters.
            </p>
            <p className="font-cinzel text-xs text-gold/80 tracking-widest mt-4 italic">
              &ldquo;Learning Has No Bounds&rdquo;
            </p>
            <p className="font-cinzel text-2xl text-gold/30 tracking-widest mt-3" aria-hidden="true" lang="zh-Hant">
              詠春
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-200 tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-5">
              Find Us
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=5614+Rosemead+Blvd+Temple+City+CA+91780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>
                  5614 Rosemead Blvd<br />
                  Temple City, CA 91780
                </span>
              </a>
              <a
                href="tel:+16262332882"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Phone size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                (626) 233-2882
              </a>
              <a
                href="https://www.instagram.com/wingchunfrancolung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Instagram size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                @wingchunfrancolung
              </a>
              <a
                href="https://www.facebook.com/FrancoLung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Facebook size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                Franco Lung
              </a>
              <a
                href="https://www.youtube.com/@FrancoLungWingChun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Youtube size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                YouTube Channel
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/70 text-xs tracking-widest">
            © {new Date().getFullYear()} Franco Lung Wing Chun. All rights reserved.
          </p>
          <p className="text-white/65 text-xs tracking-wide">
            Temple City · Los Angeles, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
