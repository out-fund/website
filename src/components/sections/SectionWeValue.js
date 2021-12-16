import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { SectionContainer } from "components"

const SectionWeValue = ({ data }) => {
  return (
    <SectionContainer title={data.title}>
      <Wrapper>
        <ContentWrapper>
          <Grid>
            {data.blocks.map((value, index) => (
              <Value key={index}>
                <Title as="h3">{value.title}</Title>
                <Description>{value.text}</Description>
              </Value>
            ))}
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </SectionContainer>
  )
}
export default SectionWeValue

const Title = styled(S.H6)`
  margin-bottom: 16px;
`
const Description = styled(S.BodyMedium)``

const Wrapper = styled(W.ContainerFull)``
const ContentWrapper = styled(W.ContainerL)``

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  ${theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 40px;
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 64px;
    row-gap: 64px;
  }
`
const Value = styled.li`
  /* display: grid;
  grid-template-rows: auto;


  ${theme.above.tablet} {
    grid-template-columns: 100px auto;
    column-gap: 24px;
  }
  ${theme.above.laptop} {
    grid-template-columns: 160px auto;
    column-gap: 40px;
  } */
`
