import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/au"

import {
  HeroSimple,
  Main,
  SectionPartners,
  SectionWhy,
} from "./../../components"

const Partners = (props) => {
  return (
    <LangLayout>
      <HeroSimple data={props.data.partnersJson.hero} />
      <Main>
        <SectionPartners
          data={props.data.partnersJson.ourPartners}
          form={props.data.partnersJson.form}
          language="au"
        />
        <SectionWhy data={props.data.partnersJson.why} />
      </Main>
    </LangLayout>
  )
}

export default Partners

export const query = graphql`
  query auPartnerQuerry {
    partnersJson(language: { regex: "/en-AU/" }) {
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
