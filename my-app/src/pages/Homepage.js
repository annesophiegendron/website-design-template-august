import React from 'react';

// librairies
import styled from 'styled-components';

//components
import { Header } from '../components/Header';

// assets
import { ArrowSvg } from '../assets/svg/arrow_svg';

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

// Section Intro
const SectionIntro = styled.section`
  display: block;
  height: 40vh;

  @media (min-width: 992px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    &:before {
      content: "";
      grid-row: 1/2;
      grid-column: 3/3;
    }
  }
}
`

const IntroTitleLeft = styled.h3`
  grid-row: 2 span;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  text-transform: capitalize;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 2px;
  height: 300px;
  margin-top: auto;
  padding-left: 10%;
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`

const IntroTextRight = styled.p`
  grid-row: 2 span;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  text-align: left;
  letter-spacing: 1px;
  line-height: 25px;
  font-size: 14px;
  `

const IntroTextLink = styled.p`
  display: flex;
  padding:  0 0 0 10%;
  letter-spacing: 2px;
  transform: translateY(-60px);
  font-size: 10px;
  text-transform: uppercase;
  text-align: center;
`

// Section products /double column grid


export const Homepage = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <Emoticon>&#9787;</Emoticon>
        <HamburgerMenu>&#9776;</HamburgerMenu>
      </SectionHeader>
      <Header />
      <SectionIntro>
        <IntroTitleLeft>Popular. It's not for everyone. </IntroTitleLeft>
        <TextWrap>
          <IntroTextRight>Branding is a popularity contest – after all, products don’t end up in people’s homes by chance. So, that’s what we do. Simplify and amplify, to help define and design tomorrow’s most popular consumer brands.</IntroTextRight>
          <IntroTextLink>How to win a popularity contest <a style={{ paddingLeft: "25px", marginTop: "-5px"}} href="#"><ArrowSvg /></a></IntroTextLink>
        </TextWrap>
      </SectionIntro>
    </Wrapper>
  )
};