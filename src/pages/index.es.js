import * as React from "react"
import Lang from "../layouts/es"

const IndexPage = (props) => {
  return (
    <Lang location={props.location}>
      <h1>Hello Spain</h1>
      <p>Testing git</p>
    </Lang>
  )
}

export default IndexPage
