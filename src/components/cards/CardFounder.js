import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { VisuallyHidden } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const CardFounder = ({ company, logo, image }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(image.src)} alt={image.alt} />
      </ImageWrapper>
      <CompanyWrapper>
        <VisuallyHidden>{company}</VisuallyHidden>
        <LogoWrapper>{parse(logo)} </LogoWrapper>
      </CompanyWrapper>
    </Wrapper>
  )
}

export default CardFounder

const Wrapper = styled.div`
  max-width: 370px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0px 17px 33px rgba(5, 24, 64, 0.07),
    0px 3.8002px 13.45px rgba(5, 24, 64, 0.0522616),
    0px 1.07885px 7.14579px rgba(5, 24, 64, 0.0377807);
`
const ImageWrapper = styled.div``
const CompanyWrapper = styled.div`
  background-color: ${theme.color.white};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px;
`
const LogoWrapper = styled.div`
  svg {
    width: 100%;
    max-width: 190px;
    height: 24px;
  }
`
