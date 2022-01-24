import React from "react"
import { graphql } from "gatsby"

import {
  HeroSimple,
  SectionFeaturedCards,
  SectionOtherBrands,
  Main,
} from "./../../components"

import LangLayout from "./../../layouts/en"

export const query = graphql`
  query usSuccessStories {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/success-stories/" }
        frontmatter: { language: { regex: "/en-US/" } }
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

const SuccessStories = ({ data }) => {
  // const { edges: successStories } = data.allMdx
  // console.log(data)
  return (
    <LangLayout>
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
