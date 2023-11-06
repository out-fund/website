import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const ES = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "es", { domain: "out.fund" })
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
