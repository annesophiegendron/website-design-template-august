import React from 'react';

// librairies
import styled from 'styled-components';

//components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Article } from '../components/Article';
import { SocialContact } from '../components/SocialContact';
import { Products } from '../components/Products';
import { OverlayNav } from '../components/OverlayNav';

const Wrapper = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
// Section top
const SectionHeader = styled.div`
  height: 100px;
  background-color: #F2C9CC;
  justify-content: space-between;
  padding: 20px;
`

const Emoticon = styled.span`
  position: absolute;
  font-size: 10vh;
  color: #0D0D0D;
  left: 5%;
  cursor: pointer;
`

export const Homepage = (props) => {
  return (
    <Wrapper>
      <SectionHeader>
        <Emoticon>&#9787;</Emoticon>
        <OverlayNav />
      </SectionHeader>
      <Header />
      <Article
        leftTitle="faucibus. vitae aliquet. nec ullamcorper"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Bibendum neque egestas congue quisque egestas diam in."
        linkText="egestas tellus rutrum tellus pellentesque eu"
      />
      <Products />
      <SocialContact />
      <Footer />
    </Wrapper>
  )
};