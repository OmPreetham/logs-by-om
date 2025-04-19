import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  console.log('[Page] Generating static params for all posts')
  const paths = getAllPostSlugs()
  console.log(`[Page] Generated ${paths.length} static paths`)
  return paths
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  console.log(`[Page] Generating metadata for slug: "${params.slug}"`)

  // Validate slug
  if (!params.slug || typeof params.slug !== 'string') {
    console.error(
      `[Page] Invalid slug provided: ${JSON.stringify(params.slug)}`
    )
    return {
      title: 'Invalid Post',
      description: 'This post could not be found',
    }
  }

  const post = await getPostBySlug(params.slug)

  if (!post) {
    console.error(
      `[Page] Post not found for slug: "${params.slug}" during metadata generation`
    )
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found',
    }
  }

  console.log(`[Page] Successfully generated metadata for: "${post.title}"`)
  return {
    title: post.title,
    description: `${post.title} - A blog post by Om Preetham Bandi`,
    openGraph: {
      title: post.title,
      description: `${post.title} - A blog post by Om Preetham Bandi`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Om Preetham Bandi'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: `${post.title} - A blog post by Om Preetham Bandi`,
    },
  }
}

import ClientBlogPost from './ClientBlogPost'

export default function BlogPost({ params }: { params: { slug: string } }) {
  console.log(`[Page] Rendering BlogPost component for slug: "${params.slug}"`)
  return <ClientBlogPost params={params} />
}
