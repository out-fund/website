import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { PrimaryButton, SecondaryButton } from "./shared/Button"

const StyledCard = styled.div`
  margin: 0 16px 0;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || "#0E3674"};
`
const StyledWide = styled(StyledCard)`
  padding: 24px;
`

const StyledTag = styled.div`
  background-color: #faf;
`

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
  return (
    <>
      {variant === "wide" && (
        <StyledWide bgColor={bgColor}>
          <div>
            <StyledTag>{tag}</StyledTag>
            <span className="company">{company}</span>
          </div>
          <div
            className="logo"
            role="img"
            dangerouslySetInnerHTML={{ __html: `${logo}` }}
          />
          <GatsbyImage image={getImage(image)} alt={imageAlt} />
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
        </StyledWide>
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
          <div
            className="logo"
            role="img"
            dangerouslySetInnerHTML={{ __html: `${logo}` }}
          />
          <GatsbyImage image={getImage(image)} alt={imageAlt} />

          <div className="cta">
            {cta}
            {ctaUrl}
          </div>
        </StyledCard>
      )}
      {variant === "simpleCompany" && (
        <StyledCard className="simpleCompany">
          <div className="company">{company}</div>
          <div
            className="logo"
            role="img"
            dangerouslySetInnerHTML={{ __html: `${logo}` }}
          />
          <GatsbyImage image={getImage(image)} alt={imageAlt} />
        </StyledCard>
      )}
      {variant === "news" && (
        <StyledCard className="news">
          <div className="tag">{tag}</div>
          <h4 className="title">{title}</h4>
          <div className="company">{company}</div>
          <div
            className="logo"
            role="img"
            dangerouslySetInnerHTML={{ __html: `${logo}` }}
          />
        </StyledCard>
      )}
    </>
  )
}

export default Card
