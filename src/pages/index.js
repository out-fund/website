import * as React from "react"
import Lang from "../layouts/en"
import Hero from "../components/Hero"

const IndexPage = (props) => {
  return (
    <Lang location={props.location}>
      <Hero /> {/* TODO Add language props */}
    </Lang>
  )
}

export default IndexPage
