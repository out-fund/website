import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"
import { theme } from "./../../styles/new/theme"

const CardCta = ({ title, btn, bgc }) => {
  return (
    <Wrapper bgc={bgc}>
      <TextWrapper>
        <Title as="h2">{parse(title)}</Title>
        <BtnWrapper>
          <Button
            to={btn.url}
            variant="primary"
            size="large"
            id="cta-get-started-card-click"
          >
            {btn.text}
          </Button>
        </BtnWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardCta

const Title = styled(T.H2)`
  line-height: 1.2;
  /* max-width: 412px; */
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px 32px;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${theme.above.l.m} {
    gap: 40px;
    max-width: 340px;
    padding: 0;
    text-align: left;
  }

  ${theme.above.l.m} {
    /* padding: 32px 64px 56px; */
    /* max-width: 320px; */
  }
`
const BtnWrapper = styled.div`
  ${theme.above.l.m} {
    align-self: start;
  }
`

const Wrapper = styled.div`
  background-color: ${({ bgc }) =>
    bgc ? bgc : theme.color.background.emphesized};
  position: relative;
  width: 100%;
  max-width: 986px;
  border-radius: 10px;
  display: grid;
  align-content: center;
  justify-content: center;
`
