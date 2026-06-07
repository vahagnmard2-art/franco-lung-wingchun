import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import HeroParallax from "@/components/HeroParallax";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Franco Lung Wing Chun — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100dvh-72px)] bg-ink">
      <div className="page-hero text-center px-6">
        <HeroParallax />
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="Franco Lung Wing Chun"
            width={128}
            height={128}
            quality={100}
            priority
            className="mx-auto mb-6 drop-shadow-[0_0_20px_rgba(201,168,76,0.25)]"
          />
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
            Legal
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-white/60 text-sm mt-6">Last updated: May 2026</p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-white/75 text-sm leading-relaxed">

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              1. Who We Are
            </h2>
            <p>
              Franco Lung Wing Chun (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates the website at{" "}
              <a href={site.url} className="text-gold hover:text-gold-light transition-colors">{site.url}</a> and provides
              martial arts instruction at {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}.
              You can reach us at{" "}
              <a href={site.phone.href} className="text-gold hover:text-gold-light transition-colors">{site.phone.display}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              <span className="text-white font-semibold">Contact form submissions.</span> When you use the contact form on this
              site, we collect your name, email address, phone number (optional), and message. This data is transmitted to
              FormSubmit.co, a third-party email delivery service, and forwarded to our email inbox. We do not store form
              submissions in a database.
            </p>
            <p>
              <span className="text-white font-semibold">Usage analytics.</span> We use Google Analytics 4 to understand how
              visitors use this site. Google Analytics collects anonymized data including pages visited, time on site, device
              type, and approximate geographic location (city level). This data is processed by Google and is subject to
              Google&rsquo;s Privacy Policy. We do not use this data to identify individual visitors.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To respond to your inquiries about classes, enrollment, or private lessons.</li>
              <li>To improve the website based on aggregated usage patterns.</li>
              <li>We do not sell, rent, or share your personal information with third parties for marketing purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              <span className="text-white font-semibold">FormSubmit.co</span> processes contact form data to deliver emails
              to us. Their privacy policy is available at{" "}
              <span className="text-gold">formsubmit.co</span>.
            </p>
            <p>
              <span className="text-white font-semibold">Google Analytics 4</span> is provided by Google LLC. You can opt
              out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              5. Cookies
            </h2>
            <p>
              Google Analytics uses cookies to distinguish unique visitors and sessions. No other cookies are set by this
              website. You can manage or disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              6. Data Retention
            </h2>
            <p>
              Contact form inquiries received via email are retained for as long as necessary to respond to and fulfill your
              request. Google Analytics data is retained for 14 months as per our Analytics configuration.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2 list-disc list-inside mb-3">
              <li><span className="text-white">Access</span> — request a copy of the personal data we hold about you.</li>
              <li><span className="text-white">Deletion</span> — request that we delete your personal data.</li>
              <li><span className="text-white">Correction</span> — request that we correct inaccurate data.</li>
              <li><span className="text-white">Opt-out of sale</span> — we do not sell personal data.</li>
            </ul>
            <p>
              California residents have additional rights under the CCPA. EU/EEA residents have rights under the GDPR.
              To exercise any of these rights, contact us at{" "}
              <a href={site.phone.href} className="text-gold hover:text-gold-light transition-colors">{site.phone.display}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              8. Children&rsquo;s Privacy
            </h2>
            <p>
              This website is not directed at children under 13. We do not knowingly collect personal data from children.
              If you believe a child has submitted personal data through our contact form, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="font-cinzel text-lg font-bold text-white tracking-wide mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page
              reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the
              updated policy.
            </p>
          </div>

          <div className="border-t border-ink-400 pt-8">
            <p className="text-white/50 text-xs">
              Questions about this policy?{" "}
              <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">
                Contact us
              </Link>{" "}
              or call{" "}
              <a href={site.phone.href} className="text-gold hover:text-gold-light transition-colors">
                {site.phone.display}
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
