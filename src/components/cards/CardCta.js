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
        <Title as="h2">{parse(title)}</Title>
        <BtnWrapper>
          <Button to={btn.url} variant="primary" size="large">
            {btn.text}
          </Button>
        </BtnWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardCta

const Title = styled(T.H2)`
  /* font-weight: 400; */
  line-height: 1.2;
  max-width: 412px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 32px 32px;

  ${theme.above.t.s} {
    padding: 24px 48px 32px;
  }

  ${theme.above.d.m} {
    padding: 32px 64px 56px;
  }
`
const BtnWrapper = styled.div``

const Wrapper = styled.div`
  background-color: ${theme.color.white};
  max-width: 570px;
  position: relative;
  height: 370px;
  border-radius: 10px;
  display: grid;
  align-content: center;
  justify-content: center;

  ${theme.above.t.s} {
    height: 470px;
  }

  ${theme.above.d.m} {
    height: 570px;
  }
`
