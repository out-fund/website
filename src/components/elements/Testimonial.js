import React from "react"
import T from "../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"

const Testimonial = (props) => {
  return (
    <StyledTestimonial>
      <a href={props.link} target="_blank">
        <Logo>{props.logo}</Logo>
      </a>

      <Quote>{parse(props.quote)}</Quote>
      <PhotoNameWrapper>
        <Profile>{props.profile}</Profile>
        <Name>{parse(props.name)}</Name>
      </PhotoNameWrapper>
    </StyledTestimonial>
  )
}

export default Testimonial

const StyledTestimonial = styled.div`
  background-color: #f2f6fa;
  padding: 32px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
  }
`

const Logo = styled.span``

const Quote = styled(T.Body)`
  margin-bottom: 16px;
`

const PhotoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  margin-top: auto;
`

const Profile = styled.div``

const Name = styled(T.Body)``
