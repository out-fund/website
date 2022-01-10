import * as React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

const EN = ({ children, simpleNavbar }) => {
  return (
    <GlobalLayout>
      {!simpleNavbar && <Navbar lang={"en"} />}
      {simpleNavbar && <SimpleNavbar lang={"en"} />}
      {children}
      <Footer />
    </GlobalLayout>
  )
}

export default EN
