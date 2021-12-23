import React from "react"
import { graphql } from "gatsby"

import {
  HeroSimple,
  SectionFeaturedCards,
  SectionOtherBrands,
} from "./../../components"

import EnLayout from "layouts/en"

const SuccessStories = ({ data }) => {
  // const { edges: successStories } = data.allMdx
  // console.log(data)
  return (
    <EnLayout>
      <main>
        <HeroSimple data={data.successStoriesJson.hero} />
        <SectionFeaturedCards data={data.allMdx.edges} />
        <SectionOtherBrands data={data.allMdx.edges} />
      </main>
    </EnLayout>
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
              title
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
    }
  }
`
