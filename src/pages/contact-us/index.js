import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { W, S, theme, breakpoints } from "styles"
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
      <main>
        <Wrapper>
          <ContentWrapper>
            <Box style={{ gridArea: "liveChat" }}>
              <S.H6 as="h2">{liveChat.title}</S.H6>
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
              <S.H6 as="h2">{emailForm.title}</S.H6>
              <form action="">
                <input type="text" name="fullName" placeholder="Full Name" />
                <br />
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email"
                />
                <br />
                <textarea name="message" rows="4" placeholder="Message" />
              </form>
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
      </main>
    </EnLayout>
  )
}

export default ContactUs

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)`
  max-width: ${theme.width.text};
  margin: 0 auto;
  display: grid;
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
    margin-top: 24px;
    margin-bottom: 24px;
  }
`
const LiveChat = styled.div`
  display: grid;
  grid-template-columns: 284px auto;
  align-items: center;
  column-gap: 16px;
`
// const SectionTitle = styled(S.H2)`
//   max-width: ${theme.width.text};
//   margin: 0 auto;
//   text-align: center;
// `
const Form = styled.div`
  form {
    width: 100%;
    /*height: calc(100% - 32px);*/
    margin-top: 32px;
    padding: 64px;
    background-color: #fff;
    border-radius: 10px;
    > * {
      width: 100%;
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
