import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/us"

import {
  HeroSimple,
  Main,
  SectionPartners,
  SectionWhy,
  SeoComponent,
} from "./../../components"

export const query = graphql`
  query usPartnerQuerry {
    partnersJson(language: { regex: "/en-US/" }) {
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

const Partners = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Partners"
        description="We're the US's largest eCommerce investor"
      />
      <HeroSimple data={props.data.partnersJson.hero} />
      <Main>
        <SectionPartners
          data={props.data.partnersJson.ourPartners}
          form={props.data.partnersJson.form}
          language="us"
        />
        <SectionWhy data={props.data.partnersJson.why} />
      </Main>
    </LangLayout>
  )
}

export default Partners
