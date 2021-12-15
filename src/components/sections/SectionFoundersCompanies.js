import React from "react"
import styled from "styled-components"
import { W, theme } from "styles"

import { Button, SectionContainer, CardFounder } from "components"
import parse from "html-react-parser"

const SectionFoundersCompanies = ({ data }) => {
  return (
    <SectionContainer title={data.title}>
      <Wrapper>
        <ContentWrapper>
          <GridFounders>
            {data.cards.map((item, index) => (
              <CardFounder
                key={index}
                company={item.company}
                logo={item.logo}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </GridFounders>
          <GridLogos count={data.logos.length}>
            {data.logos.map((item, index) => (
              <LogoWrapper key={index}>{parse(item)} </LogoWrapper>
            ))}
          </GridLogos>
          <BtnWrapper>
            <Button btnUrl={data.btnUrl} variant="secondary">
              {data.btn}
            </Button>
          </BtnWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionContainer>
  )
}
export default SectionFoundersCompanies

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)``

const GridFounders = styled(W.ContentWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  margin-bottom: 64px;
  row-gap: 30px;

  ${theme.above.tablet} {
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const GridLogos = styled(W.ContentWrapper)`
  display: grid;
  /* grid-template-columns: repeat(${(props) => props.count}, auto); */
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  align-items: center;
  column-gap: 40px;
  row-gap: 24px;
  margin-bottom: 64px;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 200px;
    height: 24px;
    opacity: 0.5;
    path {
      fill: #405e80;
    }
  }
`
const BtnWrapper = styled.div`
  text-align: center;
`
