import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: `${post.title} - A blog post by Om Preetham Bandi`,
    openGraph: {
      title: post.title,
      description: `${post.title} - A blog post by Om Preetham Bandi`,
      type: "article",
      publishedTime: post.date,
      authors: ["Om Preetham Bandi"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.title} - A blog post by Om Preetham Bandi`,
    },
  }
}

import ClientBlogPost from "./ClientBlogPost"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <ClientBlogPost params={params} />
}
