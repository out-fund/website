import React from "react"
import styled from "styled-components"

import { Section, CardNews, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
// import parse from "html-react-parser"

const SectionLatestNews = ({ data }) => {
  const { title, cards } = data
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={title} />
        </HeaderWrapper>
        <ContentWrapper>
          <GridNews>
            {cards.map((item, index) => (
              <CardNews
                key={index}
                company={item.company}
                quote={item.title}
                logo={item.logo}
                tag={item.tag}
                url={item.url}
              />
            ))}
          </GridNews>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionLatestNews

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div``
const GridNews = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  max-width: 1770px;
  margin: 0 auto;

  ${theme.above.t.m} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.above.l.m} {
    grid-template-columns: repeat(3, 1fr);
  }
`
