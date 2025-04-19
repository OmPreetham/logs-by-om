'use server'

import { getAllPosts, getPostBySlug } from './mdx'

export async function fetchAllPosts() {
  try {
    return await getAllPosts()
  } catch (error) {
    console.error('Error in fetchAllPosts:', error)
    return []
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    console.log(`[Server Action] Fetching post with slug: "${slug}"`)

    if (!slug) {
      console.error('[Server Action] No slug provided to fetchPostBySlug')
      return null
    }

    // Sanitize the slug to prevent directory traversal attacks
    const sanitizedSlug = slug.replace(/[^\w-]/g, '')
    if (sanitizedSlug !== slug) {
      console.error(
        `[Server Action] Invalid slug format: "${slug}" (sanitized to "${sanitizedSlug}")`
      )
      return null
    }

    const post = await getPostBySlug(sanitizedSlug)

    if (!post) {
      console.error(
        `[Server Action] Post not found for slug: "${sanitizedSlug}"`
      )
    } else {
      console.log(
        `[Server Action] Successfully fetched post for slug: "${sanitizedSlug}"`
      )
    }

    return post
  } catch (error) {
    console.error(
      `[Server Action] Error in fetchPostBySlug for slug "${slug}":`,
      error
    )
    return null
  }
}
