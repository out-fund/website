import React from "react"
import T from "../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"

const SectionHeader = ({ title, description }) => {
  return (
    <Header>
      <Title>{parse(title)}</Title>
      {description && <Description as="div">{parse(description)}</Description>}
    </Header>
  )
}

export default SectionHeader

const Title = styled(T.H2)``
const Description = styled(T.BodyLarge)`
  max-width: 970px;
  margin: 0 auto;
  margin-top: 16px;
`

const Header = styled.header``
