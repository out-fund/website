import React from "react"
import { graphql } from "gatsby"

import EnLayout from "layouts/en"
import {
  HeroAbout,
  SectionWeAreInvesting,
  Stats,
  SectionFoundersCompanies,
  SectionLatestNews,
  SectionJoinUs,
  SectionRegulated,
} from "components"
import { W } from "styles"

const AboutUs = (props) => {
  return (
    <EnLayout>
      <HeroAbout data={props.data.aboutUsJson.hero} />
      <W.Main>
        <Stats stats={props.data.aboutUsJson.stats} />
        <SectionWeAreInvesting data={props.data.aboutUsJson.weInvesting} />
        <SectionFoundersCompanies data={props.data.aboutUsJson.companies} />
        <SectionLatestNews data={props.data.aboutUsJson.latestNews} />
        <SectionJoinUs data={props.data.aboutUsJson.joinUs} />
        <SectionRegulated data={props.data.trustJson} />
      </W.Main>
    </EnLayout>
  )
}

export default AboutUs

export const query = graphql`
  query AboutPage {
    aboutUsJson(language: { regex: "/en-GB/" }) {
      hero {
        title
        description
        imageAlt
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      stats {
        stat
        text
      }
      weInvesting {
        btn
        btnUrl
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        description
        title
      }
      companies {
        title
        btn
        btnUrl
        cards {
          company
          imageAlt
          logo
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        logos
      }
      joinUs {
        imageAlt
        description
        title
        btn
        btnUrl
        image {
          childImageSharp {
            gatsbyImageData
          }
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
      statement
      description
      blocks {
        title
        icon
        text
      }
    }
  }
`
