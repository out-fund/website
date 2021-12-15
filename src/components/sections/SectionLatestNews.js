import React from "react"
import styled from "styled-components"
import { W, theme } from "styles"
import { SectionContainer, CardNews } from "components"
// import parse from "html-react-parser"

const SectionLatestNews = ({ data }) => {
  return (
    <SectionContainer title={data.title}>
      <Wrapper>
        <ContentWrapper>
          <GridNews>
            {data.cards.map((item, index) => (
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
    </SectionContainer>
  )
}
export default SectionLatestNews

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.FullWidth)``
const GridNews = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  margin-bottom: 64px;
  row-gap: 30px;
  /* height: 560px; */

  ${theme.above.tablet} {
    grid-template-columns: repeat(1, 1fr);
    /* height: 460px; */
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(2, 1fr);
    /* height: 460px; */
  }
  ${theme.above.desktop} {
    grid-template-columns: repeat(3, 1fr);
    /* height: 560px; */
  }
`
