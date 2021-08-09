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
        leftTitle="a iaculis at!"
        link="https://www.dictionary.com/browse/about"
        linkText="est lorem ipsum dolor sit amet"
        text="Bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Nam aliquam sem et tortor consequat id porta. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor."
      />
    </Wrapper>
  )
};