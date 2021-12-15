import React from "react"
import styled from "styled-components"
import { W, S, theme, breakpoints } from "styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroAbout = ({ data }) => {
  const { title, image, description, imageAlt } = data
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
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
const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)`
  max-width: ${theme.width.max};
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  /* margin: 0 auto;
  padding-top: 12vh;
  padding-bottom: 80px; */
`
const TextWrapper = styled(W.TextWrapper)`
  max-width: 830px;
  position: absolute;
  z-index: 2;
  margin-left: 50%;
  transform: translateX(-50%);
  bottom: 80px;
  bottom: 5vw;
  left: 0;
  width: 100%;

  ${breakpoints.belowLaptop} {
    padding: 16px;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  ${breakpoints.belowLaptop} {
    height: 400px;

    .gatsby-image-wrapper {
      height: 100%;
      object-fit: cover;
      img {
        overflow: hidden;
        border-radius: 10px;
      }
    }
  }
`

const Title = styled(S.H1)`
  color: #fff;
  text-align: center;
`

const Description = styled(S.SubHeading)`
  color: #fff;
  text-align: center;
  margin-top: 16px;
`

export default HeroAbout
