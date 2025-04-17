"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { blogPosts } from "@/lib/data"

async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(process.cwd(), "content", `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Parse the markdown file with gray-matter
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content)

    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      date: data.date,
      content: contentHtml,
    }
  } catch (error) {
    // If the file doesn't exist, return the sample data
    const post = blogPosts.find((post) => post.slug === slug)
    if (!post) return null

    return {
      slug,
      title: post.title,
      date: post.date,
      content: "<p>This is sample content. In a real application, this would be loaded from a markdown file.</p>",
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPost() {
      const postData = await getPostBySlug(params.slug)
      if (!postData) {
        notFound()
      }
      setPost(postData)
      setLoading(false)
    }

    loadPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-6 h-6 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!post) return notFound()

  return (
    <main className="flex-1 flex flex-col items-center px-4 py-16 md:py-24">
      <motion.div
        className="w-full max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link href="/" className="inline-block mb-12 text-neutral-400 hover:text-neutral-600 transition-colors">
            ← back
          </Link>
        </motion.div>

        <motion.header
          className="mb-12"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight mb-3">{post.title}</h1>
          <p className="text-sm text-neutral-400">{post.date}</p>
        </motion.header>

        <motion.article
          className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-normal prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-neutral-600 prose-a:no-underline hover:prose-a:underline"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </main>
  )
}
