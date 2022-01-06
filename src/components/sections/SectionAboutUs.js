import React from "react"
import styled from "styled-components"

import {
  Section,
  SectionHeader,
  Button,
  Stats,
  ImageSwiper,
} from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionAboutUs = ({ data }) => {
  // console.log(data)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <SectionHeader title={data.title} description={data.description} />
          </HeaderWrapper>

          <Stats data={data.stats} />

          <ImagesWrapper>
            <ImageSwiper data={data.teamImages} />
          </ImagesWrapper>

          <ButtonWrapper>
            <Button to={data.buttons.primary.url} variant="secondary">
              {data.buttons.primary.text}
            </Button>
            <Button to={data.buttons.secondary.url} variant="secondary">
              {data.buttons.secondary.text}
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionAboutUs

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 120px 0;
  overflow: hidden;
`
const ImagesWrapper = styled.div`
  margin-top: 64px;
`
const ButtonWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  gap: 24px;
`
