import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import { LangProvider } from "./../utils/LangProvider"

import "./../styles/new/typography/font.css"

const ES = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("language-get-funded", "es")
  }, [])

  return (
    <GlobalLayout pt={pt}>
      <LangProvider langKey="es">
        {!simpleNavbar && !noNavbar && <Navbar lang="es" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="es" />}
        {children}
        {!noFooter && <Footer lang="es" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default ES
