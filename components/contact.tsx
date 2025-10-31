"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-accent mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                I'm passionate about discussing sustainable agriculture, community development, and creating lasting
                impact. Reach out to collaborate or share your insights.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:destu@example.com"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
                <span>destu@example.com</span>
              </a>
              <div className="flex items-center gap-4 text-lg">
                <MapPin className="text-accent" size={24} />
                <span>Ethiopia</span>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="#" className="text-primary hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-semibold"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
