import React from "react"
import styled from "styled-components"
import { Section, SectionHeader, Button } from "./../../components"
import { theme } from "./../../styles/new/theme"

import T from "./../../styles/new/typography"

const SectionBenefits = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} description={data.description} />
        </HeaderWrapper>
        <ContentWrapper>
          <Grid>
            <Benefit>
              <Icon>
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#65AE59" />
                  <g clipPath="url(#a)">
                    <path
                      d="M16.667 21.333H14v9.334h2.667v-9.334Zm8 0H22v9.334h2.667v-9.334Zm11.333 12H10.667V36H36v-2.667Zm-3.333-12H30v9.334h2.667v-9.334Zm-9.334-12L10.667 16v2.667H36V16L23.333 9.333ZM16.387 16l6.946-3.653L30.28 16H16.387Z"
                      fill="#0D6000"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(8 8)"
                        d="M0 0h32v32H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              <Title>Get funded quicker for less</Title>
              <Description>
                Easy access to cost effective funding with more flexibility than
                ever before.
              </Description>
            </Benefit>
            <Benefit>
              <Icon>
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#9C4DFF" />
                  <g clipPath="url(#a)" fill="#37007B">
                    <path d="M36 24.293C36 16.973 30.32 12 24 12c-6.253 0-12 4.867-12 12.373a2.624 2.624 0 0 0-1.333 2.294v2.666c0 1.467 1.2 2.667 2.666 2.667h1.334v-8.133A9.327 9.327 0 0 1 24 14.533a9.327 9.327 0 0 1 9.333 9.334v9.466H22.667V36h10.666C34.8 36 36 34.8 36 33.333v-1.626a2.465 2.465 0 0 0 1.333-2.187v-3.067c0-.933-.546-1.746-1.333-2.16Z" />
                    <path d="M20 26.667A1.333 1.333 0 1 0 20 24a1.333 1.333 0 0 0 0 2.667ZM28 26.667A1.333 1.333 0 1 0 28 24a1.333 1.333 0 0 0 0 2.667Z" />
                    <path d="M32 22.707c-.64-3.8-3.947-6.707-7.933-6.707-4.04 0-8.387 3.347-8.04 8.6a10.766 10.766 0 0 0 6.48-7.853c1.746 3.506 5.333 5.92 9.493 5.96Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(8 8)"
                        d="M0 0h32v32H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              <Title>Dedicated support</Title>
              <Description>
                Leverage our partnerships with marketing experts including
                Google, Amazon and Facebook to supercharge your growth.
              </Description>
            </Benefit>
            <Benefit>
              <Icon>
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#79DCF2" />
                  <g clipPath="url(#a)">
                    <path
                      d="M28 18.667c0-1.894-.667-3.64-1.773-5.014.56-.186 1.146-.32 1.773-.32a5.332 5.332 0 0 1 5.333 5.334A5.332 5.332 0 0 1 28 24h-.24l-1.027-1.027A7.99 7.99 0 0 0 28 18.667Zm10.44 16h.227v-4c0-2.907-4.774-4.627-8.454-5.16 1.467 1 2.6 2.28 2.974 3.92l5.253 5.24ZM20 16c-.08 0-.147 0-.213.013l-2.134-2.133a5.33 5.33 0 0 1 7.134 7.133l-2.134-2.133a1.08 1.08 0 0 0 .014-.213C22.667 17.2 21.467 16 20 16Zm.227 8H20a5.332 5.332 0 0 1-5.333-5.333v-.227L8.92 12.68l1.88-1.88 26.4 26.4-1.88 1.88-4.653-4.64v.227H9.333v-4c0-3.547 7.107-5.334 10.667-5.334.493 0 1.067.04 1.667.107L20.227 24ZM20 28c-3.6 0-7.733 1.72-8 2.68V32h16v-.227l-2.813-2.813C23.68 28.413 21.773 28 20 28Z"
                      fill="#007397"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(8 8)"
                        d="M0 0h32v32H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              <Title>No dilution or personal guarantees</Title>
              <Description>
                Why give up equity to fund repeatable aspects of your business?
                It's your business. Stay in control.
              </Description>
            </Benefit>
          </Grid>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionBenefits

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  /* max-width: 1570px; */
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  margin-top: 64px;
`

const Icon = styled.div``
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;
  max-width: 1770px;
  margin: 0 auto;

  ${theme.above.t.l} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
`
const Benefit = styled.div`
  text-align: center;
`

const Title = styled(T.H3)`
  margin-top: 24px;
  margin-bottom: 16px;
`
const Description = styled(T.Body)``
