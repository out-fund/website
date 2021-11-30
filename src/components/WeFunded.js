import * as React from "react"
import styled from "styled-components"
// import { PrimaryButton, SecondaryButton } from "./shared/Button"
// import { StaticImage } from "gatsby-plugin-image"

const StyledWeFunded = styled.nav``

const WeFunded = ({ title, cite, company, companyUrl, btn, ...props }) => {
  let citation = cite.split(",")
  console.log(citation)
  return (
    <StyledWeFunded>
      <h4>{title}</h4>
      <p>{citation}</p>
    </StyledWeFunded>
  )
}

export default WeFunded
