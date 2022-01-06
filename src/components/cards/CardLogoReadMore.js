import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { Button } from "./../../components"
import { VisuallyHidden } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const CardLogoReadMore = (props) => {
  const { tag, company, logo, btn, image, bgc } = props

  return (
    <Wrapper bgc={bgc} {...props}>
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

const LogoWrapper = styled.div`
  margin-top: auto;

  svg {
    max-width: 100%;
    height: 32px;
  }
`

const Wrapper = styled.div`
  /* max-width: 570px; */
  width: 100%;
  position: relative;
  min-height: 370px;
  border-radius: 10px;
  max-width: 986px;
  ${theme.above.t.s} {
    /* height: 470px; */
  }

  ${theme.above.d.m} {
    /* height: 570px; */
  }
  &.thevegankind {
    ${LogoWrapper} {
      svg {
        width: 100px;
        height: 95px;
      }
    }
  }
`
const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
  .gatsby-image-wrapper {
    height: 100%;
  }
`
const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px;

  ${theme.above.t.s} {
    padding: 24px 48px 32px;
  }

  ${theme.above.d.m} {
    padding: 32px 64px 56px;
  }
`

const Tag = styled.h3`
  padding: 4px 16px;
  background-color: ${(props) => props.tagColor};
  /* backdrop-filter: blur(20px); */
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  align-self: flex-start;
  margin-bottom: 40px;
`
const BtnWrapper = styled.div`
  margin-top: 40px;
`
