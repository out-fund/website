//
// Homepage only page
//

import { Metadata } from "next"
import { SliceZone } from "@prismicio/react"
import { notFound } from "next/navigation"

import { createClient } from "@/prismicio"
import { components } from "@/slices"

// import { GetStaticPropsContext } from "next"

type PageProps = {
  params: {
    lang: string
  }
}

export default async function Page({ params }: PageProps) {
  const client = createClient()
  const page = await client
    .getByUID("page", "home", { lang: params.lang })
    .catch(() => notFound())

  return <SliceZone slices={page.data.slices} components={components} />
}

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient()
//   const page = await client.getSingle("home_page")

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   }
// }

export async function generateMetadata({ params }: PageProps) {
  const client = createClient()
  const page = await client.getByUID("page", "home", { lang: params.lang })

  return {
    metadataBase: new URL("https://acme.com"),
    title: `${page.data.title} | Outfund`,
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
//   const pages = await client.getAllByType("page", { lang: "*" })

//   return pages.map((page) => {
//     return {
//       uid: page.uid,
//       lang: page.lang,
//     }
//   })
// }

// const locales = await getTranslatedLocales(page, client)
