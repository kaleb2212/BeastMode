import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter, Geist_Mono, Source_Serif_4 } from 'next/font/google'

import "./globals.css"

const SITE_URL = "https://beastmodetechnologies.et"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BeastMode Technologies | ICT & CCTV Security Solutions in Addis Ababa",
    template: "%s | BeastMode Technologies"
  },
  description: "Premier ICT and Security solution provider in Addis Ababa, Ethiopia. Specializing in CCTV surveillance installation, enterprise networking, industrial alarm systems, and managed ICT support for businesses in Ethiopia.",
  keywords: ["CCTV Installation Addis Ababa", "ICT Support Ethiopia", "Networking Solutions Addis Ababa", "Security Systems Ethiopia", "Alarm Systems Addis Ababa", "BeastMode Technologies", "Surveillance Systems Ethiopia", "CCTV Addis Ababa", "IT Support Addis Ababa"],
  authors: [{ name: "BeastMode Technologies" }],
  creator: "BeastMode Technologies",
  publisher: "BeastMode Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "BeastMode Technologies",
    title: "BeastMode Technologies | Local ICT & CCTV Specialists in Addis Ababa",
    description: "Expert ICT and Security solutions for homes and businesses in Addis Ababa, Ethiopia. CCTV, Networking, and more.",
    images: [
      {
        url: "/beastmode-logo.png",
        width: 1200,
        height: 630,
        alt: "BeastMode Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeastMode Technologies | ICT & Security Solutions",
    description: "Enterprise-grade ICT and Security protection for your assets.",
    images: ["/beastmode-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Initialize fonts
const _inter = Inter({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _geistMono = Geist_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _sourceSerif_4 = Source_Serif_4({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
