import styled, { css } from "styled-components"
import {
  Field as FormikFields,
  Form as FormikForms,
  ErrorMessage as FormikErrors,
} from "formik"
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

export const FormikField = styled(FormikFields)`
  ${sharedInput}
  border: ${(props) => (props.$valid ? "1px solid red" : "")};
`

export const FormikForm = styled(FormikForms)`
  display: flex;
  flex-direction: column;
`
export const FormikError = styled(FormikErrors)`
  position: absolute;
  top: -13px;
`

export const ErrorWrapper = styled.div`
  font-size: 11px;
  margin: 3px 0;
  position: relative;
  color: #d52e2e;
`

export const Group = styled.div`
  /* background-color: #afa; */
  /* label {
    padding-bottom: 16px;
  } */
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const Label = styled.label`
  color: ${theme.color.text.body};
`

export const Input = styled.input`
  ${sharedInput}
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
