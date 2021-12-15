import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { SectionWrapper } from "components"
import { W, S, theme } from "styles"

const SectionRegulated = ({ data }) => {
  return (
    <SectionWrapper>
      <Wrapper>
        <ContentWrapper>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          <TextWrapper>
            <Grid>
              {data.blocks.map((item, index) => (
                <Block key={index}>
                  <IconWrapper>{parse(item.icon)}</IconWrapper>
                  <BlockTitle as={"h3"}>{item.title}</BlockTitle>
                  <BlockDescription>{item.text}</BlockDescription>
                </Block>
              ))}
            </Grid>
            <StatementWrapper>
              <Statement>{data.statement}</Statement>
            </StatementWrapper>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionRegulated

const Wrapper = styled(W.ContentWrapper)`
  background-color: #fff;
  border-radius: 10px;
`
const ContentWrapper = styled(W.Small)`
  padding: 32px 24px 24px;

  ${theme.above.tablet} {
    padding: 32px;
  }
  ${theme.above.laptop} {
    padding: 64px;
  }
  ${theme.above.desktop} {
    padding: 80px;
  }
`
const TextWrapper = styled.div`
  margin-top: 24px;
  ${theme.above.tablet} {
    padding: 32px;
  }
  ${theme.above.laptop} {
    padding: 48px;
  }
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 40px;

  ${theme.above.tablet} {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 64px;
    column-gap: 30px;
    row-gap: 40px;
  }
`
const Block = styled.li``
const BlockTitle = styled(S.H6)`
  text-align: center;
  ${theme.above.tablet} {
    text-align: left;
  }
`

const IconWrapper = styled.div`
  margin-bottom: 14px;
  text-align: center;
  ${theme.above.tablet} {
    text-align: left;
  }
  svg {
    width: 48px;
    height: 48px;
  }
`
const Title = styled(S.H2)`
  text-align: center;
`

const Description = styled(S.SubHeading)`
  max-width: 770px;
  margin: 0 auto;
  text-align: center;
  margin-top: 16px;
`
const BlockDescription = styled(S.BodyMedium)``

const StatementWrapper = styled.div`
  padding: 12px 24px;
  background-color: #edf1f5;
  border-radius: 4px;
`
const Statement = styled(S.BodyMedium)`
  font-weight: 400;
`
