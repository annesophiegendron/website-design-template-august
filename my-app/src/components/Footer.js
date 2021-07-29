import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 140px;
  background: #E75603;
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  bottom: 0

    @media (min-width: 992px) {
      height: inherit;
      padding: 70px 40px;
    }

`

const Emoticon = styled.span`
  font-size: 15vh;
  cursor: pointer;
  color: #0D0D0D;
`
const ElementWrapper = styled.div`
  align-self: center;
`

const FooterText = styled.p`
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
`


export const Footer = () => {
  return (
    <Container>
      <ElementWrapper>
        <Emoticon>&#9787;</Emoticon>
      </ElementWrapper>
      <ElementWrapper>
        <FooterText>name name</FooterText>
        <FooterText>adress city</FooterText>
        <FooterText>country</FooterText>
      </ElementWrapper>
      <ElementWrapper>
        <FooterText>email@contact.com</FooterText>
        <FooterText>+46 000 00 00</FooterText>
        <FooterText>VAT no. 0000</FooterText>
      </ElementWrapper>
      <ElementWrapper style={{display: "block"}}>
        <FooterText>partner of </FooterText>
        <p style={{padding: "5px", border: "black solid 2px", background: "black", color: "#E75603", fontSize: "0.85rem", margin: "0"}}>plastic change</p>
      </ElementWrapper>
    </Container>
  )
}