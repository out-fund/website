import React from "react"
import styled from "styled-components"
import { Section, SectionHeader } from "./../../components"

const SectionWeFunded = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <SectionHeader title={data.title} description={data.description} />
        <ContentWrapper>we funded</ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionWeFunded

const Wrapper = styled.div``
const ContentWrapper = styled.div``

// <Card
//     className={lemonadeDolls.company.split(" ").join("")}
//     tagColor="#F6C34E"
//     variant="squereLogoOnly"
//     tag={lemonadeDolls.tag}
//     company={lemonadeDolls.company}
//     logo={lemonadeDolls.logo}
//     title={lemonadeDolls.title}
//     image={lemonadeDolls.image}
//     imageAlt={lemonadeDolls.imageAlt}
//     btn={lemonadeDolls.btn}
//     btnUrl={lemonadeDolls.btnUrl}
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
