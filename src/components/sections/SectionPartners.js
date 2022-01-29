import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Section, SectionHeader, PartnerForm } from "./../../components"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionPartners = ({ data, form, language }) => {
  const { title, description, image } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={title} description={description} />
            <ImageWrapper>
              <GatsbyImage image={getImage(image.src)} alt={image.alt} />
            </ImageWrapper>
          </TextWrapper>

          <FormWrapper>
            <T.H4>Partner with us today!</T.H4>
            <PartnerForm form={form} language={language} />
          </FormWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionPartners

const FormWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 32px 40px;
  border-radius: 10px;
  h4 {
    margin-bottom: 24px;
  }
`
const Wrapper = styled.div`
  margin-top: 120px;
`
const TextWrapper = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1170px;
  margin: 0 auto;
  gap: 64px;
  ${theme.above.t.m} {
    grid-template-columns: 570fr 520fr;
  }
`
const ImageWrapper = styled.div`
  /* max-width: 548px; */
  margin-top: 40px;
`
