import styled, { css } from "styled-components"
import { Field, Form } from "formik"
import { theme } from "./../../new/theme"

const sharedInput = css`
  background: #fff;
  border: 1px solid ${theme.color.input.default.border};
  margin: 0;
  padding: 12px 16px;
  max-width: 100%;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  &::placeholder {
    color: #8a9cb0;
    opacity: 1; /* Firefox */
  }

  /* &:focus {
    border: 1px solid ${theme.color.input.focus.border};
    outline: 2px solid ${theme.color.input.focus.border};
  } */

  &:focus-visible {
    outline: 2px solid ${theme.color.input.focus.border};
  }
  /* line-height: 1.5; */
  /* color: ${theme.color.text.body}; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${theme.above.d.m} {
    font-size: 18px;
  }
`
export const Form = styled.form`
  /*background: yellow;*/
`
export const Group = styled.div`
  /* background-color: #afa; */
  /* label {
    padding-bottom: 16px;
  } */
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Label = styled.label`
  color: ${theme.color.text.body};
`

export const Input = styled.input`
  ${sharedInput}
`

export const FormikField = styled(Field)`
  ${sharedInput}
`

export const FormikForm = styled(Form)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .ButtonWrap button {
    width: 100%;
  }
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
