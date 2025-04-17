import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

// Font setup
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "personal logs",
    template: "%s | personal logs",
  },
  description: "A minimalist personal blog by Om Preetham Bandi",
  metadataBase: new URL("https://logs.ompreetham.com"),
  authors: [{ name: "Om Preetham Bandi" }],
  creator: "Om Preetham Bandi",
  publisher: "Om Preetham Bandi",
  keywords: ["blog", "minimalist", "personal", "writing", "thoughts", "Om Preetham Bandi"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logs.ompreetham.com",
    title: "personal logs",
    description: "A minimalist personal blog by Om Preetham Bandi",
    siteName: "personal logs",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "personal logs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "personal logs",
    description: "A minimalist personal blog by Om Preetham Bandi",
    images: ["/logo.jpg"],
    creator: "@ompreetham",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "personal logs",
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  )
}


import './globals.css'