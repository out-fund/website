import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

// import { VisuallyHidden } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

const CardFounderName = ({ data }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(data.image.src)} alt={data.image.alt} />
      </ImageWrapper>
      <TextWrapper>
        <T.H5>{data.text.name}</T.H5>
        <T.Body>{data.text.role}</T.Body>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardFounderName

const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  float: right;
  margin: 0px 0 32px 32px;
  box-shadow: 0px 17px 33px rgba(5, 24, 64, 0.07),
    0px 3.8002px 13.45px rgba(5, 24, 64, 0.0522616),
    0px 1.07885px 7.14579px rgba(5, 24, 64, 0.0377807);

  max-width: 40vw;
  display: none;
  ${theme.above.t.s} {
    display: block;
  }
  ${theme.above.t.m} {
    max-width: 370px;
  }
`
const ImageWrapper = styled.div``
const TextWrapper = styled.div`
  padding: 16px 32px;
  h5 {
    margin: 0;
    line-height: 1.4;
  }
  p {
    margin: 0 !important;
  }
`
