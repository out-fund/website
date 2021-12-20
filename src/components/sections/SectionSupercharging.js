import React from "react"
import styled from "styled-components"
import {
  Section,
  SectionHeader,
  CardLogoReadMore,
  CardFeatured,
} from "./../../components"

const SectionSupercharging = ({ data }) => {
  console.log(data)
  return (
    <Section>
      <Wrapper>
        {/* <SectionHeader title={data.title} description={data.description} /> */}
        <ContentWrapper>
          {/* <CardLogoReadMore
            tagColor="#F6C34E"
            bgc="test"
            tag={data.cards.lemonadeDolls.tag}
            company={data.cards.lemonadeDolls.company}
            logo={data.cards.lemonadeDolls.logo}
            title={data.cards.lemonadeDolls.title}
            image={data.cards.lemonadeDolls.image}
            btn={data.cards.lemonadeDolls.btn}
          /> */}
          <CardFeatured
            tagColor="#72B4F0"
            bgc="#0E3674"
            tag={data.card.tag}
            company={data.card.company}
            logo={data.card.logo}
            title={data.card.title}
            image={data.card.image}
            btn={data.card.btn}
            by={data.card.by}
          />
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionSupercharging

const Wrapper = styled.div``
const ContentWrapper = styled.div``

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
