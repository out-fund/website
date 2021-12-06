import * as React from "react"
import Layout from "./index"
import Navbar from "components/Navbar"
import Footer from "components/Footer"

const ES = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}

export default ES
