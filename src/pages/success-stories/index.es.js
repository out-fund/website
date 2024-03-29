import React from "react"
import { graphql } from "gatsby"

import {
  HeroSimple,
  SectionFeaturedCards,
  SectionOtherBrands,
  Main,
  SeoComponent,
} from "./../../components"

import LangLayout from "./../../layouts/es"

const SuccessStories = ({ data }) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Casos de éxito"
        description="Los fundadores y cómo Outfund les ayudó a triunfar"
      />
      <HeroSimple data={data.successStoriesJson.hero} />
      <Main>
        <SectionFeaturedCards data={data.allMdx.edges} />
        <SectionOtherBrands
          data={data.allMdx.edges}
          content={data.successStoriesJson.otherBrands}
        />
      </Main>
    </LangLayout>
  )
}

export default SuccessStories

export const query = graphql`
  query esSuccessStories {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/success-stories/" }
        frontmatter: { language: { regex: "/es-ES/" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            featured
            card {
              company
              logo
              tag {
                text
                color
              }
              btn {
                text
                url
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
          }
          slug
        }
      }
    }
    successStoriesJson(language: { regex: "/es-ES/" }) {
      hero {
        description
        title
      }
      otherBrands {
        title
        card {
          title
          btn {
            text
            url
          }
        }
      }
    }
  }
`
