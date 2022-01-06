import React from "react"
import { graphql } from "gatsby"

import EnLayout from "layouts/en"

import {
  HeroSimple,
  Main,
  // SectionPartners,
  // SectionWhy,
} from "./../../components"

const B2B = (props) => {
  return (
    <EnLayout>
      <HeroSimple data={props.data.b2BJson.hero} />
      <Main>
        {/* <SectionPartners
          data={props.data.b2BJson.ourPartners}
          form={props.data.b2BJson.form}
        />
        <SectionWhy data={props.data.b2BJson.why} /> */}
      </Main>
    </EnLayout>
  )
}

export default B2B

export const query = graphql`
  query B2BQuerry {
    b2BJson {
      hero {
        description
        title
      }
      form {
        company
        email
        name
        title
        btn {
          text
          url
        }
      }
      ourPartners {
        description
        title
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
      }
      why {
        title
        blocks {
          description
          icon
          title
        }
      }
    }
  }
`
