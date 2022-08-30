import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import { navigate } from "gatsby"

import { Button } from ".."
import F from "../../styles/new/form"

import { VisuallyHidden } from "../../styles/utils"

import { track } from "@shiggydoodah/segment-events"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const CCLeadForm = ({ data, language }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          website: "",
          amr: "",
          ccrefname: "",
        }}
        onSubmit={(values, actions) => {
          fetch(`${language ? "/" + language + "/" : "/"}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `cc-lead${language ? "-" + language : ""}`,
              ...values,
            }),
          })
            .then(() => {
              track.customEvent("CC Lead Form Submitted", {
                name: values.name,
                email: values.email,
                phone: values.phone,
                website: values.website,
                amr: values.amr,
                ccrefname: values.ccrefname,
                platform: "website",
                country: language || "uk",
              })
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
          const websiteRegex =
            /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,7}(:[0-9]{1,7})?(\/.*)?$/i

          const errors = {}
          if (!values.name) {
            errors.name = "Director name Required"
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required"
          }
          if (!values.phone) {
            errors.phone = "Phone Number Required"
          }
          if (!values.website || !websiteRegex.test(values.website)) {
            errors.website = "Company Website Required"
          }
          if (!values.amr) {
            errors.amr = "Monthly Revenue Required"
          }
          if (!values.ccrefname) {
            errors.ccrefname = "Referral Name Required"
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
          <F.FormikForm name={`cc-lead${language ? "-" + language : ""}`}>
            <VisuallyHidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="name">Director name</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.name && touched.name}
                name="name"
                placeholder="Director name"
                data-segment="textInput"
                element-name="full_name"
                data-trait="full_name"
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
                data-segment="textInput"
                element-name="email"
                data-trait="email"
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
                data-segment="textInput"
                element-name="phone"
                data-trait="phone"
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
                data-segment="textInput"
                element-name="website"
                data-trait="website"
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="website" />
              </F.ErrorWrapper>
            </F.Group>
            <F.Group>
              <VisuallyHidden>
                <label htmlFor="name">Clearco rep name</label>
              </VisuallyHidden>
              <F.FormikField
                $valid={errors.ccrefname && touched.ccrefname}
                name="ccrefname"
                placeholder="Clearco rep name"
                data-segment="textInput"
                element-name="clearco_rep_name"
                data-trait="clearco_rep_name"
              />
              <F.ErrorWrapper>
                <F.FormikError component="div" name="ccrefname" />
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
                  data-segment="option"
                  element-name="amr"
                  data-trait="amr"
                >
                  <option value="DEFAULT" disabled>
                    {data.form.select.default}
                  </option>
                  {data.form.select.options.map((item, index) => (
                    <option key={item} value={data.form.select.values[index]}>
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
                id="cc-lead-submit"
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

export default CCLeadForm
