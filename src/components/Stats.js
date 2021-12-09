import * as React from "react"
import styled from "styled-components"

const StyledStats = styled.div`
  /* background-color: #aaf; */
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin-top: 80px;
    margin-right: auto;
    margin-bottom: 64px;
    margin-left: auto;
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
    @media (min-width: 1200px) {
      grid-template-columns: auto auto auto auto;
    }
  }
  h4 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 24px;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  @media (min-width: 1200px) {
    h4 {
      margin-bottom: 16px;
      font-size: 48px;
    }
    p {
      font-size: 20px;
    }
  }
`

const Stats = ({ stats }) => {
  return (
    <StyledStats>
      <ul className="statStrip">
        {stats.map((item) => (
          <li key={item.stat}>
            <h4>{item.stat}</h4>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </StyledStats>
  )
}

export default Stats
