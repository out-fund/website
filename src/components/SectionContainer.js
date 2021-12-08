import * as React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin-top: 64px;
  /* padding-left: 32px;
  padding-right: 32px; */
  .top {
    text-align: center;
  }
  .title {
    margin: 0px 32px 8px;
    font-weight: 700;
    font-size: 28px;
    line-height: 1;
  }
  .description {
    margin: 0px 32px 24px;
    color: #1c3654;
  }
`

const SectionContainer = ({ children, title, description }) => {
  return (
    <StyledSection>
      <div className="top">
        <h2 className="title">{title}</h2>
        {description && <p className="description">{description}</p>}
      </div>

      {children}
    </StyledSection>
  )
}

export default SectionContainer
