import * as React from "react"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "./shared/Button"
import { StaticImage } from "gatsby-plugin-image"

const StyledHero = styled.nav`
  background-color: #fff;
  padding: 0 32px;
  h1 {
    color: #051734;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    margin-top: 80px;
    margin-bottom: 16px;
  }
  p {
    line-height: 1.5;
    margin-bottom: 64px;
    color: #405e80;
  }
  .actons {
    button {
      width: 100%;
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
  .heroImage {
    margin: 16px -32px 0;
    width: 100;
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
      <div className="actons">
        <PrimaryButton>Get funded</PrimaryButton>
        <SecondaryButton>Learn how it works</SecondaryButton>
      </div>
      <div className="heroImage">
        <StaticImage
          src="../images/hero.png"
          alt="Hero image showing company directors"
        />
      </div>
    </StyledHero>
  )
}

export default Hero
