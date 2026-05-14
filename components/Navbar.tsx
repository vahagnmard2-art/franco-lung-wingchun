"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/about",   label: "About" },
  { href: "/lineage", label: "Lineage" },
  { href: "/system",  label: "System" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();
  const hamburgerRef            = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef        = useRef<HTMLAnchorElement>(null);
  const menuWasOpenRef          = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Focus management: move focus into menu on open, back to hamburger on close
  useEffect(() => {
    if (open) {
      menuWasOpenRef.current = true;
      setTimeout(() => firstMenuItemRef.current?.focus(), 50);
    } else if (menuWasOpenRef.current) {
      hamburgerRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/98 backdrop-blur-md border-b border-ink-400"
            : "bg-ink/80 backdrop-blur-sm border-b border-ink-400/40"
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
              <span className="font-inter text-[9px] tracking-[0.45em] text-white/60 uppercase group-hover:text-gold transition-colors duration-200">
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
                aria-current={pathname === href ? "page" : undefined}
                className={`font-cinzel font-semibold text-[11px] tracking-wide2 uppercase transition-colors duration-200 hover:text-gold relative pb-1 ${
                  pathname === href ? "text-gold" : "text-white/90"
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </Link>
            ))}
            <a
              href={site.phone.href}
              className="hidden lg:flex items-center gap-1.5 font-cinzel text-[10px] tracking-widest text-white/45 hover:text-gold transition-colors duration-200"
            >
              <Phone size={11} aria-hidden="true" />
              {site.phone.display}
            </a>
            <Link href="/contact" className="btn-gold text-[10px] ml-2">
              Book a Class
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/80 hover:text-gold transition-colors p-2 -mr-2"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 min-h-[100dvh] z-40 bg-ink flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center w-full">
          <div className="gold-line w-24 mb-10" />
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              ref={i === 0 ? firstMenuItemRef : undefined}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`font-cinzel text-2xl tracking-ultra py-5 transition-colors duration-200 hover:text-gold fade-up ${
                pathname === href ? "text-gold" : "text-white/70"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {label}
            </Link>
          ))}
          <div className="gold-line w-24 mt-10 mb-6" />
          <a
            href={site.phone.href}
            className="flex items-center gap-2 font-cinzel text-sm tracking-widest text-white/60 hover:text-gold transition-colors mb-6"
            onClick={() => setOpen(false)}
          >
            <Phone size={13} aria-hidden="true" />
            {site.phone.display}
          </a>
          <Link href="/contact" className="btn-gold" onClick={() => setOpen(false)}>
            Book a Class
          </Link>
        </div>
      </div>
    </>
  );
}
