import React from "react"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const Section = ({ children, ...props }) => {
  return <SectionWrapper {...props}>{children}</SectionWrapper>
}
export default Section

const SectionWrapper = styled.section`
  margin-bottom: 80px;
  margin-top: 80px;
  ${theme.above.t.m} {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  ${theme.above.d.m} {
    margin-top: 120px;
    margin-bottom: 120px;
  }
`
