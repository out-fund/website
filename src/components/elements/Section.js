import React from "react"
import styled from "styled-components"

const Section = ({ children, ...props }) => {
  return <SectionWrapper {...props}>{children}</SectionWrapper>
}
export default Section

const SectionWrapper = styled.section`
  margin-bottom: 120px;
  margin-top: 120px;
`
