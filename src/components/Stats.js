import * as React from "react"
import styled from "styled-components"

const StyledStats = styled.div`
  background-color: #aaf;
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
