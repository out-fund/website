import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"
import { Triangle } from "./../../styles/utils"

const SectionWeAreInvesting = ({ data }) => {
  const { title, description, btn, image } = data
  return (
    <Section>
      <Wrapper>
        <TextWrapper>
          <SectionHeader title={title} />
          <MobileImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </MobileImageWrapper>
          <Description>{parse(description)}</Description>

          {btn && (
            <BtnWrapper>
              <Button to={btn.url} variant="secondary">
                {btn.text}
              </Button>
            </BtnWrapper>
          )}
        </TextWrapper>
        <ImageWrapper>
          <GatsbyImage image={getImage(image.src)} alt={image.alt} />
        </ImageWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeAreInvesting

const Description = styled(T.BodyLarge)`
  max-width: 970px;
  margin: 0 auto;
  margin-top: 16px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1370px;
  gap: 40px;
  margin: 0 auto;
  align-items: center;
  position: relative;

  ${theme.above.t.m} {
    grid-template-columns: 700fr 770fr;
    gap: 80px;
  }
  ${Triangle}
  &:after {
    bottom: -5px;
    left: -106px;
    z-index: 3;
    transform: rotate(-90deg);
  }
`

const TextWrapper = styled.div``
const BtnWrapper = styled.div`
  margin-top: 24px;
`
const MobileImageWrapper = styled.div`
  margin-top: 16px;
  .gatsby-image-wrapper {
    img {
      border-radius: 10px;
    }
  }
  ${theme.above.t.m} {
    display: none;
  }
`

const ImageWrapper = styled.div`
  display: none;
  .gatsby-image-wrapper {
    border-radius: 10px;
    img {
      border-radius: 10px;
    }
  }
  ${theme.above.t.m} {
    display: block;
  }
`
