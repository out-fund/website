import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { Section } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionWeGrow = ({ data }) => {
  const { title, description, teamWorked, image } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title as="h2">{title}</Title>
            <Description as="div">{parse(description)}</Description>
            <TeamWorkedWrapper>
              <BlockTitle as="h3">{teamWorked.title}</BlockTitle>
              <LogosWrap>{parse(teamWorked.logos)}</LogosWrap>
            </TeamWorkedWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeGrow

const Title = styled(T.H2)`
  margin-bottom: 16px;
`
const Description = styled(T.BodyLarge)`
  margin-bottom: 40px;
  ul {
    margin-top: 16px;
    list-style-position: inside;
    list-style-type: disc;
    li {
      display: list-item;
    }
  }
  /* theme.above.tablet} {
    margin-bottom: 48px;
  }
  theme.above.desktop} {
    margin-bottom: 64px;
  } */
`
const TeamWorkedWrapper = styled.div``

const BlockTitle = styled(T.H3)`
  margin-bottom: 24px;
`
const LogosWrap = styled.div`
  svg {
    max-width: 328px;
  }
`

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 40px;
  max-width: 1370px;
  margin: 0 auto;
  ${theme.above.t.m} {
    grid-template-columns: 570fr 670fr;
    align-items: center;
    column-gap: 40px;
  }
  ${theme.above.l.m} {
    column-gap: 80px;
  }
`

const TextWrapper = styled.div``
const ImageWrapper = styled.div``
