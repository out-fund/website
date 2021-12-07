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
        <StyledCard className="wide" style={{ backgroundColor: `${bgColor}` }}>
          <div>
            <div className="tag">{tag}</div>
            <span className="company">{company}</span>
          </div>
          <img src={logo} alt={`${company} logo`} />
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
          className=".squereLogoOnly"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div>
            <div className="tag">{tag}</div>
            <span className="company">{company}</span>
          </div>
          <img src={logo} alt={`${company} logo`} />
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
          <img src={logo} alt={`${company} logo`} />
          <GatsbyImage image={cardImage} alt={imageAlt} />
        </StyledCard>
      )}
      {variant === "news" && (
        <StyledCard className="news">
          <div className="tag">{tag}</div>
          <h4 className="title">{title}</h4>
          <div className="company">{company}</div>
          <img src={logo} alt={`${company} logo`} />
        </StyledCard>
      )}
    </>
  )
}

export default Card
