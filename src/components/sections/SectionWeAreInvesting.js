import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionWeAreInvesting = ({ data }) => {
  const { title, description, btn, image } = data
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
          <GatsbyImage image={getImage(image.src)} alt={image.alt} />
        </ImageWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeAreInvesting

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

const TextWrapper = styled.div`
  /* theme.below.tablet} {
    text-align: center;
  } */
`
const BtnWrapper = styled.div`
  margin-top: 40px;
`
const ImageWrapper = styled.div`
  /* max-width: 560px; */

  .gatsby-image-wrapper {
    border-radius: 10px;
    img {
      /* object-position: left top; */
      border-radius: 10px;
    }
  }
`
// /* display: grid;
// grid-template-rows: auto;
// row-gap: 16px;

// theme.above.tablet} {
//   grid-template-columns: 1fr 1fr;
//   align-items: center;
//   column-gap: 3vw;
// } */
// /* theme.above.laptop} {
//   grid-template-columns: 1fr 370px;
//   column-gap: 32px;
// }
// theme.above.mediumLaptop} {
//   grid-template-columns: 1fr 470px;
//   align-items: center;
//   column-gap: 40px;
// }
// theme.above.desktop} {
//   grid-template-columns: 1fr 570px;
//   column-gap: 48px;
// }
// theme.above.mediumDesktop} {
//   grid-template-columns: 1fr 670px;
//   column-gap: 56px;
// }
// theme.above.largeDesktop} {
//   grid-template-columns: 1fr 770px;
//   column-gap: 64px;
// } */
