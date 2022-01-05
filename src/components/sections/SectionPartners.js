import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Section, SectionHeader, Button } from "./../../components"
import F from "./../../styles/new/form"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionPartners = ({ data, form }) => {
  console.log(data)
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
            <F.Form action="">
              <F.InputText
                type="text"
                name="fullName"
                placeholder="Company Name"
              />
              <F.InputText
                type="text"
                name="fullName"
                placeholder="Your Name"
              />
              <F.InputEmail
                type="email"
                name="businessEmail"
                placeholder="Your email"
              />

              <Button variant="primary">Become a partner</Button>
            </F.Form>
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
  input {
    margin-bottom: 16px;
  }
  .ButtonWrap {
    margin-top: 16px;
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
  grid-template-columns: 570fr 520fr;
  max-width: 1170px;
  margin: 0 auto;
  gap: 64px;
`
const ImageWrapper = styled.div`
  /* max-width: 548px; */
  margin-top: 40px;
`
