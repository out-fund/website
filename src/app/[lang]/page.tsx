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

  console.log("page-data", page.data)

  return {
    title: page.data.title,
  }
}

// export async function generateStaticParams() {
//   const client = createClient()
//   const pages = await client.getAllByType("page", { lang: "*" })
//   // console.log(pages)

//   return pages.map((page) => {
//     return {
//       uid: page.uid,
//       lang: page.lang,
//     }
//   })
// }

// const locales = await getTranslatedLocales(page, client)
