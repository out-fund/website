import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Section, SectionHeader, Button, Stats } from "./../../components"

const SectionAboutUs = ({ data }) => {
  // console.log(data)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={data.title} description={data.description} />
          <Stats data={data.stats} />

          <ImagesWrapper>
            {data.teamImages.map((item, index) => (
              <Image key={index}>
                <GatsbyImage image={getImage(item.src)} alt={item.name} />
                <Name>{item.name}</Name>
              </Image>
            ))}
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

const Image = styled.div``
const Name = styled.div``

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
