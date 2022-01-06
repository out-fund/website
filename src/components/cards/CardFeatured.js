import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"

import { VisuallyHidden } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const CardFeatured = (props) => {
  const { tag, company, logo, btn, image, bgc, quote } = props
  // console.log(quote)
  return (
    <Wrapper bgc={bgc} className={company.toLowerCase()}>
      <TextWrapper>
        {tag && (
          <Tag tagColor={tag.color}>
            <span>{tag.text}</span>
            <VisuallyHidden>{company}</VisuallyHidden>
          </Tag>
        )}
        <LogoWrapper>{parse(logo)}</LogoWrapper>
        <Quote as="q">{quote.title}</Quote>
        <By>{quote.by}</By>
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

export default CardFeatured

const Quote = styled(T.H3)`
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 16px;
  position: relative;
  &:before,
  &:after {
    position: absolute;
  }
  &:before {
    left: -14px;
  }
`
const By = styled(T.Body)`
  /* margin-bottom: 24px; */
`

const ImageWrapper = styled.div`
  display: flex;
  ${theme.above.t.m} {
    order: -1;
  }
`

const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 0px;

  ${theme.above.t.s} {
    padding: 32px 40px 32px;
  }
  ${theme.above.t.m} {
    order: 1;
    padding: 32px 0px 32px;
  }

  ${theme.above.d.m} {
    padding: 32px 0px 48px;
  }
`

const Wrapper = styled.div`
  background-color: ${({ bgc }) => bgc};
  max-width: 986px;
  border-radius: 10px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  gap: 0px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.feel {
    .ButtonWrap a {
      color: var(--gray500);
      box-shadow: inset 0px 0px 0px 1px var(--gray500);
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    ${By} {
      margin-bottom: 40px;
    }
    ${ImageWrapper} {
      margin-top: -40px;
      padding-right: 10px;
      ${theme.above.t.m} {
        margin-top: unset;
        padding-right: 0;
      }
    }
  }
  &.onto {
    q,
    p {
      color: #deeeff;
    }
    ${By} {
      margin-top: auto;
    }
    ${TextWrapper} {
      padding: 24px 32px;
    }
  }
  ${theme.above.t.m} {
    grid-template-columns: 500fr 416fr;
    gap: 40px;
    max-height: 560px;
    padding-right: 40px;
  }
  ${theme.above.d.m} {
    gap: 70px;
  }
`

const LogoWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 48px;
  /* ${theme.above.d.m} {
    margin-top: 32px;
    margin-bottom: 48px;
  } */
  svg {
    max-width: 100%;
    height: 32px;
  }
`
// const Tag = styled.div``
const Tag = styled.h3`
  padding: 4px 16px;
  background-color: ${(props) => props.tagColor};
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  align-self: flex-start;
`
const BtnWrapper = styled.div`
  margin-top: auto;
  gap: 40px;
  /* padding-top: 40px; */
  /* margin-top: 40px; */
`
