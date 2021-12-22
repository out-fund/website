import React from "react"
import styled from "styled-components"

import { Button } from "components"
import T from "./../../styles/new/typography"

const HeroSimple = ({ data }) => {
  const { title, description, btn, btnUrl } = data
  return (
    <HeroWrapper>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {btn && (
        <BtnWrapper>
          <Button to={btn.url} variant="secondary">
            {btn.text}
          </Button>
        </BtnWrapper>
      )}
    </HeroWrapper>
  )
}

export default HeroSimple

const Title = styled(T.H1)``
const Description = styled(T.BodyLarge)``

const HeroWrapper = styled.header``
// const Wrapper = styled(W.ContainerFull)``
// const ContentWrapper = styled(W.ContainerS)`
//   /* padding-top: 12vh; */
// `
// const TextWrapper = styled.div`
/* display: flex;
  flex-direction: column;
  align-items: center; */
// `

const BtnWrapper = styled.div`
  /* margin-top: 16px; */
`
