import * as React from "react"
import GlobalLayout from "./index"
import Navbar from "components/Navbar"
import Footer from "components/Footer"

const ES = ({ children, ...props }) => {
  return (
    <GlobalLayout {...props}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </GlobalLayout>
  )
}

export default ES
