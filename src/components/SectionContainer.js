import * as React from "react"
import styled from "styled-components"
import Link from "components/Link"

const StyledSection = styled.section`
  margin-top: 80px;
  padding: ${(props) => (props.fullWidth ? "0" : "0 32px")};

  .top {
    text-align: ${(props) => props.align || "center"};
  }
  .title {
    margin: 0px 0px 16px;
    font-weight: 700;
    font-size: 28px;
    line-height: 1;
    line-height: 1.14285714;
  }
  .description {
    margin: 0px 0px 24px;
    color: #1c3654;
    line-height: 1.71428571;
  }
  .image {
    margin: 0 -16px;
    overflow: hidden;
    border-radius: 10px;
    img {
      overflow: hidden;
      border-radius: 10px;
    }
  }

  &.weInvesting {
    a {
      margin-bottom: 24px;
    }
  }

  &.aboutUs {
    .aboutUsImage {
      margin: 0 -16px 24px;
    }
    .actions {
      margin-top: 24px;
      text-align: center;
      a {
        margin: 0 8px;
      }
    }
  }
  &.findOut {
    margin-top: 120px;
  }
`

const StyledSectionReinforcement = styled(StyledSection)`
  /* background-color: red; */
  display: flex;
  flex-direction: column-reverse;
  .top {
    margin: 24px 32px 0;
    text-align: left;
  }
  .title {
    margin-bottom: 24px;
    font-size: 40px;
  }
  &.startSupercharging {
    .top {
      position: relative;

      &:after {
        position: absolute;
        right: 0;
        bottom: -56px;
        display: block;
        width: 143px;
        height: 132px;
        background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 143 132'%3E%3Cpath d='M13.5 132v-12h-1.627C8.498 123.98 4.942 127.296 0 130.131V132h13.5ZM56.5 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132h13.5ZM99.5 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132h13.5ZM143 132v-12h-1.687c-3.501 3.98-7.188 7.296-12.313 10.131V132h14ZM35 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132H35ZM78 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132H78ZM121 132v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V132H121ZM35 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112H35ZM78 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112H78ZM121 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112H121ZM56.5 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112h13.5ZM99.5 112v-12h-1.627c-3.375 3.98-6.931 7.296-11.873 10.131V112h13.5ZM143 112v-12h-1.687c-3.501 3.98-7.188 7.296-12.313 10.131V112h14ZM78 92V80h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V92H78ZM121 92V80h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V92H121ZM99.5 72V60h-1.627C94.498 63.98 90.942 67.296 86 70.13V72h13.5ZM121 72V60h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V72H121ZM143 72V60h-1.687c-3.501 3.98-7.188 7.296-12.313 10.13V72h14ZM121 52V40h-1.627c-3.375 3.98-6.931 7.297-11.873 10.13V52H121ZM143 52V40h-1.687c-3.501 3.98-7.188 7.297-12.313 10.13V52h14ZM143 32V20h-1.687c-3.501 3.98-7.188 7.297-12.313 10.13V32h14ZM56.5 92V80h-1.627C51.498 83.98 47.942 87.296 43 90.13V92h13.5ZM99.5 92V80h-1.627C94.498 83.98 90.942 87.296 86 90.13V92h13.5ZM143 92V80h-1.687c-3.501 3.98-7.188 7.296-12.313 10.13V92h14ZM78 72V60h-1.627c-3.375 3.98-6.931 7.296-11.873 10.13V72H78ZM99.5 52V40h-1.627C94.498 43.98 90.942 47.297 86 50.13V52h13.5ZM121 32V20h-1.627c-3.375 3.98-6.931 7.297-11.873 10.13V32H121ZM143 12V0h-1.687c-3.501 3.98-7.188 7.296-12.313 10.13V12h14Z' fill='%236FC9E7'/%3E%3C/svg%3E");
        content: "";
      }
    }
  }
`

const SectionContainer = ({
  children,
  title,
  description,
  align,
  reinforcement,
  ...props
}) => {
  if (reinforcement) {
    return (
      <StyledSectionReinforcement align={align} {...props}>
        <div className="top">
          <h2 className="title">{title}</h2>
          {description && <p className="description">{description}</p>}

          <Link to={props.ctaUrl} variant="primary">
            {props.cta}
          </Link>
        </div>

        {children}
      </StyledSectionReinforcement>
    )
  }
  return (
    <StyledSection align={align} {...props}>
      <div className="top">
        <h2 className="title">{title}</h2>
        {description && <p className="description">{description}</p>}
      </div>

      {children}
    </StyledSection>
  )
}

export default SectionContainer
