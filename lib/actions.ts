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
    if (!slug) {
      console.error('No slug provided to fetchPostBySlug')
      return null
    }

    return await getPostBySlug(slug)
  } catch (error) {
    console.error(`Error in fetchPostBySlug for slug ${slug}:`, error)
    return null
  }
}
