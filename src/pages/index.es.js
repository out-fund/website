import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../layouts/es"

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
  SectionComparisonES,
  SectionBenefits,
  SectionRepay,
  SectionWhoCanApply,
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
            { up: "Aplica en solo", down: "5 minutos" },
            { up: "Tickets desde", down: "15k€ a 10M€" },
            { up: "Ofertas en tan solo", down: "24h" },
            { up: "Top-ups y acompañamiento", down: "de capital contínuo" },
          ]}
        />
        <SectionLoanDescriptions
          data={{
            title: "Financiación rápida y flexible",
            rbs: {
              title: "Financiación Revenue Based",
              description:
                "Analizamos tus ingresos mensuales y proporcionamos capital en un plazo de 24 horas a cambio de un porcentaje pre-acordado de tus ventas futuras.  <br/><br/> La devolución depende de tus ventas futuras, lo que significa que la amortización irá de la mano de la performance de tu compañía. Si los ingresos disminuyen, también lo hacen los reembolsos. Desde un principio sabrás cuánto repaga tu empresa.",
            },
            fixed: {
              title: "Créditos de amortización fija",
              description:
                "Analizamos tus ingresos mensuales y proporcionamos capital en un plazo de 24 horas, con un plan de amortización fijo. <br/><br/> A través de un plan de amortización fijo controlas mejor tu cash flow. Sabrás desde el principio el total a pagar, y el plazo asociado.",
            },
          }}
        />

        <SectionComparisonES
          data={{
            title: "Encuentra la mejor solución para tu negocio.",
            description:
              "Somos complementarios a todas las alternativas de financiación tradicionales. Queremos democratizar el acceso a la financiación flexible, con el fin de mitigar el riesgo financiero para los emprendedores.",
          }}
        />

        <SectionWhoCanApply
          data={{
            title: "¿Quién puede aplicar?",
            list: [
              "Negocios digitales tipo SaaS, Ecommerce, Suscripciones, App Móvil, B2B",
              "12+ meses operando bajo una sociedad",
              "+30k€ en ingresos mensuales",
            ],
            btn: "Aplica ya",
          }}
        />

        <SectionBenefits
          data={{
            title: "Beneficios para tu negocio",
            list: [
              {
                title: "Obtiene financiación rápida",
                description:
                  "Accede a financiación para el circulante con el fin de evitar tensiones de tesorería y potenciar el crecimiento de tu negocio.",
              },
              {
                title: "Soporte personalizado",
                description:
                  "Accede a nuestra red de partnerships con expertos en márketing incluyendo Google, Amazon y Facebook.",
              },
              {
                title: "Capital no dilutivo y sin garantías personales",
                description:
                  "¿Por qué ceder parte de la compañía para financiar aspectos medibles y repetibles en el tiempo? Mantén el control de tu negocio",
              },
            ],
          }}
        />
        <SectionRepay
          data={{
            title: "Repagos flexibles",
            description:
              "Repaga según tus ventas futuras. ¿Se han visto reducidos los ingresos de tu negocio? Nuestros repagos también.",
            btn: {
              text: "Apply now",
              url: "https://client.out.fund/signup",
            },
          }}
        />

        <SectionFindOut data={props.data.homepageJson.findOut} />
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
  query esHomePage {
    homepageJson(language: { regex: "/es-ES/" }) {
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
    trustJson(language: { regex: "/es-ES/" }) {
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
