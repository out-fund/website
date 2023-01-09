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

const GenericForm = ({ form, language }) => {
  const [buttonSent, setButtonSent] = useState(form.btn.text)

  let country = language
  if (country === "") {
    country = "uk"
  }

  // console.log(form)

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          businessName: "",
          businessEmail: "",
          amr: "",
          country,
        }}
        onSubmit={(values, actions) => {
          fetch(`${language ? "/" + language + "/" : "/"}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `QuickQuote`,
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

          if (!values.businessEmail || !emailRegex.test(values.businessEmail)) {
            errors.businessEmail = "Valid email required"
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
          <F.FormikForm name={`QuickQuote`}>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="firstName">{form.firstName}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.firstName && touched.firstName}
                name="firstName"
                placeholder={form.firstName}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="firstName" />
              </F.ErrorWrapper>
            </F.Group>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="lastName">{form.lastName}</label>
              </VisuallyHidden>

              <F.FormikField
                $valid={errors.lastName && touched.lastName}
                name="lastName"
                placeholder={form.lastName}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="lastName" />
              </F.ErrorWrapper>
            </F.Group>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="businessName">{form.businessName}</label>
              </VisuallyHidden>

              <F.FormikField
                $valid={errors.businessName && touched.businessName}
                name="businessName"
                placeholder={form.businessName}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="businessName" />
              </F.ErrorWrapper>
            </F.Group>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="businessEmail">{form.businessEmail}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.businessEmail && touched.businessEmail}
                name="businessEmail"
                placeholder={form.businessEmail}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="businessEmail" />
              </F.ErrorWrapper>
            </F.Group>

            <F.Group>
              <VisuallyHidden>
                <label htmlFor="amr" as="label">
                  {form.amr}
                </label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.amr && touched.amr}
                name="amr"
                placeholder={form.amr}
                data-segment="textInput"
                element-name="amr"
                data-trait="amr"
                attribute
                type="number"
              />
            </F.Group>

            <VisuallyHidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>

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

export default GenericForm

const FormWrapper = styled.div`
  margin-top: 24px;

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`
