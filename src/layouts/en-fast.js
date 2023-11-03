import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { NavbarFast, Footer } from "./../components"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const EN = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "gb", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      <LangProvider langKey="en">
        <NavbarFast lang="en" />
        {children}
        <Footer lang="en" />
      </LangProvider>
    </GlobalLayout>
  )
}

export default EN
