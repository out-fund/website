import React from "react"
import { graphql } from "gatsby"

import EnLayout from "layouts/en"
import { HeroSimple, SectionRegulated, HeroImage } from "components"
import { W } from "styles"

const Careers = (props) => {
  return (
    <EnLayout>
      <HeroSimple data={props.data.careersJson.hero} />
      <W.Main>
        <HeroImage data={props.data.careersJson.hero.image} />
        <SectionRegulated data={props.data.trustJson} />
      </W.Main>
    </EnLayout>
  )
}

export default Careers

export const query = graphql`
  query {
    careersJson(language: { regex: "/en-GB/" }) {
      hero {
        btnUrl
        btn
        description
        title
        stats {
          text
          stat
        }
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      coolPeople {
        btn
        btnUrl
        title
        people {
          description
          imageAlt
          name
          role
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      currentOpenings {
        btn
        btnUrl
        description
        title
        openings {
          location
          time
          title
        }
        openApplication {
          description
          email
          title
        }
      }
      inOffice {
        btn
        btnUrl
        description

        title
        blocks {
          icon
          text
        }
      }
      language
      seoKeywords
      seoTitle
      weGrow {
        description
        imageAlt
        title
        teamWorked {
          logos
          title
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      weValue {
        title
        blocks {
          text
          title
        }
      }
    }
    trustJson(language: { regex: "/en-GB/" }) {
      title
      statement
      description
      blocks {
        icon
        text
      }
    }
    officesJson(language: { regex: "/en-GB/" }) {
      offices {
        main {
          country
          firstLine
          secondLine
          title
        }
        world {
          list {
            country
            firstLine
            secondLine
          }
          title
        }
      }
      imageAlt
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
