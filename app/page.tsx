import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
