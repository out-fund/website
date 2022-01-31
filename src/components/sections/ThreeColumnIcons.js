import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

// import { Section, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const ThreeColumnIcons = ({ blocks }) => {
  // console.log(data)
  return (
    <Wrapper>
      {blocks.map((block, index) => (
        <Block key={index}>
          {block.icon && <IconWrapper>{parse(block.icon)}</IconWrapper>}
          <BlockTitle as="h3">{block.title}</BlockTitle>
          <BlockDescription>{block.text}</BlockDescription>
        </Block>
      ))}
    </Wrapper>
  )
}
export default ThreeColumnIcons

// const Wrapper = styled.div``

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;
  max-width: 1170px;
  margin: 0 auto;

  ${theme.above.t.l} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
`

const BlockTitle = styled(T.H4)`
  margin-bottom: 16px;
`
const BlockDescription = styled(T.Body)``
const Block = styled.li`
  text-align: center;
`
const IconWrapper = styled.div`
  margin-bottom: 24px;
  svg {
    width: 48px;
    height: 48px;
  }
`
