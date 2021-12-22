import React from "react"
import styled from "styled-components"

import T from "../../styles/new/typography"

const SectionHeader = ({ title, description }) => {
  return (
    <Header>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Header>
  )
}

export default SectionHeader

const Title = styled(T.H2)``
const Description = styled(T.BodyLarge)``

const Header = styled.header``
