import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import { graphql, navigate } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/us"

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
  query usGetFundedPage {
    getFundedJson(language: { regex: "/en-US/" }) {
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
                          valid={errors.name && touched.name}
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
                          valid={errors.email && touched.email}
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
                          valid={errors.phone && touched.phone}
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
                          valid={errors.website && touched.website}
                          name="website"
                          placeholder={data.form.website}
                        />
                        <F.ErrorWrapper>
                          <F.FormikError component="div" name="website" />
                        </F.ErrorWrapper>
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
                        >
                          {data.form.btn}
                        </Button>
                      </F.Group>
                    </F.FormikForm>
                  )}
                </Formik>
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

  .ButtonWrap button {
    width: 100%;
    margin: 16px 0 0 0;
  }
`
