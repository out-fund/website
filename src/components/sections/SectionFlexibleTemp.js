import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import T from "../../styles/new/typography"

import { Section, SectionHeader } from "./../../components"

const SectionFlexibleTemp = ({ data, bg }) => {
  const { title, description } = data
  return (
    <Section>
      <Wrapper bg={bg}>
        <ContentWrapper bg={bg}>
          <HeaderWrapper>
            <SectionHeader title={title} />
          </HeaderWrapper>
          {/* <TextWrapper>
            <ThreeColumnIcons blocks={blocks} />
          </TextWrapper> */}
          <TextWrapper>
            {description && <Description>{parse(description)}</Description>}
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFlexibleTemp

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 48px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div``
const TextWrapper = styled.div``
const Description = styled(T.BodyLarge)`
  max-width: 970px;
  margin: 0 auto;
`
