import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import LangLayout from "./../layouts/au"
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
  SectionComparisonDolar,
  SectionWhoCanApply,
  SectionBenefits,
  SectionRepay,
  TrustpilotSwiper,
  SectionTestimonials,
  Testimonial,
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
        <TrustpilotSwiper />
        <SectionInfoStrip
          data={[
            { up: "Apply in just", down: "5 minutes" },
            { up: "Business loans from", down: "$10k - $10M" },
            { up: "Offers as fast as", down: "24h" },
            { up: "Additional top-ups", down: "Continuous" },
          ]}
        />
        <SectionFindOut
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
            howToUse: {
              title: "How to use your funds",
              description:
                "Capital is credited to your Outfund account, and you decide how to spend.",
              first: {
                title: "Virtual card",
                description:
                  "Set up your digital marketing card and invest in your ads.",
              },
              second: {
                title: "Invoices",
                description:
                  "Cpload your invoices to our platform and we’ll fund your business expenses like inventory, logistics, and agency fees.",
              },
              third: {
                title: "Cash",
                description:
                  "Receive funds in your bank account, and have the flexibility to spend on what you need *",
                note: "*Availability is based on your circumstances, and it is subject to review",
              },
            },
          }}
        />

        <SectionComparisonDolar
          data={{
            title: "Find the perfect fit for your business",
            description:
              "Founders typically have two ways to fund business growth. Raising equity or getting a bank loan. Both can be valuable options but can mean giving up a piece of your company or agreeing to a personal guarantee.",
          }}
        />
        {/* <SectionWhoCanApply data={data.weInvesting} /> */}
        <SectionWhoCanApply
          data={{
            title: "You're eligible to apply if you have:",
            list: [
              "Revenue visible through an online payment processor or banking provider.",
              "12+ months in business",
              "$50k+ monthly revenue",
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

        <SectionTestimonials title="What our Aussie customers are saying">
          <Testimonial
            link="https://bhumi.com.au/"
            logo={
              <StaticImage
                src="./../images/testimonials/bhumi.png"
                alt="bhumi logo"
                height={40}
              />
            }
            quote="It was refreshing to work with the Outfund team who intimately understood the intricacies of our needs and were practical in their assessment of our growing business"
            name="Dushyant Baravkar"
            profile={
              <StaticImage
                src="./../images/testimonials/dushyant-baravkar.png"
                alt="dushyant-baravkar profile photo"
                width={40}
                height={40}
              />
            }
          />
          <Testimonial
            link="https://www.mermadehair.com.au/"
            logo={
              <StaticImage
                src="./../images/testimonials/mermade.png"
                alt="mermade logo"
                height={40}
              />
            }
            quote="Outfund provided positive and supportive feedback as we worked to grow our inventory."
            name="Steve Simich"
            profile={
              <StaticImage
                src="./../images/testimonials/steve-simich.png"
                alt="steve-simich profile photo"
                width={40}
                height={40}
              />
            }
          />
          <Testimonial
            link="https://www.drnks.com/"
            logo={
              <StaticImage
                src="./../images/testimonials/drnks.png"
                alt="drnks logo"
                height={40}
              />
            }
            quote="Outfund massively impacted our growth. Rather than relying on cashflow to grow, we were able to access funds immediately."
            name="Joel Amos"
            profile={
              <StaticImage
                src="./../images/testimonials/joel-amos.png"
                alt="joel-amos profile photo"
                width={40}
                height={40}
              />
            }
          />
          <Testimonial
            link="https://www.goodpairdays.com/au/"
            logo={
              <StaticImage
                src="./../images/testimonials/good-pair-days.png"
                alt="drnks logo"
                height={40}
              />
            }
            quote="Outfund was great from start to finish. They provided us with the flexibility to invest in growth, making it a truly valuable partnership."
            name="Tom Walenkamp"
            profile={
              <StaticImage
                src="./../images/testimonials/tom-walenkamp.png"
                alt="joel-amos profile photo"
                width={40}
                height={40}
              />
            }
          />
        </SectionTestimonials>
        {/* <SectionFaq data={props.data.homepageJson.faq} /> */}
        <SectionWeFunded data={data.weFunded} />
        <SectionSupercharging data={data.startSupercharging} />
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}
export default HomePage

export const query = graphql`
  query auHomePage {
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
    trustJson(language: { regex: "/en-AU/" }) {
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
