import React from "react"
import styled from "styled-components"
import { W, S, theme, breakpoints } from "styles"
import { Button } from "components"

const HeroSimple = ({ title, description, btn, btnUrl }) => {
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
            {btn && (
              <CtaWrapper>
                <Button btnUrl={btnUrl} variant="secondary">
                  {btn}
                </Button>
              </CtaWrapper>
            )}
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header`
  ${breakpoints.belowDesktop} {
    padding: 0px 16px;
  }
`
const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)`
  max-width: ${theme.width.text};
  margin: 0 auto;
  padding-top: 12vh;
  padding-bottom: 80px;
`
const TextWrapper = styled(W.TextWrapper)`
  max-width: 970px;
  margin: 0 auto;
`

const Title = styled(S.H1)`
  text-align: center;
`

const Description = styled(S.SubHeading)`
  margin-top: 16px;
  text-align: center;
`

const CtaWrapper = styled.div`
  margin-top: 16px;
  text-align: center;
`

export default HeroSimple
