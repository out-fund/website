import {
  // HeroBF,
  HeroDark,
  Main,
  // SectionComparison,
  // SectionFaq,
  SectionFindOutFlexible,
  SectionRepayFf,
  SectionSupercharging,
  SectionWeFunded,
  SectionWeValueTemp,
  SeoComponent,
  SectionInfoStrip,
  SectionWhoCanApply,
  SectionComparisonDolar,
} from "./../../components"

import LangLayout from "./../../layouts/au-bf"
import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

const HowFundingWorks = (props) => {
  const {
    data: { homepageJson: data },
  } = props
  return (
    <LangLayout>
      <SeoComponent
        title="Accelerate into 2024"
        description="Accelerate into 2024 with Outfund"
      />
      <HeroDark
        title={"Accelerate into 2024 with Outfund"}
        subtitle={"Apply for funding and get $500 off your fixed fee"}
        description={
          "Drive your business forward in 2024 - unlock the capital you need for your business to thrive"
        }
        buttonText={"Apply now"}
        note={
          "*Offer is valid for applicants who apply between 22 Nov and 30 November 2023 and take funding before 31 December 2023."
        }
      />

      <Main>
        <SectionInfoStrip
          data={[
            { up: "Apply in just", down: "5 minutes" },
            { up: "Business loans from", down: "$10k - $10M" },
            { up: "Offers as fast as", down: "24h" },
            { up: "Additional top-ups", down: "Continuous" },
          ]}
        />
        <Wrapper>
          <ContentWrapper>
            {/* calculator  */}
            <SectionFindOutFlexible
              data={{
                title: "Find out how much you can get",
                description:
                  "Funding offers are based on your average monthly revenue. Get a quick indication of your eligibility with our easy-to-use calculator. Get funded in 24 hours with 3 simple steps: <br/><br/> <ul><li>Create account and connect your accounts</li><li>Select your offers</li><li>Get funded</li></ul>",
                calculator: {
                  title: "How much do you need?",
                  termTitle: "Term",
                  months: "months",
                  fee: "Flat fee to pay *",
                  repayable: "Total repayable",
                  rateNote:
                    "* This calculator is only an example, rate for your business will vary based on your circumstances and is subject to change.",
                  buttonText: "Apply for",
                  buttonNote: "Applying will not affect your credit score.",
                  range: [
                    "$10 000",
                    "$20 000",
                    "$50 000",
                    "$70 000",
                    "$100 000",
                    "$200 000",
                    "$500 000",
                    "$700 000",
                    "$1 000 000",
                  ],
                },
              }}
            />
            <SectionWhoCanApply
              data={{
                title: "You're eligible to apply if you have:",
                list: [
                  "Revenue visible through an online payment processor or banking provider.",
                  "12+ months in business",
                  "$50k+ monthly revenue",
                ],
                btn: "Check eligibility",
              }}
            />
            <SectionWeValueTemp
              white
              data={{
                title:
                  "Capital to improve, <br/> grow and manage your business",
                blocks: [
                  {
                    title: "🔐 Enjoy financial security",
                    text: "Take control of your cash flow and ensure you never miss a payment - No matter how unpredictably your business performs, our fast and straightforward funding ensures you can enjoy financial security and peace of mind. Stay ahead of the game.",
                  },
                  {
                    title: "🚀 Unlock your potential",
                    text: "Scale your business with ease and reach your growth goals faster. Whether you are looking to grow your team or invest in marketing, we can help you unlock the growth potential of your business.",
                  },
                  {
                    title: "📈 Take your business to the next level",
                    text: "Upgrade your equipment, invest in your team and optimise your processes – Outfund gives you the edge to surpass your competition, and maximise your success.",
                  },
                  {
                    title: "💰 Purchase stock",
                    text: "With our fast funding, you can purchase the necessary stock quickly and easily, allowing you to focus on your projects and drive the growth of your business.",
                  },
                  {
                    title: "🏭 Make your next project a reality",
                    text: "Get the capital you need to make your next business project a reality. Get your working capital, staffing, and insurance all sorted in no time, so you can confidently move forward with your vision.",
                  },
                ],
              }}
            />

            <SectionComparisonDolar
              data={{
                title: "Find the perfect fit for your business",
                description:
                  "Founders typically have two ways to fund business growth. Raising equity or getting a bank loan. Both can be valuable options but can mean giving up a piece of your company or agreeing to a personal guarantee.",
              }}
            />
            <SectionWeFunded data={data.weFunded} />
            <SectionSupercharging data={data.startSupercharging} />
          </ContentWrapper>
        </Wrapper>
      </Main>
    </LangLayout>
  )
}

export default HowFundingWorks

const Wrapper = styled.div``
const ContentWrapper = styled.div``

export const query = graphql`
  query Accelerate2024AU {
    homepageJson(language: { regex: "/en-AU/" }) {
      seo {
        title
        description
      }
      aboutUs {
        buttons {
          primary {
            text
            url
          }
          secondary {
            text
            url
          }
        }
        stats {
          stat
          text
        }
        description
        title
        teamImages {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
        }
      }
      blog {
        btn
        btnUrl
        title
      }
      findOut {
        calculator {
          btn {
            text
            url
          }
          range
          select {
            default
            dropdown
            title
          }
          title
        }

        description
        title
      }
      faq {
        btn {
          text
          url
        }
        questions {
          answer
          question
        }
        title
      }
      hero {
        primaryBtn {
          text
          url
        }
        secondaryBtn {
          text
          url
        }
        description
        title
      }
      language
      startSupercharging {
        card {
          logo
          quote {
            by
            title
          }
          company
          tag {
            text
            color
          }
          image {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        btn {
          text
          url
        }
        title
      }
      weFunded {
        description
        title
        cards {
          feel {
            company
            btn {
              text
              url
            }
            logo
            tag {
              text
              color
            }
            quote {
              by
              title
            }
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          lemonadeDolls {
            company
            btn {
              text
              url
            }
            logo
            tag {
              text
              color
            }
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
      }
      weInvesting {
        btn {
          text
          url
        }
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
        description
        title
      }
    }
    trustJson(language: { regex: "/en-GB/" }) {
      title
      description
      blocks {
        icon
        title
        text
      }
    }
  }
`
