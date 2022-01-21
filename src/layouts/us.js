import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

const EN = ({ children, simpleNavbar, pt, noNavbar }) => {
  return (
    <GlobalLayout pt={pt}>
      {!simpleNavbar && !noNavbar && <Navbar lang={"en"} />}
      {simpleNavbar && !noNavbar && <SimpleNavbar lang={"en"} />}
      {children}
      <Footer />
    </GlobalLayout>
  )
}

export default EN
