"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            DM
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="mailto:contact@destumuktar.com">Hire Me</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="mailto:contact@destumuktar.com">Hire Me</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
