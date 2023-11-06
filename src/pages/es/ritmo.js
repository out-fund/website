import React from "react"
import styled from "styled-components"

import { theme } from "./../../styles/new/theme"
import { StaticImage } from "gatsby-plugin-image"

import T from "./../../styles/new/typography"

import LangLayout from "./../../layouts/es-fast"

import {
  HeroSimple,
  Main,
  SeoComponent,
  SectionFaq,
  Section,
  Button,
} from "./../../components"

const CcPartnership = (props) => {
  return (
    <LangLayout>
      <SeoComponent title="Outfund" description="" />
      <HeroSimple
        data={{
          title: "Cambia tu proveedor de financiación a Outfund",
          description:
            "Ritmo se ha asociado con Outfund para ofrecer financiación para crecimiento y capital circulante a sus clientes en España y el Reino Unido.",
        }}
      />
      <Main>
        <Wrapper>
          <ImageWrapper>
            <StaticImage
              src="./../../images/of-ritmo.png"
              alt="Outfund + Ritmo"
            />
          </ImageWrapper>
        </Wrapper>
        <TextWrapper>
          <T.Body>
            Outfund es el proveedor de financiación de ecommerce más grande en
            el Reino Unido, España, Australia, Estados Unidos, Alemania y los
            Países Bajos, y ha invertido en miles de negocios en todo el mundo.
            Combinamos las ventajas de la deuda y la financiación privada,
            evitando lo peor de cada una.
          </T.Body>
          <T.Body>
            Dado que Ritmo dejará de ofrecer cobertura a sus clientes en España
            y el Reino Unido, éstos podrán solicitar más capital con Outfund
            para obtener financiación adicional a las mismas tasas competitivas.
          </T.Body>
        </TextWrapper>
        <SwitchWrapper>
          <StyledSection>
            <T.H2>Cómo cambiar de Ritmo a Outfund</T.H2>
            <T.Body
              style={{
                maxWidth: "570px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Para que Outfund pueda estudiar tus datos, haz clic en "Comenzar
              solicitud" a continuación y sigue los pasos indicados.
              <br /> <br />
              Uno de nuestros miembros del equipo se pondrá en contacto para
              ayudarte a aumentar tu financiación, refinanciar tu instalación
              anterior o una combinación de ambas.
            </T.Body>
            <Button
              href="https://client.out.fund/signup?utm_source=partner&utm_medium=ESlandingpage&utm_content=ritmo"
              variant="primary"
              data-element-category="Signup CTA"
              size="large"
            >
              Comenzar solicitud
            </Button>
          </StyledSection>
        </SwitchWrapper>
        <SectionFaq
          data={{
            title: "Preguntas frecuentes",
            questions: [
              {
                question:
                  "Soy cliente de Ritmo, ¿qué significa esta colaboración para mi negocio?",
                answer:
                  "Si tienes financiamiento existente de Ritmo, esta colaboración no te afectará; aún puedes acceder a este capital a través de tu cuenta de Ritmo. Sin embargo, dado que Ritmo dejará de ofrecer cobertura a los clientes en España y el Reino Unido, si deseas acceder a financiación adicional, deberás solicitarlo a Outfund.",
              },
              {
                question: "¿Cómo solicitar financiación para mi negocio?",
                answer:
                  "Simplemente haz clic en 'Comenzar solicitud', completa el formulario de solicitud, conecta tus cuentas de forma segura y nos pondremos en contacto contigo con una oferta en un plazo de 48 horas.",
              },
              {
                question: "¿Puedo refinanciar mi financiación de Ritmo?",
                answer:
                  "Los criterios de aprobación de Outfund pueden diferir de los de Ritmo, por lo que deberás presentar una solicitud para permitir que Outfund evalúe si es posible la refinanciación. En la mayoría de los casos, podremos refinanciar tu deuda de Ritmo.",
              },
              {
                question:
                  "¿Puedo obtener un aumento de la línea además de refinanciar mi deuda de Ritmo?",
                answer:
                  "Cuando nuestro equipo revise tu solicitud, es posible que te ofrezcamos una cantidad adicional de financiamiento. Esto depende del rendimiento de tu negocio.",
              },
              {
                question: "¿Qué sucederá con mi deuda existente de Ritmo?",
                answer:
                  "El financiamiento existente de Ritmo continuará funcionando con normalidad, sin embargo, Ritmo no ofrecerá financiamiento adicional. Para seguir teniendo acceso a financiamiento, te invitamos a presentar una solicitud con Outfund.",
              },
            ],
            btn: {
              text: "",
              url: "",
            },
          }}
        />
      </Main>
    </LangLayout>
  )
}

export default CcPartnership

const Wrapper = styled.div`
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
  max-width: 1570px;
  border-radius: 10px;
  overflow: hidden;
`
const TextWrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;
  p {
    margin: 0;
    margin-bottom: 24px;
  }
`

const StyledSection = styled(Section)`
  max-width: 770px;
  margin: 0 auto;
  padding: 0 16px;
  p {
    margin-top: 16px;
    margin-bottom: 40px;
  }
`
const SwitchWrapper = styled.div`
  background-color: #f2f6fa;
  padding: 64px 0;
  text-align: center;
  max-width: 970px;
  margin: 0 auto;
  margin-top: 40px;

  ${theme.above.t.m} {
    padding: 100px 0;
  }
  ${theme.above.d.m} {
    padding: 120px 0;
  }
  border-radius: 10px;
`
