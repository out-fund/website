import React from "react"
import styled from "styled-components"

import {
  Section,
  SectionHeader,
  Button,
  Stats,
  ImageSwiper,
} from "./../../components"

const SectionAboutUs = ({ data }) => {
  // console.log(data)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={data.title} description={data.description} />
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

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const ImagesWrapper = styled.div``
const ButtonWrapper = styled.div``

// <Card
//     className={lemonadeDolls.company.split(" ").join("")}
// tagColor="#F6C34E"
// variant="squereLogoOnly"
// tag={lemonadeDolls.tag}
// company={lemonadeDolls.company}
// logo={lemonadeDolls.logo}
// title={lemonadeDolls.title}
// image={lemonadeDolls.image}
// imageAlt={lemonadeDolls.imageAlt}
// btn={lemonadeDolls.btn}
// btnUrl={lemonadeDolls.btnUrl}
//   />
//   <Card
//     className={feel.company}
//     variant="wide"
//     tag={feel.tag}
//     tagColor="#F9F1EA"
//     company={feel.company}
//     logo={feel.logo}
//     title={feel.title}
//     by={feel.by}
//     image={feel.image}
//     imageAlt={feel.imageAlt}
//     btn={feel.btn}
//     btnUrl={feel.btnUrl}
//     bgColor={feel.bgColor}
//     titleColor="#A7825E"
//   />
