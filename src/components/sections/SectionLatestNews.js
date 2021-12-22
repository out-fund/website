import React from "react"
import styled from "styled-components"

import { Section, CardNews, SectionHeader } from "./../../components"
// import parse from "html-react-parser"

const SectionLatestNews = ({ data }) => {
  const { title, cards } = data
  return (
    <Section>
      <Wrapper>
        <SectionHeader title={title} />
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

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const GridNews = styled.div`
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  margin-bottom: 64px;
  row-gap: 30px;


  theme.above.tablet} {
    grid-template-columns: repeat(1, 1fr);

  }
  theme.above.laptop} {
    grid-template-columns: repeat(2, 1fr);

  }
  theme.above.desktop} {
    grid-template-columns: repeat(3, 1fr);

  }  */
`
