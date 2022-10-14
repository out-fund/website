import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import { navigate } from "gatsby"

import { Button } from "./.."
import F from "./../../styles/new/form"
import T from "./../../styles/new/typography"

import { VisuallyHidden } from "../../styles/utils"

import { track } from "@shiggydoodah/segment-events"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const BrokerLeadForm = ({ incorporationCountry, language }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          ukBased: true,
          businessName: "",
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          clientWebsite: "",
          monthlyTurnover: "",
          nameOfBank: "",
          brokerageName: "",
          brokerName: "",
          brokerPhone: "",
          brokerEmail: "",
        }}
        onSubmit={(values, actions) => {
          fetch(`${language ? "/" + language + "/" : "/"}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": `broker-lead`,
              ...values,
            }),
          })
            .then(() => {
              track.customEvent("Broker Lead Form Submitted", {
                ukBased: values.ukBased,
                businessName: values.businessName,
                clientName: values.clientName,
                clientEmail: values.clientEmail,
                clientPhone: values.clientPhone,
                clientWebsite: values.clientWebsite,
                monthlyTurnover: values.monthlyTurnover,
                nameOfBank: values.nameOfBank,
                brokerageName: values.brokerageName,
                brokerName: values.brokerName,
                brokerPhone: values.brokerPhone,
                brokerEmail: values.brokerEmail,

                platform: "website",
                locale: language || "uk",
              })
              navigate(
                `${
                  language
                    ? "/" + language + "/lead-submitted/"
                    : "/lead-submitted/"
                }`
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
          if (!values.businessName) {
            errors.businessName = "Business name required"
          }

          if (!values.clientName) {
            errors.clientName = "Client name required"
          }

          if (!values.clientEmail || !emailRegex.test(values.clientEmail)) {
            errors.clientEmail = "Valid email required"
          }

          if (!values.clientPhone) {
            errors.clientPhone = "Phone number required"
          }
          if (
            !values.clientWebsite ||
            !websiteRegex.test(values.clientWebsite)
          ) {
            errors.clientWebsite = "Client company website required"
          }

          if (!values.monthlyTurnover) {
            errors.monthlyTurnover = "Monthly turnover required"
          }

          if (!values.brokerageName) {
            errors.brokerageName = "Brokerage name required"
          }

          if (!values.brokerName) {
            errors.brokerName = "Broker name required"
          }

          if (!values.brokerPhone) {
            errors.brokerPhone = "Broker phone number required"
          }

          if (!values.brokerEmail || !emailRegex.test(values.brokerEmail)) {
            errors.brokerEmail = "Valid broker email required"
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
          <BrokerForm name={`cc-lead${language ? "-" + language : ""}`}>
            <VisuallyHidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" tabIndex="-1" />
              </label>
            </VisuallyHidden>
            <Group>
              <T.H5>Client Info</T.H5>
              {/* ukBased */}
              <Checkbox>
                <CheckboxLabel as="label" htmlFor="ukBased">
                  The business is based the UK:
                </CheckboxLabel>
                <F.FormikField
                  type="checkbox"
                  id="ukBased"
                  name="ukBased"
                  data-segment="textInput"
                  element-name="ukBased"
                  data-trait="ukBased"
                  onChange={handleChange}
                />
              </Checkbox>
              {/* Business name */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="businessName">Business name</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.businessName && touched.businessName}
                  name="businessName"
                  placeholder="Business name"
                  data-segment="textInput"
                  element-name="businessName"
                  data-trait="businessName"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="businessName" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Client name */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="clientName">Client name</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.clientName && touched.clientName}
                  name="clientName"
                  placeholder="Client name"
                  data-segment="textInput"
                  element-name="company_name"
                  data-trait="company_name"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="clientName" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Client email */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="clientEmail">Client email</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.clientEmail && touched.clientEmail}
                  name="clientEmail"
                  placeholder="Client email"
                  data-segment="textInput"
                  element-name="clientEmail"
                  data-trait="clientEmail"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="clientEmail" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Client phone number */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="message">Client phone number</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.clientPhone && touched.clientPhone}
                  name="clientPhone"
                  placeholder="Client phone number"
                  data-segment="textInput"
                  element-name="clientPhone"
                  data-trait="clientPhone"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="clientPhone" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Client company website */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="message">Client company website</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.clientWebsite && touched.clientWebsite}
                  name="clientWebsite"
                  placeholder="Client company website"
                  data-segment="textInput"
                  element-name="clientWebsite"
                  data-trait="clientWebsite"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="clientWebsite" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Average Monthly Turnover in GBP */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="message">
                    Average Monthly Turnover in GBP
                  </label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.monthlyTurnover && touched.monthlyTurnover}
                  name="monthlyTurnover"
                  placeholder="Average Monthly Turnover in GBP"
                  data-segment="textInput"
                  element-name="monthlyTurnover"
                  data-trait="monthlyTurnover"
                  attribute
                  type="number"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="monthlyTurnover" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Name of business bank */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="nameOfBank">Name of business bank</label>
                </VisuallyHidden>
                <F.FormikField
                  name="nameOfBank"
                  placeholder="Name of business bank"
                  data-segment="textInput"
                  element-name="nameOfBank"
                  data-trait="nameOfBank"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="nameOfBank" />
                </F.ErrorWrapper>
              </F.Group>
            </Group>
            <Group>
              <T.H5>Broker Info</T.H5>
              {/* Brokerage name */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="brokerageName">Brokerage name</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.brokerageName && touched.brokerageName}
                  name="brokerageName"
                  placeholder="Brokerage name"
                  data-segment="textInput"
                  element-name="company_name"
                  data-trait="company_name"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="brokerageName" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Broker name */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="brokerName">Broker name</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.brokerName && touched.brokerName}
                  name="brokerName"
                  placeholder="Broker name"
                  data-segment="textInput"
                  element-name="company_name"
                  data-trait="company_name"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="brokerName" />
                </F.ErrorWrapper>
              </F.Group>
              {/* Broker phone number */}
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="brokerPhone">Broker phone number</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.brokerPhone && touched.brokerPhone}
                  name="brokerPhone"
                  placeholder="Broker phone number"
                  data-segment="textInput"
                  element-name="company_name"
                  data-trait="company_name"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="brokerPhone" />
                </F.ErrorWrapper>
              </F.Group>
              <F.Group>
                <VisuallyHidden>
                  <label htmlFor="brokerEmail">Broker email</label>
                </VisuallyHidden>
                <F.FormikField
                  $valid={errors.brokerEmail && touched.brokerEmail}
                  name="brokerEmail"
                  placeholder="Broker email"
                  data-segment="textInput"
                  element-name="brokerEmail"
                  data-trait="brokerEmail"
                />
                <F.ErrorWrapper>
                  <F.FormikError component="div" name="brokerEmail" />
                </F.ErrorWrapper>
              </F.Group>
            </Group>
            {/* -------------------- */}

            <F.Group>
              <Button
                disabled={isSubmitting || !isValid || !dirty}
                type="submit"
                variant="primary"
                size="large"
                id="cc-lead-submit"
              >
                Send lead
              </Button>
            </F.Group>
          </BrokerForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

const BrokerForm = styled(F.FormikForm)`
  gap: 40px;
`
const FormWrapper = styled.div`
  margin-top: 24px;
  .ButtonWrap button {
    width: 100%;
  }
`

// const SelectWrapper = styled(F.Group)``

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Checkbox = styled(F.Group)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 20px;
    height: 20px;
  }
`

const CheckboxLabel = styled(T.Body)`
  /* margin-bottom: 24px; */
`

export default BrokerLeadForm
