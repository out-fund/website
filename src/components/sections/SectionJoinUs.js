import React from "react"
import styled from "styled-components"
import { W, S, theme, breakpoints } from "styles"
import { SectionContainer, Button } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SectionJoinUs = ({ data }) => {
  return (
    <SectionContainer>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <BtnWrapper>
              <Button btnUrl={data.btnUrl} variant="secondary">
                {data.btn}
              </Button>
            </BtnWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(data.image)} alt={data.imageAlt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionContainer>
  )
}
export default SectionJoinUs

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.MediumWrapper)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 100px;
  align-items: center;
  row-gap: 40px;

  ${theme.above.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled(S.H2)``
const Description = styled(S.BodyText)`
  margin-top: 16px;
  margin-bottom: 32px;
`

const TextWrapper = styled.div``
const BtnWrapper = styled.div``
const ImageWrapper = styled.div``
