import React from "react"
import GlobalStyle from "./src/styles/new/utils/GlobalStyle"

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
