import { Button } from "./../../components"
// import F from "./../../styles/new/form"
import React from "react"
import T from "./../../styles/new/typography"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const CalculatorV2 = ({ data }) => {
  const termLengths = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const fees = [2.5, 3.0, 3.7, 4.5, 5.3, 6.0, 6.8, 7.6, 8.4, 9.1]
  let intialRangeValue = 3
  let intialTerm = 0
  const [requestedLoan, setRequestedLoan] = React.useState(intialRangeValue)
  const [requestedTerm, setRequestedTerm] = React.useState(intialTerm)
  // const [isDisabled, setDisabled] = React.useState(true)
  let selectedLoanAmount = data.range[requestedLoan]
  const selectedLoanAmountClean = selectedLoanAmount
    .replace(/£/g, "")
    .replace(/\s/g, "")
  let selectedTerm = termLengths[requestedTerm]

  const handleRangeChange = (event) => {
    setRequestedLoan(event.target.value)
  }
  const handleTermChange = (event) => {
    setRequestedTerm(event.target.value)
    // console.log("requestedTerm", termLengths[requestedTerm])
  }

  // const handleButton = () => {
  //   setDisabled(false)
  // }

  const totalPayable =
    Number(selectedLoanAmountClean) +
    Number(selectedLoanAmountClean * fees[requestedTerm]) / 100

  return (
    <Wrapper data-surface-type="calculator" data-surface-title="calc2ff">
      <TextWrapper>
        {/* <Title>{data.title}</Title> */}
        <Title>How much do you need?</Title>
        <Selected as="div">{selectedLoanAmount}</Selected>
      </TextWrapper>
      <FormWrapper>
        <RangeWrapper>
          <div className="top">
            <div>{data.range[0]}</div>
            <div>{data.range[8]}</div>
          </div>
          <InputWrapper>
            <input
              className="slider"
              type="range"
              min="0"
              max="8"
              step="1"
              defaultValue={intialRangeValue}
              onChange={(event) => handleRangeChange(event)}
            />
          </InputWrapper>
        </RangeWrapper>
        <Title>Term</Title>
        <Selected as="div">{selectedTerm} months</Selected>
        <RangeWrapper>
          <div className="top">
            <div>3 months</div>
            <div>12 months</div>
          </div>
          <InputWrapper>
            <input
              className="slider"
              type="range"
              min="0"
              max="9"
              step="1"
              defaultValue={intialTerm}
              onChange={(event) => handleTermChange(event)}
            />
          </InputWrapper>
        </RangeWrapper>
        <Calculated as="div">
          Flat fee to pay *<span>{fees[requestedTerm]}%</span>
        </Calculated>
        <Calculated as="div">
          Total repayable
          <span>
            £{totalPayable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </span>
        </Calculated>
        <Small>
          * This calculator is only an example, rate for your business will vary
          based on your circumstances and is subject to change.
        </Small>
        <BtnWrapper>
          <Button
            href={`https://client.out.fund/signup?utm_term=term${selectedTerm}amount${selectedLoanAmountClean}`}
            variant="primary"
            size="large"
            id="cta-check-eligibility"
            data-element-category="Signup CTA"
          >
            Apply for {selectedLoanAmount}
          </Button>
          <div className="note">
            Applying will not affect your credit score.
          </div>
        </BtnWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

export default CalculatorV2

const Title = styled(T.H6)`
  margin-bottom: 8px;
`

const Selected = styled(T.H3)`
  margin-bottom: 24px;
`
const Calculated = styled(T.H4)`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  span {
    /* color: #0db6ff; */
    font-weight: 500;
  }
`

const FormWrapper = styled.div``

const BtnWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  .note {
    padding-top: 10px;
    font-size: 12px;
  }
`

const InputWrapper = styled.div`
  padding: 1px;
  margin-top: 4px;
  position: relative;
  /* &:after {
    position: absolute;
    top: 7px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 19px;
    background-color: #bbc7d6;
    border-radius: 10px;
    content: "";
  } */
`
const RangeWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  input {
    width: 100%;
  }

  .slider {
    position: relative;
    z-index: 2;
    width: 100%;
    margin: 7.5px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  .slider:focus {
    outline: none;
  }
  .slider::-webkit-slider-runnable-track {
    width: 100%;
    height: 17px;
    background: #89d9f3;
    border: 3px solid #ffffff;
    border-radius: 12px;
    box-shadow: 0px 0px 0px 1px #bbc7d6;
    cursor: pointer;
  }
  .slider::-webkit-slider-thumb {
    position: relative;
    width: 32px;
    height: 32px;
    margin-top: -10px;
    background: #003edb;
    border-radius: 20px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  .slider:focus::-webkit-slider-runnable-track {
    background: #89d9f3;
  }
  .slider::-moz-range-track {
    width: 100%;
    height: 17px;
    background: #89d9f3;
    border: 3px solid #ffffff;
    border-radius: 20px;
    box-shadow: 0px 0px 0px 1px #bbc7d6;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 32px;
    height: 32px;
    background: #003edb;
    border: 1px solid #003edb;
    border-radius: 32px;
    cursor: pointer;
  }
  .slider::-ms-track {
    width: 100%;
    height: 17px;
    color: transparent;
    background: transparent;
    border-color: transparent;
    border-width: 8px 0;
    cursor: pointer;
  }
  .slider::-ms-fill-lower {
    background: #89d9f3;
    border: 3px solid #ffffff;
    border-radius: 18px;
  }
  .slider::-ms-fill-upper {
    background: #89d9f3;
    border: 3px solid #ffffff;
    border-radius: 18px;
  }
  .slider::-ms-thumb {
    width: 32px;
    height: 32px;
    margin-top: 0px;
    background: #003edb;
    border-radius: 16px;
    cursor: pointer;
  }
  .slider:focus::-ms-fill-lower {
    background: #89d9f3;
  }
  .slider:focus::-ms-fill-upper {
    background: #89d9f3;
  }
`

// const SelectWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin-bottom: 40px;
//   select {
//     width: 100%;
//   }
//   label {
//   }
// `

const TextWrapper = styled.div``
const Small = styled.div`
  font-size: 12px;
  line-height: 1.5;
`

const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 32px 24px;
  border-radius: 10px;
  position: relative;

  ${theme.above.t.s} {
    padding: 48px 24px;
  }

  ${theme.above.l.m} {
    padding: 64px 64px;
  }

  /* ${theme.above.d.m} {
    padding: 64px 64px;
  } */
`
