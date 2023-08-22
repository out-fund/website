import React from "react"
import T from "../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"

const Testimonial = (props) => {
  return (
    <StyledTestimonial>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Logo>{props.logo}</Logo>
      </a>

      <Quote>{parse(props.quote)}</Quote>
      <PhotoNameWrapper>
        {props.profile && <Profile>{props.profile}</Profile>}
        <div className="namePosition">
          <Name>{parse(props.name)}</Name>
          {props.position && <Position>{parse(props.position)}</Position>}
        </div>
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
    margin-bottom: 16px;
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
  .namePosition {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
  }
`

const Profile = styled.div``

const Name = styled(T.Body)`
  font-weight: bold;
`
const Position = styled(T.Body)``
