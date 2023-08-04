const CountrySelectorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // has to be en-GB as that the default locale
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  )
}

export default CountrySelectorLayout
