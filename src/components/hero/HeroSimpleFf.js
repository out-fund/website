import { Button } from "./../../components"
import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import T from "./../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const HeroSimpleFf = ({ data }) => {
  const { title, subtitle, description } = data
  return (
    <HeroWrapper data-surface-type="Hero" data-surface-title={parse(title)}>
      <Title>{parse(title)}</Title>
      <Subtitle>{parse(subtitle)}</Subtitle>
      {description && <Description>{parse(description)}</Description>}

      <BtnWrapper>
        <Button
          href="https://client.out.fund/signup"
          variant="primary"
          size="large"
          id="cta-hero-simple-ff-click"
          data-element-category="Signup CTA"
        >
          Check eligibility
        </Button>
      </BtnWrapper>

      {/* <ImageWrapper>
        <StaticImage
          src="./../../images/UIxCard.png"
          alt="Outfhund UI"
          layout="constrained"
        />
      </ImageWrapper> */}
    </HeroWrapper>
  )
}

export default HeroSimpleFf

// const ImageWrapper = styled.div``

const Title = styled(T.H1)`
  max-width: 1270px;
  text-align: center;
  margin: 0 24px;
`
const Subtitle = styled(T.H2)`
  max-width: 970px;
  text-align: center;
  margin: 0 24px;
  font-weight: 600;
`
const Description = styled(T.BodyLarge)`
  max-width: 770px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c3654;
  margin: 16px 24px 0;
`

const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.background.emphesized};

  /* border-radius: 0 0 10px 10px; */
  /* gap: 16px; */
  padding: 48px 0 24px;
  /* margin: 0 8px; */

  background-image: url("/gradient.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  padding: 48px 24px 48px;
  background-position: center top;

  position: relative;

  ${theme.above.p.m} {
    /* margin: 0 16px; */
    padding: 64px 0 48px;
  }

  ${theme.above.t.s} {
    /* margin: 0 20px; */
    padding: 96px 0 56px;
  }
  ${theme.above.l.m} {
    /* margin: 0 24px; */
    padding: 120px 0 96px;
  }

  ${theme.above.d.m} {
    padding: 160px 0 120px;
  }
`

const BtnWrapper = styled.div`
  margin-top: 24px;
  /* 
  ${theme.above.p.m} {
  } */
  ${theme.above.t.s} {
    margin-top: 32px;
  }
  /* ${theme.above.l.m} {
  } */
  ${theme.above.d.m} {
    margin-top: 40px;
  }
`
