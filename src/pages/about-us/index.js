import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/en"

import {
  SectionWeAreInvesting,
  Stats,
  SectionFoundersCompanies,
  SectionLatestNews,
  SectionJoinUs,
  SectionRegulated,
  Main,
  HeroSimple,
  HeroImage,
} from "./../../components"

const AboutUs = (props) => {
  return (
    <LangLayout>
      <HeroSimple data={props.data.aboutUsJson.hero} />
      <Main>
        <HeroImage data={props.data.aboutUsJson.hero.image} />
        <Stats data={props.data.aboutUsJson.stats} />
        <SectionLatestNews data={props.data.aboutUsJson.latestNews} />
        <SectionWeAreInvesting data={props.data.aboutUsJson.weInvesting} />
        <SectionFoundersCompanies data={props.data.aboutUsJson.companies} />
        <SectionJoinUs data={props.data.aboutUsJson.joinUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}

export default AboutUs

export const query = graphql`
  query AboutPage {
    aboutUsJson(language: { regex: "/en-GB/" }) {
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
    trustJson(language: { regex: "/en-GB/" }) {
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
