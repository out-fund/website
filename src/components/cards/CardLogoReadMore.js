import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { Button } from "./../../components"
import { VisuallyHidden } from "./../../styles/utils"

const CardLogoReadMore = (props) => {
  const { tag, company, logo, btn, image, bgc } = props

  return (
    <Wrapper>
      <TextWrapper>
        {tag && (
          <Tag tagColor={tag.color}>
            <span>{tag.text}</span>
            <VisuallyHidden>{company}</VisuallyHidden>
          </Tag>
        )}

        <LogoWrapper>{parse(logo)}</LogoWrapper>
        {btn && (
          <BtnWrapper>
            <Button to={btn.url} variant="secondary" color="white">
              {btn.text}
            </Button>
          </BtnWrapper>
        )}
      </TextWrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(image.src)} alt={image.alt} />
      </ImageWrapper>
    </Wrapper>
  )
}

export default CardLogoReadMore

const Wrapper = styled.div`
  /* max-width: 570px;
  position: relative;
  height: 370px;

  theme.above.tablet} {
    height: 470px;
  }
  theme.above.laptop} {
    height: 570px;
  } */
`
const ImageWrapper = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;

  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  .gatsby-image-wrapper {
    height: 100%;
  } */
`
const TextWrapper = styled.div`
  /* position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px;

  theme.above.tablet} {
    padding: 24px 48px 32px;
  }
  theme.above.laptop} {
    padding: 32px 64px 56px;
  } */
`
const LogoWrapper = styled.div`
  /* margin-top: auto;

  svg {
    max-width: 100%;
    height: 32px;
  } */
`
const Tag = styled.div`
  /* padding: 4px 16px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.8;
  align-self: flex-start; */
`
const BtnWrapper = styled.div`
  /* margin-top: 40px; */
`
