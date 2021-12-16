import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Button } from "components"
import { theme, S } from "styles"

const CardCta = ({ title, btnUrl, btn }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{parse(title)}</Title>
        <BtnWrapper>
          <Button btnUrl={btnUrl} variant="primary">
            {btn}
          </Button>
        </BtnWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardCta

const Title = styled(S.H5)`
  font-weight: 400;
  line-height: 1.5;
`

const Wrapper = styled.div`
  max-width: 570px;
  position: relative;
  height: 370px;
  background-color: #fff;
  border-radius: 10px;

  ${theme.above.tablet} {
    height: 470px;
  }
  ${theme.above.laptop} {
    height: 570px;
  }
`

const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 32px 32px;

  ${theme.above.tablet} {
    padding: 24px 48px 32px;
  }
  ${theme.above.laptop} {
    padding: 32px 64px 56px;
  }
`

const BtnWrapper = styled.div`
  margin-top: 40px;
`
