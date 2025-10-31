import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Destu Muktar | AgroEconomics Leader",
  description: "Cultivating change, one field at a time. Destu Muktar - AgroEconomics graduate, leader, and visionary.",
  generator: "v0.app",
  openGraph: {
    title: "Destu Muktar | AgroEconomics Leader",
    description:
      "Cultivating change, one field at a time. Destu Muktar - AgroEconomics graduate, leader, and visionary.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destu Muktar | AgroEconomics Leader",
    description:
      "Cultivating change, one field at a time. Destu Muktar - AgroEconomics graduate, leader, and visionary.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
