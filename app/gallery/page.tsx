"use client";

import Link from "next/link";

const photos = [
  {
    src: "/images/class-training.jpg",
    alt: "Wing Chun class training",
    wide: true,
    caption: "Wing Chun Class in Action",
  },
  {
    src: "/images/certificate-ceremony.jpg",
    alt: "Student certificate ceremony",
    wide: false,
    caption: "Student Achievement",
  },
  {
    src: "/images/team-group.jpg",
    alt: "Franco Lung Wing Chun team",
    wide: false,
    caption: "The Team",
  },
  {
    src: "/images/saturday-teen.jpg",
    alt: "Saturday Teen Wing Chun class",
    wide: true,
    caption: "Saturday Teen Class",
  },
];

function PhotoCard({ photo }: { photo: typeof photos[0] }) {
  return (
    <div
      className={`group relative bg-ink-200 border border-ink-400 hover:border-gold/40 transition-all duration-300 overflow-hidden ${
        photo.wide ? "col-span-2" : ""
      }`}
      style={{ aspectRatio: photo.wide ? "2/1" : "1/1" }}
    >
      {/* Real image — hides if file missing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
      {/* Fallback shown behind image (visible when image is missing) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-cinzel text-4xl text-gold/10">✦</span>
      </div>
      {/* Caption overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
        <span className="font-cinzel text-[10px] tracking-widest text-gold uppercase">
          {photo.caption}
        </span>
      </div>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/0 group-hover:border-gold/60 transition-colors duration-300 z-10" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/0 group-hover:border-gold/60 transition-colors duration-300 z-10" />
    </div>
  );
}

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo) => (
              <PhotoCard key={photo.src} photo={photo} />
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

      {/* YouTube */}
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
