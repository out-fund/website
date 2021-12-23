import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// import parse from "html-react-parser"

import EnLayout from "layouts/en"
import { HeroSimple, Main } from "./../../../components"

const FAQ = (props) => {
  return (
    <EnLayout>
      <HeroSimple data={props.data.faqJson.hero} />
      <Main>
        <ContentWrapper>FAQ</ContentWrapper>
      </Main>
    </EnLayout>
  )
}

export default FAQ

export const query = graphql`
  query faqPage {
    faqJson(language: { regex: "/en-GB/" }) {
      hero {
        description
        title
      }
    }
  }
`

// const SectionWrapper = styled.div`
//   margin-top: 80px;
// `
// const Title = styled(S.H5)``
// const Container = styled.div`
//   margin-top: 24px;
// `

const ContentWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 240px auto;
  column-gap: 40px;
  margin-top: 40px; */
`
// const Menue = styled.section`
//   Container} {
//     padding: 24px;
//     background-color: #fff;
//     border-radius: 10px;
//   }
//   a {
//     color: #1a65ba;
//     text-decoration: none;
//   }

//   li:not(:last-child) {
//     a {
//       margin-bottom: 16px;
//     }
//   }
// `
// const FaqWrapper = styled.section`
//   .accordion {
//     border: none;
//     border-radius: 0;
//   }
//   .accordion__item {
//     border-top: 2px solid #f2f6fa !important;
//   }
//   .accordion__button {
//     display: flex;
//     flex-direction: row-reverse;
//     align-items: center;
//     justify-content: flex-end;
//     padding: 24px 24px;
//     color: #051734;
//     font-size: 20px;
//     letter-spacing: -0.02em;
//     background-color: #fff;
//     border-radius: 4px;
//     user-select: none;

//     :hover {
//       background-color: #deeeff;
//     }
//     &:before {
//       margin-left: auto;
//       color: #1a65ba;
//     }
//   }
//   .accordion__panel {
//     padding: 16px 40px 32px;
//     color: #1c3654;
//     line-height: 1.5;
//     background-color: #fff;
//     border-bottom: 4px solid #f2f6fa !important;
//   }
// `

// {/* <Menue>
//         <Section title="FAQ">
//           <ul>
//             <li>
//               <a href="">How it works</a>
//             </li>
//             <li>
//               <a href="">Fees</a>
//             </li>
//             <li>
//               <a href="">Repayment</a>
//             </li>
//           </ul>
//         </Section>
//       </Menue>
//       <FaqWrapper>
//         <Section title="How it works">
//           <Accordions data={howItWorks} />
//         </Section>
//         <Section title="Fees">
//           <Accordions data={howItWorks} />
//         </Section>
//         <Section title="Repayment">
//           <Accordions data={howItWorks} />
//         </Section>
//       </FaqWrapper> */}

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion"
// import "react-accessible-accordion/dist/fancy-example.css"

// const Section = (props) => {
//   return (
//     <SectionWrapper>
//       <Title>{props.title}</Title>
//       <Container>{props.children}</Container>
//     </SectionWrapper>
//   )
// }

// const howItWorks = [
//   {
//     heading: "How much fuanding do you offer?",
//     content: "We can deploy between £10,000 and £2,000,000 at a time.",
//   },
//   {
//     heading: "Does the repayment percentage ever change?",
//     content:
//       "Outfund uses a unique corporate revenue share to fund the growth of our portfolio companies. We have powerful predictive models that look at your revenue, ad performance and other third party data to generate funding offers. Our funding is based on your performance. We don't take equity, meaning we don't dilute you or your investors.",
//   },
//   {
//     heading: "Can I apply for funding if I have a business partner?",
//     content:
//       "To fund your company, we need you to have the following: <ul><li>Open banking</li><li>Online Payment processor</li><li>Trading for at least 6 months</li><li>Greater than £10,000 turnover pm</li></ul>",
//   },
//   {
//     heading: "Why do you need my bank account information?",
//     content: "We can deploy between £10,000 and £2,000,000 at a time.",
//   },
// ]

// const Accordions = (props) => {
//   return (
//     <Accordion allowZeroExpanded>
//       {props.data.map((item, index) => (
//         <AccordionItem key={index}>
//           <AccordionItemHeading>
//             <AccordionItemButton>{item.heading}</AccordionItemButton>
//           </AccordionItemHeading>
//           <AccordionItemPanel>{parse(item.content)}</AccordionItemPanel>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   )
// }
