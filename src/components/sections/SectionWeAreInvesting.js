import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button, SectionWrapper } from "components"

const SectionWeAreInvesting = ({ data }) => {
  const { title, description, btn, btnUrl, image, imageAlt } = data
  return (
    <SectionWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <BtnWrapper>
              <Button btnUrl={btnUrl} variant="secondary">
                {btn}
              </Button>
            </BtnWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(image)} alt={imageAlt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionWeAreInvesting

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)`
  display: grid;
  grid-template-rows: auto;
  row-gap: 16px;

  ${theme.above.tablet} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 3vw;
  }
  /* ${theme.above.laptop} {
    grid-template-columns: 1fr 370px;
    column-gap: 32px;
  }
  ${theme.above.mediumLaptop} {
    grid-template-columns: 1fr 470px;
    align-items: center;
    column-gap: 40px;
  }
  ${theme.above.desktop} {
    grid-template-columns: 1fr 570px;
    column-gap: 48px;
  }
  ${theme.above.mediumDesktop} {
    grid-template-columns: 1fr 670px;
    column-gap: 56px;
  }
  ${theme.above.largeDesktop} {
    grid-template-columns: 1fr 770px;
    column-gap: 64px;
  } */
`
const TextWrapper = styled(W.TextWrapper)`
  ${theme.below.tablet} {
    text-align: center;
  }
`
const BtnWrapper = styled.div`
  margin-bottom: 32px;
`
const ImageWrapper = styled(W.ImageWrapper)`
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  position: relative;
  z-index: 1;

  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: left top;
    }
  }
`
const Title = styled(S.H2)``
const Description = styled(S.BodyText)`
  margin-top: 16px;
  margin-bottom: 32px;
  text-align: left;
`
