import * as React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "layouts/en"
import Hero from "components/Hero"
import Stats from "components/Stats"
// import SectionContainer from "components/SectionContainer"
// import Card from "components/Card"

const Careers = (props) => {
  console.log(props.data)
  const hero = props.data.careersYaml.hero
  return (
    <LangLayout location={props.location}>
      <header>
        <Hero
          variant="careers"
          title={hero.title}
          description={hero.description}
          image={hero.image}
          imageAlt={hero.imageAlt}
          cta={hero.cta}
          ctaUrl={hero.ctaUrl}
        />
        <Stats stats={hero.stats} />
      </header>

      <main></main>
    </LangLayout>
  )
}

export default Careers

export const query = graphql`
  query {
    careersYaml(language: { regex: "/en-GB/" }) {
      hero {
        ctaUrl
        cta
        description
        imageAlt
        title
        stats {
          text
          stat
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
