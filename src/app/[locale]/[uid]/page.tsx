import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { getTranslatedLocales } from "@/lib/getTranslatedLocales"

type Params = {
  uid: string
  lang: string
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient()

  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => notFound())

  const locales = await getTranslatedLocales(page, client)

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID("page", params.uid).catch(() => notFound())

  return {
    // title: page.data.meta_title,
    // description: page.data.meta_description,
    metadataBase: new URL("https://acme.com"),
    title: page.data.title,
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: "Next.js",
      description: "The React Framework for the Web",
      url: "https://nextjs.org",
      siteName: "Next.js",
      images: [
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  }
}

// export async function generateStaticParams() {
//   const client = createClient()
//   const pages = await client.getAllByType("page")

//   return pages.map((page) => {
//     return { uid: page.uid }
//   })
// }

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("page", { lang: "*" })

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    }
  })
}
