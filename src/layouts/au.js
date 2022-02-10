import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const AU = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      <LangProvider langKey="au">
        {!simpleNavbar && !noNavbar && <Navbar lang="en" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="en" />}
        {children}
        {!noFooter && <Footer lang="en" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default AU
