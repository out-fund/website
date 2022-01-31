import React from "react"
import { graphql } from "gatsby"

import {
  HeroSimple,
  SectionFeaturedCards,
  SectionOtherBrands,
  Main,
  SeoComponent,
} from "./../../components"

import LangLayout from "./../../layouts/en"

const SuccessStories = ({ data }) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Success Stories"
        description="Founders and how Outfund helped them succeed"
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
  query successStories {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/success-stories/" }
        frontmatter: { language: { regex: "/en-GB/" } }
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
    successStoriesJson(language: { regex: "/en-GB/" }) {
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
