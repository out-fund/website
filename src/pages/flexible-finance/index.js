import {
  HeroSimpleFf,
  Main,
  SectionComparison,
  SectionFaq,
  SectionFindOutFlexible,
  SectionRepayFf,
  SectionSupercharging,
  SectionWeFunded,
  SectionWeValueTemp,
  SeoComponent,
  SectionInfoStrip,
  SectionWhoCanApply,
} from "./../../components"

import LangLayout from "./../../layouts/en-ff"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const HowFundingWorks = (props) => {
  const {
    data: { homepageJson: data },
  } = props
  return (
    <LangLayout>
      <SeoComponent
        title="The sustainable growth platform"
        description="Don't let a lack of working capital stop you from achieving your business goals. Tap into your future succes"
      />
      <HeroSimpleFf
        data={{
          title: "The sustainable growth platform",
          subtitle: "Business financing on your terms",
          description:
            "Don't let a lack of working capital stop you from achieving your business goals. Tap into your future success",
          // btn: { text: "Get funded", url: "https://client.out.fund/signup" },
        }}
      />
      {/* <HeroHomepageFf
        data={{
          title: "The sustainable growth platform",
          description:
            "Don't let a lack of working capital stop you from achieving your business goals. Tap into your future success",
          primaryBtn: {
            text: "Get funded",
            url: "https://client.out.fund/signup",
          },
          secondaryBtn: {
            text: "How it works",
            url: "",
          },
        }}
      /> */}
      <Main>
        {/* <IWrapper>
          <ImageWrapper>
            <StaticImage
              src="./../../images/UIxCard.png"
              alt="Outfhund UI"
              layout="constrained"
            />
          </ImageWrapper>
        </IWrapper> */}
        <SectionInfoStrip
          data={[
            { up: "Apply in just", down: "5 minutes" },
            { up: "Business loans from", down: "£10k - £10m" },
            { up: "Offers as fast as", down: "24h" },
            // { up: "Fees as low as", down: "2%" },
            { up: "Additional top-ups", down: "Continuous" },
          ]}
        />
        <Wrapper>
          <ContentWrapper>
            {/* <SectionFlexibleTemp
              data={{
                title:
                  "Maximise your business growth with our innovative funding solution",
                description:
                  "We understand that no two businesses are the same. That's why our funding can be used for any expense that drives your business forward.",
              }}
            /> */}
            <SectionRepayFf
              data={{
                title:
                  "Maximise your business growth with our innovative funding solution",
                description:
                  "We understand that no two businesses are the same. That's why our funding can be used for any expense that drives your business forward.",
                // btn: {
                //   text: "Apply now",
                //   url: "https://client.out.fund/signup",
                // },
              }}
            />

            {/* calculator  */}
            <SectionFindOutFlexible
              data={{
                title: "Find out how much you can get",
                description:
                  "Funding offers are based on your average monthly revenue. Get a quick indication of your eligibility with our easy-to-use calculator. Get funded in 24 hours with 3 simple steps: <br/><br/> <ul><li>Create account and connect your accounts</li><li>Select your offers</li><li>Get funded</li></ul>",
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
            <SectionWhoCanApply
              data={{
                title: "Who can apply",
                list: [
                  "6+ months in business",
                  "£10k+ monthly revenue",
                  "Business registered in Europe, North America or Australia",
                ],
                btn: "Apply now",
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
            <SectionFaq data={props.data.homepageJson.faq} />
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

const IWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: -8px;

  ${theme.above.p.m} {
    top: -16px;
  }
  ${theme.above.t.s} {
    top: -24px;
  }
  ${theme.above.l.m} {
    top: -56px;
  }
  ${theme.above.d.m} {
    top: -80px;
  }
`
const ImageWrapper = styled.div`
  max-width: 670px;
  border-radius: 10px;
  overflow: hidden;
`

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
