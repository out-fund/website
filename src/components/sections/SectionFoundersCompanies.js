import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Button, Section, CardFounder, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionFoundersCompanies = ({ data }) => {
  const { title, btn, logos, cards } = data
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={title} />
        </HeaderWrapper>

        <GridFounders>
          {cards.map((item, index) => (
            <CardFounder
              key={index}
              company={item.company}
              logo={item.logo}
              image={item.image}
            />
          ))}
        </GridFounders>
        <GridLogos count={logos.length}>
          {logos.map((item, index) => (
            <LogoWrapper key={index}>{parse(item)} </LogoWrapper>
          ))}
        </GridLogos>
        <BtnWrapper>
          <Button to={btn.url} variant="secondary">
            {btn.text}
          </Button>
        </BtnWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFoundersCompanies

const Wrapper = styled.div`
  max-width: 1570px;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 570px;
  margin: 0 auto;
  margin-bottom: 48px;
`

const GridFounders = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  margin-bottom: 64px;
  row-gap: 24px;
  /* align-content: center;
  justify-items: stretch; */
  place-items: center;

  ${theme.above.t.m} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const GridLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  align-items: center;
  column-gap: 40px;
  row-gap: 24px;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  ${theme.above.d.m} {
    margin-bottom: 64px;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 200px;
    height: 24px;
    opacity: 0.5;
    path {
      fill: #405e80;
    }
  }
`
const BtnWrapper = styled.div`
  text-align: center;
`
