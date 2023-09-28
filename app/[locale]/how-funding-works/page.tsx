import { getAlternates } from "@/i18n-config"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: "How funding works",
    description: "Funding for your business",
    alternates: getAlternates("how-funding-works", params.locale),
  }
}

const AboutUsPage = () => {
  return (
    <main>
      <h1>How funding works</h1>
      <p>Lasdfasdfas</p>
    </main>
  )
}

export default AboutUsPage
