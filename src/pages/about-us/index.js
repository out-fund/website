import * as React from "react"
import { graphql } from "gatsby"

import LangLayout from "../../layouts/en"
import Hero from "../../components/Hero"
import Stats from "../../components/Stats"
// import SectionContainer from "../components/SectionContainer"
// import Card from "../components/Card"

const AboutUs = (props) => {
  console.log(props.data)
  const hero = props.data.aboutYaml.hero
  return (
    <LangLayout location={props.location}>
      <header>
        <Hero
          variant="about"
          title={hero.title}
          description={hero.description}
          image={hero.image}
          imageAlt={hero.imageAlt}
        />
        <Stats stats={hero.stats} />
      </header>

      <main></main>
    </LangLayout>
  )
}

export default AboutUs

export const query = graphql`
  query {
    aboutYaml(language: { regex: "/en-GB/" }) {
      hero {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        stats {
          stat
          text
        }
      }
      weInvesting {
        cta
        ctaUrl
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        description
        title
      }
    }
  }
`
