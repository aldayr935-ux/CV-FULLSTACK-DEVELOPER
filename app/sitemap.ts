import { MetadataRoute } from "next";

const BASE_URL = "https://omar-aldayr-fullstack-web-developer.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}