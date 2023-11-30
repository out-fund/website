import React from "react"
import styled from "styled-components"
import { Section, SectionHeader, Button } from ".."
import { theme } from "../../styles/new/theme"

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
                <th className="tg-0lax">Bank loan</th>
                <th className="tg-0lax">Venture capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax desc">Cost</td>
                <td className="tg-0lax of">One fixed fee</td>
                <td className="tg-0lax">Interest</td>
                <td className="tg-0lax">Equity</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Time to funding</td>
                <td className="tg-0lax of">Days</td>
                <td className="tg-0lax">Weeks</td>
                <td className="tg-0lax">Months</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Amount</td>
                <td className="tg-0lax of">10K € - 10M €</td>
                <td className="tg-0lax">20K € - 1M €</td>
                <td className="tg-0lax">100K € - 1M+ €</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Repayments</td>
                <td className="tg-0lax of">Flexible / Fixed</td>
                <td className="tg-0lax">Fixed</td>
                <td className="tg-0lax">n/a</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">Value added service</td>
                <td className="tg-0lax of">Yes</td>
                <td className="tg-0lax">No</td>
                <td className="tg-0lax">Yes (ish)</td>
              </tr>
              <tr>
                <td className="tg-0lax desc">% of the company</td>
                <td className="tg-0lax of last">No</td>
                <td className="tg-0lax">No</td>
                <td className="tg-0lax">Yes</td>
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
              Get funded in 24 hours
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
