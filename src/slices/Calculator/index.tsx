import { Content } from "@prismicio/client"
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react"

import { Wrapper } from "@/components/atoms"

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="">{children}</p>,
}

/**
 * Props for `Calculator`.
 */
export type CalculatorProps = SliceComponentProps<Content.CalculatorSlice>

/**
 * Component for "Calculator" Slices.
 */
const Calculator = ({ slice }: CalculatorProps): JSX.Element => {
  // console.log(`Pounds: ${pounds.format(price)}`)
  const currency = slice.primary.currency
  // console.log(currency)

  const amounts = slice.primary.amounts
    ? slice.primary.amounts.replace(/\s/g, "").split(",")
    : []
  // console.log(amounts)
  const termMax = slice.primary.term_max ?? 0
  const termMin = slice.primary.term_min ?? 0
  // const termOptions = Array.from({ length: termMax - termMin }, (_, i) => i + 1)
  const termOptions = []
  for (var i = termMin; i <= termMax; i++) {
    termOptions.push(i)
  }

  // console.log(termOptions)

  let convertCurrency
  switch (slice.primary.currency) {
    case "GBP":
      // currencySymbol = "£"
      // currencyPosition = "left"
      convertCurrency = Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumSignificantDigits: 2,
      })
      break
    case "USD":
      // currencySymbol = "$"
      // currencyPosition = "left"
      convertCurrency = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumSignificantDigits: 2,
      })
      break
    case "EUR":
      // currencySymbol = "€"
      // currencyPosition = "right"
      convertCurrency = Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        maximumSignificantDigits: 2,
      })
      break
    case "AUD":
      // currencySymbol = "$"
      // currencyPosition = "left"
      convertCurrency = Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
        maximumSignificantDigits: 2,
      })
      break
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Wrapper>
        <h2>{slice.primary.heading}</h2>
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
        <h3>{slice.primary.subheading}</h3>

        <ul>
          {slice.items.map((item, index) => (
            <li key={index}>{item.bulletpoint}</li>
          ))}
        </ul>

        <h4>{slice.primary.amount_title}</h4>
        <div className="selectedAmount">{amounts[3]}</div>
        <input
          type="range"
          id="amount"
          name="amount"
          min="0"
          max={amounts.length}
          step="1"
        />

        <h4>{slice.primary.term_title}</h4>
        <div className="selectedTerm">6</div>
        <input
          type="range"
          id="amount"
          name="amount"
          min="0"
          max={termOptions.length}
          step="1"
        />
        <div>
          {slice.primary.term_min}{" "}
          <span>{slice.primary.slider_months_text}</span>
        </div>
        <div>
          {slice.primary.term_max}{" "}
          <span>{slice.primary.slider_months_text}</span>
        </div>

        <h4>{slice.primary.total_title}</h4>
        <div className="total">
          {convertCurrency ? convertCurrency.format(70000) : ""}
        </div>
        <p>{slice.primary.example_note}</p>
        <button>
          {slice.primary.button_text}{" "}
          {convertCurrency ? convertCurrency.format(70000) : ""}
        </button>
        <div>{slice.primary.button_note} </div>
      </Wrapper>
    </section>
  )
}

export default Calculator
