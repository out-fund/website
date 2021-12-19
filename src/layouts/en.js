import * as React from "react"
import GlobalLayout from "./GlobalLayout"
import Navbar from "components/Navbar"
import Footer from "components/Footer"

const EN = ({ children }) => {
  return (
    <GlobalLayout>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </GlobalLayout>
  )
}

export default EN
