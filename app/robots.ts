import { MetadataRoute } from "next";

const BASE_URL = "https://omar-aldayr-fullstack-web-developer.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}