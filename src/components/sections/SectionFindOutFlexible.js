import { CalculatorV2, Section, SectionHeader } from "./../../components"

import React from "react"
import { Triangle } from "./../../styles/utils"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const SectionFindOutFlexible = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={data.title} description={data.description} />
          </TextWrapper>
          <CalculatorWrapper>
            <CalculatorV2 data={data.calculator} />
          </CalculatorWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFindOutFlexible

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1170px;
  margin: 0 auto;
  align-items: center;

  ${theme.above.t.m} {
    grid-template-columns: 560fr 570fr;
  }

  ${theme.above.d.m} {
  }
`
const TextWrapper = styled.div`
  max-width: 470px;
  h2 {
    max-width: 410px;
  }
  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
`
const CalculatorWrapper = styled.div`
  position: relative;
  ${Triangle}
  &:after {
    bottom: -36px;
    left: 608px;
    z-index: -1;
    /* transform: rotate(-180deg); */
  }

  ${theme.above.d.m} {
  }
`
