import { getAlternates } from "@/i18n-config"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: "Contact Us",
    description: "Funding for your business",
    alternates: getAlternates("contact-us", params.locale),
  }
}

const ContactUsPage = () => {
  return (
    <main>
      <h1>Contact us</h1>
    </main>
  )
}

export default ContactUsPage
