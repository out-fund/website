import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About us",
  description: "Funding for your business",
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
