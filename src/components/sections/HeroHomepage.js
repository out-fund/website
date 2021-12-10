import React from "react"
import styled from "styled-components"
import { BasicWrapper } from "./Wrappers"

export default function HeroHomepage() {
  return (
    <HeroWrapper>
      <Wrapper>Hero test</Wrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header``
const Wrapper = styled(BasicWrapper)``
