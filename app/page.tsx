"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import { fetchAllPosts } from "@/lib/actions"
import { registerServiceWorker } from "./pwa"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [posts, setPosts] = useState<Array<{ slug: string; title: string; date: string }>>([])

  useEffect(() => {
    setMounted(true)
    // Get posts on the client side
    const fetchPosts = async () => {
      const allPosts = await fetchAllPosts()
      setPosts(allPosts)
    }
    fetchPosts()

    // Register service worker for PWA
    registerServiceWorker()
  }, [])

  if (!mounted) return null

  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "personal logs",
    description: "A minimalist personal blog by Om Preetham Bandi",
    url: "https://logs.ompreetham.com",
    author: {
      "@type": "Person",
      name: "Om Preetham Bandi",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: `https://logs.ompreetham.com/${post.slug}`,
    })),
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
          transition={{ duration: 0.8 }}
        >
          <motion.header
            className="mb-16 md:mb-24"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="inline-block">
              <h1 className="text-2xl md:text-3xl font-serif tracking-tight">logs</h1>
            </Link>
          </motion.header>

          <section>
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/${post.slug}`}
                  className="block py-6 border-b border-neutral-100 group dark:border-neutral-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="text-sm text-neutral-400 font-light md:w-24">{post.date}</span>
                    <h2 className="text-lg md:text-xl font-serif group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </section>
        </motion.div>
      </main>
    </>
  )
}
