import * as React from "react"
import styled from "styled-components"

const StyledStats = styled.div`
  /* background-color: #aaf; */
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
