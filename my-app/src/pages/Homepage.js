import React from 'react';

// librairies
import styled from 'styled-components';

//components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Article } from '../components/Article';
import { SocialContact } from '../components/SocialContact';
import { Products } from '../components/Products';

const Wrapper = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
// Section top
const SectionHeader = styled.div`
  height: 100px;
  background-color: #0375FF;
  justify-content: space-between;
  padding: 20px;
`

const Emoticon = styled.span`
  position: absolute;
  font-size: 10vh;
  cursor: pointer;
  color: #0D0D0D;
  left: 5%;
`

const HamburgerMenu = styled.span`
  position: absolute;
  font-size: 8vh;
  cursor: pointer;
  color: #0D0D0D;
  right: 5%;
`

export const Homepage = (props) => {
  return (
    <Wrapper>
      <SectionHeader>
        <Emoticon>&#9787;</Emoticon>
        <HamburgerMenu>&#9776;</HamburgerMenu>
      </SectionHeader>
      <Header />
      <Article
        leftTitle="Popular. It’s Not For
        Everyone."
        text="Branding is a popularity contest – after all, products don’t end up in people’s homes by chance. So, that’s what we do. Simplify and amplify, to help define and design tomorrow’s most popular consumer brands."
        linkText="how to win a popularity contest"
      />
      <Products />
      <SocialContact />
      <Footer />
    </Wrapper>
  )
};