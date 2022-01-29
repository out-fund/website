import React, { useState } from "react"
import styled from "styled-components"
import { Formik } from "formik"

import { Button } from "./../../components"
import F from "./../../styles/new/form"
import T from "./../../styles/new/typography"

import { theme } from "./../../styles/new/theme"

import { VisuallyHidden } from "./../../styles/utils"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUsForm = ({ data, language }) => {
  const [buttonSent, setButtonSent] = useState(data.form.btn)

  console.log(data)

  return (
    <Form style={{ gridArea: "emailForm" }}>
      <T.H4 as="h2" style={{ maxWidth: 400 }}>
        {data.title}
      </T.H4>
      <FormWrapper>
        <Formik
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
                  <label htmlFor="fullName">{data.form.fullName}</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.fullName && touched.fullName}
                  name="fullName"
                  placeholder={data.form.fullName}
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="fullName" />
                </F.ErrorWrapper>
              </F.Group>
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="email">{data.form.email}</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.email && touched.email}
                  name="email"
                  placeholder={data.form.email}
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
                  component="textarea"
                  placeholder={data.form.message}
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
        </Formik>
      </FormWrapper>
    </Form>
  )
}

export default ContactUsForm

const FormWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  max-width: 1170px;
  background-color: ${theme.color.background.emphesized};
  border-radius: 10px;
  row-gap: 40px;
  padding: 25px;

  row-gap: 24px;
  ${theme.above.l.m} {
    padding: 40px 32px;
  }

  ${theme.above.d.m} {
    padding: 64px 56px;
  }
  button {
    width: 100%;
  }

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`

const Form = styled.div`
  ${F.Form} {
    display: grid;
    grid-template-areas:
      "liveChat"
      "emailForm"
      "demoCall"
      "support"
      "feedback";
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    max-width: 1170px;
    background-color: ${theme.color.background.emphesized};
    border-radius: 10px;
    row-gap: 40px;

    row-gap: 24px;
    ${theme.above.l.m} {
      padding: 40px 32px;
    }

    ${theme.above.d.m} {
      padding: 64px 56px;
    }
    button {
      width: 100%;
    }
  }
`
