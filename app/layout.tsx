import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL = "https://thecribmurree.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The Crib · Murree Hills — A boutique stay in the pines",
    template: "%s | The Crib Murree",
  },
  description:
    "Two bespoke hillside apartments above Murree — open year-round for slow, quiet stays above the trees. Game room, forest views, daily housekeeping. 45 mins from Islamabad.",
  keywords: [
    "Murree stay",
    "boutique hotel Murree",
    "hillside apartments Murree",
    "luxury stay Murree",
    "Murree Hills accommodation",
    "Islamabad weekend getaway",
    "the crib Murree",
    "family stay Murree",
    "holiday apartments Pakistan",
    "Murree Expressway stay",
    "short stay near Murree",
    "bespoke apartments Pakistan",
  ],
  authors: [{ name: "The Crib Murree", url: BASE_URL }],
  creator: "The Crib Murree",
  publisher: "The Crib Murree",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "The Crib Murree",
    title: "The Crib · Murree Hills — A boutique stay in the pines",
    description:
      "Two bespoke hillside apartments above Murree. Open year-round for slow, quiet stays in the pines — 45 mins from Islamabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 800,
        alt: "The Crib — Boutique hillside apartments above Murree",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crib · Murree Hills — A boutique stay in the pines",
    description:
      "Two bespoke hillside apartments above Murree. Open year-round for slow, quiet stays in the pines — 45 mins from Islamabad.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "The Crib Murree",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logo.png`,
        contentUrl: `${BASE_URL}/logo.png`,
        width: 460,
        height: 460,
        caption: "The Crib Murree",
      },
      image: { "@id": `${BASE_URL}/#logo` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "reservations",
        email: "thecribmurree@gmail.com",
      },
    },
    {
      "@type": "LodgingBusiness",
      "@id": `${BASE_URL}/#lodging`,
      name: "The Crib Murree",
      description:
        "Two bespoke hillside apartments above Murree — open year-round for slow, quiet stays above the trees. Game room, forest views, daily housekeeping. 45 mins from Islamabad.",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Murree Expressway, above Chaaye Khaana",
        addressLocality: "Murree",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      priceRange: "PKR 25,000–38,000 per night",
      numberOfRooms: 2,
      checkinTime: "14:00",
      checkoutTime: "12:00",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Game Room", value: true },
        { "@type": "LocationFeatureSpecification", name: "High-Speed Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Full Kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Forest Views", value: true },
        { "@type": "LocationFeatureSpecification", name: "Daily Housekeeping", value: true },
        { "@type": "LocationFeatureSpecification", name: "Concierge", value: true },
        { "@type": "LocationFeatureSpecification", name: "Forest Balcony", value: true },
      ],
      containsPlace: [
        {
          "@type": "Accommodation",
          name: "The Grand Suite",
          description:
            "A three-bedroom corner apartment with forest-view balcony, game room access, and a fully equipped kitchen. Sleeps 9.",
          numberOfRooms: 3,
          occupancy: { "@type": "QuantitativeValue", maxValue: 9 },
          floorSize: { "@type": "QuantitativeValue", value: 3, unitCode: "BED" },
        },
        {
          "@type": "Accommodation",
          name: "The Essentials Suite",
          description:
            "A two-bedroom apartment ideal for family stays with forest views and all essential comforts. Sleeps 6.",
          numberOfRooms: 2,
          occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
        },
      ],
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,700;1,6..96,500;1,6..96,700&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
