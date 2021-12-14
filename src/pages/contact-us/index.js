import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { W, S, theme, breakpoints, F } from "styles"
import { HeroSimple, Button, Offices } from "components"
import EnLayout from "layouts/en"

const ContactUs = (props) => {
  const hero = props.data.contactUsJson.hero
  const liveChat = props.data.contactUsJson.liveChat
  const support = props.data.contactUsJson.support
  const feedback = props.data.contactUsJson.feedback
  const emailForm = props.data.contactUsJson.emailForm
  const demoCall = props.data.contactUsJson.demoCall
  const offices = props.data.officesJson

  return (
    <EnLayout>
      <HeroSimple title={hero.title}></HeroSimple>
      <W.Main>
        <Wrapper>
          <ContentWrapper>
            <Box style={{ gridArea: "liveChat" }}>
              <S.H6 as="h2" style={{ maxWidth: 300 }}>
                {liveChat.title}
              </S.H6>
              <S.BodyText>{liveChat.description}</S.BodyText>
              <LiveChat>
                <GatsbyImage
                  image={getImage(liveChat.image)}
                  alt={liveChat.imageAlt}
                />
                <Button btnUrl={liveChat.btnUrl} variant="secondary">
                  {liveChat.btn}
                </Button>
              </LiveChat>
            </Box>
            <Box style={{ gridArea: "support" }}>
              <S.H6 as="h2">{support.title}</S.H6>
              <S.BodyText>{support.description}</S.BodyText>
              <Button btnUrl={support.btnUrl} variant="secondary">
                {support.btn}
              </Button>
            </Box>
            <Box style={{ gridArea: "feedback" }}>
              <S.H6 as="h2">{feedback.title}</S.H6>
              <S.BodyText>{feedback.description}</S.BodyText>
              <Button btnUrl={feedback.btnUrl} variant="secondary">
                {feedback.btn}
              </Button>
            </Box>
            <Form style={{ gridArea: "emailForm" }}>
              <S.H6 as="h2" style={{ maxWidth: 400 }}>
                {emailForm.title}
              </S.H6>
              {/* TODO Add html parser to the title props everywhere https://www.npmjs.com/package/html-react-parser */}
              <F.Form action="">
                <F.InputText
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                />
                <F.InputEmail
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email"
                />
                <F.TextArea name="message" rows="4" placeholder="Message" />
                <Button variant="primary">{demoCall.btn}</Button>
              </F.Form>
            </Form>
            <Box style={{ gridArea: "demoCall" }}>
              <S.H6 as="h2">{demoCall.title}</S.H6>
              <S.BodyText>{demoCall.description}</S.BodyText>
              <Button btnUrl={demoCall.btnUrl} variant="secondary">
                {demoCall.btn}
              </Button>
            </Box>
          </ContentWrapper>
        </Wrapper>
        <Wrapper>
          <S.CenterSectionTitle>
            {props.data.contactUsJson.globalCoverage.title}
          </S.CenterSectionTitle>
          <Offices
            offices={offices.offices}
            image={offices.image}
            imageAlt={offices.imageAlt}
          />
        </Wrapper>
      </W.Main>
    </EnLayout>
  )
}

export default ContactUs

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)`
  max-width: ${theme.width.text};
  margin: 0 auto;
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

  ${breakpoints.tablet} {
    display: grid;
    grid-template-areas:
      "liveChat emailForm"
      "support emailForm"
      "feedback demoCall";
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
    row-gap: 80px;
  }
`
const Box = styled.div`
  ${S.BodyText} {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
const LiveChat = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 24px;
  .gatsby-image-wrapper {
    max-width: 284px;
  }
  ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: 284px auto;
    align-items: center;
    column-gap: 16px;
  }
`

const Form = styled.div`
  ${F.Form} {
    display: grid;
    grid-template-rows: auto;
    margin-top: 16px;
    padding: 32px 24px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0.6px 1.3px rgba(1, 53, 113, 0.011),
      0px 1.3px 3.2px rgba(1, 53, 113, 0.015),
      0px 2.5px 6px rgba(1, 53, 113, 0.017),
      0px 4.5px 10.7px rgba(1, 53, 113, 0.019),
      0px 8.4px 20.1px rgba(1, 53, 113, 0.022),
      0px 20px 48px rgba(1, 53, 113, 0.03),
      inset 0px 0px 0px 0.5px rgba(1, 53, 113, 0.1);
    row-gap: 24px;
    ${breakpoints.tablet} {
      padding: 40px 32px;
    }
    ${breakpoints.laptop} {
      padding: 48px 40px;
    }
    ${breakpoints.desktop} {
      padding: 56px 48px;
    }
    ${breakpoints.largeDesktop} {
      padding: 64px 56px;
    }
  }
`

export const query = graphql`
  query {
    contactUsJson {
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
          name
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
      imageAlt
      image {
        childImageSharp {
          gatsbyImageData
        }
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
  }
`

// offices {
//   main {
//     country
//     firstLine
//     secondLine
//     title
//   }
//   world {
//     title
//     list {
//       country
//       firstLine
//       secondLine
//     }
//   }
// }
// image {
//   childImageSharp {
//     gatsbyImageData
//   }
// }
