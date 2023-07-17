import Metadata from "next"

export const metadata: Metadata = {
  title: "Outfund",
  description: "Funding for your business",
}

const EnUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en-us">
      <body>{children}</body>
    </html>
  )
}

export default EnUsLayout
