import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const HeroAbout = ({ data }) => {
  const { title, image, description } = data
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {/* <SectionHeader title={title} description={description}/> */}
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

export default HeroAbout

const Title = styled(T.H1)`
  max-width: 970px;
  text-align: center;
`

const Description = styled(T.BodyLarge)`
  max-width: 770px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c3654;
`

const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.background.emphesized};
  gap: 16px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div`
  /* max-width: theme.width.max};
  position: relative;
  border-radius: 10px;
  overflow: hidden; */
`
const TextWrapper = styled.div`
  /* max-width: 830px;
  position: absolute;
  z-index: 2;
  margin-left: 50%;
  transform: translateX(-50%);
  bottom: 80px;
  bottom: 5vw;
  left: 0;
  width: 100%;

  breakpoints.belowLaptop} {
    padding: 16px;
  } */
`
const ImageWrapper = styled.div`
  /* width: 100%;
  breakpoints.belowLaptop} {
    height: 400px;

    .gatsby-image-wrapper {
      height: 100%;
      object-fit: cover;
      img {
        overflow: hidden;
        border-radius: 10px;
      }
    }
  } */
`
