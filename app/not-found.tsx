"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { registerServiceWorker } from "./pwa"

export default function NotFound() {
  useEffect(() => {
    // Register service worker for PWA
    registerServiceWorker()
  }, [])

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <motion.div
        className="w-full max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">404</h1>
          <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block py-2 px-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors rounded"
          >
            Return home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
