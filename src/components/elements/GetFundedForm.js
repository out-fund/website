import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import { navigate } from "gatsby"

import { Button } from "./../../components"
import F from "./../../styles/new/form"

import { VisuallyHidden } from "./../../styles/utils"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const GetFundedForm = ({ data, language }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          website: "",
          amr: "",
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `get-funded${language ? "-" + language : ""}`,
              ...values,
            }),
          })
            .then(() => {
              navigate(
                `${language ? "/" + language + "/thank-you/" : "/thank-you/"}`
              )
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
          if (!values.phone) {
            errors.phone = "Phone Number Required"
          }
          if (!values.website) {
            errors.website = "Company Website Required"
          }
          if (!values.amr) {
            errors.amr = "Monthly Revenue Required"
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
          <F.FormikForm name={`get-funded${language ? "-" + language : ""}`}>
            <VisuallyHidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="name">{data.form.name}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.name && touched.name}
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
                $valid={errors.phone && touched.phone}
                name="phone"
                placeholder={data.form.phone}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="phone" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="message">{data.form.website}</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.website && touched.website}
                name="website"
                placeholder={data.form.website}
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="website" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <SelectWrapper>
                <F.Label htmlFor="amr" as="label">
                  {data.form.select.title}
                </F.Label>
                <F.Select
                  name="amr"
                  id="amr"
                  defaultValue={"DEFAULT"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
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
                id="form-get-funded-submit"
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
  margin-top: 16px;

  .ButtonWrap button {
    width: 100%;
  }
`

const SelectWrapper = styled(F.Group)``

export default GetFundedForm
