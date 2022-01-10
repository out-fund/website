import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "./../../layouts/en"

import { Button } from "./../../components"
import F from "./../../styles/new/form"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

import { VisuallyHidden } from "./../../styles/utils"

const GetFunded = (props) => {
  const data = props.data.getFundedJson.content

  return (
    <EnLayout simpleNavbar>
      <Wrapper>
        <ContentWrapper>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          <FormWrapper>
            <F.Form
              name="get-funded"
              action="/thank-you/"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="get-funded" />
              <F.Group>
                <VisuallyHidden>
                  <F.Label for="name">{data.form.name}</F.Label>
                </VisuallyHidden>
                <F.Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={data.form.name}
                  required
                />
              </F.Group>
              <F.Group>
                <VisuallyHidden>
                  <F.Label for="email">{data.form.email}</F.Label>
                </VisuallyHidden>
                <F.Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={data.form.email}
                  required
                />
              </F.Group>
              <F.Group>
                <VisuallyHidden>
                  <F.Label for="phone">{data.form.phone}</F.Label>
                </VisuallyHidden>
                <F.Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder={data.form.phone}
                  required
                />
              </F.Group>
              <F.Group>
                <VisuallyHidden>
                  <F.Label for="website">{data.form.website}</F.Label>
                </VisuallyHidden>
                <F.Input
                  id="website"
                  type="url"
                  name="website"
                  placeholder={data.form.website}
                />
              </F.Group>
              <SelectWrapper>
                <F.Label for="revenue">{data.form.select.title}</F.Label>

                <F.Select name="reasons" id="revenue">
                  {data.form.select.options.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </F.Select>
              </SelectWrapper>

              {/* <ButtonWrapper> */}
              <Button type="submit" variant="primary" size="large">
                {data.form.btn}
              </Button>
              {/* </ButtonWrapper> */}
            </F.Form>
          </FormWrapper>
        </ContentWrapper>
      </Wrapper>
    </EnLayout>
  )
}

export default GetFunded

const Title = styled(T.H2)`
  margin-bottom: 8px;
`
const SelectWrapper = styled(F.Group)`
  margin-top: 16px;
  margin-bottom: 40px;
`
const Description = styled(T.Body)``

const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  min-height: 90vh;
  padding-top: 10vh;
  padding-left: 24px;
  padding-right: 24px;
`
const ContentWrapper = styled.div`
  max-width: 370px;
  margin: 0 auto;
`
const FormWrapper = styled.div`
  margin-top: 40px;
  /* ${F.Group} {
    margin-bottom: 16px;
  } */
  ${F.Form} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const query = graphql`
  query getFundedPage {
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
            options
          }
          btn
        }
      }
    }
  }
`
