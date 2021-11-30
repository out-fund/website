import * as React from "react"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "./shared/Button"

const StyledHero = styled.nav`
  background-color: #fff;
  padding: 0 32px;
  h1 {
    color: #051734;
    font-weight: 700;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <h1>Growth capital for founders like You</h1>
      <p>
        Supercharged funding from £10K to £2M for your marketing & inventory
        purchases.
      </p>
      <PrimaryButton>Get funded</PrimaryButton>
      <SecondaryButton>Learn how it works</SecondaryButton>
    </StyledHero>
  )
}

export default Hero
