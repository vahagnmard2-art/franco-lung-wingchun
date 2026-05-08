"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { MapPin, Phone, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const FORM_ENDPOINT = "/api/contact";

const schema = z.object({
  name:     z.string().min(2, "Please enter your full name."),
  email:    z.string().email("Please enter a valid email address."),
  phone:    z.string().optional(),
  interest: z.string(),
  message:  z.string().min(10, "Message must be at least 10 characters.").max(1000, "Message is too long."),
});

type FormData = z.infer<typeof schema>;

const INTEREST_LABELS: Record<string, string> = {
  group:          "Group Classes",
  "private-1hr":  "Private Lesson (60 min)",
  "private-90min":"Private Lesson (90 min)",
  children:       "Children's Program",
  fma:            "Filipino Stick Fighting",
  general:        "General Inquiry",
};

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "group" },
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name:     data.name,
          Email:    data.email,
          Phone:    data.phone || "Not provided",
          Interest: INTEREST_LABELS[data.interest] ?? data.interest,
          Message:  data.message,
          _subject: `Wing Chun Inquiry — ${data.name}`,
          _replyto: data.email,
          _honey:   "",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        toast.success("Message sent — GM Lung will be in touch soon.");
        trackEvent("form_submit", { form_name: "contact", interest: data.interest });
        reset();
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      console.error("[ContactForm] Submission error:", err);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full bg-ink border ${hasError ? "border-red-500/60" : "border-ink-400"} focus:border-gold/60 focus-visible:ring-1 focus-visible:ring-gold/60 text-white/80 text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/35`;

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#181818",
            border: "1px solid #2a2a2a",
            color: "#f0f0f0",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
          },
        }}
      />
      {/* Header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            <span className="text-gold">Contact</span> Us
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto mt-6">
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
              <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-6">
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
                    <p className="font-cinzel text-[10px] tracking-widest text-gold uppercase mb-1">Location</p>
                    <p className="text-sm text-white/75 group-hover:text-white/95 transition-colors leading-relaxed">
                      5614 Rosemead Blvd<br />Temple City, CA 91780
                    </p>
                  </div>
                </a>

                <a href="tel:+16262332882" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <Phone size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-cinzel text-[10px] tracking-widest text-gold uppercase mb-1">Phone</p>
                    <p className="text-sm text-white/75 group-hover:text-white/95 transition-colors">(626) 233-2882</p>
                  </div>
                </a>
              </div>

              <span className="gold-line-short mb-8" />

              <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-5 mt-8">
                Follow Us
              </p>
              <div className="space-y-4">
                {[
                  { href: "https://www.instagram.com/wingchunfrancolung", icon: Instagram, label: "@wingchunfrancolung" },
                  { href: "https://www.facebook.com/FrancoLung",          icon: Facebook,  label: "Franco Lung" },
                  { href: "https://www.youtube.com/@FrancoLungWingChun",  icon: Youtube,   label: "YouTube Channel" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-9 h-9 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                      <Icon size={14} className="text-gold" />
                    </div>
                    <span className="text-sm text-white/70 group-hover:text-gold transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-6">
                Send a Message
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gold uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Full name"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="text-red-400/80 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gold uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-400/80 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gold uppercase mb-2">
                      Phone (optional)
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      className={inputClass()}
                    />
                  </div>
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-widest text-gold uppercase mb-2">
                      I&apos;m interested in
                    </label>
                    <select {...register("interest")} className={inputClass()}>
                      <option value="group">Group Classes</option>
                      <option value="private-1hr">Private Lesson (60 min)</option>
                      <option value="private-90min">Private Lesson (90 min)</option>
                      <option value="children">Children&apos;s Program</option>
                      <option value="fma">Filipino Stick Fighting</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-cinzel text-[10px] tracking-widest text-gold uppercase">
                      Message *
                    </label>
                  </div>
                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Tell us about your experience level, goals, or any questions you have..."
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message ? (
                    <p className="text-red-400/80 text-xs mt-1">{errors.message.message}</p>
                  ) : null}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending…" : <><span>Send Message</span><Send size={13} /></>}
                  </button>
                  <p className="text-white/65 text-xs">We typically respond within 24 hours.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-ink border-t border-ink-400">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="text-center mb-10">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-2">Location</p>
            <h2 className="font-cinzel text-2xl font-bold text-white tracking-wide">
              Find <span className="text-gold">Us</span>
            </h2>
            <p className="text-white/70 text-sm mt-2">5614 Rosemead Blvd, Temple City, CA 91780</p>
          </div>
          <div className="border border-ink-400 overflow-hidden" style={{ height: "420px" }}>
            <iframe
              title="Franco Lung Wing Chun Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=5614+Rosemead+Blvd%2C+Temple+City%2C+CA+91780&z=15&output=embed&hl=en"
            />
          </div>
        </div>
      </section>
    </>
  );
}
