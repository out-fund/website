import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { U, theme } from "styles"

const CardFounder = ({ company, logo, image }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(image.src)} alt={image.alt} />
      </ImageWrapper>
      <CompanyWrapper>
        <U.VisuallyHidden>{company}</U.VisuallyHidden>
        <LogoWrapper>{parse(logo)} </LogoWrapper>
      </CompanyWrapper>
    </Wrapper>
  )
}

export default CardFounder

const Wrapper = styled.div`
  background-color: #fff;
  max-width: 370px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${theme.shadows.boxShadow};
`
const ImageWrapper = styled.div``
const CompanyWrapper = styled.div`
  /* padding: 24px; */
  height: 64px;
  display: grid;
  align-items: center;
  padding: 0 24px;
  ${theme.above.tablet} {
    height: 80px;
  }
  /* display: flex; */
  /* flex-direction: column;
  align-items: center; */
`
const LogoWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  /* justify-content: center; */
  svg {
    max-width: 190px;
    max-height: 24px;
  }
`
