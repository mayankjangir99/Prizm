import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://prizm-design.in/sitemap.xml",
    host: "https://prizm-design.in",
  };
}