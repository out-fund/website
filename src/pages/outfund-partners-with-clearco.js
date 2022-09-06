import React from "react"
import styled from "styled-components"

import { theme } from "./../styles/new/theme"
import { StaticImage } from "gatsby-plugin-image"

import T from "./../styles/new/typography"

import LangLayout from "./../layouts/en"

import {
  HeroSimple,
  Main,
  SeoComponent,
  Button,
  Section,
} from "./../components"

const OfPartnershipWithClearco = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Outfund partners with Clearco"
        description="Clearco has partnered with Outfund to offer revenue-based funding to its UK, Australian and European customers."
      />
      <HeroSimple
        data={{
          title: "Outfund partners with Clearco",
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
            Today, Outfund and Clearco have announced a strategic partnership to
            provide access to the largest and most founder-friendly
            International revenue-based funding solution. The partnership
            enables small businesses across the world to access the highest
            quality and fastest equity-free financing as they grow.
          </T.Body>
          <T.Body>
            Outfund is the UK, Spain and Australia's largest eCommerce investor
            and has committed to investing £500M in small businesses in 2022.
            Clearco has invested $429M in companies outside of the US and
            Canada, across six countries, with a common mandate to support as
            many entrepreneurs as possible at scale.
          </T.Body>
          <T.Body>
            Revenue-based funding is revolutionising the way founders grow their
            businesses. Outfund and Clearco each bring best in class
            revenue-based funding services to the international markets they
            operate in, including the UK, Ireland, Germany, Spain, Denmark,
            Netherlands and Australia. Their offerings each provide founders
            with fast and affordable funding in the form of non-dilutive
            capital, without personal guarantees. Their services also each
            provide true, tangible value and services including inventory
            funding and access to a global founder community, as well as
            insights and valuation tools to ensure its founders are successful.
          </T.Body>
          <T.Body>
            In light of the partnership, Clearco has renewed its focus on its
            two core and largest markets, US and Canada.
          </T.Body>
          <T.Body>
            Michele Romanow, Founder and CEO of Clearco comments: “As we shift
            our focus to our Canadian and US business for the time being,
            finding a partner for our International clients that shares our
            mission to democratise funding for founders has been our focus. We
            are confident that this is the best decision for our customers who
            will continue to benefit from Outfund’s revenue-based financing
            model without ever having to give up equity in their businesses.”
          </T.Body>
          <T.Body>
            Daniel Lipinski, Founder & CEO, Outfund comments: "We look forward
            to welcoming Clearco’s international customers to Outfund. Our two
            companies are both offering best-in-class revenue based financing
            solutions and we are confident that Clearco’s customers will benefit
            from our funding options and support, particularly our UK, European
            & Australia based teams. The partnership represents continued growth
            for Outfund internationally.”
          </T.Body>
          <SwitchWrapper>
            <StyledSection>
              <T.H3>Start Supercharging Your Growth</T.H3>
              <Button
                href="https://client.out.fund/signup?utm_source=cc-statementpage"
                variant="primary"
                data-element-category="Signup CTA"
                size="large"
              >
                Apply for funding now
              </Button>
            </StyledSection>
          </SwitchWrapper>
        </TextWrapper>
      </Main>
    </LangLayout>
  )
}

export default OfPartnershipWithClearco

const StyledSection = styled(Section)`
  /* max-width: 770px;
  margin: 0 auto;
  padding: 0 16px; */
  /* p {
    margin-top: 16px;
    margin-bottom: 40px;
  } */
  margin-top: 80px;
  margin-bottom: 80px;
`

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
  padding-bottom: 100px;
  p {
    margin: 0;
    margin-bottom: 24px;
  }
`

const SwitchWrapper = styled.div`
  background-color: #f2f6fa;
  padding: 1px;
  /* padding: 64px 0; */
  text-align: center;
  max-width: 970px;
  margin: 0 auto;

  margin-top: 48px;
  /* ${theme.above.t.m} {
    padding: 64px 0;
  }
  ${theme.above.d.m} {
    padding: 80px 0;
  } */

  h3 {
    margin-bottom: 16px;
  }

  border-radius: 10px;
`
