import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionJoinUs = ({ data }) => {
  const { title, btn, description, image } = data
  return (
    <Section>
      <Wrapper>
        <TextWrapper>
          <SectionHeader title={title} description={description} />
          <BtnWrapper>
            <Button to={btn.url} variant="secondary">
              {btn.text}
            </Button>
          </BtnWrapper>
        </TextWrapper>
        <ImageWrapper>
          <GatsbyImage image={getImage(image.src)} alt={data.image.alt} />
        </ImageWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionJoinUs

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 40px;
  max-width: 1370px;
  margin: 0 auto;

  ${theme.above.t.m} {
    grid-template-columns: 570fr 670fr;
    align-items: center;
    column-gap: 40px;
  }
  ${theme.above.l.m} {
    column-gap: 80px;
  }
`

const TextWrapper = styled.div``
const BtnWrapper = styled.div`
  margin-top: 40px;
`
const ImageWrapper = styled.div``
