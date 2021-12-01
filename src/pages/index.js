import React from "react"
import { graphql } from "gatsby"

import LangLayout from "../layouts/en"
import Hero from "../components/Hero"
import Hero from "../components/Hero"
import SectionContainer from "../components/SectionContainer"

const IndexPage = ({ data }) => {
  return (
    <LangLayout location={props.location}>
      <Hero
        title={props.pageContext.frontmatter.hero.title}
        subtitle={props.pageContext.frontmatter.hero.subtitle}
        primaryBtn={props.pageContext.frontmatter.hero.primaryBtn}
        secondaryBtn={props.pageContext.frontmatter.hero.secondaryBtn}
      />

      <main>
        <SectionContainer
          title={props.pageContext.frontmatter.weFunded.title}
          subtitile={props.pageContext.frontmatter.weFunded.subtitile}
        >
          <WeFunded
            feel
            title={props.pageContext.frontmatter.weFunded.card.title}
            cite={props.pageContext.frontmatter.weFunded.card.cite}
            btn={props.pageContext.frontmatter.weFunded.card.btnText}
          />
        </SectionContainer>
      </main>
    </LangLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
