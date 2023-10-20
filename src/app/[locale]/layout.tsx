import type { Metadata } from "next"
import { createClient } from "@/prismicio"

import { worksans } from "@/lib/font"
import { convertLocaleToLang } from "@/lib/utils"
import cn from "@/lib/cn"
import "@/styles/globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient()
//   const globalSEO = await client.getSingle("global_seo")

//   return {
//     title: globalSEO.data.site_title || "Outfund Fallback",
//     description: globalSEO.data.meta_description || "",
//     openGraph: {
//       images: [globalSEO.data.og_image.url || ""],
//     },
//   }
// }

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  console.log(params)
  return (
    <html
      lang={convertLocaleToLang(params.locale)}
      className={cn(worksans.className)}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
