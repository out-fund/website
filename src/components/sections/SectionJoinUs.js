import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, Section, SectionHeader } from "./../../components"

const SectionJoinUs = ({ data }) => {
  const { title, btn, description, image } = data
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
            <GatsbyImage image={getImage(image.src)} alt={data.image.alt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionJoinUs

const Wrapper = styled.div``
const ContentWrapper = styled.div``
// /* display: grid;
// grid-template-columns: repeat(1, 1fr);
// column-gap: 100px;
// align-items: center;
// row-gap: 40px;

// theme.above.laptop} {
//   grid-template-columns: 1fr 1.2fr;
// } */

const TextWrapper = styled.div``
const BtnWrapper = styled.div``
const ImageWrapper = styled.div``
