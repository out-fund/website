import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "components/Link"
// import { PrimaryButton, SecondaryButton } from "./shared/Button"

const StyledCard = styled.div`
  position: relative;
  margin: 0 16px 0;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || "#f1f5fa"};
  margin-bottom: 16px;
  overflow: hidden;
`

const StyledTag = styled.h3`
  margin: 0;
  font-weight: normal;
  margin-bottom: 24px;
  .tag {
    display: inline-block;
    padding: 4px 16px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 1.71428571;
    letter-spacing: 0.005em;
    text-transform: uppercase;
    background-color: ${(props) => props.tagColor || "rgba(255,255,255,0.8)"};
    border-radius: 4px;
  }
`

const StyledLogo = styled.div`
  /* svg {
    width: 100px;
    max-width: 100%;
    height: 32px;
  }
  margin-bottom: 24px; */
`

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  blockquote {
    margin: 0 0 16px 0;
    padding: 0;
  }
  h4 {
    margin: 0;
    color: ${(props) => props.titleColor || "#111"};
    font-weight: 400;
    font-size: 32px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  figcaption {
    display: flex;
    margin-bottom: 32px;
    color: #051734;
    line-height: 1;
  }
`
const StyledImage = styled.div`
  margin-bottom: -32px;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: -40px;
  pointer-events: none;
`

const StyledCoverImage = styled.div`
  position: relative;
  /* height: 560px; */
  width: 100%;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1200px) {
    height: 100%;
  }
`

const StyledWide = styled(StyledCard)`
  padding: 32px;
  ${StyledLogo} {
    svg {
      height: 32px;
    }
    margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    display: grid;

    grid-template-columns: 5fr 6fr;
    column-gap: 24px;
    .cardContent {
      display: flex;
      flex-direction: column;

      order: 1;
      padding-right: 40px;
      figure {
        margin-bottom: auto;
        blockquote h4 {
          font-size: 40px;
          line-height: 1.4;
        }
        figcaption {
          font-size: 20px;
          line-height: 1.6;
        }
      }
    }
    ${StyledImage} {
      margin: 0;
      margin-bottom: -32px;
    }
  }
`

const StyledSquereLogoOnly = styled(StyledCard)`
  overflow: hidden;
  .content {
    position: absolute;
    z-index: 2;
    display: flex;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 32px;
    /* position: relative;
    z-index: 2;
    height: 430px; */
  }
  ${StyledLogo} {
    margin-top: auto;
    margin-bottom: 24px;
  }
`

const StyledOnto = styled(StyledCard)`
  /* overflow: hidden; */
  .content {
    padding: 32px;
  }
  .tag {
    color: unset;
  }

  ${StyledLogo} {
    svg {
      height: 32px;
    }
    margin-bottom: 24px;
  }
  ${StyledFigure} {
    figcaption {
      margin-bottom: 0;
      color: #deeeff;
    }
  }
  ${StyledCoverImage} {
    position: unset;
    overflow: hidden;
    border-radius: 0;
    > div {
      width: unset;
      height: unset;
      object-fit: unset;
    }
    img {
      border-radius: 0 0 10px 10px;
    }
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 5fr 6fr;
    column-gap: 24px;
    .content {
      display: flex;
      flex-direction: column;
    }
  }
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
  by,
  variant,
  titleColor,
  tagColor,
}) => {
  let byName
  let byFounderOf
  if (by) {
    byName = by.split(",")[0]
    byFounderOf = by.split(",")[1]
  }
  return (
    <>
      {variant === "wide" && (
        <StyledWide bgColor={bgColor}>
          <div className="cardContent">
            <StyledTag tagColor={tagColor}>
              <span className="tag">{tag}</span>
              <span className="visually-hidden">{company}</span>
            </StyledTag>
            <StyledLogo
              role="img"
              dangerouslySetInnerHTML={{ __html: `${logo}` }}
            />
            <StyledFigure titleColor={titleColor}>
              <blockquote>
                <h4>“{title}”</h4>
              </blockquote>
              {by && (
                <figcaption>
                  <b>{byName}</b>, {byFounderOf}
                </figcaption>
              )}
            </StyledFigure>

            <Link to={ctaUrl} variant="secondary">
              {cta}
            </Link>
          </div>

          <StyledImage>
            <GatsbyImage image={getImage(image)} alt={imageAlt} />
          </StyledImage>
        </StyledWide>
      )}
      {variant === "squereLogoOnly" && (
        <StyledSquereLogoOnly bgColor={bgColor}>
          <div className="content">
            <StyledTag tagColor={tagColor}>
              <span className="tag">{tag}</span>
              <span className="visually-hidden">{company}</span>
            </StyledTag>
            <StyledLogo
              role="img"
              dangerouslySetInnerHTML={{ __html: `${logo}` }}
            />
            <Link to={ctaUrl} variant="secondaryWhite">
              {cta}
            </Link>
          </div>
          <StyledCoverImage>
            <GatsbyImage image={getImage(image)} alt={imageAlt} />
          </StyledCoverImage>
        </StyledSquereLogoOnly>
      )}
      {variant === "onto" && (
        <StyledOnto bgColor={bgColor}>
          <div className="content">
            <StyledTag tagColor={tagColor}>
              <span className="tag">{tag}</span>
              <span className="visually-hidden">{company}</span>
            </StyledTag>
            <StyledLogo
              role="img"
              dangerouslySetInnerHTML={{ __html: `${logo}` }}
            />
            <StyledFigure titleColor={titleColor}>
              <blockquote>
                <h4>“{title}”</h4>
              </blockquote>
              {by && (
                <figcaption>
                  <b>{byName}</b>, {byFounderOf}
                </figcaption>
              )}
            </StyledFigure>
          </div>
          <StyledCoverImage>
            <GatsbyImage image={getImage(image)} alt={imageAlt} />
          </StyledCoverImage>
        </StyledOnto>
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
