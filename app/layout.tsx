import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

import { DM_Sans, Space_Mono, Source_Serif_4, DM_Sans as V0_Font_DM_Sans, Space_Mono as V0_Font_Space_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900","1000"], variable: '--v0-font-dm-sans' })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"], variable: '--v0-font-space-mono' })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"], variable: '--v0-font-source-serif-4' })
const _v0_fontVariables = `${_dmSans.variable} ${_spaceMono.variable} ${_sourceSerif_4.variable}`

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif-4",
})

export const metadata: Metadata = {
  title: "Burarecruiting - Express CV Delivery in Thailand | 24-48 Hours",
  description:
    "Find top talent in Thailand with 24-48 hour CV delivery. Expert HR professionals work with AI to source the best candidates from 7 major platforms. $1,800 USD per search.",
  generator: "v0.app",
  keywords: ["recruitment Thailand", "CV delivery", "hiring Thailand", "talent acquisition", "HR services Thailand"],
  authors: [{ name: "Burakorn Partners Co., Ltd." }],
  openGraph: {
    title: "Burarecruiting - Express CV Delivery in Thailand",
    description:
      "Find top talent in Thailand with 24-48 hour CV delivery. Expert HR + AI sourcing from 7 major platforms.",
    url: "https://burarecruiting.com",
    siteName: "Burarecruiting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Burarecruiting - Express CV Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burarecruiting - Express CV Delivery in Thailand",
    description: "Find top talent in Thailand with 24-48 hour CV delivery",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${dmSans.variable} ${spaceMono.variable} ${sourceSerif4.variable} font-sans antialiased ${_v0_fontVariables}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>{children}</LanguageProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
