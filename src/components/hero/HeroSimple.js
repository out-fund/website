import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Button } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const HeroSimple = ({ data }) => {
  const { title, description, btn } = data
  return (
    <HeroWrapper>
      <Title>{parse(title)}</Title>
      {description && <Description>{parse(description)}</Description>}
      {btn && (
        <BtnWrapper>
          <Button to={btn.url} variant="primary" size="large">
            {btn.text}
          </Button>
        </BtnWrapper>
      )}
    </HeroWrapper>
  )
}

export default HeroSimple

const Title = styled(T.H1)`
  max-width: 970px;
  text-align: center;
  margin: 0 24px;
`
const Description = styled(T.BodyLarge)`
  max-width: 770px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c3654;
  margin: 16px 24px 0;
`

const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.background.emphesized};

  /* border-radius: 0 0 10px 10px; */
  /* gap: 16px; */
  padding: 48px 0 24px;
  /* margin: 0 8px; */

  ${theme.above.p.m} {
    /* margin: 0 16px; */
    padding: 64px 0 48px;
  }

  ${theme.above.t.s} {
    /* margin: 0 20px; */
    padding: 96px 0 56px;
  }
  ${theme.above.l.m} {
    /* margin: 0 24px; */
    padding: 120px 0 96px;
  }

  ${theme.above.d.m} {
    padding: 160px 0 120px;
  }
`

const BtnWrapper = styled.div`
  margin-top: 24px;
  /* 
  ${theme.above.p.m} {
  } */
  ${theme.above.t.s} {
    margin-top: 32px;
  }
  /* ${theme.above.l.m} {
  } */
  ${theme.above.d.m} {
    margin-top: 40px;
  }
`
