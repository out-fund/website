import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import T from "./../../styles/new/typography"

const Offices = ({ offices, image }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <GatsbyImage image={getImage(image.src)} alt={image.alt} />
        </ImageWrapper>
        <TextWrapper>
          <OfficeList>
            <Region>
              <T.H5 as="h3">{offices.main.title}</T.H5>
              <Office>
                <T.H6 as="h4">{offices.main.country}</T.H6>
                <T.Body>
                  {offices.main.firstLine}
                  <br />
                  {offices.main.secondLine}
                </T.Body>
              </Office>
            </Region>

            <Region>
              <T.H5 as="h6">{offices.world.title}</T.H5>
              <OfficesWorld>
                {offices.world.list.map((office) => (
                  <Office key={office.country}>
                    <T.H6 as="h4">{office.country}</T.H6>
                    <T.Body>
                      {office.firstLine}
                      <br />
                      {office.secondLine}
                    </T.Body>
                  </Office>
                ))}
              </OfficesWorld>
            </Region>
          </OfficeList>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Offices

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const TextWrapper = styled.div`
  /* max-width: theme.width.text};
  margin: 0 auto; */
`
const ImageWrapper = styled.div`
  /* max-width: theme.width.image};
  margin: 0 auto;
  margin-bottom: 80px; */
`
const OfficeList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;

  /* breakpoints.tablet} {
    grid-template-columns: 1fr 3fr;
    column-gap: 16px;
  } */
`

const OfficesWorld = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
`
const Office = styled.div`
  /* h4 {
    margin-bottom: 8px;
  } */
`
const Region = styled.div`
  /* display: grid;
  grid-template-rows: auto;
  row-gap: 16px; */
`
