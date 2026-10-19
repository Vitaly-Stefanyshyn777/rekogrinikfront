// Shared schema.org (JSON-LD) data. Every page refers to the company by
// BUSINESS_ID, so Google reads the business on all pages as one entity.

import { locationLinks } from "@/components/layout/navLinks";

export const SITE_URL = "https://rekogrinik.cz/";
export const BUSINESS_ID = `${SITE_URL}#business`;
export const WEBSITE_ID = `${SITE_URL}#website`;

// Rendered once for the whole site from the root layout.
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: "RekoGrinik s.r.o.",
  alternateName: "RekoGrinik",
  description:
    "Rekonstrukce bytů, domů a koupelen v Praze na klíč i jednotlivé práce: zednické, sádrokartonářské, malířské, podlahářské a bourací práce.",
  url: SITE_URL,
  logo: `${SITE_URL}vector-2.svg`,
  image: `${SITE_URL}new/koupelna-mramor-vana.webp`,
  telephone: "+420776352237",
  email: "rekogrinikcz@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Na Vackově 2895/5",
    postalCode: "130 00",
    addressLocality: "Praha 3",
    addressCountry: "CZ",
  },
  // Google Business Profile (same place as the footer map)
  hasMap: "https://www.google.com/maps?cid=1443832302751861014",
  areaServed: locationLinks.map((l) => l.label),
  sameAs: [
    "https://www.instagram.com/rekogrinik_s.r.o/",
    "https://www.facebook.com/people/Reko-Grinik/pfbid0q6E1En32P7nAGksiSXGWAVTnq6YLjTucb3ojg54P3kSZCKmREo9sy9J6nVtgPY2Ll/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "RekoGrinik",
  alternateName: "RekoGrinik s.r.o.",
  inLanguage: "cs-CZ",
  publisher: { "@id": BUSINESS_ID },
};

// The page itself, tied to the site and the business.
export function webPageSchema({
  type = "WebPage",
  url,
  name,
  description,
}: {
  type?: string;
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "cs-CZ",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
  };
}
