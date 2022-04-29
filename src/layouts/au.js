import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, Footer, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const AU = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund scores $200 million to loan over $600 million to e-commerce firms this year"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Read More"
        />
      )}
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
