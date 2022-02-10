import React from "react"
// import { graphql } from "gatsby"

import LangLayout from "./../../layouts/au"

import {
  HeroSimple,
  Main,
  SectionWeValue,
  SectionRegulated,
  SectionFaq,
} from "./../../components"

const B2B = () => {
  return (
    <LangLayout>
      <HeroSimple
        data={{
          title: "Outfund to take your B2B or SaaS business to the next level ",
          description:
            "Outfund Funds high growth B2B and SaaS businesses alongside their current investors with a unique capital structure and funding model. With this comes no further dilution or personal guarantees. We provide recurring Capital-as-a-Service to these businesses to fund the repeatable areas of them like customer acquisition or payroll.",
          btn: {
            text: "Contact us",
            url: "#",
          },
        }}
      />
      <Main>
        <SectionWeValue
          data={{
            title: "About Outfund B2B",
            blocks: [
              {
                text: "Pay for Payroll, Marketing, Inventory and other expenses with Outbound B2B",
              },
              {
                text: "Receive of up 2 months MRR in capital at time with future tranches  ",
              },
              {
                text: "One simple, transparent fee on the capital",
              },
              {
                text: "Software, acquisition, marketing partner network to help you best utilize your equity and Outfund Capitalt.",
              },
              {
                text: "Dedicated account manager ",
              },
            ],
            white: "white",
          }}
        />
        <SectionRegulated
          data={{
            title: "How it works",
            description: "Some description?",
            blocks: [
              {
                title: "Extend your runway",
                text: "Some description?",
              },
              {
                title: "Raise when you need to",
                text: "Some description?",
              },
              {
                title: "Get the highest valuation you can",
                text: "Some description?",
              },
            ],
          }}
        />
        <SectionFaq
          data={{
            title: "Some questions to tailor the content around Payroll",
            questions: [
              {
                question: "Questions need to be updated",
                answer:
                  "We can deploy between £10,000 and £2,000,000 at a time.",
              },
              {
                question: "How do you calculate my offer?",
                answer:
                  "Outfund securely connects to your existing banking, payment processing, and accounting platforms. Using predictive models, we assess key metrics from your revenue, advertising performance and other third party data to create bespoke funding offers. <br/><br/> Our funding is based on your performance. We don't take any equity, meaning we don't dilute you or your investors. Instead, funding is repaid through a simple revenue share.",
              },
              {
                question: "How long does the whole process take?",
                answer:
                  "The entire process (application, offer, approval, sending funds) can be completed in as little as 48 hours.",
              },
              {
                question: "How do I apply?",
                answer:
                  "You can apply in minutes here. You'll need to be a director of the company you're applying for. <br/><br/> You'll need to connect your business bank account, payment processor and company financial accounts. This data will allow us to build your funding offer.",
              },
            ],
          }}
        />
      </Main>
    </LangLayout>
  )
}

export default B2B

// export const query = graphql`
//   query B2BQuerry {
//     b2BJson {
//       hero {
//         description
//         title
//       }
//       form {
//         company
//         email
//         name
//         title
//         btn {
//           text
//           url
//         }
//       }
//       ourPartners {
//         description
//         title
//         image {
//           src {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//           alt
//         }
//       }
//       why {
//         title
//         blocks {
//           description
//           icon
//           title
//         }
//       }
//     }
//   }
// `
