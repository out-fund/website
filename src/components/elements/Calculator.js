import React from "react"
import styled from "styled-components"

import { Button } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"
import F from "./../../styles/new/form"

const Calculator = ({ data }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{data.title}</Title>
        <Selected as="div">£100 000</Selected>
      </TextWrapper>
      <RangeWrapper>
        <div className="top">
          <div>{data.min}</div>
          <div>{data.max}</div>
        </div>
        <InputWrapper>
          <input className="slider" type="range" min="0" max="10" step="1" />
        </InputWrapper>
      </RangeWrapper>
      <SelectWrapper>
        <label className="label" htmlFor="reasons">
          {data.select.title}
        </label>
        <div className="dropdown">
          <F.Select name="reasons" id="reasons">
            {data.select.dropdown.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </F.Select>
        </div>
      </SelectWrapper>
      <BtnWrapper>
        <Button to={data.btn.url} variant="primary" size="large">
          {data.btn.text}
        </Button>
      </BtnWrapper>
    </Wrapper>
  )
}

export default Calculator

const Title = styled(T.H6)`
  margin-bottom: 8px;
`

const Selected = styled(T.H3)`
  margin-bottom: 24px;
`

const BtnWrapper = styled.div`
  text-align: center;
`

const InputWrapper = styled.div`
  padding: 1px;
  margin-top: 4px;
  position: relative;
  /* &:after {
    position: absolute;
    top: 8px;
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

  /* .slider {
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
    cursor: pointer;
  }
  .slider::-webkit-slider-thumb {
    position: relative;
    width: 32px;
    height: 32px;
    margin-top: -10.6px;
    background: #1a65ba;
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
    border-radius: 9px;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 32px;
    height: 32px;
    background: #1a65ba;
    border: 1px solid #1a65ba;
    border-radius: 16px;
    cursor: pointer;
  }
  .slider::-ms-track {
    width: 100%;
    height: 17px;
    color: transparent;
    background: transparent;
    border-color: transparent;
    border-width: 8.5px 0;
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
    background: #1a65ba;
    border-radius: 16px;
    cursor: pointer;
  }
  .slider:focus::-ms-fill-lower {
    background: #89d9f3;
  }
  .slider:focus::-ms-fill-upper {
    background: #89d9f3;
  } */
`

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  select {
    width: 100%;
  }
`

const TextWrapper = styled.div``

const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 32px 24px;
  border-radius: 10px;

  ${theme.above.t.s} {
    padding: 48px 24px;
  }

  ${theme.above.d.m} {
    padding: 64px 64px;
  }
`
