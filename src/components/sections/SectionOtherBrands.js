import React, { Fragment } from "react"
import styled from "styled-components"
import { W, theme } from "styles"
import { SectionWrapper, CardLogoReadMore, CardCta } from "components"

const SectionOtherBrands = (props) => {
  console.log(props.data)

  return (
    <SectionWrapper>
      <Wrapper>
        <ContentWrapper>
          <CardsWrapper>
            {props.data.map(({ node: story }, index) => (
              <Fragment key={index}>
                {!story.frontmatter.featured && (
                  <CardLogoReadMore data={story} tag={"We funded"} />
                )}
              </Fragment>
            ))}
            <CardCta
              title="And many more... <br/><br/>Become a part of the group.<b> Start supercharging <br/>Your Growth!</b>"
              btn="Get funded"
              btnUrl="/"
            />
          </CardsWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionOtherBrands

const Wrapper = styled(W.ContainerFull)`
  margin-top: 64px;
`
const ContentWrapper = styled(W.ContainerMax)``
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 30px;

  ${theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  > div:last-child {
    svg {
      width: 100px;
      height: 95px;
    }
  }
`
