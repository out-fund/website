import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Triangle } from "../../styles/utils"

const HeroImage = ({ data }) => {
  const { src, alt } = data
  return (
    <ImageWrapper>
      <GatsbyImage image={getImage(src)} alt={alt} />
    </ImageWrapper>
  )
}

export default HeroImage

const ImageWrapper = styled.div`
  /* position: relative;


  .gatsby-image-wrapper {
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
  }
  Triangle */
`
