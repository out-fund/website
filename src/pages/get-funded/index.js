import React from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/en"

import LogoWhite from "./../../images/svg/Outfund-logo-white.svg"
import LogoDark from "./../../images/svg/Outfund-logo.svg"
import LogoStrip from "./../../images/svg/get-funded-logo-strip.svg"

import { Button, Link } from "./../../components"
import F from "./../../styles/new/form"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"
import { Triangle } from "./../../styles/utils"

import { VisuallyHidden } from "./../../styles/utils"

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

const GetFunded = (props) => {
  const data = props.data.getFundedJson.content

  return (
    <LangLayout noNavbar pt>
      <Wrapper>
        <ContentWrapper>
          <LeftWrapper>
            <LeftContentWrapper>
              <LogoWhiteWrapper>
                <Link to={`/`}>
                  <LogoWhite />
                </Link>
              </LogoWhiteWrapper>
              <LeftTextWrapper>
                <PageTitle>Growth capital for founders like You</PageTitle>
              </LeftTextWrapper>
              <LogoSection>
                <LogoSectionTitle>
                  We’ve funded 100s of brands like yours
                </LogoSectionTitle>
                <LogoStripWrapper>
                  <LogoStrip />
                </LogoStripWrapper>
              </LogoSection>
            </LeftContentWrapper>
          </LeftWrapper>
          <RightWrapper>
            <RightContentWrapper>
              <LogoDarkWrapper>
                <Link to={`/`}>
                  <LogoDark />
                </Link>
              </LogoDarkWrapper>
              <TextWrapper>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
              </TextWrapper>

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
                    const emailRegex =
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
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
                  {() => (
                    <F.FormikForm name="get-funded" data-netlify={true}>
                      <F.Group>
                        <VisuallyHidden>
                          <label htmlFor="name">{data.form.name}</label>
                        </VisuallyHidden>
                        <F.FormikField
                          name="name"
                          placeholder={data.form.name}
                        />
                        <ErrorMessage name="name" />
                      </F.Group>
                      <F.Group>
                        <VisuallyHidden>
                          <label htmlFor="email">{data.form.email}</label>
                        </VisuallyHidden>
                        <F.FormikField
                          name="email"
                          placeholder={data.form.email}
                        />
                        <ErrorMessage name="email" />
                      </F.Group>
                      <F.Group>
                        <VisuallyHidden>
                          <label htmlFor="message">{data.form.phone}</label>
                        </VisuallyHidden>
                        <F.FormikField
                          name="phoneNumber"
                          placeholder={data.form.phone}
                        />
                        <ErrorMessage name="phoneNumber" />
                      </F.Group>
                      <F.Group>
                        <VisuallyHidden>
                          <label htmlFor="message">{data.form.website}</label>
                        </VisuallyHidden>
                        <F.FormikField
                          name="companyWebsite"
                          placeholder={data.form.website}
                        />
                        <ErrorMessage name="companyWebsite" />
                      </F.Group>
                      <F.Group>
                        <SelectWrapper>
                          <F.Label htmlFor="amr">
                            {data.form.select.title}
                          </F.Label>
                          <F.Select
                            name="amr"
                            id="amr"
                            defaultValue={"DEFAULT"}
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
                      <Button
                        disabled={false}
                        type="submit"
                        variant="primary"
                        size="large"
                      >
                        {data.form.btn}
                      </Button>
                    </F.FormikForm>
                  )}
                </Formik>

                {/* <F.Form
                  name="get-funded"
                  action="/thank-you/"
                  method="POST"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="get-funded"
                    maxLength="256"
                  />
                  <VisuallyHidden>
                    <label>
                      Don’t fill this out if you’re human:
                      <input name="bot-field" tabIndex="-1" />
                    </label>
                  </VisuallyHidden>

                  <F.Group>
                    <VisuallyHidden>
                      <F.Label htmlFor="name">{data.form.name}</F.Label>
                    </VisuallyHidden>
                    <F.Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={data.form.name}
                      maxLength="256"
                      required
                    />
                  </F.Group>

                  <F.Group>
                    <VisuallyHidden>
                      <F.Label htmlFor="email">{data.form.email}</F.Label>
                    </VisuallyHidden>
                    <F.Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder={data.form.email}
                      maxLength="256"
                      required
                    />
                  </F.Group>

                  <F.Group>
                    <VisuallyHidden>
                      <F.Label htmlFor="phone">{data.form.phone}</F.Label>
                    </VisuallyHidden>
                    <F.Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder={data.form.phone}
                      maxLength="256"
                      required
                    />
                  </F.Group>

                  <F.Group>
                    <VisuallyHidden>
                      <F.Label htmlFor="website">{data.form.website}</F.Label>
                    </VisuallyHidden>
                    <F.Input
                      id="website"
                      type="text"
                      name="website"
                      placeholder={data.form.website}
                      maxLength="256"
                      required
                    />
                  </F.Group>

                  <SelectWrapper>
                    <F.Label htmlFor="amr">{data.form.select.title}</F.Label>
                    <F.Select
                      name="amr"
                      id="amr"
                      defaultValue={"DEFAULT"}
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

                  <Button type="submit" variant="primary" size="large">
                    {data.form.btn}
                  </Button>
                </F.Form> */}
              </FormWrapper>
            </RightContentWrapper>
          </RightWrapper>
        </ContentWrapper>
      </Wrapper>
    </LangLayout>
  )
}

export default GetFunded

const LogoStripWrapper = styled.div`
  height: 60px;
`

const LogoSection = styled.div`
  margin-top: auto;
`

const LogoSectionTitle = styled(T.Body)`
  color: #deeeff;
  opacity: 0.5;
  margin-bottom: 16px;
`

const LeftWrapper = styled.div`
  background-color: #0d2c4f;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  padding-top: 120px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 800px) {
    display: none;
  }
`

const LeftContentWrapper = styled.div`
  max-width: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  /* margin: 0; */
`

const LeftTextWrapper = styled.div`
  /* background-color: #afa; */
  margin-top: 48px;
  position: relative;
  ${Triangle}
  &:after {
    /* bottom: 0px; */
    bottom: 50%;
    left: 100%;
    z-index: 3;
    transform: rotate(-90deg);
  }
`
const LogoDarkWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  display: none;
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
  @media (max-width: 800px) {
    display: block;
  }
`
const LogoWhiteWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
`

const PageTitle = styled(T.H1)`
  color: #deeeff;
  max-width: 540px;
`

const Title = styled(T.H2)`
  margin-bottom: 8px;
`
const SelectWrapper = styled(F.Group)`
  margin-top: 16px;
  /* margin-bottom: 40px; */
`
const Description = styled(T.Body)``

const TextWrapper = styled.div`
  text-align: center;
`
const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};

  /* padding-top: 10vh;
  padding-left: 24px;
  padding-right: 24px; */
`

const RightContentWrapper = styled.div`
  max-width: 400px;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const RightWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  /* padding-top: 40px; */
  padding-bottom: 40px;
  @media (max-width: 800px) {
    align-items: flex-start;
    padding-top: 24px;
    padding-right: 16px;
    padding-left: 16px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  min-height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
const FormWrapper = styled.div`
  margin-top: 24px;
  ${F.Form} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .ButtonWrap button {
    width: 100%;
  }
`
