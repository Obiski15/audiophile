import type { Metadata } from "next"
import { Manrope } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ConvexClientProvider } from "@/providers/ConvexClientProvider"

import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Shop trusted gadgets and smart tech",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} no_scrollbar antialiased`}>
        <ConvexClientProvider>
          <Header />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  )
}
