import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL = "https://thecribmurree.com";
const GEO = { lat: 33.9072, lng: 73.3927 };
const PHONE = "+923065440665";
const SOCIALS = [
  "https://instagram.com/thecribmurree",
  "https://facebook.com/thecribmurree",
];

const DESCRIPTION =
  "Four boutique apartments to rent in Murree — 45 mins from Islamabad. Family-friendly holiday rentals with forest and mountain views, a game room, full kitchens and daily housekeeping.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "The Crib Murree — Boutique Apartments & Holiday Rentals in the Pines",
    template: "%s | The Crib Murree",
  },
  description: DESCRIPTION,
  keywords: [
    // brand
    "the crib Murree",
    "the crib",
    // core intent — apartments / rentals
    "apartments in Murree",
    "Murree apartments for rent",
    "holiday rental Murree",
    "vacation rental Murree",
    "serviced apartments Murree",
    "penthouse Murree",
    "furnished apartment Murree",
    // how people actually search
    "airbnb Murree",
    "Murree airbnb",
    "airbnb Pakistan",
    "hotels in Murree",
    "guest house Murree",
    "where to stay in Murree",
    "best place to stay in Murree",
    "Murree booking",
    "book apartment Murree",
    "Murree accommodation",
    "Murree resort",
    // audience & occasion
    "family stay Murree",
    "family apartment Murree",
    "group stay Murree",
    "honeymoon stay Murree",
    "weekend getaway from Islamabad",
    "Islamabad to Murree stay",
    // location modifiers
    "Murree Expressway stay",
    "stay near Chaaye Khaana Murree",
    "Murree Hills accommodation",
    "hillside apartments Murree",
    "forest view apartment Murree",
    "mountain view stay Murree",
    // quality modifiers
    "luxury stay Murree",
    "boutique hotel Murree",
    "holiday apartments Pakistan",
    "northern Pakistan stay",
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
    title: "The Crib Murree — Boutique Apartments & Holiday Rentals",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 800,
        alt: "The Crib — Boutique apartments to rent in Murree, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crib Murree — Boutique Apartments & Holiday Rentals",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "travel",
  other: {
    // Legacy geo tags — still read by some local/travel crawlers
    "geo.region": "PK-PB",
    "geo.placename": "Murree, Punjab, Pakistan",
    "geo.position": `${GEO.lat};${GEO.lng}`,
    ICBM: `${GEO.lat}, ${GEO.lng}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/** Rates and capacities — keep in step with lib/apartments.ts and Pricing.tsx */
const ACCOMMODATIONS = [
  {
    slug: "grand-suite",
    name: "The Grand Suite",
    description:
      "A three-bedroom corner apartment in Murree with two forest-view balconies, reserved game room access and a fully equipped kitchen. Sleeps 12.",
    bedrooms: 3,
    bathrooms: 3,
    sleeps: 12,
    price: 38000,
    image: "/apartments/corner/lounge/20260514_152558.jpg",
    amenities: ["Forest-View Balcony", "Game Room Access", "Full Kitchen", "Daily Housekeeping"],
  },
  {
    slug: "essentials-suite",
    name: "The Essentials Suite",
    description:
      "A one-bedroom Murree apartment for smaller families, with a fully furnished lounge, reading nook and private balcony. Easier on the pocket. Sleeps 4.",
    bedrooms: 1,
    bathrooms: 1,
    sleeps: 4,
    price: 25000,
    image: "/apartments/budget/lounge/20260514_132411.jpg",
    amenities: ["Furnished Lounge", "Reading Nook", "Private Balcony", "Full Kitchen", "Game Room Access"],
  },
  {
    slug: "prestige-suite",
    name: "The Prestige Suite",
    description:
      "A three-bedroom mountain-view residence in Murree with a private terrace, dining area and three balconies over the valley. Sleeps 12 with three complimentary floor mattresses.",
    bedrooms: 3,
    bathrooms: 3,
    sleeps: 12,
    price: 38500,
    image: "/apartments/prestige/terrace/1.jpg",
    amenities: ["Private Terrace", "Mountain & Valley Balconies", "Game Room Access", "UPS Power Backup"],
  },
  {
    slug: "penthouse-suite",
    name: "The Penthouse Suite",
    description:
      "A two-bedroom penthouse in Murree with a private rooftop terrace, two balconies and a lounge with Netflix. Sleeps 8 with two complimentary floor mattresses.",
    bedrooms: 2,
    bathrooms: 2,
    sleeps: 8,
    price: 34000,
    image: "/apartments/penthouse/lounge/1.jpg",
    amenities: ["Private Rooftop Terrace", "Two Balconies", "Netflix", "UPS Power Backup"],
  },
];

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
      sameAs: SOCIALS,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "reservations",
        email: "thecribmurree@gmail.com",
        telephone: PHONE,
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "The Crib Murree",
      description: DESCRIPTION,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-PK",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "The Crib Murree — Boutique Apartments & Holiday Rentals in the Pines",
      description: DESCRIPTION,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#lodging` },
      primaryImageOfPage: `${BASE_URL}/og-image.jpg`,
      inLanguage: "en-PK",
    },
    {
      "@type": ["LodgingBusiness", "ApartmentComplex"],
      "@id": `${BASE_URL}/#lodging`,
      name: "The Crib Murree",
      alternateName: [
        "The Crib",
        "The Crib Apartments Murree",
        "The Crib Murree Hills",
      ],
      description: DESCRIPTION,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: [
        `${BASE_URL}/og-image.jpg`,
        `${BASE_URL}/apartments/corner/lounge/20260514_152558.jpg`,
        `${BASE_URL}/apartments/prestige/terrace/1.jpg`,
        `${BASE_URL}/apartments/penthouse/lounge/1.jpg`,
      ],
      telephone: PHONE,
      email: "thecribmurree@gmail.com",
      sameAs: SOCIALS,
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Murree Expressway, above Chaaye Khaana",
        addressLocality: "Murree",
        addressRegion: "Punjab",
        postalCode: "47150",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${GEO.lat},${GEO.lng}`,
      areaServed: [
        { "@type": "City", name: "Murree" },
        { "@type": "City", name: "Islamabad" },
        { "@type": "City", name: "Rawalpindi" },
        { "@type": "City", name: "Lahore" },
      ],
      priceRange: "PKR 25,000–38,500 per night",
      currenciesAccepted: "PKR",
      numberOfRooms: 4,
      petsAllowed: false,
      smokingAllowed: false,
      checkinTime: "14:00",
      checkoutTime: "12:00",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Game Room", value: true },
        { "@type": "LocationFeatureSpecification", name: "High-Speed Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Full Kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Forest Views", value: true },
        { "@type": "LocationFeatureSpecification", name: "Mountain Views", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private Rooftop Terrace", value: true },
        { "@type": "LocationFeatureSpecification", name: "Daily Housekeeping", value: true },
        { "@type": "LocationFeatureSpecification", name: "Concierge", value: true },
        { "@type": "LocationFeatureSpecification", name: "Balcony", value: true },
        { "@type": "LocationFeatureSpecification", name: "UPS Power Backup", value: true },
        { "@type": "LocationFeatureSpecification", name: "Family Friendly", value: true },
      ],
      containsPlace: ACCOMMODATIONS.map((a) => ({
        "@type": "Accommodation",
        "@id": `${BASE_URL}/#${a.slug}`,
        name: a.name,
        description: a.description,
        image: `${BASE_URL}${a.image}`,
        numberOfBedrooms: a.bedrooms,
        numberOfBathroomsTotal: a.bathrooms,
        numberOfRooms: a.bedrooms,
        occupancy: {
          "@type": "QuantitativeValue",
          maxValue: a.sleeps,
          unitCode: "C62",
        },
        amenityFeature: a.amenities.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
      })),
      makesOffer: ACCOMMODATIONS.map((a) => ({
        "@type": "Offer",
        name: `${a.name} — per night`,
        itemOffered: { "@id": `${BASE_URL}/#${a.slug}` },
        priceCurrency: "PKR",
        price: a.price,
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/#pricing`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: a.price,
          priceCurrency: "PKR",
          unitCode: "DAY",
          unitText: "night",
        },
      })),
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
