"use client"

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CardSkeleton } from "@/components/CardSkeleton"

// export const metadata: Metadata = {
//   title: "Gallery - Destu Muktar",
//   description:
//     "Photo gallery showcasing Destu Muktar's work, projects, and community engagement in agriculture and development.",
//   openGraph: {
//     title: "Gallery - Destu Muktar",
//     description:
//       "Photo gallery showcasing Destu Muktar's work, projects, and community engagement in agriculture and development.",
//     type: "website",
//     locale: "en_US",
//     url: "https://destumuktar.com/gallery",
//     siteName: "Destu Muktar Portfolio",
//   },
// }

interface GalleryImage {
  _id: string
  title: string
  description: string
  imageUrl: string
}

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://destu-backend.vercel.app/api/images")
        if (!res.ok) {
          throw new Error("Failed to fetch images")
        }
        const data = await res.json()
        setGalleryImages(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Gallery Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore moments of impact and community engagement through our visual journey
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item) => (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-80 w-full overflow-hidden bg-muted">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
