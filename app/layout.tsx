import type React from "react"
import "./globals.css"
import { Poppins, Playfair_Display, Roboto } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
})

// Local custom fonts
const acehLight = localFont({
  src: "./fonts/Aceh-Light.ttf",
  variable: "--font-aceh",
  display: "swap",
  weight: "300"
})

const adelia = localFont({
  src: "./fonts/adelia.ttf",
  variable: "--font-adelia",
  display: "swap",
  weight: "400"
})

const velista = localFont({
  src: "./fonts/VELISTA.ttf",
  variable: "--font-velista",
  display: "swap",
  weight: "400"
})

export const metadata = {
  title: "Kathnicc - Luxury Interior Design",
  description: "Elevate your space with Kathnicc — where interior design meets artistry and refined living.",
  icons: {
    icon: "/first_letter.jpeg",
    apple: "/first_letter.jpeg",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preload" href="/fonts/Aceh-Light.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/adelia.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/VELISTA.ttf" as="font" type="font/ttf" crossOrigin="" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} ${roboto.variable} ${acehLight.variable} ${adelia.variable} ${velista.variable} font-aceh antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
