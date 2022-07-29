import React from "react"
import styled from "styled-components"

interface CookieModalProps {
  heading?: string
  body?: string
  children: React.ReactNode | React.ReactNode[]
}

export default function (props: CookieModalProps) {
  const defaultProps = {
    heading: "🍪 Cookie Policy",
    body: "We use cookies to ensure that we give you the best experience on our website. By continuing to use this site you are agreeing to our use of cookies.",
  }
  return (
    <>
      <Modal data-surface-type="Cookie Consent Banner">
        <ModalContainer>
          <ModalContent>
            <ModalHeading>{props.heading || defaultProps.heading}</ModalHeading>
            <ModalText>{props.body || defaultProps.body}</ModalText>
          </ModalContent>

          <ModalButtons>{props.children}</ModalButtons>
        </ModalContainer>
      </Modal>
    </>
  )
}

const Button = styled.a`
  display: block;
  transition: background-color 0.1s ease-in-out;
  font-weight: 600;
  font-size: 16px;
  padding: 0.9em 1.9em;
  border-radius: 26px;
  text-align: center;
  color: #fff;
  background-color: var(--actiton-primary);
  max-width: 400px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
`

const ButtonSecondary = styled.a`
  display: block;
  transition: background-color 0.1s ease-in-out;
  font-weight: 600;
  font-size: 16px;
  padding: 0.9em 1.9em;
  border-radius: 26px;
  text-align: center;
  color: var(--gray500);
  background-color: transparent;
  max-width: 400px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 0px;
`

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--gray100);
  padding: 2.4rem 2rem 1.4rem 2rem;
  z-index: 99999;
  -webkit-box-shadow: -1px -1px 4px 4px rgba(0, 0, 0, 0.18);
  box-shadow: -1px -1px 4px 4px rgba(0, 0, 0, 0.1);
`

const ModalContent = styled.div`
  width: 100%;
  max-width: 600px;
  color: var(--gray500);
`

const ModalButtons = styled.div`
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 30px;
`

const ModalContainer = styled.div`
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const ModalHeading = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: inherit;
`

const ModalText = styled.p`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 2rem;
  color: inherit;
  line-height: 1.5;
`
