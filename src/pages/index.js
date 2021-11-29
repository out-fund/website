import * as React from "react"
import Lang from "../layouts/en"

const IndexPage = (props) => {
  return (
    <Lang location={props.location}>
      <h1>Hello World</h1>
      <p>Testing git</p>
    </Lang>
  )
}

export default IndexPage
