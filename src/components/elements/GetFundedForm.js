import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import { graphql, navigate } from "gatsby"

import { Button, Link } from "./../../components"
import F from "./../../styles/new/form"

import { VisuallyHidden } from "./../../styles/utils"

//EXTERNALISE GET FUNDED FORM (TOO MUCH CODE) AND PASS IN APPROPRIATE LANGUAGE QUERIES

export const query = graphql`
  query GetFundedPage {
    getFundedJson(language: { regex: "/en-GB/" }) {
      content {
        title
        description
        form {
          name
          email
          phone
          website
          select {
            title
            default
            options
          }
          btn
        }
      }
    }
  }
`

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const GetFundedForm = (props) => {
  const data = props.data.getFundedJson.content

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          companyWebsite: "",
          monthlyRevenue: "50,000",
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({ "form-name": "get-funded", ...values }),
          })
            .then(() => {
              navigate("/thank-you/")
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
          if (!values.name) {
            errors.name = "Name Required"
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required"
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Phone Number Required"
          }
          if (!values.companyWebsite) {
            errors.companyWebsite = "Company Website Required"
          }
          if (!values.monthlyRevenue) {
            errors.monthlyRevenue = "Monthly Revenue Required"
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
            name="get-funded"
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
                <label htmlFor="name">{data.form.name}</label>
              </VisuallyHidden>
              <F.FormikField
                valid={errors.name}
                name="name"
                placeholder={data.form.name}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="name" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="email">{data.form.email}</label>
              </VisuallyHidden>
              <F.FormikField
                valid={errors.email}
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
                valid={errors.phoneNumber}
                name="phoneNumber"
                placeholder={data.form.phone}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="phoneNumber" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="message">{data.form.website}</label>
              </VisuallyHidden>
              <F.FormikField
                valid={errors.companyWebsite}
                name="companyWebsite"
                placeholder={data.form.website}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="companyWebsite" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <SelectWrapper>
                <F.Label htmlFor="amr">{data.form.select.title}</F.Label>
                <F.Select name="amr" id="amr" defaultValue={"DEFAULT"} required>
                  <option value="DEFAULT" disabled>
                    {data.form.select.default}
                  </option>
                  {data.form.select.options.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </F.Select>
              </SelectWrapper>
            </F.Group>
            <F.Group>
              <Button
                disabled={isSubmitting || !isValid || !dirty}
                type="submit"
                variant="primary"
                size="large"
              >
                {data.form.btn}
              </Button>
            </F.Group>
          </F.FormikForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  margin-top: 24px;

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`

export default GetFundedForm
