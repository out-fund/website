import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "./shared/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

const Hero = (props) => {
  const heroImage = getImage(props.image)
  return (
    <StyledHero>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <div className="actons">
        <PrimaryButton>{props.primaryCta}</PrimaryButton>
        <SecondaryButton>{props.secondaryCta}</SecondaryButton>
      </div>
      <div className="heroImage">
        <GatsbyImage image={heroImage} alt={props.imageAlt} />
      </div>
    </StyledHero>
  )
}

export default Hero
