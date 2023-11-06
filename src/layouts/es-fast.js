import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { NavbarFast, Footer } from "./../components"
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
        <NavbarFast lang="es" />
        {children}
        <Footer lang="es" />
      </LangProvider>
    </GlobalLayout>
  )
}

export default ES
