import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Button } from "./../../components/"
import T from "./../../styles/new/typography"
import { Triangle } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const HeroHomepage = ({ data }) => {
  const { title, description, primaryBtn, secondaryBtn } = data
  return (
    <HeroWrapper>
      <Wrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonWrapper>
            <Button to={primaryBtn.url} variant="primary" size="large">
              {primaryBtn.text}
            </Button>
            <Button to={secondaryBtn.url} variant="secondary" size="large">
              {secondaryBtn.text}
            </Button>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <LeftImage>
            <StaticImage
              src="./../../images/hero-homepage/person-left.jpg"
              alt="Person smiling"
            />
          </LeftImage>
          <RightImage>
            <StaticImage
              src="./../../images/hero-homepage/person-right.jpg"
              alt="Person smiling"
            />
          </RightImage>
        </ImageWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

export default HeroHomepage

const Title = styled(T.H1)``
const Description = styled(T.BodyLarge)``

const LeftImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 56.875%;
  box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
    0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
    0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
    0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
    0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
    0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
  ${Triangle}
  &:after {
    z-index: 3;
  }
  border-radius: 10px;
  .gatsby-image-wrapper {
    overflow: hidden;
    border-radius: 10px;
  }
`
const RightImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 56.875%;
  position: absolute;
  left: 276px;
  top: 112px;
  left: 43%;
  top: 20%;
  box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
    0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
    0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
    0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
    0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
    0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
`
const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
  /* display: flex; */
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  /* overflow: hidden; */

  ${theme.above.p.l} {
    grid-template-columns: 1fr 400px;
    gap: 32px;
  }

  ${theme.above.t.l} {
    grid-template-columns: 470fr 640fr;
    gap: 60px;
  }
`

const HeroWrapper = styled.header`
  background-color: #f2f6fa;
  padding-top: 140px;
  padding-bottom: 96px;
  padding-left: 40px;
  padding-right: 40px;
  overflow: visible;

  ${theme.above.p.l} {
    overflow: hidden;
  }

  ${theme.above.t.l} {
    overflow: visible;
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
  }
`
