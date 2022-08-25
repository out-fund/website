import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const EN = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "gb", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 <b>Outfund raises £115</b> million in series A investment and commits to a further <b>£500 million of lending to e-commerce firms this year!</b>"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Read More"
        />
      )}
      {/* {!noNavbar && (
        <NewsBar
          text="🎉 Outfund raises £115 million in series A investment and commits to a further £500 million of lending to e-commerce firms this year!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Read More"
        />
      )} */}

      <LangProvider langKey="en">
        {!simpleNavbar && !noNavbar && <Navbar lang="en" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="en" />}
        {children}
        {!noFooter && <Footer lang="en" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default EN
