import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { W, S, theme} from "styles"
import { HeroSimple, Button, Offices } from "components"
import EnLayout from "layouts/en"

const ContactUs = (props) => {
  const hero = props.data.contactUsJson.hero
  const liveChat = props.data.contactUsJson.liveChat
  const support = props.data.contactUsJson.support
  const feedback = props.data.contactUsJson.feedback
  const emailForm = props.data.contactUsJson.emailForm
  const offices = props.data.officesJson

  return (
    <EnLayout>
      <HeroSimple title={hero.title}></HeroSimple>
      <main>
        <Wrapper>
          <ContentWrapper>
            <div className="box">
              <h2>{liveChat.title}</h2>
              <p>{liveChat.description}</p>
              <GatsbyImage
                image={getImage(liveChat.image)}
                alt={liveChat.imageAlt}
              />
            </div>
            <div className="box">
              <h2>{support.title}</h2>
              <p>{support.description}</p>
              <Button btnUrl={support.btnUrl} variant="secondary">
                {support.btn}
              </Button>
            </div>
            <div className="box">
              <h2>{feedback.title}</h2>
              <p>{feedback.description}</p>
              <Button btnUrl={feedback.btnUrl} variant="secondary">
                {feedback.btn}
              </Button>
            </div>
            <Form>
              <h2>{emailForm.title}</h2>
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
`
const SectionTitle = styled(S.H2)`
  max-width: ${theme.width.text};
  margin: 0 auto;
  text-align: center;
`
const Form = styled.div`
  form {
    width: 100%;
    padding: 64px;
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
