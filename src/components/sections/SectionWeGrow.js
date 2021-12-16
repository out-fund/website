import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { SectionWrapper } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const SectionWeGrow = ({ data }) => {
  return (
    <SectionWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title as="h2">{data.title}</Title>
            <Description as="div">{parse(data.description)}</Description>
            <TeamWorkedWrapper>
              <BlockTitle as="h4">{data.teamWorked.title}</BlockTitle>
              <LogosWrap>{parse(data.teamWorked.logos)}</LogosWrap>
            </TeamWorkedWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage
              image={getImage(data.image.src)}
              alt={data.image.alt}
            />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionWeGrow

const Title = styled(S.H3)`
  margin-bottom: 16px;
`
const Description = styled(S.BodyText)`
  margin-bottom: 24px;
  ul {
    margin-top: 16px;
    list-style-position: inside;
    list-style-type: disc;
    li {
      display: list-item;
    }
  }
  ${theme.above.tablet} {
    margin-bottom: 48px;
  }
  ${theme.above.desktop} {
    margin-bottom: 64px;
  }
`
const TeamWorkedWrapper = styled.div``
const BlockTitle = styled(S.H6)`
  margin-bottom: 24px;
`
const LogosWrap = styled.div`
  svg {
    max-width: 328px;
  }
`

const Wrapper = styled(W.ContainerFull)``
const ContentWrapper = styled(W.ContainerL)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 40px;
  ${theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 40px;
  }
  ${theme.above.laptop} {
    column-gap: 80px;
  }
`

const TextWrapper = styled.div``
const ImageWrapper = styled.div``
