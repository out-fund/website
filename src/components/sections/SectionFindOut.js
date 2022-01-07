import React from "react"
import styled from "styled-components"

import { Section, SectionHeader, Calculator } from "./../../components"
import { theme } from "./../../styles/new/theme"
import { Triangle } from "./../../styles/utils"

const SectionFindOut = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={data.title} description={data.description} />
          </TextWrapper>
          <CalculatorWrapper>
            <Calculator data={data.calculator} />
          </CalculatorWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFindOut

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
