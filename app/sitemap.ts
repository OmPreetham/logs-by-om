import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/mdx"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const postEntries = posts.map((post) => ({
    url: `https://logs.ompreetham.com/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: "https://logs.ompreetham.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ]
}
