import { MetadataRoute } from "next";

const BASE_URL = "https://thecribmurree.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      // Travel/search crawlers we explicitly want on the photos
      { userAgent: "Googlebot-Image", allow: "/" },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/image-sitemap.xml`],
    host: BASE_URL,
  };
}
