"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Head from "next/head"
import { notFound } from "next/navigation"
import { registerServiceWorker } from "../pwa"
import { fetchPostBySlug } from "@/lib/actions"

export default function ClientBlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPost() {
      const postData = await fetchPostBySlug(params.slug)
      if (!postData) {
        notFound()
      }
      setPost(postData)
      setLoading(false)
    }

    loadPost()

    // Register service worker for PWA
    registerServiceWorker()
  }, [params.slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-6 h-6 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin dark:border-neutral-700 dark:border-t-neutral-300"></div>
      </div>
    )
  }

  if (!post) return notFound()

  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Om Preetham Bandi",
    },
    publisher: {
      "@type": "Person",
      name: "Om Preetham Bandi",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://logs.ompreetham.com/${post.slug}`,
    },
  }

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
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
            <Link
              href="/"
              className="inline-block mb-12 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
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
            className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-normal prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-neutral-600 prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-p:text-neutral-300 dark:prose-a:text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </main>
    </>
  )
}
