import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Triangle } from "../../styles/utils"

import { W, theme } from "styles"

const HeroImage = ({ data }) => {
  const { src, alt } = data
  return (
    <Wrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(src)} alt={alt} />
      </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(W.ContainerMax)``
const ImageWrapper = styled.div`
  position: relative;

  ${theme.margin.heroImage}
  .gatsby-image-wrapper {
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
  }
  ${Triangle}
`

export default HeroImage
