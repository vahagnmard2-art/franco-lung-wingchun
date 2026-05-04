import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and media from Grandmaster Franco Lung's Wing Chun school in Temple City, CA.",
};

// ⚠️  Replace these placeholder items with actual images.
// Add your .jpg / .webp files to /public/images/ and update src accordingly.
// Example: { src: "/images/sifu-demo.jpg", alt: "GM Lung demonstrating Chi Sau", span: "col-span-2" }
const photos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  label: `Photo ${i + 1}`,
  wide: i === 0 || i === 5,
}));

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Media
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto mt-6">
            A glimpse into life at Franco Lung Wing Chun.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* Photo grid */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Instruction note — visible only in dev/edit mode. Remove before launch. */}
          <div className="mb-10 border border-gold/20 bg-ink-200 p-5 text-center">
            <p className="font-cinzel text-xs text-gold/60 tracking-wide mb-1">
              How to add photos
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              Add image files to{" "}
              <code className="text-gold/70 font-mono">/public/images/</code> then update{" "}
              <code className="text-gold/70 font-mono">app/gallery/page.tsx</code> to use{" "}
              <code className="text-gold/70 font-mono">next/image</code> components. Replace the
              placeholder divs below.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={`group relative bg-ink-200 border border-ink-400 hover:border-gold/30 transition-all duration-300 overflow-hidden ${
                  photo.wide ? "col-span-2" : ""
                }`}
                style={{ aspectRatio: photo.wide ? "2/1" : "1/1" }}
              >
                {/* Replace this entire div with next/image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-cinzel text-4xl text-gold/10 group-hover:text-gold/20 transition-colors">
                      ✦
                    </span>
                    <p className="font-cinzel text-[10px] text-white/20 tracking-widest mt-2">
                      {photo.label}
                    </p>
                  </div>
                </div>
                {/* Gold corner on hover */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/40 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/40 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-16 text-center">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-5">
              Follow Along
            </p>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              For the latest photos and videos, follow Grandmaster Lung on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/wingchunfrancolung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Instagram → @wingchunfrancolung
              </a>
              <a
                href="https://www.facebook.com/FrancoLung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Facebook → Franco Lung
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube teaser */}
      <section className="py-20 bg-ink text-center px-6">
        <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
          Video
        </p>
        <h2 className="font-cinzel text-2xl font-bold text-white tracking-wide mb-4">
          Watch GM Lung in <span className="text-gold">Action</span>
        </h2>
        <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed mb-8">
          Videos of GM Lung demonstrating Wing Chun techniques, Chi Sau, and his 3-level system
          are available on YouTube.
        </p>
        <a
          href="https://www.youtube.com/@FrancoLungWingChun"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Visit YouTube Channel
        </a>
        <p className="text-white/20 text-xs mt-4">
          ⚠️ Update the YouTube link above once you confirm the channel URL.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink-100 text-center px-6 border-t border-ink-400">
        <p className="text-white/40 text-sm mb-6">
          Interested in training? Classes are open to all levels.
        </p>
        <Link href="/contact" className="btn-gold">
          Contact Us to Get Started
        </Link>
      </section>
    </>
  );
}
