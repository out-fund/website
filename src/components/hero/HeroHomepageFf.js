import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Button } from "./../../components/"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const HeroHomepageFf = ({ data }) => {
  const { title, description, primaryBtn, secondaryBtn } = data
  return (
    <HeroWrapper>
      <Wrapper>
        <TextWrapper data-surface-type="Hero" data-surface-title={title}>
          <Title>{title}</Title>
          <SubTitle>Business financing on your terms.</SubTitle>
          <Description>{description}</Description>
          <ButtonWrapper>
            {primaryBtn.url && (
              <Button
                // to={primaryBtn.url}
                href="https://client.out.fund/signup"
                variant="primary"
                size="large"
                id="cta-get-funded-hero-click"
                data-element-category="Signup CTA"
              >
                {primaryBtn.text}
              </Button>
            )}
            {secondaryBtn.url && (
              <Button to={secondaryBtn.url} variant="secondary" size="large">
                {secondaryBtn.text}
              </Button>
            )}
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <LeftImage>
            <StaticImage
              // src="./../../../../images/UIxCard.png"
              src="./../../images/UIxCard.png"
              alt="Person smiling"
            />
          </LeftImage>
        </ImageWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

export default HeroHomepageFf

const Title = styled(T.H1)`
  /* font-size: 2.5rem; */
`
const SubTitle = styled(T.H2)`
  font-weight: 600;
`

const Description = styled(T.BodyLarge)``

const LeftImage = styled.div``

const ImageWrapper = styled.div`
  position: relative;
  top: 40px;
  left: 20px;
  ${theme.above.t.s} {
    top: 80px;
    left: 0;
  }
  ${theme.above.t.l} {
    top: 0px;
    left: 0;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 12px; */
  /* align-items: center; */
  align-items: baseline;
  max-width: 1170px;
  margin: 0 auto;

  /* overflow: hidden; */

  ${theme.above.t.s} {
    grid-template-columns: 345px 400px;
    gap: 12px;
  }

  @media (min-width: 880px) {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.above.t.l} {
    grid-template-columns: 670fr 440fr;
    gap: 40px;
  }
`

const HeroWrapper = styled.header`
  background-color: #f2f6fa;
  background-image: url("/gradient.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  padding: 48px 24px 48px;
  background-position: center top;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50px;
    /* background-color: #afa; */
    box-shadow: inset 0px 10px 10px #ffffff;
    content: "";
  }

  ${theme.above.t.s} {
    padding: 64px 40px 64px;
    overflow: hidden;
  }

  ${theme.above.t.l} {
    padding: 80px 40px 96px;
    overflow: visible;
  }
  ${theme.above.l.m} {
    padding: 80px 40px 96px;
  }
  ${theme.above.d.l} {
    padding: 140px 40px 96px;
  }
`

const TextWrapper = styled.div`
  ${Description} {
    margin-top: 16px;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  ${theme.above.t.l} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
