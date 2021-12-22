import React from "react"
import styled from "styled-components"

import T from "./../../styles/new/typography"

const Stats = ({ data }) => {
  return (
    <Wrapper>
      <Grid>
        {data.map((item, index) => (
          <Block key={index}>
            <Title as="h3">{item.stat}</Title>
            <Description>{item.text}</Description>
          </Block>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Stats

const Title = styled(T.H3)``
const Description = styled(T.BodyLarge)``
const Grid = styled.ul``
const Block = styled.li``

const Wrapper = styled.section``

/* display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
  column-gap: 24px;
  list-style: none;
  row-gap: 24px;
  li {
    text-align: center;
  }
  theme.above.laptop {
    grid-template-columns: repeat(4, 1fr);
  } */
// `

// margin: 40px auto 24px;
// breakpoints.laptop {
//   max-width: ${theme.width.text};
//   margin: 80px auto 64px;
// }

// ul {

// }
