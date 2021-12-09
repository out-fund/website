import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "components/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledHero = styled.div`
  background-color: #fff;
  padding: 80px 32px 0;
  h1 {
    /* margin-top: 80px; */
    margin-bottom: 16px;
    color: #051734;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    @media (min-width: 1200px) {
      max-width: 630px;
      margin-top: 0;
      font-size: 64px;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 64px;
    color: #405e80;
    line-height: 1.5;
    @media (min-width: 1200px) {
      max-width: 470px;
      margin-bottom: 40px;
    }
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
    width: 100%;
  }
  @media (min-width: 1200px) {
    margin-right: 32px;
    margin-left: 32px;
    padding-top: 40px;
    padding-left: 40px;
    border-radius: 10px;
    .wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* justify-content: center; */
      /* justify-items: center; */
      width: 100%;
      max-width: 1370px;
      margin: 0 auto;
      column-gap: 24px;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .actons {
          button {
            width: unset;
            padding: 12px 32px;
            font-size: 18px;
            &:first-child {
              margin-right: 16px;
              margin-bottom: 0px;
            }
          }
        }
      }
    }
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
          <div className="wrap">
            <div className="content">
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <div className="actons">
                <PrimaryButton>{props.primaryCta}</PrimaryButton>
                <SecondaryButton>{props.secondaryCta}</SecondaryButton>
              </div>
            </div>
            <div className="heroImage">
              <GatsbyImage image={heroImage} alt={props.imageAlt} />
            </div>
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
