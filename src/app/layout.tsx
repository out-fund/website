import type { Metadata } from "next"
import { createClient } from "@/prismicio"

import { worksans } from "@/utils/font"
import cn from "@/utils/cn"
import "@/styles/globals.css"

import Header from "@/components/Header"

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const globalSEO = await client.getSingle("global_seo")

  // console.log(globalSEO.lang)

  return {
    title: globalSEO.data.site_title || "Outfund Fallback",
    description: globalSEO.data.meta_description || "",
    openGraph: {
      images: [globalSEO.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(worksans.className)}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
