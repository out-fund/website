import React from "react"
import styled from "styled-components"

import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

import { Section } from "./../../components"

const SectionInfoStrip = ({ data }) => {
  // console.log(data)
  return (
    <Section>
      <Wrapper>
        <Grid>
          {data.map((item, index) => (
            <Block key={index}>
              <TextWrapper>
                <Description as="span">{item.up}</Description>
                <Title as="span">{item.down}</Title>
              </TextWrapper>
            </Block>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default SectionInfoStrip

const Title = styled(T.H3)`
  text-align: center;
  font-size: 20px;

  ${theme.above.p.m} {
    font-size: 24px;
  }

  ${theme.above.t.s} {
    font-size: 32px;
  }

  ${theme.above.d.m} {
    font-size: 40px;
  }
`
const Description = styled(T.Body)`
  text-align: center;
  margin-bottom: 8px;
`
const Grid = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
  column-gap: 24px;
  list-style: none;
  row-gap: 24px;

  ${theme.above.t.m} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${theme.above.d.m} {
    grid-template-columns: repeat(5, 1fr);
  } */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`
const Block = styled.li`
  /* margin: 0 16px; */
`
const TextWrapper = styled.h3`
  span {
    display: block;
  }
`

const Wrapper = styled.section`
  max-width: 1170px;
  margin: 0 auto;
`
