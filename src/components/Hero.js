import * as React from "react"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "./shared/Button"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const StyledHero = styled.header`
  /* background-color: #fff;
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
  } */
`

const Hero = ({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  imgName,
  imgAlt,
  data,
}) => {
  return (
    <StyledHero>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="actons">
        <PrimaryButton>{primaryBtn}</PrimaryButton>
        <SecondaryButton>{secondaryBtn}</SecondaryButton>
      </div>
      <div className="heroImage">
        <StaticImage src="../images/heroUK.png" alt={imgAlt} />
      </div>
    </StyledHero>
  )
}

export default Hero
