import React, { Fragment } from "react"
import styled from "styled-components"
import { W, theme } from "styles"
import { SectionWrapper, CardLogoReadMore } from "components"

const SectionFeaturedCards = (props) => {
  console.log(props.data)

  return (
    <SectionWrapper>
      <Wrapper>
        <ContentWrapper>
          <CardsWrapper>
            {props.data.map(({ node: story }, index) => (
              <Fragment key={index}>
                {story.frontmatter.featured && (
                  <CardLogoReadMore data={story} tag={"We funded"} />
                )}
              </Fragment>
            ))}
          </CardsWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionFeaturedCards

const Wrapper = styled(W.ContainerFull)`
  margin-top: 64px;
`
const ContentWrapper = styled(W.ContainerM)``
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 30px;

  ${theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`
