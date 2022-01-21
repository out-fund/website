// import * as React from "react"
// import GlobalLayout from "./../layouts/GlobalLayout"
// import Navbar from "./../components/elements/Navbar"
// import "./../styles/new/typography/font.css"
// // import Footer from "components/Footer"

// const ES = ({ children, ...props }) => {
//   return (
//     <GlobalLayout {...props}>
//       <Navbar />
//       <main>{children}</main>
//       {/* <Footer /> */}
//     </GlobalLayout>
//   )
// }

// export default ES

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
        <Footer />
      </LangProvider>
    </GlobalLayout>
  )
}

export default ES
