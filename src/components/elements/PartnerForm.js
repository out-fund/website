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

const PartnerForm = ({ form, language }) => {
  const [buttonSent, setButtonSent] = useState(form.btn.text)

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          businessName: "",
          fullName: "",
          email: "",
        }}
        onSubmit={(values, actions) => {
          fetch(`${language ? "/" + language + "/" : "/"}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `partner-contact${language ? "-" + language : ""}`,
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
          if (!values.businessName) {
            errors.businessName = "Business name required"
          }
          if (!values.fullName) {
            errors.fullName = "Name required"
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid email required"
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
            name={`partner-contact${language ? "-" + language : ""}`}
          >
            <VisuallyHidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="businessName">{form.company}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.businessName && touched.businessName}
                name="businessName"
                placeholder={form.company}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="businessName" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="fullName">{form.name}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.fullName && touched.fullName}
                name="fullName"
                placeholder={form.name}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="fullName" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="email">{form.email}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.email && touched.email}
                name="email"
                rows="4"
                placeholder={form.email}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="email" />
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
      </Formik>
    </FormWrapper>
  )
}

export default PartnerForm

const FormWrapper = styled.div`
  margin-top: 24px;

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`
