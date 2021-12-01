import React from "react"
import { graphql } from "gatsby"

import LangLayout from "../layouts/en"
import Hero from "../components/Hero"
import SectionContainer from "../components/SectionContainer"
import WeFunded from "../components/WeFunded"

const IndexPage = (props) => {
  return (
    <LangLayout location={props.location}>
      <Hero
        title={props.data.homepageYaml.hero.title}
        subtitle={props.data.homepageYaml.hero.subtitle}
        primaryBtn={props.data.homepageYaml.hero.primaryBtn}
        secondaryBtn={props.data.homepageYaml.hero.secondaryBtn}
        image={props.data.homepageYaml.hero.image}
        imageAlt={props.data.homepageYaml.hero.imageAlt}
      />
      <main>
        <SectionContainer
          title={props.data.homepageYaml.weFunded.title}
          subtitle={props.data.homepageYaml.weFunded.subtitle}>
          <WeFunded
            feel
            title={props.data.homepageYaml.weFunded.card.title}
            cite={props.data.homepageYaml.weFunded.card.cite}
            btn={props.data.homepageYaml.weFunded.card.btnText}
          />
        </SectionContainer>
      </main>
    </LangLayout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    homepageYaml(language: { eq: "en-GB" }) {
      language
      seoTitle
      hero {
        title
        subtitle
        primaryBtn
        secondaryBtn
        image {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              layout: CONSTRAINED
              placeholder: BLURRED
              backgroundColor: "#fff"
              quality: 90
            )
          }
        }
        imageAlt
      }
      weFunded {
        title
        subtitle
        card {
          title
          cite
          btnText
        }
      }
    }
  }
`
