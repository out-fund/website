import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/au"

import {
  Main,
  HeroSimple,
  Button,
  Offices,
  SectionHeader,
  Section,
  SectionRegulated,
  ContactUsForm,
} from "./../../components"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const ContactUs = (props) => {
  const liveChat = props.data.contactUsJson.liveChat
  const support = props.data.contactUsJson.support
  const feedback = props.data.contactUsJson.feedback
  const emailForm = props.data.contactUsJson.emailForm
  const demoCall = props.data.contactUsJson.demoCall
  const offices = props.data.officesJson

  return (
    <LangLayout>
      <HeroSimple data={props.data.contactUsJson.hero} />
      <Main>
        <ContentWrapper>
          <Box style={{ gridArea: "liveChat" }}>
            <T.H4 as="h2" style={{ maxWidth: 300 }}>
              {liveChat.title}
            </T.H4>
            <T.Body>{liveChat.description}</T.Body>
            <LiveChat>
              <GatsbyImage
                image={getImage(liveChat.image)}
                alt={liveChat.imageAlt}
              />
              <Button href={liveChat.btnUrl} variant="secondary">
                {liveChat.btn}
              </Button>
            </LiveChat>
          </Box>
          <Box style={{ gridArea: "support" }}>
            <T.H4 as="h2">{support.title}</T.H4>
            <T.Body>{support.description}</T.Body>
            <Button href={support.btnUrl} variant="secondary">
              {support.btn}
            </Button>
          </Box>
          <Box style={{ gridArea: "feedback" }}>
            <T.H4 as="h2">{feedback.title}</T.H4>
            <T.Body>{feedback.description}</T.Body>
            <Button href={feedback.btnUrl} variant="secondary">
              {feedback.btn}
            </Button>
          </Box>
          {/* TODO Add html parser to the title props everywhere https://www.npmjs.com/package/html-react-parser */}
          <ContactUsForm data={emailForm} language="au" />
          <Box style={{ gridArea: "demoCall" }}>
            <T.H4 as="h2">{demoCall.title}</T.H4>
            <T.Body>{demoCall.description}</T.Body>
            <Button href={demoCall.btnUrl} variant="secondary">
              {demoCall.btn}
            </Button>
          </Box>
        </ContentWrapper>

        <Section>
          <HeaderWrapper>
            <SectionHeader
              title={props.data.contactUsJson.globalCoverage.title}
            />
          </HeaderWrapper>
          <Offices
            showOffices
            offices={offices.offices}
            image={offices.image}
          />
        </Section>
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}

export default ContactUs

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 48px;
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 64px;
  display: grid;
  grid-template-areas:
    "liveChat"
    "emailForm"
    "demoCall"
    "support"
    "feedback";
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 40px;
  max-width: 1170px;

  ${theme.above.t.l} {
    grid-template-areas:
      "liveChat emailForm"
      "support emailForm"
      "feedback demoCall";
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
    row-gap: 80px;
  }
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
  }
`
const Box = styled.div``
const LiveChat = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 24px;
  .gatsby-image-wrapper {
    max-width: 284px;
    filter: drop-shadow(0px 100px 80px rgba(1, 14, 25, 0.07))
      drop-shadow(0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198))
      drop-shadow(0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275))
      drop-shadow(0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035))
      drop-shadow(0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725))
      drop-shadow(0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802));
  }
  ${theme.above.l.m} {
    grid-template-columns: 284px auto;
    align-items: center;
    column-gap: 16px;
  }
`

export const query = graphql`
  query {
    contactUsJson(language: { regex: "/en-GB/" }) {
      language
      seoTitle
      liveChat {
        btn
        btnUrl
        description
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
      }
      hero {
        title
      }
      globalCoverage {
        title
      }
      feedback {
        btn
        btnUrl
        description
        title
      }
      emailForm {
        title
        form {
          btn
          email
          message
          fullName
          btnUrl
        }
      }
      demoCall {
        btn
        btnUrl
        description
        title
      }
      support {
        btn
        btnUrl
        description
        title
      }
    }
    officesJson(language: { regex: "/en-GB/" }) {
      image {
        src {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
      }
      offices {
        world {
          list {
            country
            firstLine
            secondLine
          }
          title
        }
        main {
          country
          firstLine
          secondLine
          title
        }
      }
    }
    trustJson(language: { regex: "/en-AU/" }) {
      title
      description
      blocks {
        title
        icon
        text
      }
    }
  }
`
