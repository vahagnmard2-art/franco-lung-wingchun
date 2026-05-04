import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grandmaster Franco Lung | Wing Chun Los Angeles",
    template: "%s | Franco Lung Wing Chun",
  },
  description:
    "Train with Grandmaster Franco Lung — over 50 years of Wing Chun mastery. Direct lineage from Hong Kong legends Wong Shun Leung and Wan Kam Leung. Classes in Temple City, CA.",
  keywords: [
    "Wing Chun",
    "martial arts",
    "Los Angeles",
    "Temple City",
    "Franco Lung",
    "kung fu",
    "self defense",
    "Sifu",
  ],
  openGraph: {
    title: "Grandmaster Franco Lung | Wing Chun Los Angeles",
    description:
      "Over 50 years of Wing Chun mastery. Direct lineage from Hong Kong's greatest masters.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MartialArtsSchool",
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
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "19:30", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "14:30", closes: "17:00" },
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${inter.variable} font-inter bg-ink text-neutral-100 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
