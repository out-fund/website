import React, { useState } from "react"
import styled from "styled-components"
import { Formik } from "formik"

import { Button } from ".."
import F from "../../styles/new/form"

import { VisuallyHidden } from "../../styles/utils"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ReferralForm = ({ form, language }) => {
  const [buttonSent, setButtonSent] = useState(form.btn.text)

  let country = language
  if (country === "") {
    country = "uk"
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          workEmail: "",
          company: "",
          friendEmail: "",
          country,
        }}
        onSubmit={(values, actions) => {
          fetch(`${language ? "/" + language + "/" : "/"}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `referral-program`,
              ...values,
            }),
          })
            .then(() => {
              setButtonSent("✓")
              setTimeout(() => {
                setButtonSent(form.btn.text)
              }, 5000)
              actions.resetForm()
            })
            .catch(() => {
              alert("Error")
            })
            .finally(() => actions.setSubmitting(false))
        }}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          const errors = {}
          if (!values.workEmail || !emailRegex.test(values.workEmail)) {
            errors.workEmail = "Valid email required"
          }
          if (!values.company) {
            errors.company = "Company name required"
          }
          if (!values.friendEmail || !emailRegex.test(values.friendEmail)) {
            errors.friendEmail = "Valid email required"
          }
          return errors
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }) => (
          <F.FormikForm name={`referral-program`}>
            <VisuallyHidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>

            <VisuallyHidden>
              <input name="country" tabIndex="-1" value={form.country} />
            </VisuallyHidden>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="company">{form.company}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.company && touched.company}
                name="company"
                placeholder={form.company}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="company" />
              </F.ErrorWrapper>
            </F.Group>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="workEmail">{form.workEmail}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.workEmail && touched.workEmail}
                name="workEmail"
                placeholder={form.workEmail}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="workEmail" />
              </F.ErrorWrapper>
            </F.Group>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="friendEmail">{form.friendEmail}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.friendEmail && touched.friendEmail}
                name="friendEmail"
                placeholder={form.friendEmail}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="friendEmail" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="company">{form.company}</label>
                <F.FormikField
                  $valid={errors.company && touched.company}
                  name="company"
                  placeholder={form.company}
                />
              </VisuallyHidden>
            </F.Group>

            <F.Group>
              <Button
                disabled={isSubmitting || !isValid || !dirty}
                type="submit"
                variant="primary"
                size="large"
              >
                {buttonSent}
              </Button>
            </F.Group>
          </F.FormikForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default ReferralForm

const FormWrapper = styled.div`
  margin-top: 24px;

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`
