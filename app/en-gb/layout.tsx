import Metadata from "next"

export const metadata: Metadata = {
  title: "Outfund",
  description: "Funding for your business",
}

const EnGbLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en-gb">
      <body>{children}</body>
    </html>
  )
}

export default EnGbLayout
