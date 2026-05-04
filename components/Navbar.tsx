"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about",   label: "About" },
  { href: "/lineage", label: "Lineage" },
  { href: "/system",  label: "The System" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md border-b border-ink-400"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt=""
              width={42}
              height={42}
              className="rounded-full opacity-85 group-hover:opacity-100 transition-opacity duration-200"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="flex flex-col">
              <span className="font-cinzel text-lg tracking-ultra text-white group-hover:text-gold transition-colors duration-200">
                FRANCO <span className="text-gold">LUNG</span>
              </span>
              <span className="font-inter text-[9px] tracking-[0.45em] text-white/40 uppercase group-hover:text-gold/60 transition-colors duration-200">
                Wing Chun
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-cinzel text-[11px] tracking-wide2 uppercase transition-colors duration-200 hover:text-gold ${
                  pathname === href ? "text-gold" : "text-white/60"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/classes" className="btn-gold text-[10px] ml-2">
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/80 hover:text-gold transition-colors"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="gold-line w-24 mb-10" />
        {links.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`font-cinzel text-2xl tracking-ultra py-5 transition-colors duration-200 hover:text-gold fade-up ${
              pathname === href ? "text-gold" : "text-white/70"
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {label}
          </Link>
        ))}
        <div className="gold-line w-24 mt-10 mb-8" />
        <Link href="/classes" className="btn-gold" onClick={() => setOpen(false)}>
          Book a Class
        </Link>
      </div>
    </>
  );
}
