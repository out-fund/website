import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Section, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"

const SectionWhy = ({ data }) => {
  // console.log(data)
  const { title, blocks } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={title} />
          <Grid>
            {blocks.map((item, index) => (
              <Block key={index}>
                <IconWrapper>{parse(item.icon)}</IconWrapper>
                <BlockTitle as={"h3"}>{item.title}</BlockTitle>
                <BlockDescription>{item.description}</BlockDescription>
              </Block>
            ))}
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWhy

const Wrapper = styled.div``
const ContentWrapper = styled.div``

const Grid = styled.ul``
const Block = styled.li``
const BlockTitle = styled(T.H6)``

const IconWrapper = styled.div``
const BlockDescription = styled(T.Body)``
