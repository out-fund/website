import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

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
          <Description>{description}</Description>

          <BtnWrapper>
            <Button to={btn.url} variant="secondary">
              {btn.text}
            </Button>
          </BtnWrapper>
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

  ${theme.above.t.m} {
    grid-template-columns: 700fr 770fr;
    gap: 80px;
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
