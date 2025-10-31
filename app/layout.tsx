import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Destu Muktar | AgroEconomics Leader",
  description: "Cultivating change, one field at a time. Destu Muktar - AgroEconomics graduate, leader, and visionary.",
  keywords: ["Destu Muktar", "AgroEconomics", "Leader", "Visionary", "Agriculture", "Economics"],
  authors: [{ name: "Destu Muktar" }],
  generator: "v0.app",
  openGraph: {
    title: "Destu Muktar | AgroEconomics Leader",
    description:
      "Cultivating change, one field at a time. Destu Muktar - AgroEconomics graduate, leader, and visionary.",
    url: "https://destu-muktar.com",
    siteName: "Destu Muktar's Portfolio",
    images: [
      {
        url: "https://destu-muktar.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destu Muktar | AgroEconomics Leader",
    description:
      "Cultivating change, one field at a time. Destu Muktar - AgroEconomics graduate, leader, and visionary.",
    images: ["https://destu-muktar.com/twitter-og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
