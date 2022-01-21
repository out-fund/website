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

import "./../styles/new/typography/font.css"

// const LangContext = React.createContext("es")

const ES = ({ children, simpleNavbar, pt, noNavbar }) => {
  return (
    <GlobalLayout pt={pt}>
      {!simpleNavbar && !noNavbar && <Navbar lang={"es"} />}
      {simpleNavbar && !noNavbar && <SimpleNavbar lang={"es"} />}
      {/* <LangContext>{children}</LangContext> */}
      {children}
      <Footer />
    </GlobalLayout>
  )
}

export default ES
