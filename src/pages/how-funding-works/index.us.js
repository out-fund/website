import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/us"

import {
  HeroSimple,
  Main,
  SectionRegulated,
  SectionSteps,
  SectionWeAreInvesting,
  SectionFaq,
  Button,
  SeoComponent,
} from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

// TODO Transfer content in graphql
export const query = graphql`
  query usHowFundingWorksPage {
    howFundingWorksJson(language: { regex: "/en-US/" }) {
      hero {
        description
        title
      }
      process {
        title
        description
        steps {
          title
          description
        }
      }
      humanCapital {
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
        description
        title
      }
      faq {
        btn {
          text
          url
        }
        questions {
          answer
          question
        }
        title
      }
    }
    trustJson(language: { regex: "/en-US/" }) {
      title
      description
      blocks {
        icon
        title
        text
      }
    }
  }
`

const HowFundingWorks = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="How the funding works"
        description="Outfund offers on-demand, non-dilutive funding. We combine the best of debt and equity finance, and avoid the worst of each."
      />
      <HeroSimple data={props.data.howFundingWorksJson.hero} />
      <Main>
        <Wrapper>
          <ContentWrapper>
            <SectionRegulated
              data={{
                title: "Revenue based financing",
                description:
                  "The model is simple. Using your monthly revenue as a guide, we provide up-front capital for growth in exchange for a small percentage of future earnings. You repay us via a flexible revenue share as daily sales come in, which means we only succeed when you succeed. If revenues slow, so do repayments. ",
                blocks: [
                  {
                    title: "No dilution",
                    icon: "<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path opacity='.3' d='M21.98 16.32c.02-.1.02-.2.02-.32 0-2.2-1.8-4-4-4-.12 0-.22 0-.32.02l4.3 4.3ZM18 30c-5.4 0-11.6 2.58-12 4.02V36h24v-.34l-4.22-4.22C23.52 30.62 20.66 30 18 30Z' fill='#003EDB'/><path d='M30 16c0-2.84-1-5.46-2.66-7.52C28.18 8.2 29.06 8 30 8c4.42 0 8 3.58 8 8s-3.58 8-8 8h-.36l-1.54-1.54c1.2-1.88 1.9-4.1 1.9-6.46Zm15.66 24H46v-6c0-4.36-7.16-6.94-12.68-7.74 2.2 1.5 3.9 3.42 4.46 5.88L45.66 40ZM18 12c-.12 0-.22 0-.32.02l-3.2-3.2a7.992 7.992 0 0 1 10.7 10.7l-3.2-3.2c.02-.1.02-.2.02-.32 0-2.2-1.8-4-4-4Zm.34 12H18c-4.42 0-8-3.58-8-8v-.34L1.38 7.02 4.2 4.2l39.6 39.6-2.82 2.82L34 39.66V40H2v-6c0-5.32 10.66-8 16-8 .74 0 1.6.06 2.5.16L18.34 24ZM18 30c-5.4 0-11.6 2.58-12 4.02V36h24v-.34l-4.22-4.22C23.52 30.62 20.66 30 18 30Z' fill='#003EDB'/></svg>",
                    text: "Why give up equity to fund repeatable aspects of your business like digital marketing? It's your business. Stay in control.",
                  },
                  {
                    title: "No personal guarantees",
                    icon: "<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path opacity='.3' d='m32 15.16-11-4.8-11 4.8v7.2c0 7 4.66 13.48 11 15.48.5-.16.98-.4 1.46-.6-.3-1.02-.46-2.12-.46-3.24 0-5.94 4.32-10.86 10-11.82v-7.02Z' fill='#003EDB'/><path opacity='.3' d='M34 26c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 2.76A2.25 2.25 0 0 1 36.24 31c0 1.22-1.02 2.24-2.24 2.24-1.22 0-2.24-1.02-2.24-2.24 0-1.22 1-2.24 2.24-2.24Zm0 10.74c-1.86 0-3.48-.92-4.48-2.34.1-1.44 3.02-2.16 4.48-2.16 1.46 0 4.38.72 4.48 2.16-1 1.42-2.62 2.34-4.48 2.34Z' fill='#003EDB'/><path d='M34 33.24a2.24 2.24 0 1 0 0-4.48 2.24 2.24 0 0 0 0 4.48Z' fill='#003EDB'/><path d='M36 22.18v-9.64L21 6 6 12.54v9.82C6 31.44 12.4 39.94 21 42c1.1-.26 2.16-.64 3.2-1.1 2.16 3.08 5.74 5.1 9.8 5.1 6.62 0 12-5.38 12-12 0-5.94-4.32-10.86-10-11.82ZM22 34c0 1.12.16 2.22.46 3.24-.48.22-.96.44-1.46.6-6.34-2-11-8.48-11-15.48v-7.2l11-4.8 11 4.8v7.02c-5.68.96-10 5.88-10 11.82Zm12 8c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z' fill='#003EDB'/><path d='M34 35c-1.46 0-4.38.72-4.48 2.16 1 1.42 2.64 2.34 4.48 2.34 1.84 0 3.48-.92 4.48-2.34C38.38 35.72 35.46 35 34 35Z' fill='#003EDB'/></svg>",
                    text: "Breathe easier without restrictive collateral. Access to capital has never been easier.",
                  },
                  {
                    title: "No interest rates",
                    icon: "<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path opacity='.3' d='M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8Zm7 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm-14 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm7 19c-4.66 0-8.64-2.9-10.24-7h3.34c1.4 2.38 3.94 4 6.9 4 2.96 0 5.5-1.62 6.9-4h3.34c-1.6 4.1-5.58 7-10.24 7Z' fill='#003EDB'/><path d='M31 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' fill='#003EDB'/><path d='M24 32c-2.96 0-5.5-1.62-6.9-4h-3.34c1.6 4.1 5.58 7 10.24 7s8.64-2.9 10.24-7H30.9c-1.4 2.38-3.94 4-6.9 4Zm-.02-28C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4ZM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16Z' fill='#003EDB'/></svg>",
                    text: "A one-time flat fee. The cost of capital is always transparent and repaid fairly from future revenue.",
                  },
                ],
              }}
            />
            <SectionSteps data={props.data.howFundingWorksJson.process} />
            <SectionWeAreInvesting
              data={props.data.howFundingWorksJson.humanCapital}
            />
            <CtaBlockWrapper>
              <InnerWrapper>
                <CtaBlockTextWrapper>
                  <T.H2>
                    Start Supercharging <br />
                    Your Growth!
                  </T.H2>
                  <Button
                    // to="/get-funded/"
                    href="https://client.out.fund/signup"
                    variant="primary"
                    size="large"
                    id="cta-get-funded-hiw-click"
                    data-element-category="Signup CTA"
                  >
                    Get funded
                  </Button>
                </CtaBlockTextWrapper>
                <ImageWrapper>
                  <StaticImage
                    src="./../../images/components/ss-cta-block.png"
                    alt="Group profile photos"
                  />
                </ImageWrapper>
              </InnerWrapper>
            </CtaBlockWrapper>
            <SectionFaq data={props.data.howFundingWorksJson.faq} />
          </ContentWrapper>

          <SectionRegulated data={props.data.trustJson} />
        </Wrapper>
      </Main>
    </LangLayout>
  )
}

export default HowFundingWorks

const Wrapper = styled.div``
// const List = styled.ul``
// const Item = styled.li``
// const CardPost = styled.div``
const ContentWrapper = styled.div``

const CtaBlockWrapper = styled.aside`
  margin-top: 80px;
  background-color: ${theme.color.background.emphesized};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  ${theme.above.l.m} {
    padding: 64px 40px;
  }
`
const InnerWrapper = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 970px;
  gap: 64px;
  align-items: center;
  ${theme.above.t.m} {
    grid-template-columns: 1fr 230px;
  }
  /* ${theme.above.t.s} {
    grid-template-columns: 1fr 2fr;
  } */
  ${theme.above.l.m} {
    grid-template-columns: 460fr 440fr;
  }
`
const CtaBlockTextWrapper = styled.div`
  text-align: center;
  ${theme.above.t.m} {
    text-align: left;
  }
  h2 {
    margin-bottom: 40px;
  }
`

const ImageWrapper = styled.div``
