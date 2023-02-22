import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/en"

import {
  HeroSimple,
  Main,
  // SectionRegulated,
  // SectionSteps,
  // SectionWeAreInvesting,
  // SectionFaq,
  // Button,
  SeoComponent,
  SectionFlexibleTemp,
  SectionWhoCanApply,
  // SectionWeValue,
  SectionWeValueTemp,
  SectionComparison,
  SectionSupercharging,
  SectionWeFunded,
  SectionFindOutFlexible,
} from "./../../components"
// import { theme } from "./../../styles/new/theme"
// import T from "./../../styles/new/typography"

const HowFundingWorks = (props) => {
  const {
    data: { homepageJson: data },
  } = props
  return (
    <LangLayout>
      <SeoComponent
        title="Fast cashflow funding for your business"
        description=""
      />
      <HeroSimple
        data={{
          title: "Fast cashflow funding for your business",
          description: "",
        }}
      />
      <Main>
        <Wrapper>
          <ContentWrapper>
            <SectionFlexibleTemp
              data={{
                title: "Flexible finance to help you growth your business",
                description:
                  "We understand that no two businesses are the same. Outfund provides start ups, scale ups and enterprise businesses with access to flexible and affordable working capital, helping them to unlock the financial resources they need to grow and succeed. <br/><br/> Outfund offers finance ranging from £10,000 to £10,000,000, making it a suitable option for a variety of needs, such as purchasing stock, marketing, renovating your business space, payroll, improving cash flow, or buying new equipment. <br/><br/> Don't let a lack of working capital stop you from achieving your business goals. Apply in 5 minutes for funding from Outfund and receive an instant online decision with no impact on your credit score.",
              }}
            />
            {/* calculator  */}
            <SectionWhoCanApply
              data={{
                title: "Who can apply",
                list: [
                  "An online model such as SaaS, Subscription, Ecommerce, Mobile App, B2B",
                  "6+ months in business",
                  "£10k+ Monthly revenue",
                ],
                btn: "Apply now",
              }}
            />

            <SectionFindOutFlexible
              data={{
                title: "Find out how much you can get",
                description:
                  "Funding offers are based on your average monthly revenue. Get a quick indication of your eligibility with our easy-to-use calculator.",
                calculator: {
                  title: "How much do you need?",
                  range: [
                    "£10 000",
                    "£20 000",
                    "£50 000",
                    "£70 000",
                    "£100 000",
                    "£200 000",
                    "£500 000",
                    "£700 000",
                    "£1 000 000",
                  ],
                  select: {
                    title: "You need funding for",
                    default: "Select",
                    dropdown: ["Inventory", "Marketing", "Something else"],
                  },
                  btn: {
                    text: "Check eligibility",
                    url: "/eligibility/",
                  },
                },
              }}
            />

            <SectionWeValueTemp
              white
              data={{
                title:
                  "Capital to improve, <br/> grow and manage your business",
                blocks: [
                  {
                    title: "Enjoy financial security",
                    text: "Take control of your cash flow and ensure you never miss a payment – no matter how unpredictably your business ebbs and flows. With our fast and straightforward funding, you can pay your bills and supplier with ease, staying ahead of the game OR Enjoy financial security and peace of mind, knowing you will have the cash you need for success.",
                  },
                  {
                    title: "Unlock your potential",
                    text: "Scale your business with ease and reach your growth goals faster. Whether you are looking to grow your team or invest in marketing, we can help you unlock the growth potential of your business.",
                  },
                  {
                    title: "Take your business to the next level",
                    text: "Upgrade your equipment, invest in your team and optimise your processes – Outfund gives you the edge to surpass your competition, and maximise your success.",
                  },
                  {
                    title: "Purchase stock",
                    text: "With our fast funding, you can purchase the necessary stock quickly and easily, allowing you to focus on your projects and drive the growth of your business.",
                  },
                  {
                    title: "Make your next project a realityt",
                    text: "Get the capital you need to make your next business project a reality. Get your working capital, staffing, and insurance all sorted in no time, so you can confidently move forward with your vision.",
                  },
                  // {
                  //   title: "🤗 Empathy",
                  //   text: "The heart of good business is understanding. From our customers to our colleagues, we put people first.",
                  // },
                ],
              }}
            />
            <SectionComparison
              data={{
                title: "Find the perfect fit for your business",
                description:
                  "Founders typically have two ways to fund business growth. Raising equity or getting a bank loan. Both can be valuable options but can mean giving up a piece of your company or agreeing to a personal guarantee.",
              }}
            />
            <SectionWeFunded data={data.weFunded} />
            <SectionSupercharging data={data.startSupercharging} />
          </ContentWrapper>

          {/* <SectionRegulated data={props.data.trustJson} /> */}
        </Wrapper>
      </Main>
    </LangLayout>
  )
}

export default HowFundingWorks

const Wrapper = styled.div``
const ContentWrapper = styled.div``

export const query = graphql`
  query HomePageFlexFunding {
    homepageJson(language: { regex: "/en-GB/" }) {
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
