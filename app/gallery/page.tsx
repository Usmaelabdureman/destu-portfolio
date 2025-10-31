import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Gallery - Destu Muktar",
  description:
    "Photo gallery showcasing Destu Muktar's work, projects, and community engagement in agriculture and development.",
  openGraph: {
    title: "Gallery - Destu Muktar",
    description:
      "Photo gallery showcasing Destu Muktar's work, projects, and community engagement in agriculture and development.",
    type: "website",
    locale: "en_US",
    url: "https://destumuktar.com/gallery",
    siteName: "Destu Muktar Portfolio",
  },
}

const galleryImages = [
  {
    id: 1,
    title: "Community Engagement",
    description: "Working with local farmers",
    image: "/agricultural-community-engagement.jpg",
  },
  {
    id: 2,
    title: "Field Research",
    description: "Conducting agricultural research",
    image: "/agricultural-field-research.jpg",
  },
  {
    id: 3,
    title: "Training Workshop",
    description: "Leading farmer training session",
    image: "/agricultural-training-workshop.jpg",
  },
  {
    id: 4,
    title: "Sustainable Farming",
    description: "Promoting sustainable practices",
    image: "/sustainable-farm.png",
  },
  {
    id: 5,
    title: "Community Impact",
    description: "Making a difference in agriculture",
    image: "/agricultural-community-impact.jpg",
  },
  {
    id: 6,
    title: "Innovation in Agriculture",
    description: "Modern farming techniques",
    image: "/modern-agricultural-innovation.jpg",
  },
]

export default function Gallery() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-80 w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
