import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// components
import { Article } from '../components/Article';
import { OverlayNav } from '../components/OverlayNav';
import { Footer } from '../components/Footer';
import { SocialContact } from '../components/SocialContact';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

// Section top
const SectionHeader = styled.div`
  height: 100px;
  justify-content: space-between;
  padding: 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 8px;
  font-family: "Montserrat", sans-serif;
  color: #0D0D0D;
  cursor: pointer;
  display: block;
  transition: 0.4s;
  text-transform: capitalize;
  letter-spacing: 2px;
  &:hover{
    text-decoration: underline;
  }
  @media screen and (max-height: 450px) {
  font-size: 20px
}
`

const Emoticon = styled.span`
  position: absolute;
  font-size: 10vh;
  color: #0D0D0D;
  left: 80px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Work = () => {
  return (
    <Wrapper>
      <SectionHeader style={{ position: 'absolute' }}>
        <StyledLink to="/" style={{ textDecoration: 'none' }}>
          <Emoticon>&#9787;</Emoticon>
        </StyledLink>
        <OverlayNav />

      </SectionHeader>
      <Image src="https://everland.dk/wp-content/uploads/2021/03/TuborgSquash_02-2400x1706.jpg" alt="Logo">
      </Image>
      <Article
        leftTitle="aenean. pharetra magna. ac placerat."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in. Mi tempus imperdiet nulla malesuada pellentesque. Ut venenatis tellus in metus vulputate eu. Id diam vel quam elementum pulvinar etiam. Eget nunc lobortis mattis aliquam faucibus purus in. "
        linkText="est lorem ipsum dolor sit amet"
      />
      <SocialContact />
      <Footer />
    </Wrapper>
  )
};