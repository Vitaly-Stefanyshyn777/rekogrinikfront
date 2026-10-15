import type { MetadataRoute } from "next";
import { locationLinks, pageLinks, serviceLinks } from "@/components/layout/navLinks";

// Served at /sitemap.xml. Built from the same lists as the header and footer,
// so a service or location added to navLinks.ts lands here too. Pages kept
// out of Google (/dekujeme) are left out.
const SITE_URL = "https://rekogrinik.cz";

const paths = [
  pageLinks.home.href,
  pageLinks.services.href,
  ...serviceLinks.map((l) => l.href),
  pageLinks.locations.href,
  ...locationLinks.map((l) => l.href),
  pageLinks.process.href,
  pageLinks.realizace.href,
  pageLinks.reviews.href,
  pageLinks.contact.href,
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
  }));
}
