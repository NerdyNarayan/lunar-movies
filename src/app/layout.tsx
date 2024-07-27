import "@/styles/globals.css"

import { type Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import SiteHeader from "@/components/header/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}{" "}
        </ThemeProvider>
      </body>
    </html>
  )
}
