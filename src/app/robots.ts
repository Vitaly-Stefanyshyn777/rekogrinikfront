import type { MetadataRoute } from "next";

// Served at /robots.txt. /_next/ stays open: Google needs the CSS and JS
// there to render the pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://rekogrinik.cz/sitemap.xml",
  };
}
