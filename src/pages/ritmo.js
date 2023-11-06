import React from "react"
import styled from "styled-components"

import { theme } from "./../styles/new/theme"
import { StaticImage } from "gatsby-plugin-image"

import T from "./../styles/new/typography"

import LangLayout from "./../layouts/en-fast"

import {
  HeroSimple,
  Main,
  SeoComponent,
  SectionFaq,
  Section,
  Button,
} from "./../components"

const CcPartnership = (props) => {
  return (
    <LangLayout>
      <SeoComponent title="Outfund" description="" />
      <HeroSimple
        data={{
          title: "Switch your funding provider to Outfund",
          description:
            "Ritmo has partnered with Outfund to offer revenue-based funding to its Spanish and UK customers.",
        }}
      />
      <Main>
        <Wrapper>
          <ImageWrapper>
            <StaticImage src="./../images/of-ritmo.png" alt="Outfund + Ritmo" />
          </ImageWrapper>
        </Wrapper>
        <TextWrapper>
          <T.Body>
            Outfund is the largest eCommerce funder in the UK, Spain, Australia,
            USA, Germany and the Netherlands and has invested into thousands of
            businesses around the world. We combine the best of debt and equity
            finance, and avoid the worst of each.
          </T.Body>
          <T.Body>
            As Ritmo will be ending its Spanish and UK coverage, existing
            customers are invited to submit an application with Outfund to get
            additional funding at the same competitive rates.
          </T.Body>
        </TextWrapper>
        <SwitchWrapper>
          <StyledSection>
            <T.H2>How to switch from Ritmo to Outfund</T.H2>
            <T.Body
              style={{
                maxWidth: "570px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Switching is easy, click on “Switch now” below and follow the
              application steps.
              <br /> <br />
              One of our team members will then reach out to help top you up,
              refinance out your old facility or a combination of the both.
            </T.Body>
            <Button
              href="https://client.out.fund/signup?utm_source=partner&utm_medium=landingpage&utm_content=ritmo"
              variant="primary"
              data-element-category="Signup CTA"
              size="large"
            >
              Switch now
            </Button>
          </StyledSection>
        </SwitchWrapper>
        <SectionFaq
          data={{
            title: "Frequently asked questions",
            questions: [
              {
                question:
                  "I am a Ritmo customer - what does this partnership mean for my business?",
                answer:
                  "If you have existing Ritmo funding this partnership will not impact that; you can still access it via your Ritmo account. However, because Ritmo is ceasing coverage for customers in Spain and the UK, if you wish to access additional funding you will need to apply to Outfund to refinance or top up your funding",
              },
              {
                question: "How do I apply?",
                answer:
                  "Applying is easy. Simply click on “Switch now”, complete the application form, securely connect your accounts and we will get in touch with an offer within 48 hours.  ",
              },
              {
                question: "Can I refinance my Ritmo funding?",
                answer:
                  "Outfund’s approval criteria may differ from that of Ritmo's so you’ll need to submit an application to allow Outfund to evaluate whether refinancing is possible. In most cases, we will be able to refinance your Ritmo funding.",
              },
              {
                question:
                  "Can I get a top up in addition to refinancing my Ritmo funding?",
                answer:
                  "When our team reviews your application, we may offer you an additional amount of funding. This is dependent on your business’s performance.",
              },
              {
                question: "What will happen to my existing Ritmo funding?",
                answer:
                  "Existing Ritmo funding will continue to run as normal, however, Ritmo will not be offering any further funding. To continue access to funding, we invite you to submit an application with Outfund",
              },
            ],
            btn: {
              text: "",
              url: "",
            },
          }}
        />
      </Main>
    </LangLayout>
  )
}

export default CcPartnership

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: -8px;

  ${theme.above.p.m} {
    top: -16px;
  }
  ${theme.above.t.s} {
    top: -24px;
  }
  ${theme.above.l.m} {
    top: -56px;
  }
  ${theme.above.d.m} {
    top: -80px;
  }
`
const ImageWrapper = styled.div`
  max-width: 1570px;
  border-radius: 10px;
  overflow: hidden;
`
const TextWrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;
  p {
    margin: 0;
    margin-bottom: 24px;
  }
`

const StyledSection = styled(Section)`
  max-width: 770px;
  margin: 0 auto;
  padding: 0 16px;
  p {
    margin-top: 16px;
    margin-bottom: 40px;
  }
`
const SwitchWrapper = styled.div`
  background-color: #f2f6fa;
  padding: 64px 0;
  text-align: center;
  max-width: 970px;
  margin: 0 auto;
  margin-top: 40px;

  ${theme.above.t.m} {
    padding: 100px 0;
  }
  ${theme.above.d.m} {
    padding: 120px 0;
  }
  border-radius: 10px;
`
