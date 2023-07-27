import { getAlternates } from "@/i18n-config"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: "About Us",
    description: "Funding for your business",
    alternates: getAlternates("about-us", params.locale),
  }
}

const AboutUsPage = () => {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas
        nulla quo accusantium. Ipsa perspiciatis, unde, officia consequuntur
        similique necessitatibus omnis minima recusandae tempora et architecto
        voluptatem at consectetur doloremque?
      </p>
    </main>
  )
}

export default AboutUsPage
