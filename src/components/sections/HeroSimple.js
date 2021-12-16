import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { Button } from "components"

const HeroSimple = ({ data }) => {
  const { title, description, btn, btnUrl } = data
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
            {btn && (
              <BtnWrapper>
                <Button btnUrl={btnUrl} variant="secondary">
                  {btn}
                </Button>
              </BtnWrapper>
            )}
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header``
const Wrapper = styled(W.ContainerFull)``
const ContentWrapper = styled(W.ContainerS)`
  padding-top: 12vh;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled(S.H1)`
  text-align: center;
`

const Description = styled(S.SubHeading)`
  margin-top: 16px;
  text-align: center;
  max-width: 830px;
  /* margin: 0 auto; */
`

const BtnWrapper = styled.div`
  /* margin-top: 16px; */
  text-align: center;
  ${theme.margin.button}
`

export default HeroSimple
