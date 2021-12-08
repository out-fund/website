import * as React from "react"
import styled from "styled-components"

const Buton = styled.button`
  background-color: #faf;
  border: none;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 24px;
  border-radius: 36px;
  font-family: inherit;
  font-weight: 500;
`
const Primary = styled(Buton)`
  background-color: #1a65ba;
  color: #fff;
`

const Secondary = styled(Buton)`
  /* background-color: #ffa; */
  background-color: transparent;
  color: #1a65ba;
  box-shadow: inset 0px 0px 0px 1px #1a65ba;
`

export const PrimaryButton = ({ children }) => {
  return <Primary>{children}</Primary>
}

export const SecondaryButton = ({ children }) => {
  return <Secondary>{children}</Secondary>
}
