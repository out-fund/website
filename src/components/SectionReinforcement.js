import * as React from "react"
import styled from "styled-components"

const StyledSectionReinforcement = styled.div``

const SectionReinforcement = ({ children, title, cta, ctaUrl }) => {
  return (
    <StyledSectionReinforcement>
      <div className="section">
        <h2>{title}</h2>
        <div className="cta">{cta}</div>
        <div className="ctaUrl">{ctaUrl}</div>
      </div>

      {children}
    </StyledSectionReinforcement>
  )
}

export default SectionReinforcement
