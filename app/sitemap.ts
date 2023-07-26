import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://out.fund",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://out.fund/about-us/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://out.fund/blog/",
      lastModified: new Date().toISOString(),
    },
  ]
}
