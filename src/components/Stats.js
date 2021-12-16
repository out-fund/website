import React from "react"
import styled from "styled-components"

import { SectionWrapper } from "components"
import { W, S, theme } from "styles"

const Stats = ({ data }) => {
  return (
    <SectionWrapper>
      <Wrapper>
        <Grid>
          {data.map((item, index) => (
            <li key={index}>
              <Title as="h3">{item.stat}</Title>
              <Description>{item.text}</Description>
            </li>
          ))}
        </Grid>
      </Wrapper>
    </SectionWrapper>
  )
}

export default Stats

const Title = styled(S.H3)``
const Description = styled(S.BodyText)``

// const StatsWrapper = styled.section``
const Wrapper = styled(W.ContainerM)`
  margin-top: 16px;
  ${theme.above.laptop} {
    margin-top: 56px;
  }
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
  column-gap: 24px;
  list-style: none;
  row-gap: 24px;
  li {
    text-align: center;
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

// margin: 40px auto 24px;
// ${breakpoints.laptop} {
//   max-width: ${theme.width.text};
//   margin: 80px auto 64px;
// }

// ul {

// }
