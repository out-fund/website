import { Button } from ".."
import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import T from "../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"
import { theme } from "../../styles/new/theme"

const HeroBF = ({ title, subtitle, description, buttonText, note }) => {
  return (
    <HeroWrapper data-surface-type="Hero" data-surface-title={"Black Friday"}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Description>{description}</Description>

      <BtnWrapper>
        <Button
          href="https://client.out.fund/signup"
          variant="primary"
          size="large"
          id="cta-hero-simple-ff-click"
          data-element-category="Signup CTA"
        >
          {buttonText}
        </Button>
      </BtnWrapper>
      <Note>{note}</Note>
    </HeroWrapper>
  )
}

export default HeroBF

const Title = styled(T.H1)`
  max-width: 1270px;
  text-align: center;
  margin: 0 24px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Subtitle = styled(T.H2)`
  max-width: 970px;
  text-align: center;
  margin: 0 24px;
  font-weight: 600;
  font-size: 32px;
  color: #ffbb13;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Description = styled(T.BodyLarge)`
  max-width: 770px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 16px 24px 0;
  color: #ffffff;
  opacity: 0.8;
`
const Note = styled(T.BodySmaller)`
  margin-top: 16px;
  max-width: 500px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #ffffff;
  opacity: 0.8;
`

const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.background.emphesized};
  padding: 48px 0 24px;

  background-image: url("/gradientDark.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  padding: 48px 24px 48px;
  background-position: center top;

  position: relative;

  .note {
    background-color: #fff;
  }

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
