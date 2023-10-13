// export default function Home() {
//   return <main className="">test</main>
// }

import { Metadata } from "next"
// import { SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
// import { components } from "@/slices"

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle("home_page")

  return <main className="">{page.data.title}</main>

  // return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle("home_page")

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
