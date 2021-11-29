import * as React from "react"

const Layout = ({ children, location }) => {
  // console.log("test", location)
  return (
    <>
      <p>Helmet</p>
      {children}
    </>
  )
}

export default Layout
