import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "@/components/ScrollToTop";
import MobileCallBar from "@/components/MobileCallBar";
import LenisProvider from "@/components/LenisProvider";
import PageTransition from "@/components/PageTransition";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://francolungwingchun.com"),
  title: {
    default: "Grandmaster Franco Lung | Wing Chun Los Angeles",
    template: "%s | Franco Lung Wing Chun",
  },
  description:
    "Train with Grandmaster Franco Lung — over 50 years of Wing Chun mastery. Direct lineage from Hong Kong legends Wong Shun Leung and Wan Kam Leung. Classes in Temple City, CA.",
  keywords: [
    "Wing Chun",
    "Wing Chun Los Angeles",
    "Wing Chun Temple City",
    "martial arts Temple City CA",
    "kung fu Los Angeles",
    "Franco Lung",
    "Grandmaster Franco Lung",
    "Wing Chun classes near me",
    "self defense Los Angeles",
    "Sifu",
    "kids martial arts Temple City",
    "private martial arts lessons LA",
  ],
  openGraph: {
    title: "Grandmaster Franco Lung | Wing Chun Los Angeles",
    description:
      "Over 50 years of Wing Chun mastery. Direct lineage from Hong Kong's greatest masters.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/sifu-portrait.jpg",
        width: 1012,
        height: 1405,
        alt: "Grandmaster Franco Lung — Wing Chun Temple City, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grandmaster Franco Lung | Wing Chun Los Angeles",
    description:
      "Train with Grandmaster Franco Lung — over 50 years of Wing Chun mastery. Classes in Temple City, CA.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
};

// Schema.org — SportsActivityLocation is the correct type for martial arts schools
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Franco Lung Wing Chun",
  description:
    "Traditional Wing Chun Kung Fu school in Temple City, CA. Train with Grandmaster Franco Lung — direct lineage from Hong Kong's greatest masters.",
  url: "https://francolungwingchun.com",
  telephone: "+16262332882",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5614 Rosemead Blvd",
    addressLocality: "Temple City",
    addressRegion: "CA",
    postalCode: "91780",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0988,
    longitude: -118.0573,
  },
  priceRange: "$30-$70",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    reviewCount: "30",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:30", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "19:30", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "11:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday",    opens: "14:00", closes: "17:00" },
  ],
  sameAs: [
    "https://www.instagram.com/wingchunfrancolung",
    "https://www.facebook.com/FrancoLung",
    "https://www.youtube.com/@FrancoLungWingChun",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 — set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX in .env.local */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${cinzel.variable} ${inter.variable} font-inter bg-ink text-neutral-100 antialiased flex flex-col min-h-dvh`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:font-cinzel focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LenisProvider>
        <ScrollToTop />
        <MobileCallBar />
        <Analytics />
      </body>
    </html>
  );
}
