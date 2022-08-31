import React from "react"
import styled from "styled-components"
import {
  Section,
  SectionHeader,
  CardLogoReadMore,
  CardFeatured,
} from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionWeFunded = ({ data }) => {
  return (
    <StyledSection>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} description={data.description} />
        </HeaderWrapper>
        <ContentWrapper>
          <CardLogoReadMore
            tag={data.cards.lemonadeDolls.tag}
            company={data.cards.lemonadeDolls.company}
            logo={data.cards.lemonadeDolls.logo}
            image={data.cards.lemonadeDolls.image}
            btn={data.cards.lemonadeDolls.btn}
          />

          <CardFeatured
            bgc="#EDE3D9"
            quote={data.cards.feel.quote}
            tag={data.cards.feel.tag}
            company={data.cards.feel.company}
            logo={data.cards.feel.logo}
            image={data.cards.feel.image}
            btn={data.cards.feel.btn}
          />
        </ContentWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionWeFunded

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
