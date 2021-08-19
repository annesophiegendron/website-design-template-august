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
  flex-direction: column;
`

// top section
const SectionHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: end;
  width: 100vw;
  position: absolute;
`

export const About = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <HomeEmoticon />
        <OverlayNav />
      </SectionHeader>
      <VideoBanner
        video={aboutVideo}
      />
      <Article
        style={{position: 'absolute', display: 'flex', flexDirection: 'column'}}
        leftTitle="a iaculis at!"
        text="Bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Nam aliquam sem et tortor consequat id porta. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor."
      />
      <SocialContact />
      <Footer />
    </Wrapper>
  )
};