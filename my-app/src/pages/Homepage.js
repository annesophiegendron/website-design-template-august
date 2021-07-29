import React from 'react';
// librairies
import styled from 'styled-components';

//components
import { Header } from '../components/Header';

const Wrapper = styled.div`
  margin: 0;
  height: 100vh;
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

// Section Header Hero

// Section Intro

// Section products /double column grid



export const Homepage = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <Emoticon>&#9787;</Emoticon>
        <HamburgerMenu>&#9776;</HamburgerMenu>
      </SectionHeader>
      <Header />
    </Wrapper>


  )
};