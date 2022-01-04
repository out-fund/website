import * as React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"

import "./../styles/new/typography/font.css"

const EN = ({ children }) => {
  return (
    <GlobalLayout>
      <Navbar lang={"en"} />
      {children}
      <Footer />
    </GlobalLayout>
  )
}

export default EN
