import React from "react"
import styled from "styled-components"
// import parse from "html-react-parser"

import { Section, SectionHeader, ThreeColumnIcons } from "./../../components"

// import T from "./../../styles/new/typography"
// import { theme } from "./../../styles/new/theme"

const SectionRegulated = ({ data, bg }) => {
  const { title, description, blocks } = data
  return (
    <Section>
      <Wrapper bg={bg}>
        <ContentWrapper bg={bg}>
          <HeaderWrapper>
            <SectionHeader title={title} description={description} />
          </HeaderWrapper>
          <TextWrapper>
            <ThreeColumnIcons blocks={blocks} />
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionRegulated

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 48px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div``
const TextWrapper = styled.div``
