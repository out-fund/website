import React from "react"
import styled from "styled-components"
import {
  Section,
  SectionHeader,
  CardLogoReadMore,
  CardFeatured,
} from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionTestimonials = (props) => {
  return (
    <StyledSection>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={props.title} description={props.description} />
        </HeaderWrapper>
        <ContentWrapper>{props.children}</ContentWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionTestimonials

const StyledSection = styled(Section)`
  margin-bottom: 24px;
`

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  max-width: 1270px;
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  ${theme.above.l.m} {
    grid-template-columns: repeat(2, 1fr);
  }
`
