import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "components/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledHero = styled.header`
  background-color: #fff;
  padding: 80px 32px 0;
  h1 {
    /* margin-top: 80px; */
    margin-bottom: 16px;
    color: #051734;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
  }
  p {
    margin-bottom: 64px;
    color: #405e80;
    line-height: 1.5;
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
    position: relative;
    top: 32px;
    width: 100;
  }
`

const Hero = (props) => {
  const heroImage = getImage(props.image)
  return (
    <>
      {props.variant === "about" && (
        <StyledHero>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="heroImage">
            <GatsbyImage image={heroImage} alt={props.imageAlt} />
          </div>
        </StyledHero>
      )}
      {props.variant === "homepage" && (
        <StyledHero>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="actons">
            <PrimaryButton>{props.primaryCta}</PrimaryButton>
            <SecondaryButton>{props.secondaryCta}</SecondaryButton>
          </div>
          <div className="heroImage">
            <GatsbyImage image={heroImage} alt={props.imageAlt} />
          </div>
        </StyledHero>
      )}
      {props.variant === "careers" && (
        <StyledHero>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="heroImage">
            <GatsbyImage image={heroImage} alt={props.imageAlt} />
          </div>
          <a href={props.ctaUrl}>{props.cta}</a>
        </StyledHero>
      )}
    </>
  )
}

export default Hero
