import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "personal logs",
    short_name: "personal logs",
    description: "A minimalist personal blog by Om Preetham Bandi",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfcfc",
    theme_color: "#fcfcfc",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  }
}
