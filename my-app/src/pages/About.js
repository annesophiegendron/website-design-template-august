import React from 'react';
import styled from 'styled-components';

// components
import { Article } from '../components/Article';
import { OverlayNav } from '../components/OverlayNav';
import { VideoBanner } from '../components/VideoBanner';
import { Footer } from "../components/Footer";
import { SocialContact } from "../components/SocialContact";
import { HomeEmoticon } from '../components/HomeEmoticon';

//assets
import aboutVideo from "../assets/videos/aboutVideo.mp4"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  flex-direction: column;
`

// Section top
const SectionHeader = styled.div`
  height: 100px;
  justify-content: space-between;
  padding: 20px;
`

export const About = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <HomeEmoticon />
        <OverlayNav />
      </SectionHeader>
      <Article
        leftTitle="a iaculis at!"
        link="https://www.dictionary.com/browse/about"
        linkText="est lorem ipsum dolor sit amet"
        text="Bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Nam aliquam sem et tortor consequat id porta. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor."
      />
      <VideoBanner
        video={aboutVideo}
      />
      <Article
        leftTitle="nunc mattis enim ut tellus."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <SocialContact />
      <Footer />
    </Wrapper>
  )
};