import React from "react"
import { graphql } from "gatsby"

import EnLayout from "layouts/en"

import {
  HeroSimple,
  Main,
  SectionPartners,
  SectionWhy,
} from "./../../components"

const Partners = (props) => {
  return (
    <EnLayout>
      <HeroSimple data={props.data.partnersJson.hero} />
      <Main>
        <SectionPartners
          data={props.data.partnersJson.ourPartners}
          form={props.data.partnersJson.form}
        />
        <SectionWhy data={props.data.partnersJson.why} />
      </Main>
    </EnLayout>
  )
}

export default Partners

export const query = graphql`
  query PartnerQuerry {
    partnersJson {
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
          text
          icon
          title
        }
      }
    }
  }
`
