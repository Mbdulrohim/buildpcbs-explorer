import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://buildpcbs.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog",
          "/career",
          "/documentation",
          "/faq",
          "/help-center",
          "/pricing",
          "/privacy",
          "/resources",
          "/terms",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/temp/",
          "/tmp/",
          "/cache/",
          "/logs/",
          "*.json",
          "*.xml",
          "/search?",
          "?*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Slurp",
        allow: "/",
        crawlDelay: 2,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        crawlDelay: 5,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        crawlDelay: 2,
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
