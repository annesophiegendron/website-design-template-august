import React from 'react';

import styled from 'styled-components';

// components
import { Article } from '../components/Article';
import { OverlayNav } from '../components/OverlayNav';

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
  left: 5%;
`

export const About = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <Emoticon>&#9787;</Emoticon>
        <OverlayNav />
      </SectionHeader>
      <Article
        leftTitle="Make it pop!"
        text="We see branding as a popularity contest – after all, products don’t end up in people’s homes by chance. In the race to become everything to everyone, too many brands end up competing on noise, clutter and confusion. Our approach is different. To simplify and amplify. To distill your brand essence, and make it pop!"
      />
    </Wrapper>
  )
};