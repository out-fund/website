import React from "react"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}
export default Main

const MainWrapper = styled.main`
  position: relative;
  padding: 0 8px;
  ${theme.above.p.m} {
    padding: 0 16px;
  }
  ${theme.above.t.s} {
    padding: 0 20px;
  }
  ${theme.above.l.m} {
    padding: 0 24px;
  }

  ${theme.above.d.m} {
    /* padding: 0 24px; */
  }
`
