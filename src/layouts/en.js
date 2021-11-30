import * as React from "react"
import Layout from "./index"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const EN = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Navbar />
      {children}
      <Footer />
    </Layout>
  )
}

export default EN
