import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Triangle } from "../../styles/utils"

import { theme } from "./../../styles/new/theme"

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

export default HeroImage

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: -8px;

  ${theme.above.p.m} {
    top: -16px;
  }
  ${theme.above.t.s} {
    top: -24px;
  }
  ${theme.above.l.m} {
    top: -56px;
  }
  ${theme.above.d.m} {
    top: -80px;
  }
`
const ImageWrapper = styled.div`
  max-width: 1570px;
  border-radius: 10px;
  overflow: hidden;
  /* position: absolute; */
  /* position: relative;


  .gatsby-image-wrapper {
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
  }
  Triangle */
`
