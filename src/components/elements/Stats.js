import React from "react"
import styled from "styled-components"

import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

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

const Title = styled(T.H3)`
  text-align: center;
`
const Description = styled(T.Body)`
  text-align: center;
`
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
  column-gap: 24px;
  list-style: none;
  row-gap: 24px;
  ${theme.above.t.m} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const Block = styled.li``

const Wrapper = styled.section`
  max-width: 970px;
  margin: 0 auto;
`
