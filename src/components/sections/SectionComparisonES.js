import React from "react"
import styled from "styled-components"
import { Section, SectionHeader, Button } from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionComparison = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} description={data.description} />
        </HeaderWrapper>
        <ContentWrapper>
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-0lax desc">{""}</th>
                <th className="tg-0lax of first">Outfund</th>
                <th className="tg-0lax">Productos Bancarios</th>
                <th className="tg-0lax">Venture Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax desc">Coste</td>
                <td className="tg-0lax of">Tarifa fija</td>
                <td className="tg-0lax">Interés</td>
                <td className="tg-0lax">Equity</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Plazos análisis</td>
                <td className="tg-0lax of">24h</td>
                <td className="tg-0lax">Semanas</td>
                <td className="tg-0lax">Meses</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Cantidades</td>
                <td className="tg-0lax of">15k€- 10M€</td>
                <td className="tg-0lax">20k€- 1M€</td>
                <td className="tg-0lax">100k€ a +1M€</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Repagos</td>
                <td className="tg-0lax of">Flexible / Fijo</td>
                <td className="tg-0lax">Fijo</td>
                <td className="tg-0lax">N/A</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Métricas analizadas</td>
                <td className="tg-0lax of">
                  Data del performance en tiempo real
                </td>
                <td className="tg-0lax">Histórico contable</td>
                <td className="tg-0lax">Potencialidad futura de la empresa</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Dilución</td>
                <td className="tg-0lax of">No</td>
                <td className="tg-0lax">No</td>
                <td className="tg-0lax">Si</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Garantías personales</td>
                <td className="tg-0lax of last">No</td>
                <td className="tg-0lax">Si</td>
                <td className="tg-0lax">No</td>
              </tr>
            </tbody>
          </table>
          <div className="ButtonWrapper">
            <Button
              href="https://client.out.fund/signup"
              variant="primary"
              size="large"
              data-element-category="Signup CTA"
            >
              Obtén financiación en 24 horas
            </Button>
          </div>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionComparison

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  max-width: 1570px;
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  justify-items: center; */

  .tg {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    /* padding: 10px 5px; */
    padding: 8px;
    color: #1c3654;
    line-height: 1.5;
    border-bottom: 1px solid #bfd5ee;

    ${theme.above.t.s} {
      padding: 12px;
    }

    ${theme.above.d.m} {
      padding: 16px;
    }
  }

  td {
    font-weight: 400;

    font-size: 16px;
    text-align: center;

    ${theme.above.t.s} {
      font-size: 18px;
    }

    ${theme.above.d.m} {
      font-size: 20px;
    }
  }
  th {
    font-weight: bold;

    font-size: 18px;

    ${theme.above.t.s} {
      font-size: 20px;
    }

    ${theme.above.d.m} {
      font-size: 24px;
    }
  }
  .tg-0lax {
    vertical-align: top;
  }
  .desc {
    width: 270px;
    padding-right: 20px;

    text-align: right;
    ${theme.above.t.s} {
      padding-right: 30px;
      font-size: 20px;
    }

    ${theme.above.d.m} {
      padding-right: 40px;
      font-size: 24px;
    }
  }
  td.of {
    font-weight: 600;
  }
  .of {
    background-color: #cceefa;
  }
  .of.last {
    border-radius: 0 0 20px 20px;
  }
  .of.first {
    border-radius: 20px 20px 0 0;
  }

  .ButtonWrapper {
    margin-top: 48px;
    text-align: center;
  }
`
