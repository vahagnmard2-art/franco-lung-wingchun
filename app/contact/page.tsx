"use client";

import { useState } from "react";
import { MapPin, Instagram, Facebook, Youtube, Send, CheckCircle } from "lucide-react";

// ⚠️  To enable real email delivery:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form — you'll get an ID like "xpzgkwqr"
// 3. Replace the FORM_ID value below with your actual ID
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "general",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      // Fallback: open mail client if Formspree not configured yet
      const subject = encodeURIComponent(`Wing Chun Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\n${formData.message}`
      );
      window.location.href = `mailto:info@francolungwingchun.com?subject=${subject}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", interest: "general", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            <span className="text-gold">Contact</span> Us
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto mt-6">
            Questions about classes, private lessons, or enrollment? Send a message and
            Grandmaster Lung will be in touch.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* Main content */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-6">
                Information
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="https://maps.google.com/?q=5614+Rosemead+Blvd+Temple+City+CA+91780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <MapPin size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-1">
                      Location
                    </p>
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                      5614 Rosemead Blvd<br />
                      Temple City, CA 91780
                    </p>
                  </div>
                </a>

                {/* ⚠️  Add phone number below once confirmed */}
                {/* <a href="tel:+1XXXXXXXXXX" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <Phone size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-1">Phone</p>
                    <p className="text-sm text-white/60">(XXX) XXX-XXXX</p>
                  </div>
                </a> */}
              </div>

              <span className="gold-line-short mb-8" />

              <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-5 mt-8">
                Follow Us
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/wingchunfrancolung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Instagram size={14} className="text-gold" />
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-gold transition-colors">
                    @wingchunfrancolung
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/FrancoLung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Facebook size={14} className="text-gold" />
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-gold transition-colors">
                    Franco Lung
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/@FrancoLungWingChun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Youtube size={14} className="text-gold" />
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-gold transition-colors">
                    YouTube Channel
                  </span>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-6">
                Send a Message
              </p>

              {status === "sent" ? (
                <div className="border border-gold/30 bg-ink-200 p-10 text-center">
                  <CheckCircle size={40} className="text-gold mx-auto mb-4" />
                  <h3 className="font-cinzel text-lg text-white tracking-wide mb-2">
                    Message Sent
                  </h3>
                  <p className="text-white/40 text-sm">
                    Thank you for reaching out. GM Lung will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-ink border border-ink-400 focus:border-gold/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-ink border border-ink-400 focus:border-gold/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-2">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-ink border border-ink-400 focus:border-gold/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                        placeholder="(XXX) XXX-XXXX"
                      />
                    </div>
                    <div>
                      <label className="block font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-2">
                        I&apos;m interested in
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-ink border border-ink-400 focus:border-gold/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="group">Group Classes</option>
                        <option value="private-1hr">Private Lesson (1 hr)</option>
                        <option value="private-90min">Private Lesson (90 min)</option>
                        <option value="children">Children&apos;s Program</option>
                        <option value="fma">Filipino Stick Fighting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-ink border border-ink-400 focus:border-gold/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-white/20"
                      placeholder="Tell us about your experience level, goals, or any questions you have..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400/70 text-xs">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-gold flex items-center gap-3 disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={13} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-ink border-t border-ink-400">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="text-center mb-10">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-2">
              Location
            </p>
            <h2 className="font-cinzel text-2xl font-bold text-white tracking-wide">
              Find <span className="text-gold">Us</span>
            </h2>
            <p className="text-white/40 text-sm mt-2">
              5614 Rosemead Blvd, Temple City, CA 91780
            </p>
          </div>
          <div className="border border-ink-400 overflow-hidden" style={{ height: "420px" }}>
            <iframe
              title="Franco Lung Wing Chun Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=5614+Rosemead+Blvd+Temple+City+CA+91780&output=embed&z=15"
            />
          </div>
        </div>
      </section>
    </>
  );
}
