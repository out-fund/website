import Link from "next/link"

export default function NotFound() {
  return (
    <html>
      <body>
        <h2>Page not Found</h2>
        <Link href="/">Return Home</Link>
      </body>
    </html>
  )
}
