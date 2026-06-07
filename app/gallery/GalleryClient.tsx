"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Play, ArrowUpRight, ImageOff, ZoomIn } from "lucide-react";
import HeroParallax from "@/components/HeroParallax";
import { site } from "@/lib/site";

// Load lightbox JS only when first opened — not part of the initial page bundle
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  ),
});

const photos = [
  {
    src: "/images/sifu-action.jpg",
    alt: "GM Franco Lung demonstrating Wing Chun",
    wide: false,
    caption: "Grandmaster Lung",
  },
  {
    src: "/images/partner-training.jpg",
    alt: "GM Franco Lung training with a student",
    wide: true,
    caption: "Partner Training",
  },
  {
    src: "/images/class-training.jpg",
    alt: "Wing Chun class training",
    wide: false,
    caption: "Wing Chun Class in Action",
  },
  {
    src: "/images/certificate-ceremony.jpg",
    alt: "Student certificate ceremony",
    wide: false,
    caption: "Certificate Ceremony",
  },
  {
    src: "/images/student-certificate.jpg",
    alt: "Student receiving Wing Chun certificate from GM Lung",
    wide: false,
    caption: "Student Achievement",
  },
  {
    src: "/images/weapons-demo.jpg",
    alt: "GM Franco Lung demonstrating weapons technique",
    wide: false,
    caption: "Weapons Training",
  },
  {
    src: "/images/wooden-dummy.jpg",
    alt: "Students training with the wooden dummy at Franco Lung Wing Chun",
    wide: false,
    caption: "Wooden Dummy Training",
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
  {
    src: "/images/sifu-portrait.jpg",
    alt: "Grandmaster Franco Lung portrait",
    wide: false,
    caption: "Grandmaster Franco Lung",
  },
];

function PhotoCard({
  photo,
  index,
  onOpen,
}: {
  photo: (typeof photos)[0];
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(index);
        }
      }}
      aria-label={`View ${photo.caption} full size`}
      className={`group relative bg-ink-200 border border-ink-400 hover:border-gold/40 transition-all duration-300 overflow-hidden cursor-zoom-in ${
        photo.wide ? "sm:col-span-2" : ""
      }`}
      style={{ aspectRatio: photo.wide ? "2/1" : "1/1" }}
    >
      {/* Fallback icon — renders first so image paints on top when loaded */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ImageOff size={28} className="text-gold/10" aria-hidden="true" />
      </div>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={index < 2}
        quality={90}
        sizes={photo.wide ? "(max-width: 640px) 100vw, (max-width: 1280px) 66vw, 800px" : "(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 400px"}
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Caption + zoom overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10">
        <span className="font-cinzel text-[10px] tracking-widest text-gold uppercase">
          {photo.caption}
        </span>
        <ZoomIn size={16} className="text-gold/80" aria-hidden="true" />
      </div>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/0 group-hover:border-gold/60 transition-colors duration-300 z-10" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/0 group-hover:border-gold/60 transition-colors duration-300 z-10" />
    </div>
  );
}

export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <HeroParallax />
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
            Media
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto mt-6">
            A glimpse into life at Franco Lung Wing Chun. Click any photo to view full size.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* Photo grid */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <PhotoCard key={photo.src} photo={photo} index={i} onOpen={setLightboxIndex} />
            ))}
          </div>

          {/* Social links */}
          <div className="mt-16 text-center">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-5">
              Follow Along
            </p>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              For the latest photos and videos, follow Grandmaster Lung on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                Instagram {site.social.instagram.handle} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a
                href={site.social.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                Facebook {site.social.facebook.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube — cinematic card */}
      <section className="section-pad bg-ink">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-3">
              Video
            </p>
            <h2 className="font-cinzel text-2xl font-bold text-white tracking-wide">
              Watch GM Lung in <span className="text-gold">Action</span>
            </h2>
          </div>

          <a
            href={site.social.youtube.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden border border-ink-400 hover:border-gold/40 transition-colors duration-300"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Background photo */}
            <Image
              src="/images/sifu-action.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ opacity: 0.35 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
              <div className="w-16 h-16 rounded-full border-2 border-gold/60 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                <Play size={22} className="text-gold ml-1" />
              </div>
              <div className="text-center">
                <p className="font-cinzel text-white tracking-wide text-sm mb-1">
                  Franco Lung Wing Chun
                </p>
                <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase">
                  Watch on YouTube ↗
                </p>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/30 group-hover:border-gold/60 transition-colors" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/30 group-hover:border-gold/60 transition-colors" />
          </a>
        </div>
      </section>

      {/* Lightbox — only mounted when a photo is clicked */}
      {lightboxIndex >= 0 && (
        <Lightbox
          open={true}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
          plugins={[Zoom]}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 4,
            zoomInMultiplier: 2,
            doubleClickMaxStops: 2,
          }}
          render={{
            slide: ({ slide, rect }) => {
              const s = slide as SlideImage;
              return (
                <div style={{ position: "relative", width: rect.width, height: rect.height }}>
                  <Image
                    fill
                    alt={s.alt ?? ""}
                    src={s.src}
                    loading="eager"
                    draggable={false}
                    quality={90}
                    sizes="(min-width: 1920px) 1920px, 100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            },
          }}
          styles={{
            container: { backgroundColor: "rgba(8,8,8,0.97)" },
          }}
        />
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_#1e1400_0%,_#080808_70%)] relative overflow-hidden text-center px-6">
        <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 gold-line opacity-20" />
        <div className="max-w-xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
            Ready to <span className="text-gold">Train?</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Classes are open to all levels. Reach out to arrange a first visit with Grandmaster Lung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us to Get Started
            </Link>
            <Link href="/classes" className="btn-outline">
              View Classes &amp; Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
