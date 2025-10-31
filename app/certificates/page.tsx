import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Certificates & Credentials | Destu Muktar",
  description: "Professional certifications and credentials from leading institutions",
  openGraph: {
    title: "Certificates & Credentials | Destu Muktar",
    description: "Professional certifications and credentials from leading institutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates & Credentials | Destu Muktar",
    description: "Professional certifications and credentials from leading institutions",
  },
}

const certificates = [
  {
    title: "AgroEconomics Bachelor's Degree",
    issuer: "Agricultural University",
    year: "2022",
    description:
      "Comprehensive degree in agricultural economics with focus on sustainable farming practices and market analysis.",
  },
  {
    title: "Sustainable Agriculture Leadership",
    issuer: "International Agricultural Development Institute",
    year: "2023",
    description: "Advanced certification in sustainable agricultural practices and environmental stewardship.",
  },
  {
    title: "Agricultural Policy & Economics",
    issuer: "World Bank Institute",
    year: "2023",
    description:
      "Professional certificate in agricultural policy development and economic analysis for emerging markets.",
  },
  {
    title: "Digital Agriculture & Innovation",
    issuer: "Tech for Agriculture Initiative",
    year: "2024",
    description: "Certification in emerging digital technologies and innovation in modern agricultural systems.",
  },
  {
    title: "Community Development & Leadership",
    issuer: "Development Institute Africa",
    year: "2023",
    description: "Leadership training focused on community engagement and sustainable development practices.",
  },
  {
    title: "Environmental Management",
    issuer: "Green Future Academy",
    year: "2022",
    description: "Certification in environmental management and climate-smart agricultural practices.",
  },
]

export default function CertificatesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Certifications & Credentials</h1>
          <p className="text-lg text-foreground/70">
            Professional qualifications and continuous learning achievements that demonstrate expertise in agriculture,
            economics, and sustainable development.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{cert.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground/80">{cert.description}</p>
                  <p className="text-sm text-foreground/60 font-medium">Issued: {cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ready to work together?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="mailto:contact@destumuktar.com">Get In Touch</a>
            </Button>
            <Button variant="outline">
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
