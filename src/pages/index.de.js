import React from "react"
import { graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import LangLayout from "./../layouts/de"

import {
  Main,
  SectionWeFunded,
  SectionWeAreInvesting,
  SectionSupercharging,
  SectionFaq,
  SectionAboutUs,
  SectionRegulated,
  HeroHomepage,
  SeoComponent,
  SectionFindOutFlexible,
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
        <SectionFindOutFlexible
          data={{
            title: "Finden Sie heraus, wie viel Sie bekommen können",
            description:
              "Die Finanzierungsangebote basieren auf Ihrem durchschnittlichen monatlichen Umsatz. Erhalten Sie mit unserem benutzerfreundlichen Rechner einen schnellen Überblick über Ihre Berechtigung. Erhalten Sie innerhalb von 24 Stunden eine Finanzierung mit 3 einfachen Schritten: <br/><br/> <ul><li>Erstellen Sie ein Konto und verbinden Sie Ihre Konten</li><li>Wählen Sie Ihre Angebote aus</li><li>Lassen Sie sich finanzieren</li></ul>",
            calculator: {
              title: "Wie viel brauchen Sie?",
              range: [
                "10 000€",
                "20 000€",
                "50 000€",
                "70 000€",
                "100 000€",
                "200 000€",
                "500 000€",
                "700 000€",
                "1 000 000€",
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

        <SectionTestimonials title="Was unsere deutschen Kunden sagen">
          <Testimonial
            link="https://www.saltedbeauty.com/"
            logo={
              <StaticImage
                src="./../images/testimonials/salted.png"
                alt="Salted Beauty logo"
                height={40}
              />
            }
            quote="Wir haben jetzt mehr Flexibilität, zusätzliche sind die Paid Kampagnen möglich und das Persönlicher Kontakt ist sehr gut."
            name="Florian Karber"
            position="COO bei Salted Beauty"
          />
          <Testimonial
            link="https://www.bettenjumbo.de/"
            logo={
              <StaticImage
                src="./../images/testimonials/bettenJumbo.png"
                alt="bettenJumbo logo"
                height={40}
              />
            }
            quote="Wir haben eine Empfehlung bekommen und der Ablauf war so schnell und reibungslos! In drei worten ist Outfund schnell, zielorientiert und simpel."
            name="Fabian Fechner"
            position="Geschäftsführer"
          />
          <Testimonial
            link="https://kern-energie.com/"
            logo={
              <StaticImage
                src="./../images/testimonials/KERNenergie.png"
                alt="KERNenergie logo"
                height={40}
              />
            }
            quote="Schnelle und unkomplizierte Abwicklung. Jedoch ist das Portal leicht verständlich und nutzbar."
            name="Meinrad Franz"
            position="Finanzvorstand"
          />
          <Testimonial
            link="https://www.lingoni.com/"
            logo={
              <StaticImage
                src="./../images/testimonials/lingoni.png"
                alt="lingoni logo"
                height={40}
              />
            }
            quote="Sehr unkompliziert und angenehm. Wir können mehr Energie in unsere Marketingaktivitäten stecken, was uns auf dem Markt stärker positionieren wird."
            name="Jennifer Tehraud"
            position="Geschäftsinhaber"
          />
        </SectionTestimonials>
        <SectionWeFunded data={data.weFunded} />
        <SectionWeAreInvesting data={data.weInvesting} />
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
  query deHomePage {
    homepageJson(language: { regex: "/de-DE/" }) {
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
    trustJson(language: { regex: "/de-DE/" }) {
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
