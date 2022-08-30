import React from "react"
import styled from "styled-components"
import {
  Section,
  SectionHeader,
  CardLogoReadMore,
  CardFeatured,
} from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionComparison = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} description={data.description} />
        </HeaderWrapper>
        <ContentWrapper>{/* table */}</ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionComparison

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  max-width: 1570px;
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  justify-items: center;

  > div {
    order: 1;
  }
  .feel {
    order: -1;
  }
  ${theme.above.l.m} {
    grid-template-columns: 560fr 986fr;
    > div {
      order: -1;
    }
    .feel {
      order: 1;
    }
  }
`
