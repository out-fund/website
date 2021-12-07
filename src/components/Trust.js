import * as React from "react"
import styled from "styled-components"

const StyledStats = styled.div`
  background-color: #ffa;
`

const Trust = ({ data }) => {
  console.log("test", data)
  return (
    <StyledStats>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <ul className="gird">
        {data.blocks.map((item) => (
          <li key={item.text}>
            <div
              className="icon"
              role="img"
              dangerouslySetInnerHTML={{ __html: `${item.icon}` }}
            />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </StyledStats>
  )
}

export default Trust
