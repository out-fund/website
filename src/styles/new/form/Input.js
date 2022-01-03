import styled, { css } from "styled-components"
// import { breakpoints } from "styles"
// import { theme } from "styles"

const sharedInput = css`
  background: #fff;
  border: 1px solid #bbc7d6;
  margin: 0;
  padding: 12px 16px;
  max-width: 100%;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    color: #8a9cb0;
    opacity: 1; /* Firefox */
  }
`
export const Form = styled.form`
  /*background: yellow;*/
`

export const InputText = styled.input`
  ${sharedInput}
`
export const Select = styled.select`
  ${sharedInput}
  appearance: none;
`

export const InputEmail = styled.input`
  ${sharedInput}
`

export const TextArea = styled.textarea`
  ${sharedInput}
  resize: none;
`
