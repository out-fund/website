import React, { useState } from "react"
import styled from "styled-components"
import { Formik } from "formik"

import { Button } from "./../../components"
import F from "./../../styles/new/form"

import { VisuallyHidden } from "./../../styles/utils"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUsForm = ({ data, language }) => {
  console.log(data)

  const [buttonSent, setButtonSent] = useState(data.form.btn)

  return (
    <FormWrapper>
      {/* <Formik
        initialValues={{
          fullName: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `contact-us${language ? "-" + language : ""}`,
              ...values,
            }),
          })
            .then(() => {
              setButtonSent("✓")
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
          if (!values.fullName) {
            errors.fullName = "Name Required"
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required"
          }
          if (!values.message) {
            errors.message = "A message is required"
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
          <F.FormikForm
            name={`get-funded${language ? "-" + language : ""}`}
            data-netlify={true}
            netlify-honeypot="bot-field"
          >
            <VisuallyHidden>
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="name">{emailForm.form.fullName}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.fullName && touched.fullName}
                name="name"
                placeholder={emailForm.form.fullName}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="name" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="email">{emailForm.form.email}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.email && touched.email}
                name="email"
                placeholder={emailForm.form.email}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="email" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="message">{data.form.phone}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.message && touched.message}
                name="message"
                rows="4"
                placeholder={emailForm.form.message}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="message" />
              </F.ErrorWrapper>
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
      </Formik> */}
    </FormWrapper>
  )
}

export default ContactUsForm

const FormWrapper = styled.div`
  margin-top: 24px;

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`
