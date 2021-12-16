import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { SectionWrapper, Button } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SectionJoinUs = ({ data }) => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
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
    grid-template-columns: 1fr 1.2fr;
  }
`

const Title = styled(S.H2)``
const Description = styled(S.BodyText)`
  margin-top: 16px;
  margin-bottom: 32px;
  max-width: 540px;
`

const TextWrapper = styled.div``
const BtnWrapper = styled.div``
const ImageWrapper = styled.div``
