import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { PrimaryButton, SecondaryButton } from "./shared/Button"

const StyledCard = styled.div``

const Card = ({
  tag,
  company,
  title,
  image,
  imageAlt,
  logo,
  cta,
  ctaUrl,
  bgColor,
  cite,
  variant,
}) => {
  let citationName
  let citationFounderOf
  if (cite) {
    citationName = cite.split(",")[0]
    citationFounderOf = cite.split(",")[1]
  }
  const cardImage = getImage(image)
  return (
    <>
      {variant === "wide" && (
        <StyledCard
          className="squereCardLogoOnly"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div>
            <span className="tag">{tag}</span>
            <span className="company">{company}</span>
          </div>
          <div className="logo">{logo}</div>
          <GatsbyImage image={cardImage} alt={imageAlt} />
          <h4 className="title">{title}</h4>
          {cite && (
            <p className="cite">
              <b>{citationName}</b>, {citationFounderOf}
            </p>
          )}
          <div className="cta">
            {cta}
            {ctaUrl}
          </div>
        </StyledCard>
      )}
      {variant === "squereLogoOnly" && (
        <StyledCard
          className=".squereCardLogoOnly"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div>
            <span className="tag">{tag}</span>
            <span className="company">{company}</span>
          </div>
          <div className="logo">{logo}</div>
          <GatsbyImage image={cardImage} alt={imageAlt} />

          <div className="cta">
            {cta}
            {ctaUrl}
          </div>
        </StyledCard>
      )}
      {variant === "simpleCompany" && (
        <StyledCard className="simpleCompany">
          <div className="company">{company}</div>
          <div className="logo">{logo}</div>
          <GatsbyImage image={cardImage} alt={imageAlt} />
        </StyledCard>
      )}
    </>
  )
}

export default Card
