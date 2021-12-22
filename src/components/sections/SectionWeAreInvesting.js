import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, Section, SectionHeader } from "./../../components"

const SectionWeAreInvesting = ({ data }) => {
  const { title, description, btn, image } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={title} description={description} />
            <BtnWrapper>
              <Button to={btn.url} variant="secondary">
                {btn.text}
              </Button>
            </BtnWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeAreInvesting

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  /* display: grid;
  grid-template-rows: auto;
  row-gap: 16px;

  theme.above.tablet} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 3vw;
  } */
  /* theme.above.laptop} {
    grid-template-columns: 1fr 370px;
    column-gap: 32px;
  }
  theme.above.mediumLaptop} {
    grid-template-columns: 1fr 470px;
    align-items: center;
    column-gap: 40px;
  }
  theme.above.desktop} {
    grid-template-columns: 1fr 570px;
    column-gap: 48px;
  }
  theme.above.mediumDesktop} {
    grid-template-columns: 1fr 670px;
    column-gap: 56px;
  }
  theme.above.largeDesktop} {
    grid-template-columns: 1fr 770px;
    column-gap: 64px;
  } */
`
const TextWrapper = styled.div`
  /* theme.below.tablet} {
    text-align: center;
  } */
`
const BtnWrapper = styled.div`
  /* margin-bottom: 32px; */
`
const ImageWrapper = styled.div`
  /* border-radius: 10px; */
  /* overflow: hidden;
  height: 100%;
  position: relative;
  z-index: 1;

  .gatsby-image-wrapper {
    height: 100%;
    img {
      object-position: left top;
    }
  } */
`
