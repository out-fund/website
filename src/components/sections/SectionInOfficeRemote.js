import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { SectionWrapper } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const SectionInOfficeRemote = ({ data }) => {
  return (
    <SectionWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{data.title}</Title>
            <Description>{parse(data.description)}</Description>
            <Grid>
              <Block>
                <IconWrapper></IconWrapper>
                <BlockTitle></BlockTitle>
                <BlockDescription></BlockDescription>
              </Block>
            </Grid>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage
              image={getImage(data.image.src)}
              alt={data.image.alt}
            />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionInOfficeRemote

const Title = styled(S.H2)``
const Description = styled(S.BodyText)``

const Grid = styled.div``
const Block = styled.div``
const IconWrapper = styled.div``
const BlockTitle = styled(S.H6)``
const BlockDescription = styled(S.BodyText)``

const Wrapper = styled(W.ContainerFull)``
const ContentWrapper = styled(W.ContainerL)``

const TextWrapper = styled.div``
const ImageWrapper = styled.div``
