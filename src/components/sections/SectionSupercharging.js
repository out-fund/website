import React from "react"
import styled from "styled-components"
import { Section, CardFeatured, CardCta } from "./../../components"

const SectionSupercharging = ({ data }) => {
  // console.log(data)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <CardCta title={data.title} btn={data.btn} bgc="#F2F6FA" />
          <CardFeatured
            bgc="#0E3674"
            tag={data.card.tag}
            company={data.card.company}
            logo={data.card.logo}
            image={data.card.image}
            btn={data.card.btn}
            quote={data.card.quote}
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
