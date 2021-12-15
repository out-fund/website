import React from "react"
import styled from "styled-components"
import { W, S, theme, breakpoints } from "styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Offices = ({ offices, image, imageAlt }) => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <GatsbyImage image={getImage(image)} alt={imageAlt} />
        </ImageWrapper>
        <TextWrapper>
          <OfficeList>
            <Region>
              <S.H5 as="h3">{offices.main.title}</S.H5>
              <Office>
                <S.H6 as="h4">{offices.main.country}</S.H6>
                <S.BodyText>
                  {offices.main.firstLine}
                  <br />
                  {offices.main.secondLine}
                </S.BodyText>
              </Office>
            </Region>

            <Region>
              <S.H5 as="h6">{offices.world.title}</S.H5>
              <OfficesWorld>
                {offices.world.list.map((office) => (
                  <Office key={office.country}>
                    <S.H6 as="h4">{office.country}</S.H6>
                    <S.BodyText>
                      {office.firstLine}
                      <br />
                      {office.secondLine}
                    </S.BodyText>
                  </Office>
                ))}
              </OfficesWorld>
            </Region>
          </OfficeList>
        </TextWrapper>
      </ContentWrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header``
// const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)``
const TextWrapper = styled(W.TextWrapper)`
  max-width: ${theme.width.text};
  margin: 0 auto;
`
const ImageWrapper = styled(W.ImageWrapper)`
  max-width: ${theme.width.image};
  margin: 0 auto;
  margin-bottom: 80px;
`
const OfficeList = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 32px;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr 3fr;
    column-gap: 16px;
  }
`

const OfficesWorld = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  /*grid-column-gap:*/
`
const Office = styled.div`
  h4 {
    margin-bottom: 8px;
  }
`
const Region = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 16px;
`

export default Offices
