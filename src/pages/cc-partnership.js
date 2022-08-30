import React from "react"
import styled from "styled-components"

import { theme } from "./../styles/new/theme"
import { StaticImage } from "gatsby-plugin-image"

import T from "./../styles/new/typography"

import LangLayout from "./../layouts/en"

import {
  HeroSimple,
  Main,
  SectionPartners,
  SectionWhy,
  SeoComponent,
  HeroImage,
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
            "Clearco has partnered with Outfund to offer revenue-based funding to its UK, Australian and European customers.",
        }}
      />
      <Main>
        <Wrapper>
          <ImageWrapper>
            <StaticImage src="./../images/cc-of.png" alt="Person smiling" />
          </ImageWrapper>
        </Wrapper>
        <TextWrapper>
          <T.Body>
            Outfund is the largest eCommerce investor in the UK, Australia and
            Spain and has invested into thousands of businesses around the
            world. We combine the best of debt and equity finance, and avoid the
            worst of each.
          </T.Body>
          <T.Body>
            As Clearco will be ending its non-North-American coverage, existing
            customers are invited to submit an application with Outfund to get
            additional funding at the same competitive rates.
          </T.Body>
        </TextWrapper>
        <SwitchWrapper>
          <StyledSection>
            <T.H2>How to switch from Clearco to Outfund</T.H2>
            <T.Body
              style={{
                maxWidth: "570px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Switching is easy, click on “Apply now” below and follow the
              application steps.
              <br /> <br />
              One of our team members will then reach out to help Top you up,
              refinance out your old facility or a combination of the both.
            </T.Body>
            <Button
              href="https://client.out.fund/signup"
              variant="primary"
              data-element-category="Signup CTA"
              size="large"
            >
              Apply now
            </Button>
          </StyledSection>
        </SwitchWrapper>
        <SectionFaq
          data={{
            title: "Frequently asked questions",
            questions: [
              {
                question:
                  "I am a Clearco customer - what does this partnership mean for my business?",
                answer:
                  "Because Clearco is ceasing coverage for customers outside of the US and Canada, existing customers will need to apply and refinance with Outfund to maintain access to funding.",
              },
              {
                question: "How do I apply?",
                answer:
                  "Applying is easy. Simply click on “Apply now”, complete the application form, securely connect your accounts and we will get in touch with an offer within 48 hours.  ",
              },
              {
                question: "Can I refinance my Clearco funding?",
                answer:
                  "Outfund is connected to Clearco’s system, so we’ll know about your existing funding arrangement. Provided that your business fits our funding criteria, we will be able to refinance your Clearco funding. ",
              },
              {
                question:
                  "Can I get a top up in addition to refinancing my Clearco funding?",
                answer:
                  "When our team reviews your application, we may offer you an additional amount of funding. This is dependent on your business’s performance.",
              },
              {
                question: "What will happen to my existing Clearco funding?",
                answer:
                  "Existing Clearco funding will continue to run as normal, however, Clearco will not be offering any further funding. To continue access to funding, we invite you to submit an application with Outfund",
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

  ${theme.above.t.m} {
    padding: 100px 0;
  }
  ${theme.above.d.m} {
    padding: 120px 0;
  }
  border-radius: 10px;
`
