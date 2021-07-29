import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #E75603;
  height: 100%;

    @media (min-width: 992px) {
      display: flex;
      justify-content: space-around;
      margin-top: auto;
      bottom: 0
      height: 140px;
      padding: inherit;
    }
`

const ElementWrapper = styled.div`
  align-self: center;
  padding-bottom: 8%;
  padding-left: 5%;

  @media (min-width: 992px) {
   padding: inherit;
   padding-bottom: inherit;
   padding-left: inherit;
  }
`

const Emoticon = styled.span`
  font-size: 15vh;
  cursor: pointer;
  color: #0D0D0D;
`

const FooterText = styled.p`
  font-size: 2rem;
  margin: 0;

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`

const Button = styled.button`
border: black solid 2px;
background: black;
color: #E75603;
fontSize: 0.85rem;
margin: 0;
font-weight: bold;
padding: 10px;
margin-top: 10px;
`

export const Footer = () => {
  return (
    <Container>
      <ElementWrapper>
        <Emoticon>&#9787;</Emoticon>
      </ElementWrapper>
      <ElementWrapper>
        <FooterText>Name Name</FooterText>
        <FooterText>Address City</FooterText>
        <FooterText>Country</FooterText>
      </ElementWrapper>
      <ElementWrapper>
        <FooterText>hello@contact.com</FooterText>
        <FooterText>+46 000 00 00</FooterText>
        <FooterText>VAT no. 0000</FooterText>
      </ElementWrapper>
      <ElementWrapper style={{ display: "block" }}>
        <FooterText>Partner of </FooterText>
        <Button>plastic change</Button>
      </ElementWrapper>
    </Container>
  )
};