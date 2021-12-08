import * as React from "react"
import styled from "styled-components"

const StyledWeFunded = styled.div``

const WeFunded = ({ title, cite, company, companyUrl, btn, ...props }) => {
  let citationName = cite.split(",")[0]
  let citationFounderOf = cite.split(",")[1]
  console.log(citationName)
  return (
    <StyledWeFunded>
      <h4>{title}</h4>
      <p>
        <b>{citationName}</b>, {citationFounderOf}
      </p>
    </StyledWeFunded>
  )
}

export default WeFunded
