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
  // console.log("length", Object.keys(data.buttons).length)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <HeaderWrapper>
              <SectionHeader
                title={data.title}
                description={data.description}
              />
            </HeaderWrapper>
            {data.stats && <Stats data={data.stats} />}
          </TextWrapper>

          <ImagesWrapper>
            <ImageSwiper data={data.teamImages} />
          </ImagesWrapper>

          <ButtonWrapper>
            {Object.keys(data.buttons).length === 1 ? (
              <Button
                to={data.buttons.primary.url}
                variant="primary"
                size="large"
              >
                {data.buttons.primary.text}
              </Button>
            ) : (
              <>
                <Button to={data.buttons.primary.url} variant="secondary">
                  {data.buttons.primary.text}
                </Button>
                <Button to={data.buttons.secondary.url} variant="secondary">
                  {data.buttons.secondary.text}
                </Button>
              </>
            )}
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
const TextWrapper = styled.div`
  padding: 0 24px;
`

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  overflow: hidden;
  border-radius: 10px;
  padding: 64px 0;

  /* ${theme.above.p.s} {
    padding: 64px 0;
  } */

  ${theme.above.t.m} {
    padding: 100px 0;
  }
  ${theme.above.d.m} {
    padding: 120px 0;
  }
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
