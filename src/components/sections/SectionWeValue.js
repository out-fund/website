import React from "react"
import styled from "styled-components"

import { Section, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"

const SectionWeValue = ({ data }) => {
  const { title, description, blocks } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={title} description={description} />
          <Grid>
            {blocks.map((value, index) => (
              <Value key={index}>
                <Title as="h3">{value.title}</Title>
                <Description>{value.text}</Description>
              </Value>
            ))}
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeValue

const Title = styled(T.H6)`
  /* margin-bottom: 16px; */
`
const Description = styled(T.Body)``

const Wrapper = styled.div``
const ContentWrapper = styled.div``

const Grid = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 40px;
  }
  theme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 64px;
    row-gap: 64px;
  } */
`
const Value = styled.li`
  /* display: grid;
  grid-template-rows: auto;


  theme.above.tablet} {
    grid-template-columns: 100px auto;
    column-gap: 24px;
  }
  theme.above.laptop} {
    grid-template-columns: 160px auto;
    column-gap: 40px;
  } */
`
