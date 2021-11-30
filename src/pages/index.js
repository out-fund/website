import * as React from "react"
import Lang from "../layouts/en"
import Hero from "../components/Hero"
import SectionContainer from "../components/SectionContainer"

const IndexPage = (props) => {
  return (
    <Lang location={props.location}>
      <Hero /> {/* TODO Add language props */}
      <SectionContainer
        title="We funded brands like yours"
        subtitile="We build you a unique deal based on your track record and success. Repayments are automatically made from a pre-agreed."
      >
        {/* <WeFunded /> */}
        test
      </SectionContainer>
    </Lang>
  )
}

export default IndexPage
