import React from "react"
import styled from "styled-components"
import { Section, CardFeatured, CardCta } from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionSupercharging = ({ data }) => {
  // console.log(data)
  return (
    <StyledSection>
      <Wrapper>
        <ContentWrapper>
          <CardFeatured
            bgc="#0E3674"
            tag={data.card.tag}
            company={data.card.company}
            logo={data.card.logo}
            image={data.card.image}
            btn={data.card.btn}
            quote={data.card.quote}
          />
          <CardCta title={data.title} btn={data.btn} bgc="#F2F6FA" />
        </ContentWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionSupercharging

const StyledSection = styled(Section)`
  margin-top: 24px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1570px;
  margin: 0 auto;
  justify-items: center;

  ${theme.above.l.m} {
    grid-template-columns: 986fr 560fr;
  }
`
