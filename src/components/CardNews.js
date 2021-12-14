import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { U, theme, S } from "styles"

const CardNews = ({ company, logo, quote, tag }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Tag tag={tag}>{tag}</Tag>
        <Figure>
          <blockquote>
            <S.H5 as="h3" dangerouslySetInnerHTML={{ __html: `“${quote}` }} />
          </blockquote>
          <figcaption>
            <U.VisuallyHidden>{company}</U.VisuallyHidden>
            {parse(logo)}
          </figcaption>
        </Figure>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardNews

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: ${theme.shadows.boxShadow};
  max-width: 570px;
  padding: 40px;
`
const Tag = styled.div`
  padding: 8px 16px;
  background-color: #edca80;
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ tag }) => (tag === "Partnership" ? "#0A5959" : "#876419;")};
  background-color: ${({ tag }) =>
    tag === "Partnership" ? "#80EDED" : "#edca80"};
`
const TextWrapper = styled.div``
const Figure = styled.figure`
  blockquote h3 {
    font-weight: 400;
  }
`
const LogoWrapper = styled.div``
