import * as React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  /* margin-top: 64px;
  .top {
    text-align: center;
  }
  h2 {
    color: #051734;
    font-weight: 700;
    line-height: 1;
    font-size: 28px;
    margin-bottom: 8px;
    margin: 0 16px;
  }
  p {
    margin: 0 16px;
    color: #1c3654;
  } */
`

const SectionContainer = ({ children, title, description }) => {
  return (
    <StyledSection>
      <div className="top">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      {children}
    </StyledSection>
  )
}

export default SectionContainer
