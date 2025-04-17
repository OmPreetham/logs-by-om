"use server"

import { getAllPosts, getPostBySlug } from "./mdx"

export async function fetchAllPosts() {
  return getAllPosts()
}

export async function fetchPostBySlug(slug: string) {
  return getPostBySlug(slug)
}
