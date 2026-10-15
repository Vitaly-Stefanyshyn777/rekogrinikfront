import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO оптимізація
  trailingSlash: false,
  generateEtags: true,

  // Компресія
  compress: true,

  // Оптимізація зображень
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Заголовки безпеки та SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },

  // Редиректи для SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // The new homepage was built at /NEW before it replaced /
      {
        source: "/NEW",
        destination: "/",
        permanent: true,
      },
      // Old site addresses (listed in the old sitemap) -> matching new pages
      {
        source: "/services/apartment-renovation",
        destination: "/sluzby/rekonstrukce-bytu-praha",
        permanent: true,
      },
      {
        source: "/services/bathroom-renovation",
        destination: "/sluzby/rekonstrukce-koupelen-praha",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/sluzby",
        permanent: true,
      },
      {
        source: "/gallery/:path*",
        destination: "/realizace",
        permanent: true,
      },
      {
        source: "/contact/:path*",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },

  // Експериментальні функції для продуктивності
  experimental: {
    optimizePackageImports: ["@/components"],
  },

  // Webpack оптимізація
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      };
    }
    return config;
  },
};

export default nextConfig;
