import React from "react"
import styled from "styled-components"
import { W, S, breakpoints, theme } from "styles"
import { Button } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroHomepage = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  secondaryBtnUrl,
  primaryBtnUrl,
  image,
  imageAlt,
}) => {
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CtaWrapper>
              <Button btnUrl={primaryBtnUrl} variant="primary">
                {primaryBtn}
              </Button>
              <Button btnUrl={secondaryBtnUrl} variant="secondary">
                {secondaryBtn}
              </Button>
            </CtaWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(image)} alt={imageAlt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header`
  margin: 0 16px;
`
const Wrapper = styled(W.Wrapper)`
  background-color: #fff;
  border-radius: 10px;
  ${breakpoints.belowTablet} {
    /* padding: 100px 16px; */
    padding-top: 100px;
    padding-right: 16px;
    padding-left: 16px;
  }
  ${breakpoints.tablet} {
    border-radius: 10px;
  }
`

const ContentWrapper = styled(W.ContentWrapper)`
  display: grid;
  row-gap: 40px;
  /* grid-template-columns: 1fr 370px; */
  ${breakpoints.tablet} {
    grid-template-columns: 50% 370px;
    align-items: center;
    max-width: 770px;
    column-gap: 40px;
  }
  ${breakpoints.laptop} {
    grid-template-columns: 1fr 570px;
    align-items: center;
    /* max-width: ${theme.width.text}; */
    max-width: 970px;
    column-gap: 40px;
  }
  ${breakpoints.desktop} {
    grid-template-columns: 1fr 640px;
    max-width: ${theme.width.content};
    /* grid-template-columns: 1fr 636px;
    align-items: center;
    max-width: ${theme.width.content};
    column-gap: 40px; */
  }
`
const TextWrapper = styled(W.TextWrapper)`
  max-width: 640px;
  display: grid;
  grid-template-rows: auto;
  /* row-gap: 40px; */
`

const ImageWrapper = styled.div`
  position: relative;
  top: 32px;
`

const CtaWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 16px;
  justify-content: start;
  ${breakpoints.belowTablet} {
    grid-template-rows: auto;
    row-gap: 16px;
    .ButtonWrap {
      display: block;
      width: 100%;
      a {
        width: 100%;
      }
    }
  }
`

const Title = styled(S.H1)``
const Description = styled(S.SubHeading)`
  margin-top: 16px;
  margin-bottom: 40px;
  max-width: 470px;
`

export default HeroHomepage
