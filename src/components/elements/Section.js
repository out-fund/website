import React from "react"
import styled from "styled-components"

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}
export default Section

const SectionWrapper = styled.section`
  margin-bottom: 120px;
`
