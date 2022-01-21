import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import { LangProvider } from "./../utils/LangProvider"

import "./../styles/new/typography/font.css"

const ES = ({ children, simpleNavbar, pt, noNavbar }) => {
  return (
    <GlobalLayout pt={pt}>
      <LangProvider langKey="es">
        {!simpleNavbar && !noNavbar && <Navbar lang="es" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="es" />}
        {children}
        <Footer lang="es" />
      </LangProvider>
    </GlobalLayout>
  )
}

export default ES
