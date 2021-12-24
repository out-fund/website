import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Section, SectionHeader } from "./../../components"

const SectionPartners = ({ data, form }) => {
  console.log(data)
  const { title, description, image } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={title} description={description} />
          <ImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionPartners

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const ImageWrapper = styled.div``
