import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../../layouts/es"

import {
  HeroSimple,
  Main,
  SectionPartners,
  SectionWhy,
} from "./../../components"

const Partners = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Socias"
        description="Somos el mayor inversor de comercio electrónico de España"
      />
      <HeroSimple data={props.data.partnersJson.hero} />
      <Main>
        <SectionPartners
          data={props.data.partnersJson.ourPartners}
          form={props.data.partnersJson.form}
          language="es"
        />
        <SectionWhy data={props.data.partnersJson.why} />
      </Main>
    </LangLayout>
  )
}

export default Partners

export const query = graphql`
  query esPartnerQuerry {
    partnersJson(language: { regex: "/es-ES/" }) {
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
