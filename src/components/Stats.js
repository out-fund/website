import React from "react"
import styled from "styled-components"

import { S, theme, breakpoints } from "styles"

const Stats = ({ stats }) => {
  return (
    <StyledStats>
      <ul className="statStrip">
        {stats.map((item, index) => (
          <li key={index}>
            <Title as="h3">{item.stat}</Title>
            <Description>{item.text}</Description>
          </li>
        ))}
      </ul>
    </StyledStats>
  )
}

export default Stats

const Title = styled(S.H3)``

const Description = styled(S.BodyText)``

const StyledStats = styled.section`
  margin: 40px auto 24px;
  ${breakpoints.laptop} {
    max-width: ${theme.width.text};
    margin: 80px auto 64px;
  }

  ul {
    display: grid;
    grid-template-columns: auto auto;
    margin: 0;
    padding: 0;
    column-gap: 24px;
    list-style: none;
    row-gap: 24px;
    li {
      text-align: center;
    }
    ${breakpoints.laptop} {
      grid-template-columns: auto auto auto auto;
    }
  }
`
