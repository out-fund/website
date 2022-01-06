import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Section, SectionHeader, ThreeColumnIcons } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionWhy = ({ data }) => {
  // console.log(data)
  const { title, blocks } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={title} />
          {/* <Grid>
            {blocks.map((item, index) => (
              <Block key={index}>
                <IconWrapper>{parse(item.icon)}</IconWrapper>
                <BlockTitle as={"h3"}>{item.title}</BlockTitle>
                <BlockDescription>{item.description}</BlockDescription>
              </Block>
            ))}
          </Grid> */}
          <ThreeColumnIcons blocks={blocks} />
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWhy

const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  max-width: 1370px;
  margin: 0 auto;
  padding: 80px 0;
  border-radius: 10px;
`
const ContentWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
  padding: 0 40px;
  h2 {
    margin-bottom: 64px;
  }
`

// const Grid = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   column-gap: 24px;
//   row-gap: 24px;
//   margin-bottom: 40px;
// `
// const Block = styled.li`
//   text-align: center;
// `
// const BlockTitle = styled(T.H4)`
//   max-width: 260px;
//   margin: 0 auto;
// `

// const IconWrapper = styled.div`
//   margin-bottom: 24px;
//   svg {
//     width: 48px;
//     height: 48px;
//   }
// `
// const BlockDescription = styled(T.Body)``
