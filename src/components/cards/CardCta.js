import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"
import { theme } from "./../../styles/new/theme"

const CardCta = ({ title, btn }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{parse(title)}</Title>
        <BtnWrapper>
          <Button to={btn.url} variant="primary">
            {btn.text}
          </Button>
        </BtnWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardCta

const Title = styled(T.H2)``

const Wrapper = styled.div`
  background-color: ${theme.color.white};
`
const TextWrapper = styled.div``
const BtnWrapper = styled.div``
