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
} from "./../components"

const OfPartnershipWithClearco = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Clearco Partnership"
        description="We're the UK's Largest eCommerce Investor"
      />
      <HeroSimple
        data={{
          title: "Clearco and Outfund Strategic Partnership",
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
            International revenue-based funding company. The partnership enables
            small businesses across the world to access the highest quality and
            fastest equity-free financing as they grow.
          </T.Body>
          <T.Body>
            Outfund is the UK and Australia's largest eCommerce investor and has
            committed to investing £500M in small businesses in 2022. Clearco
            has invested over $3.2 billion in companies globally, with $429M
            invested in companies outside of the US and Canada, across six
            countries, with a common mandate to support as many entrepreneurs as
            possible at scale.
          </T.Body>
          <T.Body>
            Revenue-based funding is revolutionising the way founders grow their
            businesses. Outfund and Clearco each bring best in class
            revenue-based funding services to the international markets they
            operate in, including the UK, Ireland, Germany, Spain, Netherlands
            and Australia. Their offerings each provide founders with fast and
            affordable funding in the form of non-dilutive capital, without
            personal guarantees. Their services also each provide true, tangible
            value and services including inventory funding and access to a
            global founder community, as well as insights and valuation tools to
            ensure its founders are successful.
          </T.Body>
          <T.Body>
            In light of the partnership, Clearco has renewed its focus on its
            two core and largest markets, US and Canada. The partnership does
            not include any of Clearco's staff, technology, intellectual
            property, infrastructure or operations. Each departing employee will
            receive severance pay, two year window to exercise equity and
            outplacement support including expedited interviews with multiple
            partners.
          </T.Body>
          <T.Body>
            Michele Romanow, Founder and CEO of Clearco comments: “As we shift
            our focus to our Canadian and US business for the time being,
            finding a partner for our International clients that shares our
            mission to democratise funding for founders has been our focus. We
            are confident that this is the best decision for our customers who
            will continue to benefit from Outfund’s revenue-based financing
            model without ever having to give up equity in their businesses. It
            is of course with great regret that we have had to let our
            international team go as part of this partnership. They are a hugely
            talented team and we are confident that we will be able to support
            them in their next steps.”
          </T.Body>
          <T.Body>
            Daniel Lipinski, Founder & CEO, Outfund comments: "We look forward
            to welcoming Clearco’s international customers to Outfund. Our two
            companies are both offering best-in-class revenue based financing
            solutions and we are confident that Clearco’s customers will benefit
            from our funding options and support, particularly our UK &
            Australia based team. The partnership represents continued growth
            for Outfund internationally.”
          </T.Body>
        </TextWrapper>
      </Main>
    </LangLayout>
  )
}

export default OfPartnershipWithClearco

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
