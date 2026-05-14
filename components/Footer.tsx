import Link from "next/link";
import { MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { site } from "@/lib/site";

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
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-mobile-safe">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
              <div>
                <span className="font-cinzel text-xl tracking-ultra text-white group-hover:text-gold transition-colors duration-200">
                  FRANCO <span className="text-gold">LUNG</span>
                </span>
                <span className="block text-[10px] tracking-[0.45em] text-white/70 uppercase mt-1">
                  Wing Chun
                </span>
              </div>
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
                href={site.address.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>
                  {site.address.street}<br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </a>
              <a
                href={site.phone.href}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Phone size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                {site.phone.display}
              </a>
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Instagram size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                {site.social.instagram.handle}
              </a>
              <a
                href={site.social.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Facebook size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                {site.social.facebook.label}
              </a>
              <a
                href={site.social.youtube.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors duration-200 group"
              >
                <Youtube size={15} className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                {site.social.youtube.label}
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/70 text-xs tracking-widest">
            © {new Date().getFullYear()} Franco Lung Wing Chun. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/45 text-xs tracking-wide hover:text-gold transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <p className="text-white/65 text-xs tracking-wide">
              Temple City · Los Angeles, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
