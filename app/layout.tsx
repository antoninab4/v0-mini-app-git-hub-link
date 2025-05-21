import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppProvider } from "@/context/app-context"
import { Notification } from "@/components/notification"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "АНО",
  description: "Web3 rewards and token application",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AppProvider>
            <Notification />
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
