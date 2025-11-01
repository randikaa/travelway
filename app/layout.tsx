import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

import { ThemeProvider } from "@/components/theme-provider"
import { CurrencyProvider } from "@/lib/currency-context"

export const metadata: Metadata = {
  title: "TravelWay - Discover Your Next Adventure",
  description: "Explore the world with TravelWay - Premium travel experiences",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CurrencyProvider>{children}</CurrencyProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
