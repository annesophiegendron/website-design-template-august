import React from 'react';

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
        <Emoticon>&#9787;</Emoticon>
        <OverlayNav />

      </SectionHeader>
      <Image src="https://everland.dk/wp-content/uploads/2021/03/TuborgSquash_02-2400x1706.jpg" alt="Logo">
      </Image>
      <Article
        leftTitle="Popular. It’s Not For
              Everyone."
        text="Branding is a popularity contest – after all, products don’t end up in people’s homes by chance. So, that’s what we do. Simplify and amplify, to help define and design tomorrow’s most popular consumer brands."
        linkText="how to win a popularity contest"
      />
      <SocialContact />
      <Footer />


    </Wrapper>
  )
};