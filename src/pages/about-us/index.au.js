import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/au"

import {
  Stats,
  SectionLatestNews,
  SectionRegulated,
  Main,
  HeroSimple,
  HeroImage,
  SectionAboutUs,
  SectionWeValue,
  SeoComponent,
} from "./../../components"

const AboutUs = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="About us"
        description="We're the Australia's largest eCommerce investor"
      />
      <HeroSimple data={props.data.aboutUsJson.hero} />
      <Main>
        <HeroImage data={props.data.aboutUsJson.hero.image} />
        <Stats data={props.data.aboutUsJson.stats} />
        <SectionLatestNews data={props.data.aboutUsJson.latestNews} />
        <SectionAboutUs data={props.data.aboutUsJson.aboutUs} white />
        <SectionWeValue data={props.data.aboutUsJson.weValue} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}

export default AboutUs

export const query = graphql`
  query auAboutPage {
    aboutUsJson(language: { regex: "/en-AU/" }) {
      hero {
        title
        description
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
      }
      stats {
        stat
        text
      }
      weValue {
        title
        blocks {
          text
          title
        }
      }
      weInvesting {
        btn {
          url
          text
        }
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
        description
        title
      }
      companies {
        title
        btn {
          text
          url
        }
        cards {
          company
          logo
          image {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        logos
      }
      joinUs {
        description
        title
        btn {
          url
          text
        }
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
      }
      aboutUs {
        buttons {
          primary {
            text
            url
          }
        }

        description
        title
        teamImages {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
        }
      }
      latestNews {
        title
        cards {
          logo
          company
          tag
          title
          url
        }
      }
    }
    trustJson(language: { regex: "/en-AU/" }) {
      title
      description
      blocks {
        title
        icon
        text
      }
    }
  }
`
