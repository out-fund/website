import "./../styles/new/typography/font.css"

import { Footer, NavbarBF } from "../components"
import React, { useEffect } from "react"

import Cookies from "js-cookie"
import GlobalLayout from "./GlobalLayout"
import { LangProvider } from "../utils/LangProvider"

const EnFf = ({ children, pt, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "gb", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      <LangProvider langKey="en">
        <NavbarBF lang="en" />
        {children}
        <Footer lang="en" />
      </LangProvider>
    </GlobalLayout>
  )
}

export default EnFf
