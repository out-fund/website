import React from "react"
import { graphql } from "gatsby"
import LangLayout from "./../layouts/en"
import {
  Main,
  SectionWeFunded,
  // SectionWeAreInvesting,
  SectionSupercharging,
  SectionFindOut,
  SectionFaq,
  SectionAboutUs,
  SectionRegulated,
  HeroHomepage,
  SeoComponent,
  SectionInfoStrip,
  SectionLoanDescriptions,
  SectionComparison,
  SectionWhoCanApply,
  SectionBenefits,
  SectionRepay,
} from "./../components"

const HomePage = (props) => {
  const {
    data: { homepageJson: data },
  } = props

  return (
    <LangLayout>
      <SeoComponent title={data.seo.title} description={data.seo.description} />
      <HeroHomepage data={data.hero} />
      <Main>
        <SectionInfoStrip
          data={[
            { up: "Apply in just", down: "5 minutes" },
            { up: "Business loans from", down: "£10k - £10m" },
            { up: "Offers as fast as", down: "24h" },
            { up: "Additional top-ups", down: "Continuous" },
          ]}
        />
        <SectionFindOut data={props.data.homepageJson.findOut} />
        <SectionLoanDescriptions
          data={{
            title: "Fast, flexible funding for you",
            rbs: {
              title: "Revenue-based <span>financing</span>",
              description:
                "We use your monthly revenue as a guide and provide up-front capital within 24 hours in exchange for a small percentage of future earnings. <br /><br /> You repay us as sales come in which means we only succeed when you succeed if revenues slow, so do repayments.",
            },
            fixed: {
              title: "Fixed-term <span>loans</span>",
              description:
                "We use your monthly revenue as a guide and provide up-front capital within 24 hours in exchange for a fixed repayment amount. <br/><br/> You control how you repay us by deciding whether you would like daily or weekly fixed repayments. Know exactly what you will repay from the start.",
            },
          }}
        />

        <SectionComparison
          data={{
            title: "Find the perfect fit for your business",
            description:
              "Founders typically have two ways to fund business growth. Raising equity or getting a bank loan. Both can be valuable options but can mean giving up a piece of your company or agreeing to a personal guarantee.",
          }}
        />
        {/* <SectionWhoCanApply data={data.weInvesting} /> */}
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
        <SectionBenefits
          data={{
            title: "Benefits to your business",
            list: [
              {
                title: "Get funded quicker for less",
                description:
                  "Easy access to cost effective funding with more flexibility than ever before.",
              },
              {
                title: "Dedicated support",
                description:
                  "Leverage our partnerships with marketing experts including Google, Amazon and Facebook to supercharge your growth.",
              },
              {
                title: "No dilution or personal guarantees",
                description:
                  "Why give up equity to fund repeatable aspects of your business? It's your business. Stay in control.",
              },
            ],
          }}
        />
        <SectionRepay
          data={{
            title: "Repay on your terms.",
            description:
              "Pay back your balance with a small share of your new sales. Quiet month? Lower repayments.",
            btn: {
              text: "Apply now",
              url: "https://client.out.fund/signup",
            },
          }}
        />

        <SectionWeFunded data={data.weFunded} />
        {/* <SectionWeAreInvesting data={data.weInvesting} /> */}
        <SectionSupercharging data={data.startSupercharging} />
        <SectionFaq data={props.data.homepageJson.faq} />
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}
export default HomePage

export const query = graphql`
  query HomePage {
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
