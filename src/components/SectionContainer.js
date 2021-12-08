import * as React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin-top: 64px;
  /* padding-left: 32px;
  padding-right: 32px; */
  .top {
    text-align: center;
  }
  h2 {
    font-weight: 700;
    line-height: 1;
    font-size: 28px;
    margin: 0px 32px 8px;
  }
  p {
    margin: 0px 32px 24px;
    color: #1c3654;
  }
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
