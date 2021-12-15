import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { SectionContainer } from "components"
import { W, S } from "styles"

const SectionRegulated = ({ data }) => {
  return (
    <SectionContainer title={data.title} description={data.description}>
      <Wrapper>
        <ContentWrapper>
          <Grid>
            {data.blocks.map((item, index) => (
              <Block key={index}>
                <IconWrapper>{parse(item.icon)}</IconWrapper>
                <BlockDescription>{item.text}</BlockDescription>
              </Block>
            ))}
          </Grid>
          <p className="statement">{data.statement}</p>
        </ContentWrapper>
      </Wrapper>
    </SectionContainer>
  )
}
export default SectionRegulated

const Wrapper = styled(W.FullWidth)`
  background-color: #fff;
`
const ContentWrapper = styled.div``

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 40px;
`
const Block = styled.li``

const IconWrapper = styled.div`
  svg {
    width: 48px;
    height: 48px;
  }
`
const BlockDescription = styled(S.BodyText)``
