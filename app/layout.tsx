import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"

import PageTransitionWrapper from "@/components/PageTransitionWrapper"
import PageLoader from "@/components/PageLoader"
import { PageLoaderProvider } from "@/components/PageLoaderContext"
import { Toaster } from "react-hot-toast"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`min-h-screen relative font-sans pt-16 lg:pt-20 ${GeistSans.variable} ${GeistMono.variable}`}>
        <PageLoaderProvider>
          <PageLoader />
          <PageTransitionWrapper>{children}</PageTransitionWrapper>

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 5000,
              style: { border: "none", padding: 0, background: "transparent" },
              success: { icon: "✅" },
              error: { icon: "❌" },
            }}
          />
        </PageLoaderProvider>

        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
